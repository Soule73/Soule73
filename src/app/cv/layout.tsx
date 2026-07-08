import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "CV",
    description: "Curriculum Vitae de Soulé Soumaré - Frontend Engineer chez Opensee (SaaS fintech). React, TypeScript et Testing Automation.",
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
        "opensee"
    ],
    openGraph: {
        title: "CV - Soulé Soumaré | Frontend Engineer",
        description: "CV de Soulé Soumaré - Frontend Engineer @ Opensee · React · TypeScript · Testing Automation.",
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
        title: "CV - Soulé Soumaré | Frontend Engineer",
        description: "CV de Soulé Soumaré - Frontend Engineer @ Opensee · React · TypeScript · Testing Automation.",
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