import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "CV",
    description: "Soulé Soumaré, développeur Full Stack. Découvrez mon parcours professionnel, mes compétences techniques et mes réalisations en développement web.",
    keywords: [
        "cv",
        "curriculum vitae",
        "soulé soumaré",
        "développeur full stack",
        "expérience professionnelle",
        "compétences techniques",
        "react",
        "nodejs",
        "typescript",
        "formation développeur"
    ],
    openGraph: {
        title: "CV - Soulé Soumaré | Développeur Full Stack",
        description: "Curriculum Vitae de Soulé Soumaré, développeur Full Stack. Découvrez mon parcours professionnel, mes compétences techniques et mes réalisations.",
        url: "https://soulesoumare.dev/cv",
        images: [
            {
                url: "/cv-preview.jpg",
                width: 1200,
                height: 630,
                alt: "CV de Soulé Soumaré - Développeur Full Stack",
            },
        ],
    },
    twitter: {
        title: "CV - Soulé Soumaré | Développeur Full Stack",
        description: "Curriculum Vitae de Soulé Soumaré, développeur Full Stack spécialisé en React et technologies modernes.",
        images: ["/cv-preview.jpg"],
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