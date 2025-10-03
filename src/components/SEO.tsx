'use client'

import { useEffect } from 'react'
import Head from 'next/head'

interface SEOProps {
    title?: string
    description?: string
    keywords?: string[]
    image?: string
    url?: string
    type?: string
    noindex?: boolean
}

const SEO = ({
    title,
    description,
    keywords = [],
    image = '/og-image.jpg',
    url,
    type = 'website',
    noindex = false
}: SEOProps) => {
    useEffect(() => {
        if (title) {
            document.title = title
        }
    }, [title])

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Soulé Soumaré",
        "jobTitle": "Développeur Full Stack",
        "description": "Développeur Full Stack passionné spécialisé en React, Next.js, TypeScript et technologies modernes.",
        "url": "https://soulesoumare.dev",
        "sameAs": [
            "https://github.com/Soule73",
            "https://fr.linkedin.com/in/soulé-soumaré"
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
        },
        "knowsAbout": [
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "JavaScript",
            "Full Stack Development",
            "Frontend Development",
            "Backend Development"
        ]
    }

    return (
        <Head>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
            {noindex && <meta name="robots" content="noindex,nofollow" />}

            {/* Open Graph */}
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}
            {image && <meta property="og:image" content={image} />}
            {url && <meta property="og:url" content={url} />}
            <meta property="og:type" content={type} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            {image && <meta name="twitter:image" content={image} />}

            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </Head>
    )
}

export default SEO