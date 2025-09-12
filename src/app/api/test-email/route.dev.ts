import { NextRequest, NextResponse } from 'next/server';
import { renderEmailTemplate, EmailTemplateVariables, emailTemplateEngine } from '@/lib/email-template-engine';

/**
 * Route de test pour prévisualiser les templates d'email
 * 
 * Usage:
 * - GET /api/test-email - Affiche le template par défaut avec des données de test
 * - GET /api/test-email?template=contact-form-simple - Affiche un template spécifique
 * - GET /api/test-email?list=true - Liste tous les templates disponibles
 */
export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const templateName = searchParams.get('template') || 'contact-form';
        const showList = searchParams.get('list') === 'true';
        const format = searchParams.get('format') || 'html';

        // Mode liste : afficher tous les templates disponibles
        if (showList) {
            const availableTemplates = emailTemplateEngine.getAvailableTemplates();

            const listHtml = `
                <!DOCTYPE html>
                <html lang="fr">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Templates d'email disponibles</title>
                    <style>
                        body {
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                            max-width: 800px;
                            margin: 0 auto;
                            padding: 40px 20px;
                            background: #f8fafc;
                        }
                        .header {
                            text-align: center;
                            margin-bottom: 40px;
                        }
                        .header h1 {
                            color: #2d3748;
                            margin-bottom: 10px;
                        }
                        .header p {
                            color: #4a5568;
                        }
                        .template-list {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                            gap: 20px;
                            margin-bottom: 40px;
                        }
                        .template-card {
                            background: white;
                            border-radius: 12px;
                            padding: 20px;
                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                            transition: transform 0.2s;
                        }
                        .template-card:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
                        }
                        .template-name {
                            font-size: 18px;
                            font-weight: 600;
                            color: #2d3748;
                            margin-bottom: 10px;
                        }
                        .template-actions {
                            display: flex;
                            gap: 10px;
                            flex-wrap: wrap;
                        }
                        .btn {
                            padding: 8px 16px;
                            border-radius: 6px;
                            text-decoration: none;
                            font-size: 14px;
                            font-weight: 500;
                            transition: all 0.2s;
                            border: none;
                            cursor: pointer;
                        }
                        .btn-primary {
                            background: #667eea;
                            color: white;
                        }
                        .btn-primary:hover {
                            background: #5a67d8;
                        }
                        .btn-secondary {
                            background: #e2e8f0;
                            color: #4a5568;
                        }
                        .btn-secondary:hover {
                            background: #cbd5e0;
                        }
                        .api-info {
                            background: white;
                            border-radius: 12px;
                            padding: 20px;
                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        }
                        .api-info h3 {
                            margin-top: 0;
                            color: #2d3748;
                        }
                        .api-info code {
                            background: #f7fafc;
                            padding: 2px 6px;
                            border-radius: 4px;
                            font-family: 'Consolas', 'Monaco', monospace;
                        }
                        .api-info pre {
                            background: #1a202c;
                            color: #e2e8f0;
                            padding: 15px;
                            border-radius: 8px;
                            overflow-x: auto;
                            margin: 10px 0;
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>📧 Templates d'Email Disponibles</h1>
                        <p>Prévisualisez et testez vos templates d'email</p>
                    </div>

                    <div class="template-list">
                        ${availableTemplates.map(template => `
                            <div class="template-card">
                                <div class="template-name">📄 ${template}</div>
                                <div class="template-actions">
                                    <a href="/api/test-email?template=${template}" class="btn btn-primary">
                                        👁️ Prévisualiser
                                    </a>
                                    <a href="/api/test-email?template=${template}&format=json" class="btn btn-secondary">
                                        📋 JSON
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="api-info">
                        <h3>🔧 API d'utilisation</h3>
                        <p><strong>URLs disponibles :</strong></p>
                        <ul>
                            <li><code>GET /api/test-email</code> - Template par défaut</li>
                            <li><code>GET /api/test-email?template=NOM</code> - Template spécifique</li>
                            <li><code>GET /api/test-email?list=true</code> - Cette page</li>
                            <li><code>GET /api/test-email?format=json</code> - Données JSON</li>
                        </ul>
                        
                        <p><strong>Exemple d'utilisation dans votre code :</strong></p>
                        <pre>import { renderEmailTemplate } from '@/lib/email-template-engine';

const htmlContent = await renderEmailTemplate('contact-form', {
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Test Email',
    message: 'Bonjour le monde!'
});</pre>
                    </div>
                </body>
                </html>
            `;

            return new NextResponse(listHtml, {
                headers: { 'Content-Type': 'text/html' }
            });
        }

        // Vérifier que le template existe
        if (!emailTemplateEngine.templateExists(templateName)) {
            const availableTemplates = emailTemplateEngine.getAvailableTemplates();
            return NextResponse.json({
                error: `Template "${templateName}" non trouvé`,
                available_templates: availableTemplates,
                suggestion: `Utilisez: /api/test-email?template=${availableTemplates[0] || 'contact-form'}`
            }, { status: 404 });
        }

        // Données de test réalistes
        const testData: EmailTemplateVariables = {
            name: 'Jean Dupont',
            email: 'jean.dupont@example.com',
            subject: 'Demande de collaboration sur votre portfolio',
            message: `Bonjour,

Je suis très impressionné par votre portfolio et votre travail. J'aimerais discuter d'une éventuelle collaboration sur un projet passionnant.

Notre équipe recherche un développeur talentueux pour créer une application web innovante dans le domaine de la fintech. Votre expertise en React et Next.js correspond parfaitement à nos besoins.

Seriez-vous disponible pour un appel cette semaine afin d'en discuter davantage ?

Cordialement,
Jean Dupont
CEO - TechStartup Inc.`
        };

        // Format JSON pour le debugging
        if (format === 'json') {
            return NextResponse.json({
                template: templateName,
                variables: testData,
                timestamp: new Date().toISOString(),
                available_templates: emailTemplateEngine.getAvailableTemplates()
            });
        }

        // Générer le HTML du template
        const htmlContent = await renderEmailTemplate(templateName, testData);

        // Ajouter des informations de debug en mode développement
        const debugInfo = process.env.NODE_ENV === 'development' ? `
            <!-- Debug Info -->
            <!-- Template: ${templateName} -->
            <!-- Generated: ${new Date().toISOString()} -->
            <!-- Variables: ${JSON.stringify(testData, null, 2)} -->
        ` : '';

        const finalHtml = debugInfo + htmlContent;

        return new NextResponse(finalHtml, {
            headers: {
                'Content-Type': 'text/html',
                'Cache-Control': 'no-cache, no-store, must-revalidate'
            }
        });

    } catch (error) {
        console.error('Erreur lors du test du template:', error);

        const errorHtml = `
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="utf-8">
                <title>Erreur Template</title>
                <style>
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                        max-width: 600px;
                        margin: 50px auto;
                        padding: 20px;
                        background: #fff5f5;
                        border: 1px solid #fed7d7;
                        border-radius: 8px;
                    }
                    h1 { color: #c53030; }
                    .error-details {
                        background: #f7fafc;
                        padding: 15px;
                        border-radius: 6px;
                        margin: 20px 0;
                        font-family: monospace;
                        font-size: 14px;
                    }
                    .back-link {
                        display: inline-block;
                        background: #4299e1;
                        color: white;
                        padding: 10px 20px;
                        text-decoration: none;
                        border-radius: 6px;
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <h1>❌ Erreur lors du rendu du template</h1>
                <div class="error-details">
                    ${(error as Error).message}
                </div>
                <a href="/api/test-email?list=true" class="back-link">
                    ← Retour à la liste des templates
                </a>
            </body>
            </html>
        `;

        return new NextResponse(errorHtml, {
            status: 500,
            headers: { 'Content-Type': 'text/html' }
        });
    }
}

/**
 * Endpoint POST pour tester avec des données personnalisées
 */
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { template = 'contact-form', variables } = body;

        if (!variables) {
            return NextResponse.json({
                error: 'Variables requises',
                example: {
                    template: 'contact-form',
                    variables: {
                        name: 'John Doe',
                        email: 'john@example.com',
                        subject: 'Test',
                        message: 'Hello world!'
                    }
                }
            }, { status: 400 });
        }

        // Vérifier que le template existe
        if (!emailTemplateEngine.templateExists(template)) {
            return NextResponse.json({
                error: `Template "${template}" non trouvé`,
                available_templates: emailTemplateEngine.getAvailableTemplates()
            }, { status: 404 });
        }

        const htmlContent = await renderEmailTemplate(template, variables);

        return NextResponse.json({
            success: true,
            template,
            variables,
            html: htmlContent,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Erreur POST test-email:', error);
        return NextResponse.json({
            error: 'Erreur lors du test du template',
            details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
        }, { status: 500 });
    }
}