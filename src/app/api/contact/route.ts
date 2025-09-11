import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Configuration du transporteur de mail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

// Interface pour les données du formulaire
interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

// Validation des champs
function validateContactForm(data: ContactFormData) {
    const errors: string[] = [];

    if (!data.name || data.name.trim().length < 2) {
        errors.push('Le nom doit contenir au moins 2 caractères');
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.push('Veuillez entrer une adresse email valide');
    }

    if (!data.subject || data.subject.trim().length < 3) {
        errors.push('Le sujet doit contenir au moins 3 caractères');
    }

    if (!data.message || data.message.trim().length < 10) {
        errors.push('Le message doit contenir au moins 10 caractères');
    }

    return errors;
}

export async function POST(req: NextRequest) {
    console.log('API contact appelée');

    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        console.log('Données extraites:', { name, email, subject, message });

        // Validation
        const validationErrors = validateContactForm(body);
        if (validationErrors.length > 0) {
            console.log('Erreurs de validation:', validationErrors);
            return NextResponse.json({
                error: 'Données invalides',
                details: validationErrors
            }, { status: 400 });
        }

        console.log('Validation réussie, tentative d\'envoi d\'email...');

        // Configuration de l'email
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER, // Vous recevez l'email
            replyTo: email,
            subject: `[Portfolio] ${subject}`,
            html: `
                <!DOCTYPE html>
                <html lang="fr">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Nouveau message de votre portfolio</title>
                    <style>
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        
                        body {
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                            line-height: 1.6;
                            color: #2d3748;
                            background-color: #f7fafc;
                            padding: 20px;
                        }
                        
                        .email-container {
                            max-width: 650px;
                            margin: 0 auto;
                            background: #ffffff;
                            border-radius: 16px;
                            overflow: hidden;
                            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                        }
                        
                        .header {
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
                            padding: 40px 30px;
                            text-align: center;
                            position: relative;
                            overflow: hidden;
                        }
                        
                        .header::before {
                            content: '';
                            position: absolute;
                            top: -50%;
                            left: -50%;
                            width: 200%;
                            height: 200%;
                            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="white" opacity="0.1"/><circle cx="80" cy="40" r="0.5" fill="white" opacity="0.1"/><circle cx="40" cy="80" r="1.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
                            animation: float 20s ease-in-out infinite;
                        }
                        
                        @keyframes float {
                            0%, 100% { transform: translate(0, 0) rotate(0deg); }
                            50% { transform: translate(-20px, -10px) rotate(180deg); }
                        }
                        
                        .header-content {
                            position: relative;
                            z-index: 1;
                        }
                        
                        .header h1 {
                            color: #ffffff;
                            font-size: 28px;
                            font-weight: 700;
                            margin-bottom: 10px;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        }
                        
                        .header .subtitle {
                            color: rgba(255, 255, 255, 0.9);
                            font-size: 16px;
                            font-weight: 400;
                        }
                        
                        .icon {
                            display: inline-block;
                            font-size: 32px;
                            margin-bottom: 15px;
                            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
                        }
                        
                        .content {
                            padding: 40px 30px;
                            background: #ffffff;
                        }
                        
                        .intro {
                            text-align: center;
                            margin-bottom: 35px;
                            padding: 20px;
                            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                            border-radius: 12px;
                            border: 1px solid #e2e8f0;
                        }
                        
                        .intro h2 {
                            color: #2d3748;
                            font-size: 22px;
                            font-weight: 600;
                            margin-bottom: 8px;
                        }
                        
                        .intro p {
                            color: #4a5568;
                            font-size: 14px;
                        }
                        
                        .field-group {
                            margin-bottom: 25px;
                            border-radius: 12px;
                            border: 1px solid #e2e8f0;
                            overflow: hidden;
                            background: #ffffff;
                            transition: all 0.2s ease;
                        }
                        
                        .field-group:hover {
                            border-color: #667eea;
                            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.1);
                        }
                        
                        .field-label {
                            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                            padding: 12px 20px;
                            font-weight: 600;
                            font-size: 14px;
                            color: #2d3748;
                            text-transform: uppercase;
                            letter-spacing: 0.5px;
                            border-bottom: 1px solid #e2e8f0;
                        }
                        
                        .field-value {
                            padding: 20px;
                            color: #2d3748;
                            font-size: 16px;
                            line-height: 1.5;
                        }
                        
                        .field-value.email-field {
                            color: #667eea;
                            font-weight: 500;
                        }
                        
                        .field-value.subject-field {
                            color: #764ba2;
                            font-weight: 600;
                            font-size: 18px;
                        }
                        
                        .message-content {
                            white-space: pre-wrap;
                            line-height: 1.7;
                            color: #2d3748;
                            background: #f8fafc;
                            padding: 25px;
                            border-radius: 8px;
                            border: 1px solid #e2e8f0;
                            font-size: 15px;
                        }
                        
                        .footer {
                            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                            padding: 30px;
                            text-align: center;
                            border-top: 1px solid #e2e8f0;
                        }
                        
                        .footer-content {
                            max-width: 400px;
                            margin: 0 auto;
                        }
                        
                        .footer h3 {
                            color: #2d3748;
                            font-size: 18px;
                            font-weight: 600;
                            margin-bottom: 15px;
                        }
                        
                        .footer p {
                            color: #4a5568;
                            font-size: 14px;
                            margin-bottom: 10px;
                        }
                        
                        .reply-button {
                            display: inline-block;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: #ffffff;
                            text-decoration: none;
                            padding: 12px 24px;
                            border-radius: 8px;
                            font-weight: 600;
                            font-size: 14px;
                            margin-top: 15px;
                            transition: all 0.2s ease;
                            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
                        }
                        
                        .reply-button:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
                        }
                        
                        .timestamp {
                            font-size: 12px;
                            color: #718096;
                            text-align: center;
                            margin-top: 20px;
                            padding-top: 20px;
                            border-top: 1px solid #e2e8f0;
                        }
                        
                        .badge {
                            display: inline-block;
                            background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
                            color: white;
                            padding: 4px 12px;
                            border-radius: 20px;
                            font-size: 12px;
                            font-weight: 600;
                            text-transform: uppercase;
                            letter-spacing: 0.5px;
                            margin-left: 10px;
                        }
                        
                        @media (max-width: 600px) {
                            .email-container {
                                margin: 10px;
                                border-radius: 12px;
                            }
                            
                            .header {
                                padding: 30px 20px;
                            }
                            
                            .content {
                                padding: 30px 20px;
                            }
                            
                            .header h1 {
                                font-size: 24px;
                            }
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="header">
                            <div class="header-content">
                                <div class="icon">�</div>
                                <h1>Nouveau Message</h1>
                                <p class="subtitle">Votre portfolio a reçu un nouveau message</p>
                                <span class="badge">Portfolio Contact</span>
                            </div>
                        </div>
                        
                        <div class="content">
                            <div class="intro">
                                <h2>👋 Message reçu !</h2>
                                <p>Quelqu'un souhaite entrer en contact avec vous via votre portfolio</p>
                            </div>
                            
                            <div class="field-group">
                                <div class="field-label">
                                    👤 Nom du contact
                                </div>
                                <div class="field-value">
                                    ${name}
                                </div>
                            </div>
                            
                            <div class="field-group">
                                <div class="field-label">
                                    📧 Adresse email
                                </div>
                                <div class="field-value email-field">
                                    ${email}
                                </div>
                            </div>
                            
                            <div class="field-group">
                                <div class="field-label">
                                    📝 Sujet du message
                                </div>
                                <div class="field-value subject-field">
                                    ${subject}
                                </div>
                            </div>
                            
                            <div class="field-group">
                                <div class="field-label">
                                    💬 Message complet
                                </div>
                                <div class="field-value">
                                    <div class="message-content">${message}</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="footer">
                            <div class="footer-content">
                                <h3>🚀 Prêt à répondre ?</h3>
                                <p>Vous pouvez répondre directement à cette adresse email :</p>
                                <p style="font-weight: 600; color: #667eea;">${email}</p>
                                <a href="mailto:${email}?subject=Re: ${subject}" class="reply-button">
                                    ✉️ Répondre maintenant
                                </a>
                                
                                <div class="timestamp">
                                    📅 Message reçu le ${new Date().toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `,
            text: `
                Nouveau message depuis votre portfolio
                
                Nom: ${name}
                Email: ${email}
                Sujet: ${subject}
                
                Message:
                ${message}
                
                ---
                Vous pouvez répondre directement à cette adresse : ${email}
            `
        };

        // Envoi de l'email
        console.log('Configuration email:', {
            user: process.env.GMAIL_USER,
            hasPassword: !!process.env.GMAIL_APP_PASSWORD
        });

        await transporter.sendMail(mailOptions);
        console.log('Email envoyé avec succès !');

        return NextResponse.json({
            success: true,
            message: 'Message envoyé avec succès !'
        });

    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return NextResponse.json({
            error: 'Erreur serveur lors de l\'envoi du message',
            details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
        }, { status: 500 });
    }
}

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
