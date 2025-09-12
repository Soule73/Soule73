import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
import { renderEmailTemplate, EmailTemplateVariables } from '@/lib/email-template-engine';

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

        // Préparation des variables pour le template
        const templateVariables: EmailTemplateVariables = {
            name,
            email,
            subject,
            message
        };

        // Génération du HTML à partir du template
        const htmlContent = await renderEmailTemplate('contact-form', templateVariables);

        // Configuration de l'email
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER, // Vous recevez l'email
            replyTo: email,
            subject: `[Portfolio] ${subject}`,
            html: htmlContent,
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
