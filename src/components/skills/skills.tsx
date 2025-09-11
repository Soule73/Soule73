import {
    CodeBracketIcon,
    ComputerDesktopIcon,
    CogIcon,
    WrenchScrewdriverIcon,
    DevicePhoneMobileIcon,
    LinkIcon,
    BeakerIcon,
    RocketLaunchIcon,
    MagnifyingGlassIcon,
    BoltIcon,
    CircleStackIcon,
    ServerIcon
} from '@heroicons/react/24/outline'

const skillCategories = [
    {
        title: 'Frontend & UI',
        icon: <ComputerDesktopIcon className="w-8 h-8 text-blue-500" />,
        description: 'Technologies front-end, interfaces et design',
        skills: [
            {
                name: 'HTML',
                level: 95,
                color: 'from-orange-500 to-red-500',
                badge: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
                width: 88,
                height: 28
            },
            {
                name: 'CSS',
                level: 90,
                color: 'from-blue-500 to-indigo-500',
                badge: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
                width: 81,
                height: 28
            },
            {
                name: 'JavaScript',
                level: 88,
                color: 'from-yellow-400 to-yellow-600',
                badge: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
                width: 117,
                height: 28
            },
            {
                name: 'TypeScript',
                level: 85,
                color: 'from-blue-600 to-indigo-600',
                badge: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
                width: 117,
                height: 28
            },
            {
                name: 'React',
                level: 90,
                color: 'from-blue-500 to-cyan-500',
                badge: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
                width: 81,
                height: 28
            },
            {
                name: 'Tailwind CSS',
                level: 92,
                color: 'from-teal-400 to-blue-500',
                badge: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
                width: 142,
                height: 28
            },
            {
                name: 'Figma',
                level: 85,
                color: 'from-pink-500 to-purple-500',
                badge: 'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white',
                width: 78,
                height: 28
            }
        ]
    },
    {
        title: 'Backend & Frameworks',
        icon: <CogIcon className="w-8 h-8 text-purple-500" />,
        description: 'Langages serveur et frameworks applicatifs',
        skills: [
            {
                name: 'PHP',
                level: 88,
                color: 'from-purple-500 to-indigo-600',
                badge: 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white',
                width: 60,
                height: 28
            },
            {
                name: 'Java',
                level: 82,
                color: 'from-red-500 to-orange-500',
                badge: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white',
                width: 63,
                height: 28
            },
            {
                name: 'Laravel',
                level: 85,
                color: 'from-red-600 to-pink-600',
                badge: 'https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white',
                width: 88,
                height: 28
            },
            {
                name: 'Symfony',
                level: 80,
                color: 'from-black to-gray-700',
                badge: 'https://img.shields.io/badge/Symfony-000000?style=for-the-badge&logo=symfony&logoColor=white',
                width: 100,
                height: 28
            },
            {
                name: 'Spring Boot',
                level: 75,
                color: 'from-green-500 to-emerald-500',
                badge: 'https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white',
                width: 127,
                height: 28
            },
            {
                name: 'Next.js',
                level: 85,
                color: 'from-gray-700 to-black',
                badge: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white',
                width: 81,
                height: 28
            }
        ]
    },
    {
        title: 'Bases de Données',
        icon: <CircleStackIcon className="w-8 h-8 text-indigo-500" />,
        description: 'Stockage et gestion des données',
        skills: [
            {
                name: 'MySQL',
                level: 90,
                color: 'from-blue-600 to-orange-500',
                badge: 'https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white',
                width: 78,
                height: 28
            },
            {
                name: 'PostgreSQL',
                level: 85,
                color: 'from-blue-700 to-indigo-800',
                badge: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white',
                width: 117,
                height: 28
            },
            {
                name: 'MongoDB',
                level: 80,
                color: 'from-green-600 to-green-700',
                badge: 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
                width: 100,
                height: 28
            }
        ]
    },
    {
        title: 'DevOps & Outils',
        icon: <WrenchScrewdriverIcon className="w-8 h-8 text-orange-500" />,
        description: 'Outils de développement, CI/CD et build',
        skills: [
            {
                name: 'Git',
                level: 95,
                color: 'from-orange-500 to-red-500',
                badge: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
                width: 51,
                height: 28
            },
            {
                name: 'GitHub',
                level: 90,
                color: 'from-gray-700 to-gray-900',
                badge: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
                width: 81,
                height: 28
            },
            {
                name: 'GitLab',
                level: 85,
                color: 'from-orange-600 to-red-600',
                badge: 'https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white',
                width: 78,
                height: 28
            },
            {
                name: 'GitHub Actions',
                level: 80,
                color: 'from-blue-500 to-indigo-500',
                badge: 'https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white',
                width: 152,
                height: 28
            },
            {
                name: 'Docker',
                level: 78,
                color: 'from-blue-500 to-blue-600',
                badge: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white',
                width: 78,
                height: 28
            },
            {
                name: 'VS Code',
                level: 98,
                color: 'from-blue-600 to-blue-700',
                badge: 'https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visual%20studio%20code&logoColor=white',
                width: 188,
                height: 28
            },
            {
                name: 'Vite',
                level: 92,
                color: 'from-purple-500 to-pink-500',
                badge: 'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white',
                width: 60,
                height: 28
            }
        ]
    },
    {
        title: 'Mobile & Cloud',
        icon: <DevicePhoneMobileIcon className="w-8 h-8 text-green-500" />,
        description: 'Applications mobiles et services cloud',
        skills: [
            {
                name: 'Flutter',
                level: 80,
                color: 'from-blue-400 to-cyan-500',
                badge: 'https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white',
                width: 81,
                height: 28
            },
            {
                name: 'Dart',
                level: 78,
                color: 'from-blue-500 to-indigo-600',
                badge: 'https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white',
                width: 60,
                height: 28
            },
            {
                name: 'Kotlin',
                level: 75,
                color: 'from-purple-500 to-pink-500',
                badge: 'https://img.shields.io/badge/Kotlin-0095D5?style=for-the-badge&logo=kotlin&logoColor=white',
                width: 78,
                height: 28
            },
            {
                name: 'Firebase',
                level: 85,
                color: 'from-orange-500 to-red-500',
                badge: 'https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white',
                width: 93,
                height: 28
            },
            {
                name: 'Google Cloud',
                level: 75,
                color: 'from-blue-500 to-green-500',
                badge: 'https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white',
                width: 131,
                height: 28
            },
            {
                name: 'AWS',
                level: 70,
                color: 'from-yellow-500 to-orange-500',
                badge: 'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white',
                width: 60,
                height: 28
            },
            {
                name: 'Vercel',
                level: 90,
                color: 'from-gray-600 to-gray-800',
                badge: 'https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white',
                width: 78,
                height: 28
            }
        ]
    },
    {
        title: 'Big Data & Analytics',
        icon: <ServerIcon className="w-8 h-8 text-purple-500" />,
        description: 'Analyse, pipelines et recherche',
        skills: [
            {
                name: 'Elasticsearch',
                level: 75,
                color: 'from-yellow-500 to-orange-500',
                badge: 'https://img.shields.io/badge/elasticsearch-%23005571.svg?style=for-the-badge&logo=elasticsearch&logoColor=white',
                width: 134,
                height: 28
            },
            {
                name: 'Logstash',
                level: 58,
                color: 'from-green-500 to-teal-500',
                badge: 'https://img.shields.io/badge/logstash-%23005571.svg?style=for-the-badge&logo=logstash&logoColor=white',
                width: 93,
                height: 28
            },
            {
                name: 'Kibana',
                level: 70,
                color: 'from-pink-500 to-red-500',
                badge: 'https://img.shields.io/badge/kibana-%23005571.svg?style=for-the-badge&logo=kibana&logoColor=white',
                width: 81,
                height: 28
            },
            {
                name: "Power BI",
                level: 60,
                color: 'from-yellow-400 to-yellow-600',
                badge: 'https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=power-bi&logoColor=black',
                width: 93,
                height: 28
            },
            {
                name: 'Hadoop',
                level: 55,
                color: 'from-yellow-600 to-orange-600',
                badge: 'https://img.shields.io/badge/Apache%20Hadoop-66CCFF?style=for-the-badge&logo=apachehadoop&logoColor=black',
                width: 151,
                height: 28
            },
            {
                name: 'Spark',
                level: 40,
                color: 'from-red-600 to-red-700',
                badge: 'https://img.shields.io/badge/Apache%20Spark-E25A1C?style=for-the-badge&logo=apachespark&logoColor=white',
                width: 134,
                height: 28
            }
        ]
    }
];

const additionalSkills = [
    { name: 'API REST', icon: <LinkIcon className="w-5 h-5" />, color: 'from-green-400 to-green-600' },
    { name: 'CI/CD', icon: <RocketLaunchIcon className="w-5 h-5" />, color: 'from-purple-400 to-purple-600' },
    { name: 'Agile/Scrum', icon: <CodeBracketIcon className="w-5 h-5" />, color: 'from-orange-400 to-orange-600' },
    { name: 'Testing', icon: <BeakerIcon className="w-5 h-5" />, color: 'from-red-400 to-red-600' },
    { name: 'Performance', icon: <BoltIcon className="w-5 h-5" />, color: 'from-indigo-400 to-indigo-600' },
    { name: 'SEO', icon: <MagnifyingGlassIcon className="w-5 h-5" />, color: 'from-yellow-400 to-yellow-600' }
]

export { skillCategories, additionalSkills }