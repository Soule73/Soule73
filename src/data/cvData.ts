// Données centralisées du CV pour faciliter l'édition
export interface CVData {
    personalInfo: PersonalInfo
    experience: Experience[]
    skills: Skills
    education: Education[]
    languages: Language[]
}

type ContactType = {
    type: 'phone' | 'email' | 'location' | 'website',
    name: string,
    value: string,
    url?: string
}

type SkillCategory = {
    name: string,
    skillItems: SkillItem[]
}


export interface PersonalInfo {
    name: string
    title: string
    profile: string
    contact: ContactType[]
    //  {
    //     location: string
    //     phone: string
    //     email: string
    //     linkedin: string
    //     github: string
    //     website: string
    // }
}

export interface Experience {
    jobTitle: string
    company: string
    location: string
    period: string
    description: string[]
}

export interface Skills {
    frontend: SkillItem[]
    backend: SkillItem[]
    databases: SkillItem[]
    devops: SkillItem[]
    mobile: SkillItem[]
    cms: SkillItem[]
}

export interface SkillItem {
    name: string
    level: number
}

export interface Education {
    degree: string
    school: string
    location: string
    period: string
    description: string
}

export interface Language {
    name: string
    level: string
}

// Données du CV
export const cvData: CVData = {
    personalInfo: {
        name: "Soule Soumaré",
        title: "Développeur Full Stack",
        profile: "Développeur Full Stack passionné avec une expertise dans les technologies modernes. Spécialisé dans React, TypeScript et les architectures cloud. Fort d'une expérience variée allant du développement web au mobile, je m'épanouis dans la création de solutions innovantes et performantes.",
        contact: [
            {
                type: 'phone',
                name: "Téléphone",
                value: "+33 (0)7 75 77 92 34"
            },
            {
                type: 'website',
                name: "LinkedIn",
                value: "fr.linkedin.com/in/soulé-soumaré"
            },
            {
                type: 'email',
                name: "Email",
                value: "sourtoumo@gmail.com"
            },
            {
                type: 'website',
                name: "GitHub",
                value: "github.com/Soule73"
            },
            {
                type: 'location',
                name: "Localisation",
                value: "Paris, France"
            },
            {
                type: 'website',
                name: "Portfolio",
                value: "soulesoumare.dev"
            }
        ]
    },

    experience: [
        {
            jobTitle: "Développeur Mobile & API - Mission Freelance",
            company: "HudHud Shipping",
            location: "Remote",
            period: "03/2025 - 08/2025",
            description: [
                "Développement complet de deux applications mobiles Flutter (client et livreur)",
                "Création d'une API REST avec Spring Boot pour la gestion des livraisons",
                "Développement d'une application web d'administration avec React",
                "Publication sur Google Play Store et App Store avec déploiement cloud"
            ]
        },
        {
            jobTitle: "Développeur Web & Administrateur",
            company: "APSJ.org (Association)",
            location: "Remote",
            period: "08/2024 - Présent",
            description: [
                "Développement complet du site web associatif avec WordPress et Elementor",
                "Configuration et optimisation de la base de données MySQL",
                "Déploiement et gestion sur Hostinger avec optimisation SEO",
                "Administration continue du site et maintenance"
            ]
        },
        {
            jobTitle: "Développeur Full Stack - Projet Personnel",
            company: "Data Vise SaaS",
            location: "Projet académique",
            period: "2024",
            description: [
                "Développement d'une plateforme de visualisation de données moderne",
                "Interface React/TypeScript avec dashboard responsive drag & drop",
                "Backend Node.js/Express avec intégration Elasticsearch",
                "Authentification robuste et système de gestion des rôles"
            ]
        }
    ],

    skills: {
        frontend: [
            { name: "HTML", level: 95 },
            { name: "CSS", level: 90 },
            { name: "JavaScript", level: 88 },
            { name: "TypeScript", level: 85 },
            { name: "React", level: 90 },
            { name: "Tailwind CSS", level: 92 }
        ],
        backend: [
            { name: "PHP", level: 88 },
            { name: "Laravel", level: 85 },
            { name: "Symfony", level: 80 },
            { name: "Java", level: 82 },
            { name: "Spring Boot", level: 85 },
            { name: "Next.js", level: 85 },
            { name: "Node.js", level: 88 },
            { name: "Express", level: 85 }
        ],
        databases: [
            { name: "MySQL", level: 90 },
            { name: "PostgreSQL", level: 85 },
            { name: "MongoDB", level: 80 },
            { name: "Elasticsearch", level: 75 }
        ],
        devops: [
            { name: "Git", level: 95 },
            { name: "GitHub", level: 90 },
            { name: "GitLab", level: 85 },
            { name: "Docker", level: 78 },
            { name: "VS Code", level: 98 }
        ],
        mobile: [
            { name: "Flutter", level: 80 },
            { name: "Dart", level: 78 }
        ],
        cms: [
            { name: "WordPress", level: 85 },
            { name: "Elementor", level: 80 }
        ]
    },

    education: [
        {
            degree: "Master, Expert IT, Développement & Big Data",
            school: "Ecole IRIS Paris",
            location: "Paris, France",
            period: "2024 - 2026(en cours)",
            description: "Spécialisation en développement web full-stack, architecture logicielle et gestion de bases de données"
        },
        {
            degree: "Licence Réseaux et Télécommunications",
            school: "Institut Universitaire Professionnel (IUP)",
            location: "Nouakchott, Mauritanie",
            period: "2021 - 2024",
            description: "Formation en réseaux informatiques, protocoles de communication et administration système"
        }
    ],

    languages: [
        { name: "Français", level: "Courant" },
        { name: "Anglais", level: "Niveau professionnel" },
    ]
}

// Labels et textes de l'interface
export const cvLabels = {
    sections: {
        experience: "Expérience Professionnelle",
        skills: "Compétences Techniques",
        education: "Formation",
        languages: "Langues"
    },
    buttons: {
        exportPDF: "Télécharger le CV (PDF)",
    },
    skillCategories: {
        frontend: "Frontend",
        backend: "Backend",
        databases: "Bases de données",
        devops: "DevOps & Outils",
        mobile: "Mobile",
        cms: "CMS & Design"
    }
}

export const skillCategories: SkillCategory[] = [
    { name: "Frontend", skillItems: cvData.skills.frontend },
    { name: "Backend", skillItems: cvData.skills.backend },
    { name: "Bases de données", skillItems: cvData.skills.databases },
    { name: "DevOps & Outils", skillItems: cvData.skills.devops },
    { name: "Mobile", skillItems: cvData.skills.mobile },
    { name: "CMS & Design", skillItems: cvData.skills.cms }
];