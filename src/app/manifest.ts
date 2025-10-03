import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Soulé Soumaré - Développeur Full Stack',
        short_name: 'Soulé Soumaré',
        description: 'Portfolio professionnel de Soulé Soumaré, développeur Full Stack spécialisé en React, Next.js et technologies modernes.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#6366f1',
        orientation: 'portrait-primary',
        icons: [
            {
                src: '/favicon.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/favicon.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable'
            }
        ],
        categories: ['portfolio', 'developer', 'technology'],
        lang: 'fr-FR'
    }
}