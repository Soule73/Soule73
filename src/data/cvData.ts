import { BeakerIcon, BoltIcon, CodeBracketIcon, CogIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, LinkIcon, MagnifyingGlassIcon, RocketLaunchIcon, ServerIcon, WrenchScrewdriverIcon, ShieldCheckIcon } from "@heroicons/react/24/outline"
import React from "react"
import { personal } from "../lib/personal"

// Données centralisées du CV pour faciliter l'édition
export interface CVData {
    status: 'available' | 'unavailable' | 'open-to-offers',
    personalInfo: PersonalInfo
    experience: Experience[]
    skills: SkillCategory[]
    additionalSkills: AdditionalSkillItem[]
    education: Education[]
    languages: Language[]
    qualities: string[]
}

type ContactType = {
    type: 'phone' | 'email' | 'location' | 'website',
    name: string,
    value: string,
    url?: string
}

type SkillCategory = {
    name: string,
    icon?: React.FC<React.SVGProps<SVGSVGElement>>,
    description?: string,
    show: boolean,
    skills: SkillItem[]
}


export interface PersonalInfo {
    name: string
    title: string
    profile: string
    contact: ContactType[]
    contracts: ContractType[]
    searchingFor?: ContractType,
    availableFrom?: string,
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
    color: string
    badge: string
    width: number
    height: number
    show: boolean
}

type AdditionalSkillItem = {
    name: string
    icon: React.FC<React.SVGProps<SVGSVGElement>>
    color: string
    show: boolean
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

const skillCategories: SkillCategory[] = [
    {
        name: "Testing & Quality",
        icon: ShieldCheckIcon,
        description: 'Testing automation, qualité logicielle et CI/CD',
        show: true,
        skills: [
            {
                name: 'Playwright',
                level: 85,
                color: 'from-green-500 to-emerald-600',
                badge: 'https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white',
                width: 107,
                height: 28,
                show: true
            },
            {
                name: 'Vitest',
                level: 82,
                color: 'from-yellow-400 to-green-500',
                badge: 'https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white',
                width: 78,
                height: 28,
                show: true
            },
            {
                name: 'Jest',
                level: 80,
                color: 'from-red-500 to-pink-600',
                badge: 'https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white',
                width: 60,
                height: 28,
                show: true
            },
            {
                name: 'React Testing Library',
                level: 78,
                color: 'from-red-400 to-pink-500',
                badge: 'https://img.shields.io/badge/Testing_Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white',
                width: 165,
                height: 28,
                show: true
            },
            {
                name: 'Supertest',
                level: 75,
                color: 'from-blue-500 to-indigo-600',
                badge: 'https://img.shields.io/badge/Supertest-000000?style=for-the-badge&logo=node.js&logoColor=white',
                width: 105,
                height: 28,
                show: true
            },
        ]
    },
    {
        name: "Core Stack",
        icon: ComputerDesktopIcon,
        description: 'Technologies principales utilisées au quotidien',
        show: true,
        skills: [
            {
                name: 'React',
                level: 90,
                color: 'from-blue-500 to-cyan-500',
                badge: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB&fontSize=14',
                width: 81,
                height: 28,
                show: true
            },
            {
                name: 'TypeScript',
                level: 85,
                color: 'from-blue-600 to-indigo-600',
                badge: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&fontSize=14',
                width: 117,
                height: 28,
                show: true
            },
            {
                name: 'Node.js',
                level: 82,
                color: 'from-green-600 to-green-700',
                badge: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
                width: 90,
                height: 28,
                show: true
            },
            {
                name: 'NestJS',
                level: 75,
                color: 'from-red-600 to-pink-600',
                badge: 'https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white',
                width: 84,
                height: 28,
                show: true
            },
            {
                name: 'JavaScript',
                level: 88,
                color: 'from-yellow-400 to-yellow-600',
                badge: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E&fontSize=14',
                width: 117,
                height: 28,
                show: true
            },
            {
                name: 'Tailwind CSS',
                level: 92,
                color: 'from-teal-400 to-blue-500',
                badge: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white&fontSize=14',
                width: 120,
                height: 28,
                show: true
            },
        ]
    },
    {
        name: "Langages",
        icon: ComputerDesktopIcon,
        description: 'Autres langages maîtrisés',
        show: true,
        skills: [
            {
                name: 'PHP',
                level: 88,
                color: 'from-purple-500 to-indigo-600',
                badge: 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white&fontSize=14',
                width: 60,
                height: 28, show: false
            },
            {
                name: 'Java',
                level: 82,
                color: 'from-red-500 to-orange-500',
                badge: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white&fontSize=14',
                width: 54,
                height: 16,
                show: false
            },
            {
                name: 'TypeScript',
                level: 85,
                color: 'from-blue-600 to-indigo-600',
                badge: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&fontSize=14',
                width: 117,
                height: 28,
                show: true
            },
            {
                name: 'JavaScript',
                level: 88,
                color: 'from-yellow-400 to-yellow-600',
                badge: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E&fontSize=14',
                width: 117,
                height: 28,
                show: true

            },
            {
                name: 'HTML',
                level: 95,
                color: 'from-orange-500 to-red-500',
                badge: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white&labelColor=black&fontSize=14',
                width: 88,
                height: 28,
                show: true
            },
            {
                name: 'CSS',
                level: 90,
                color: 'from-blue-500 to-indigo-500',
                badge: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white&fontSize=14',
                width: 54,
                height: 16,
                show: true
            },
        ]
    },
    {
        name: "Frameworks & Librairies",
        icon: CogIcon,
        description: 'Frameworks additionnels',
        show: true,
        skills: [
            {
                name: 'Symfony',
                level: 80,
                color: 'from-black to-gray-700',
                badge: 'https://img.shields.io/badge/Symfony-000000?style=for-the-badge&logo=symfony&logoColor=white&fontSize=14',
                width: 100,
                height: 28,
                show: false
            },
            {
                name: 'Laravel',
                level: 85,
                color: 'from-red-600 to-pink-600',
                badge: 'https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white&fontSize=14',
                width: 88,
                height: 28,
                show: false
            },
            {
                name: 'Spring Boot',
                level: 75,
                color: 'from-green-500 to-emerald-500',
                badge: 'https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white&fontSize=14',
                width: 127,
                height: 28,
                show: true
            },
            {
                name: 'Express.js',
                level: 80,
                color: 'from-gray-600 to-gray-700',
                badge: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white&fontSize=14',
                width: 100,
                height: 28,
                show: true
            },
            {
                name: 'Bootstrap',
                level: 88,
                color: 'from-purple-600 to-purple-700',
                badge: 'https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white&fontSize=14',
                width: 100,
                height: 28,
                show: false
            },
            {
                name: 'jQuery',
                level: 70,
                color: 'from-blue-600 to-blue-700',
                badge: 'https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white&fontSize=14',
                width: 78,
                height: 28,
                show: false
            },
            {
                name: 'Twig',
                level: 80,
                color: 'from-blue-500 to-indigo-500',
                badge: 'https://img.shields.io/badge/Twig-0094BC?style=for-the-badge&logo=twig&logoColor=white&fontSize=14',
                width: 100,
                height: 28,
                show: false
            }
        ]
    },
    {
        // Big Data & Analytics
        name: "Base de données",
        icon: ServerIcon,
        description: 'Analyse, pipelines et recherche',
        show: true,
        skills: [
            {
                name: 'MySQL',
                level: 90,
                color: 'from-blue-600 to-orange-500',
                badge: 'https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white&fontSize=14',
                width: 78,
                height: 28, show: true
            },
            {
                name: 'MongoDB',
                level: 80,
                color: 'from-green-600 to-green-700',
                badge: 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white&fontSize=14',
                width: 100,
                height: 28,
                show: true
            },
            {
                name: 'Elasticsearch',
                level: 75,
                color: 'from-yellow-500 to-orange-500',
                badge: 'https://img.shields.io/badge/elasticsearch-%23005571.svg?style=for-the-badge&logo=elasticsearch&logoColor=white&fontSize=14',
                width: 134,
                height: 28,
                show: false
            },
            {
                name: 'Logstash',
                level: 58,
                color: 'from-green-500 to-teal-500',
                badge: 'https://img.shields.io/badge/logstash-%23005571.svg?style=for-the-badge&logo=logstash&logoColor=white&fontSize=14',
                width: 93,
                height: 28,
                show: false
            },
            {
                name: 'Kibana',
                level: 70,
                color: 'from-pink-500 to-red-500',
                badge: 'https://img.shields.io/badge/kibana-%23005571.svg?style=for-the-badge&logo=kibana&logoColor=white&fontSize=14',
                width: 81,
                height: 28,
                show: false
            },
            {
                name: "Power BI",
                level: 60,
                color: 'from-yellow-400 to-yellow-600',
                badge: 'https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=power-bi&logoColor=black&fontSize=14',
                width: 93,
                height: 28,
                show: false
            },
            {
                name: 'Hadoop',
                level: 55,
                color: 'from-yellow-600 to-orange-600',
                badge: 'https://img.shields.io/badge/Apache%20Hadoop-66CCFF?style=for-the-badge&logo=apachehadoop&logoColor=black&fontSize=14',
                width: 151,
                height: 28,
                show: false
            },
            {
                name: 'Spark',
                level: 40,
                color: 'from-red-600 to-red-700',
                badge: 'https://img.shields.io/badge/Apache%20Spark-E25A1C?style=for-the-badge&logo=apachespark&logoColor=white&fontSize=14',
                width: 134,
                height: 28,
                show: false
            }
        ]
    },
    // {
    //     name: "Bases de données",
    //     icon: CircleStackIcon,
    //     description: 'Stockage et gestion des données',
    //     show: true,
    //     skills: [

    //     ]
    // },
    {
        name: "DevOps & Outils",
        icon: WrenchScrewdriverIcon,
        description: 'Outils de développement, CI/CD et build',
        show: true,
        skills: [
            {
                name: 'Git',
                level: 95,
                color: 'from-orange-500 to-red-500',
                badge: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white&fontSize=14',
                width: 51,
                height: 28,
                show: true
            },
            {
                name: 'GitHub',
                level: 90,
                color: 'from-gray-700 to-gray-900',
                badge: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white&fontSize=14',
                width: 81,
                height: 28,
                show: true
            },
            {
                name: 'GitLab',
                level: 85,
                color: 'from-orange-600 to-red-600',
                badge: 'https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white&fontSize=14',
                width: 78,
                height: 28,
                show: true
            },
            {
                name: 'GitHub Actions',
                level: 80,
                color: 'from-blue-500 to-indigo-500',
                badge: 'https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white&fontSize=14',
                width: 152,
                height: 28,
                show: true
            },
            {
                name: 'Docker',
                level: 78,
                color: 'from-blue-500 to-blue-600',
                badge: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white&fontSize=14',
                width: 78,
                height: 28,
                show: true
            },
            {
                name: 'VS Code',
                level: 98,
                color: 'from-blue-600 to-blue-700',
                badge: 'https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visual%20studio%20code&logoColor=white&fontSize=14',
                width: 188,
                height: 28,
                show: false
            },
            {
                name: 'Vite',
                level: 92,
                color: 'from-purple-500 to-pink-500',
                badge: 'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white&fontSize=14',
                width: 60,
                height: 28,
                show: false
            }
        ]
    },
    {
        name: "Mobile & Cloud",
        icon: DevicePhoneMobileIcon,
        description: 'Applications mobiles et services cloud',
        show: false,
        skills: [
            {
                name: 'Flutter',
                level: 80,
                color: 'from-blue-400 to-cyan-500',
                badge: 'https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white&fontSize=14',
                width: 81,
                height: 28, show: true
            },
            {
                name: 'Dart',
                level: 78,
                color: 'from-blue-500 to-indigo-600',
                badge: 'https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white&fontSize=14',
                width: 60,
                height: 28, show: true
            },
            {
                name: 'Kotlin',
                level: 75,
                color: 'from-purple-500 to-pink-500',
                badge: 'https://img.shields.io/badge/Kotlin-0095D5?style=for-the-badge&logo=kotlin&logoColor=white&fontSize=14',
                width: 78,
                height: 28, show: true
            },
            {
                name: 'Firebase',
                level: 85,
                color: 'from-orange-500 to-red-500',
                badge: 'https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white&fontSize=14',
                width: 93,
                height: 28, show: true
            },
            {
                name: 'Google Cloud',
                level: 75,
                color: 'from-blue-500 to-green-500',
                badge: 'https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white&fontSize=14',
                width: 131,
                height: 28, show: true
            },
            {
                name: 'AWS',
                level: 70,
                color: 'from-yellow-500 to-orange-500',
                badge: 'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white&fontSize=14',
                width: 60,
                height: 28, show: true
            },
            {
                name: 'Vercel',
                level: 90,
                color: 'from-gray-600 to-gray-800',
                badge: 'https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white&fontSize=14',
                width: 78,
                height: 28, show: true
            }
        ]

    },
];

const additionalSkills: AdditionalSkillItem[] = [
    { name: 'API REST', icon: LinkIcon, color: 'from-green-400 to-green-600', show: true },
    { name: 'CI/CD GitLab', icon: RocketLaunchIcon, color: 'from-orange-400 to-orange-600', show: true },
    { name: 'GraphQL', icon: CodeBracketIcon, color: 'from-pink-400 to-pink-600', show: true },
    { name: 'Agile/Scrum', icon: CodeBracketIcon, color: 'from-orange-400 to-orange-600', show: true },
    { name: 'PostgreSQL', icon: ServerIcon, color: 'from-blue-500 to-blue-700', show: true },
    { name: 'Software Quality', icon: ShieldCheckIcon, color: 'from-emerald-400 to-emerald-600', show: true },
    { name: 'Performance', icon: BoltIcon, color: 'from-indigo-400 to-indigo-600', show: true },
    { name: 'SEO', icon: MagnifyingGlassIcon, color: 'from-yellow-400 to-yellow-600', show: true }
]

type ContractType = {
    type: 'full-time' | 'part-time' | 'freelance' | 'internship' | 'contract' | 'apprenticeship',
    label: string,
    color: string,
    rythm?: string,
    duration?: string
}

const contractTypes: ContractType[] = [
    { type: 'full-time', label: 'CDI', color: 'bg-green-100 text-green-800' },
    { type: 'part-time', label: 'Temps partiel', color: 'bg-blue-100 text-blue-800' },
    { type: 'freelance', label: 'Freelance', color: 'bg-yellow-100 text-yellow-800' },
    { type: 'internship', label: 'Stage', color: 'bg-purple-100 text-purple-800', duration: "6 mois" },
    {
        type: 'apprenticeship', label: 'Alternance', color: 'bg-blue-100 text-blue-800',
        rythm: "3 semaines à l'entreprise / 1 semaine à l'école",
        duration: "12 mois"

    },
    { type: 'contract', label: 'CDD', color: 'bg-red-100 text-red-800' }
]

// Données du CV
export const cvData: CVData = {
    status: 'unavailable',
    personalInfo: {
        name: personal.name,
        title: personal.title,
        profile: "Frontend Engineer chez Opensee (Fintech SaaS), spécialisé en React, TypeScript et Testing Automation. Expérience sur des applications SaaS : architecture de tests (unitaires, E2E, intégration), développement frontend React/TypeScript, pipelines CI/CD GitLab et API NestJS.",
        contact: [
            { type: 'phone', name: "Téléphone", value: personal.phone },
            { type: 'website', name: "LinkedIn", value: personal.linkedin.display },
            { type: 'email', name: "Email", value: personal.email },
            { type: 'website', name: "GitHub", value: `github.com/${personal.github.user}` },
            { type: 'location', name: "Localisation", value: personal.location },
            { type: 'website', name: "Portfolio", value: personal.siteUrl.replace('https://', '') },
        ],
        contracts: contractTypes,
    },

    experience: [
        {
            jobTitle: "Frontend Engineer - CDI",
            company: "Opensee",
            location: "Puteaux, France",
            period: "06/2026 - présent",
            description: [
                "Poursuite au sein de l'équipe frontend suite au stage - développement de fonctionnalités React/TypeScript sur les produits Opensee",
                "Maintien et évolution de la couverture de tests (Vitest, Playwright) sur les applications frontend et l'API NestJS",
                "Collaboration transversale avec les équipes backend, DevOps, analytics et IA dans un environnement Agile"
            ]
        },
        {
            jobTitle: "Frontend Engineer (Testing & Quality) - Stage",
            company: "Opensee",
            location: "Puteaux, France",
            period: "11/2025 - 06/2026",
            description: [
                "Réécriture complète des tests unitaires React (migration Angular vers React) et réactivation des pipelines CI/CD GitLab",
                "Tests unitaires (Vitest) et E2E (Supertest, Playwright) sur un backend NestJS et une application frontend IA Agentique",
                "Contribution au développement d'une console Settings centralisée pour les produits Opensee"
            ]
        },
        {
            jobTitle: "Développeur Mobile et API - Freelance",
            company: "HudHud Shipping",
            location: "Remote",
            period: "03/2025 - 08/2025",
            description: [
                "Développement de deux applications mobiles Flutter (client et livreur)",
                // d'une API REST Spring Boot et d'une application web d'administration React",
                "Publication sur Google Play Store et App Store avec déploiement cloud"
            ]
        },
        // {
        //     jobTitle: "Développeur Web - Indépendant",
        //     company: "APSJ.org (Association)",
        //     location: "Remote",
        //     period: "08/2024 - 11/2025",
        //     description: [
        //         "Développement du site associatif avec WordPress et Elementor, optimisation SEO et administration sur Hostinger"
        //     ]
        // },
        // {
        //     jobTitle: "Développeur Full Stack - Projet Personnel",
        //     company: "Data Vise SaaS",
        //     location: "Projet académique",
        //     period: "2024",
        //     description: [
        //         "Développement d'une plateforme de visualisation de données moderne",
        //         "Interface React/TypeScript avec dashboard responsive drag & drop",
        //         "Backend Node.js/Express avec intégration Elasticsearch",
        //         "Authentification robuste et système de gestion des rôles"
        //     ]
        // }
    ],
    skills: skillCategories,
    additionalSkills: additionalSkills,
    education: [
        {
            degree: "Master, Expert IT, Développement & Big Data",
            school: "Ecole IRIS Paris",
            location: "Paris, France",
            period: "2024 - 2026",
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
    ],
    qualities: [
        "Esprit d’équipe",
        "Rigueur",
        "Adaptabilité",
        "Communication",
        // "Leadership"
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
}

