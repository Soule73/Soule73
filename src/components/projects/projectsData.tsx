import {
    GlobeAltIcon,
    DevicePhoneMobileIcon,
    ChartBarIcon,
    BuildingOfficeIcon,
    CodeBracketIcon
} from '@heroicons/react/24/outline'
import type { Project, Category } from './types'

export const projects: Project[] = [
    {
        id: 1,
        title: 'HudHud Shipping - Plateforme de Livraison Internationale',
        description: 'Mission freelance complète - Développement de deux applications mobiles Flutter avec API REST Spring Boot et application web admin pour une agence de livraison internationale.',
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop',
        technologies: ['Flutter', 'Dart', 'Spring Boot', 'React', 'Tailwind CSS'],
        category: 'Mobile & Web',
        demoUrl: 'https://hudhud-shippment.el-hadj.com',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.hudhud.customer',
        playStoreDriverUrl: 'https://play.google.com/store/apps/details?id=com.hudhud.delivery',
        githubUrl: '#',
        featured: true,
        icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
        color: 'from-blue-500 to-cyan-500',
        status: 'En ligne',
        details: {
            role: 'Responsable développement mobile & API',
            team: 'Collaboration avec développeur backend et chef de projet',
            methodology: 'Agile',
            achievements: [
                'Publication sur Google Play Store et App Store',
                'Déploiement cloud de l\'API et application web',
                'Intégration API REST complète',
                'Interface admin dédiée'
            ]
        }
    },
    {
        id: 2,
        title: 'Data Vise - Tableau de Bord d\'Analyse SaaS',
        description: 'Plateforme moderne de visualisation de données transformant les données brutes en insights actionnables. Dashboard responsive avec drag & drop et graphiques interactifs.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
        technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Chart.js', 'Tailwind CSS', 'Elasticsearch'],
        category: 'Dashboard',
        demoUrl: 'https://datavise.soulesoumare.dev/',
        githubUrl: 'https://github.com/Soule73/datavise',
        featured: true,
        icon: <ChartBarIcon className="w-8 h-8" />,
        color: 'from-purple-500 to-pink-500',
        status: 'En ligne',
        credentials: {
            email: 'admin@example.com',
            password: 'password'
        },
        details: {
            role: 'Développeur Full-Stack',
            type: 'Projet personnel académique',
            features: [
                'Visualisations avancées (histogrammes, courbes, cartes)',
                'Authentification robuste avec gestion des rôles',
                'Intégrations multiples (CSV, APIs REST, Elasticsearch)',
                'Architecture extensible et sécurisée'
            ]
        }
    },
    {
        id: 3,
        title: 'APSJ.org - Site Web Association',
        description: 'Développement complet du site web associatif avec WordPress et Elementor. Site moderne et responsive pour l\'Association de Promotion de la Santé des Jeunes, hébergé sur Hostinger.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
        technologies: ['WordPress', 'Elementor', 'MySQL', 'Hostinger', 'SEO'],
        category: 'Web',
        demoUrl: 'https://apsj.org/',
        githubUrl: '#',
        featured: false,
        icon: <BuildingOfficeIcon className="w-8 h-8" />,
        color: 'from-green-500 to-emerald-500',
        status: 'En ligne',
        details: {
            role: 'Développeur Web et Administrateur',
            period: 'Depuis 2024',
            type: 'Site associatif',
            responsibilities: [
                'Conception et développement avec WordPress + Elementor',
                'Configuration et optimisation MySQL',
                'Déploiement et gestion sur Hostinger',
                'Optimisation SEO et performance',
                'Administration continue du site'
            ]
        }
    }
]

export const getCategories = (projects: Project[]): Category[] => [
    {
        name: 'Tous',
        icon: <GlobeAltIcon className="w-5 h-5" />,
        count: projects.length
    },
    {
        name: 'Mobile & Web',
        icon: <DevicePhoneMobileIcon className="w-5 h-5" />,
        count: projects.filter(p => p.category === 'Mobile & Web').length
    },
    {
        name: 'Dashboard',
        icon: <ChartBarIcon className="w-5 h-5" />,
        count: projects.filter(p => p.category === 'Dashboard').length
    },
    {
        name: 'Web',
        icon: <CodeBracketIcon className="w-5 h-5" />,
        count: projects.filter(p => p.category === 'Web').length
    }
]
