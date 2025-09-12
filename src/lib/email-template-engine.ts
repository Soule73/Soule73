import fs from 'fs';
import path from 'path';

/**
 * Interface pour les variables du template d'email
 */
export interface EmailTemplateVariables {
    name: string;
    email: string;
    subject: string;
    message: string;
    timestamp?: string;
    [key: string]: string | undefined;
}

/**
 * Classe pour gérer les templates d'email (similaire à Blade Laravel)
 */
export class EmailTemplateEngine {
    private templatesDir: string;

    constructor(templatesDir: string = 'src/templates/emails') {
        this.templatesDir = path.resolve(process.cwd(), templatesDir);
    }

    /**
     * Charge et compile un template avec les variables fournies
     * @param templateName Nom du fichier template (sans extension)
     * @param variables Variables à injecter dans le template
     * @returns HTML compilé
     */
    async render(templateName: string, variables: EmailTemplateVariables): Promise<string> {
        try {
            const templatePath = path.join(this.templatesDir, `${templateName}.html`);

            // Vérifier que le fichier existe
            if (!fs.existsSync(templatePath)) {
                throw new Error(`Template "${templateName}" non trouvé à : ${templatePath}`);
            }

            // Lire le contenu du template
            let templateContent = fs.readFileSync(templatePath, 'utf-8');

            // Ajouter des variables par défaut
            const defaultVariables: Partial<EmailTemplateVariables> = {
                timestamp: new Date().toLocaleDateString('fr-FR', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };

            // Fusionner les variables
            const allVariables = { ...defaultVariables, ...variables };

            // Remplacer les variables dans le template (syntaxe {{variable}})
            templateContent = this.replaceVariables(templateContent, allVariables);

            return templateContent;

        } catch (error) {
            console.error('Erreur lors du rendu du template:', error);
            throw new Error(`Impossible de rendre le template "${templateName}": ${(error as Error).message}`);
        }
    }

    /**
     * Remplace les variables dans le template
     * @param content Contenu du template
     * @param variables Variables à remplacer
     * @returns Contenu avec variables remplacées
     */
    private replaceVariables(content: string, variables: Record<string, string | undefined>): string {
        return content.replace(/\{\{(\w+)\}\}/g, (match, variableName) => {
            const value = variables[variableName];
            if (value === undefined) {
                console.warn(`Variable "${variableName}" non définie dans le template`);
                return match; // Garder la variable non remplacée
            }
            return this.escapeHtml(value);
        });
    }

    /**
     * Échappe les caractères HTML pour éviter les injections
     * @param text Texte à échapper
     * @returns Texte échappé
     */
    private escapeHtml(text: string): string {
        const htmlEscapes: Record<string, string> = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };

        return text.replace(/[&<>"']/g, (match) => htmlEscapes[match]);
    }

    /**
     * Liste tous les templates disponibles
     * @returns Liste des noms de templates
     */
    getAvailableTemplates(): string[] {
        try {
            if (!fs.existsSync(this.templatesDir)) {
                return [];
            }

            return fs.readdirSync(this.templatesDir)
                .filter(file => file.endsWith('.html'))
                .map(file => file.replace('.html', ''));
        } catch (error) {
            console.error('Erreur lors de la lecture des templates:', error);
            return [];
        }
    }

    /**
     * Valide qu'un template existe
     * @param templateName Nom du template
     * @returns true si le template existe
     */
    templateExists(templateName: string): boolean {
        const templatePath = path.join(this.templatesDir, `${templateName}.html`);
        return fs.existsSync(templatePath);
    }
}

/**
 * Instance singleton du moteur de template
 */
export const emailTemplateEngine = new EmailTemplateEngine();

/**
 * Fonction utilitaire pour rendre rapidement un template d'email
 */
export async function renderEmailTemplate(
    templateName: string,
    variables: EmailTemplateVariables
): Promise<string> {
    return emailTemplateEngine.render(templateName, variables);
}