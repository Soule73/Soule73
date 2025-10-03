import {
    GlobeAltIcon,
    DevicePhoneMobileIcon,
    ChartBarIcon,
    CodeBracketIcon
} from '@heroicons/react/24/outline'
import type { Project, Category } from './types'
import { githubIcon, playStoreIcon, webIcon } from '../svg'

import dataviseImage from '../../assets/images/datavise-preview.jpeg'
import hudhudImage from '../../assets/images/hudhud-preview.png'
import apsjImage from '../../assets/images/apsj-preview.jpg'
import sumlogicImage from '../../assets/images/sumlogic-preview.png'

export const projects: Project[] = [
    {
        id: 1,
        title: 'HudHud Shipping - Plateforme de Livraison Internationale',
        description: 'Mission freelance complète - Développement de deux applications mobiles Flutter avec API REST Spring Boot et application web admin pour une agence de livraison internationale.',
        image: hudhudImage,
        technologies: ['Flutter', 'Dart', 'Spring Boot', 'React', 'Tailwind CSS'],
        category: 'Mobile & Web',
        urls: [
            {
                name: 'Site Web',
                url: 'https://hudhud-shippment.el-hadj.com',
                icon: webIcon,
                type: 'primary'
            },
            {
                name: 'App Client',
                url: 'https://play.google.com/store/apps/details?id=com.hudhud.customer',
                icon: playStoreIcon,
                type: 'store',
                className: 'bg-green-600 hover:bg-green-700'
            },
            {
                name: 'App Livreur',
                url: 'https://play.google.com/store/apps/details?id=com.hudhud.delivery',
                icon: playStoreIcon,
                type: 'store',
                className: 'bg-blue-600 hover:bg-blue-700'
            }
        ],
        featured: true,
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
        id: 4,
        title: 'SumLogic - Puzzle Mathématique Innovant',
        description: 'Jeu de puzzle propriétaire combinant Sudoku classique et Killer Sudoku avec des mécaniques de sommes uniques. Disponible sur Android, Web, Windows, macOS et Linux. Multilingue, responsive, et doté d\'un système de défis quotidiens, médailles et statistiques avancées.',
        image: sumlogicImage,
        technologies: ['Flutter', 'Dart', 'Android', 'iOS', 'Firebase', 'PWA', 'Windows', 'macOS', 'Linux'],
        category: 'Multi-Platform',
        urls: [
            {
                name: 'Site Web du Jeu',
                url: 'https://sumlogic.soulesoumare.dev',
                icon: webIcon,
                type: 'primary'
            },
            {
                name: 'Jouer en ligne',
                url: 'https://app.sumlogic.soulesoumare.dev',
                icon: webIcon,
                type: 'primary'
            },
            {
                name: 'Android',
                url: 'https://play.google.com/store/apps/details?id=com.sds.sumlogic',
                icon: playStoreIcon,
                type: 'store',
                className: 'bg-green-600 hover:bg-green-700'
            }
        ],
        featured: true,
        color: 'from-yellow-500 to-orange-500',
        status: 'En ligne',
        details: {
            role: 'Développeur principal (solo)',
            type: 'Projet propriétaire',
            features: [
                'Gameplay hybride Sudoku + Killer Sudoku',
                '5 niveaux de difficulté et défi quotidien',
                'Système de médailles et statistiques',
                'Progression sauvegardée et synchronisation cloud (à venir)',
                'Interface responsive et multilingue (FR/EN)',
                'Distribution multiplateforme (Android, Web, Windows, macOS, Linux)',
                'Installateur Windows professionnel avec auto-update',
                'PWA installable sur mobile et desktop',
                'Notifications, thèmes personnalisables, accessibilité avancée'
            ]
        }
    },
    {
        id: 2,
        title: 'Data Vise - Tableau de Bord d\'Analyse SaaS',
        description: 'Plateforme moderne de visualisation de données transformant les données brutes en insights actionnables. Dashboard responsive avec drag & drop et graphiques interactifs.',
        image: dataviseImage,
        technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Chart.js', 'Tailwind CSS', 'Elasticsearch'],
        category: 'Dashboard',
        urls: [
            {
                name: 'Démo en ligne',
                url: 'https://datavise.soulesoumare.dev/',
                icon: webIcon,
                type: 'primary'
            },
            {
                name: 'Code Source',
                url: 'https://github.com/Soule73/datavise',
                icon: githubIcon,
                type: 'secondary'
            }
        ],
        featured: true,
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
        image: apsjImage,
        technologies: ['WordPress', 'Elementor', 'MySQL', 'Hostinger', 'SEO'],
        category: 'Web',
        urls: [
            {
                name: 'Visiter le site',
                url: 'https://apsj.org/',
                icon: webIcon,
                type: 'primary'
            }
        ],
        featured: false,
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
        name: 'Multi-Platform',
        icon: <DevicePhoneMobileIcon className="w-5 h-5" />,
        count: projects.filter(p => p.category === 'Multi-Platform').length
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
