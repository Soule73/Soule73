import { BeakerIcon, BoltIcon, CodeBracketIcon, CogIcon, ComputerDesktopIcon, DevicePhoneMobileIcon, LinkIcon, MagnifyingGlassIcon, RocketLaunchIcon, ServerIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"
import React from "react"

// Données centralisées du CV pour faciliter l'édition
export interface CVData {
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
        name: "Langages",
        icon: ComputerDesktopIcon,
        description: 'Technologies front-end, interfaces et design',
        show: true,
        skills: [
            {
                name: 'PHP',
                level: 88,
                color: 'from-purple-500 to-indigo-600',
                badge: 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white&fontSize=14',
                width: 60,
                height: 28, show: true
            },
            {
                name: 'Java',
                level: 82,
                color: 'from-red-500 to-orange-500',
                badge: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white&fontSize=14',
                width: 54,
                height: 16, show: true
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
        name: "Frameworks",
        icon: CogIcon,
        description: 'Langages serveur et frameworks applicatifs',
        show: true,
        skills: [

            {
                name: 'Laravel',
                level: 85,
                color: 'from-red-600 to-pink-600',
                badge: 'https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white&fontSize=14',
                width: 88,
                height: 28, show: true
            },
            {
                name: 'Symfony',
                level: 80,
                color: 'from-black to-gray-700',
                badge: 'https://img.shields.io/badge/Symfony-000000?style=for-the-badge&logo=symfony&logoColor=white&fontSize=14',
                width: 100,
                height: 28, show: true
            },
            {
                name: 'Spring Boot',
                level: 75,
                color: 'from-green-500 to-emerald-500',
                badge: 'https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white&fontSize=14',
                width: 127,
                height: 28, show: true
            },
            {
                name: 'Express.js',
                level: 80,
                color: 'from-gray-600 to-gray-700',
                badge: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white&fontSize=14',
                width: 100,
                height: 28, show: true
            },
            {
                name: 'Next.js',
                level: 85,
                color: 'from-gray-700 to-black',
                badge: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white&fontSize=14',
                width: 81,
                height: 28, show: true
            },
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
        name: "Big Data & Analytics",
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
                height: 28, show: true
            },
            {
                name: 'Elasticsearch',
                level: 75,
                color: 'from-yellow-500 to-orange-500',
                badge: 'https://img.shields.io/badge/elasticsearch-%23005571.svg?style=for-the-badge&logo=elasticsearch&logoColor=white&fontSize=14',
                width: 134,
                height: 28, show: true
            },
            {
                name: 'Logstash',
                level: 58,
                color: 'from-green-500 to-teal-500',
                badge: 'https://img.shields.io/badge/logstash-%23005571.svg?style=for-the-badge&logo=logstash&logoColor=white&fontSize=14',
                width: 93,
                height: 28, show: true
            },
            {
                name: 'Kibana',
                level: 70,
                color: 'from-pink-500 to-red-500',
                badge: 'https://img.shields.io/badge/kibana-%23005571.svg?style=for-the-badge&logo=kibana&logoColor=white&fontSize=14',
                width: 81,
                height: 28,
                show: true
            },
            {
                name: "Power BI",
                level: 60,
                color: 'from-yellow-400 to-yellow-600',
                badge: 'https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=power-bi&logoColor=black&fontSize=14',
                width: 93,
                height: 28,
                show: true
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
                height: 28, show: true
            }
        ]
    },
    {
        name: "Mobile & Cloud",
        icon: DevicePhoneMobileIcon,
        description: 'Applications mobiles et services cloud',
        show: true,
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
    { name: 'CI/CD', icon: RocketLaunchIcon, color: 'from-purple-400 to-purple-600', show: true },
    { name: 'Agile/Scrum', icon: CodeBracketIcon, color: 'from-orange-400 to-orange-600', show: true },
    { name: 'Testing', icon: BeakerIcon, color: 'from-red-400 to-red-600', show: true },
    { name: 'Performance', icon: BoltIcon, color: 'from-indigo-400 to-indigo-600', show: true },
    { name: 'SEO', icon: MagnifyingGlassIcon, color: 'from-yellow-400 to-yellow-600', show: true }
]

type ContractType = {
    type: 'full-time' | 'part-time' | 'freelance' | 'internship' | 'contract',
    label: string,
    color: string
}

const contractTypes: ContractType[] = [
    { type: 'full-time', label: 'CDI', color: 'bg-green-100 text-green-800' },
    { type: 'part-time', label: 'Temps partiel', color: 'bg-blue-100 text-blue-800' },
    { type: 'freelance', label: 'Freelance', color: 'bg-yellow-100 text-yellow-800' },
    { type: 'internship', label: 'Stage', color: 'bg-purple-100 text-purple-800' },
    { type: 'contract', label: 'CDD', color: 'bg-red-100 text-red-800' }
]

// Données du CV
export const cvData: CVData = {
    personalInfo: {
        name: "Soule Soumaré",
        title: "Développeur Full Stack",
        profile: "Développeur Full Stack passionné, créatif et orienté résultats. J’aime transformer des idées en solutions digitales performantes, du web au mobile. Curieux et autonome, j’ai mené à bien plusieurs projets innovants, alliant expertise technique et sens du produit.",
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
        ],
        contracts: contractTypes,
        searchingFor: contractTypes[3],
        availableFrom: "Disponible immédiatement"

    },

    experience: [
        {
            jobTitle: "Développeur Mobile & API - Freelance",
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
    skills: skillCategories,
    additionalSkills: additionalSkills,
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
    ],
    qualities: [
        "Esprit d’initiative",
        "Résolution de problèmes",
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

