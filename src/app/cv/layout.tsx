import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "CV",
    description: "Curriculum Vitae de Soulé Soumaré - Frontend / Full Stack Engineer spécialisé React, TypeScript et Testing Automation. Expérience chez Opensee (SaaS fintech). Disponible CDI juillet 2026.",
    keywords: [
        "cv",
        "curriculum vitae",
        "soulé soumaré",
        "frontend engineer",
        "full stack engineer",
        "testing automation",
        "playwright",
        "vitest",
        "react",
        "typescript",
        "opensee",
        "cdi juillet 2026"
    ],
    openGraph: {
        title: "CV - Soulé Soumaré | Frontend / Full Stack Engineer",
        description: "CV de Soulé Soumaré - Frontend / Full Stack Engineer · React · TypeScript · Testing Automation · Disponible CDI juillet 2026.",
        url: "https://soulesoumare.dev/cv",
        images: [
            {
                url: "/cv/opengraph-image",
                width: 1200,
                height: 630,
                alt: "CV - Soulé Soumaré | Frontend / Full Stack Engineer",
            },
        ],
    },
    twitter: {
        title: "CV - Soulé Soumaré | Frontend / Full Stack Engineer",
        description: "CV de Soulé Soumaré - React · TypeScript · Testing Automation · Disponible CDI juillet 2026.",
        images: ["/cv/opengraph-image"],
    },
    alternates: {
        canonical: "/cv",
    },
}

export default function CVLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}