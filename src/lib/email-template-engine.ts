// Plus besoin de fs et path pour la lecture de fichiers

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
 * Interface pour les templates d'email
 */
interface EmailTemplate {
    default: string;
}

/**
 * Classe pour gérer les templates d'email (compatible Vercel)
 */
export class EmailTemplateEngine {
    private templateCache: Map<string, string> = new Map();

    /**
     * Charge et compile un template avec les variables fournies
     * @param templateName Nom du fichier template (sans extension)
     * @param variables Variables à injecter dans le template
     * @returns HTML compilé
     */
    async render(templateName: string, variables: EmailTemplateVariables): Promise<string> {
        try {
            // Charger le template
            let templateContent = await this.loadTemplate(templateName);

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
     * Charge un template depuis les modules (compatible Vercel)
     * @param templateName Nom du template
     * @returns Contenu du template
     */
    private async loadTemplate(templateName: string): Promise<string> {
        // Vérifier le cache d'abord
        if (this.templateCache.has(templateName)) {
            return this.templateCache.get(templateName)!;
        }

        try {
            // Essayer de charger le template comme un module
            const templateModule = await this.importTemplate(templateName);
            const content = templateModule.default;

            // Mettre en cache
            this.templateCache.set(templateName, content);
            return content;
        } catch {
            throw new Error(`Template "${templateName}" non trouvé. Templates disponibles: ${this.getAvailableTemplates().join(', ')}`);
        }
    }

    /**
     * Importe dynamiquement un template
     * @param templateName Nom du template
     * @returns Module du template
     */
    private async importTemplate(templateName: string): Promise<EmailTemplate> {
        switch (templateName) {
            case 'contact-form':
                return await import('@/templates/emails/contact-form.js');
            case 'contact-form-simple':
                return await import('@/templates/emails/contact-form-simple.js');
            default:
                throw new Error(`Template "${templateName}" non supporté`);
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
        return [
            'contact-form',
            'contact-form-simple'
        ];
    }

    /**
     * Valide qu'un template existe
     * @param templateName Nom du template
     * @returns true si le template existe
     */
    templateExists(templateName: string): boolean {
        return this.getAvailableTemplates().includes(templateName);
    }
}/**
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