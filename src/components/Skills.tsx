import {
    CodeBracketIcon,
    ComputerDesktopIcon,
    CogIcon,
    WrenchScrewdriverIcon,
    LightBulbIcon,
    AcademicCapIcon,
    DevicePhoneMobileIcon,
    LinkIcon,
    BeakerIcon,
    RocketLaunchIcon,
    MagnifyingGlassIcon,
    BoltIcon,
    CircleStackIcon,
    ServerIcon
} from '@heroicons/react/24/outline'

const Skills = () => {
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
                    badge: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
                },
                {
                    name: 'CSS',
                    level: 90,
                    color: 'from-blue-500 to-indigo-500',
                    badge: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'
                },
                {
                    name: 'JavaScript',
                    level: 88,
                    color: 'from-yellow-400 to-yellow-600',
                    badge: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'
                },
                {
                    name: 'TypeScript',
                    level: 85,
                    color: 'from-blue-600 to-indigo-600',
                    badge: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'
                },
                {
                    name: 'React',
                    level: 90,
                    color: 'from-blue-500 to-cyan-500',
                    badge: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'
                },
                {
                    name: 'Tailwind CSS',
                    level: 92,
                    color: 'from-teal-400 to-blue-500',
                    badge: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white'
                },
                {
                    name: 'Figma',
                    level: 85,
                    color: 'from-pink-500 to-purple-500',
                    badge: 'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white'
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
                    badge: 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white'
                },
                {
                    name: 'Java',
                    level: 82,
                    color: 'from-red-500 to-orange-500',
                    badge: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white'
                },
                {
                    name: 'Laravel',
                    level: 85,
                    color: 'from-red-600 to-pink-600',
                    badge: 'https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white'
                },
                {
                    name: 'Symfony',
                    level: 80,
                    color: 'from-black to-gray-700',
                    badge: 'https://img.shields.io/badge/Symfony-000000?style=for-the-badge&logo=symfony&logoColor=white'
                },
                {
                    name: 'Spring Boot',
                    level: 75,
                    color: 'from-green-500 to-emerald-500',
                    badge: 'https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white'
                },
                {
                    name: 'Next.js',
                    level: 85,
                    color: 'from-gray-700 to-black',
                    badge: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white'
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
                    badge: 'https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white'
                },
                {
                    name: 'PostgreSQL',
                    level: 85,
                    color: 'from-blue-700 to-indigo-800',
                    badge: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white'
                },
                {
                    name: 'MongoDB',
                    level: 80,
                    color: 'from-green-600 to-green-700',
                    badge: 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white'
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
                    badge: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white'
                },
                {
                    name: 'GitHub',
                    level: 90,
                    color: 'from-gray-700 to-gray-900',
                    badge: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'
                },
                {
                    name: 'GitLab',
                    level: 85,
                    color: 'from-orange-600 to-red-600',
                    badge: 'https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white'
                },
                {
                    name: 'GitHub Actions',
                    level: 80,
                    color: 'from-blue-500 to-indigo-500',
                    badge: 'https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white'
                },
                {
                    name: 'Docker',
                    level: 78,
                    color: 'from-blue-500 to-blue-600',
                    badge: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white'
                },
                {
                    name: 'VS Code',
                    level: 98,
                    color: 'from-blue-600 to-blue-700',
                    badge: 'https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visual%20studio%20code&logoColor=white'
                },
                {
                    name: 'Vite',
                    level: 92,
                    color: 'from-purple-500 to-pink-500',
                    badge: 'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white'
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
                    badge: 'https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white'
                },
                {
                    name: 'Dart',
                    level: 78,
                    color: 'from-blue-500 to-indigo-600',
                    badge: 'https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white'
                },
                {
                    name: 'Kotlin',
                    level: 75,
                    color: 'from-purple-500 to-pink-500',
                    badge: 'https://img.shields.io/badge/Kotlin-0095D5?style=for-the-badge&logo=kotlin&logoColor=white'
                },
                {
                    name: 'Firebase',
                    level: 85,
                    color: 'from-orange-500 to-red-500',
                    badge: 'https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white'
                },
                {
                    name: 'Google Cloud',
                    level: 75,
                    color: 'from-blue-500 to-green-500',
                    badge: 'https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white'
                },
                {
                    name: 'AWS',
                    level: 70,
                    color: 'from-yellow-500 to-orange-500',
                    badge: 'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white'
                },
                {
                    name: 'Vercel',
                    level: 90,
                    color: 'from-gray-600 to-gray-800',
                    badge: 'https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white'
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
                    badge: 'https://img.shields.io/badge/elasticsearch-%23005571.svg?style=for-the-badge&logo=elasticsearch&logoColor=white'
                },
                {
                    name: 'Logstash',
                    level: 58,
                    color: 'from-green-500 to-teal-500',
                    badge: 'https://img.shields.io/badge/logstash-%23005571.svg?style=for-the-badge&logo=logstash&logoColor=white'
                },
                {
                    name: 'Kibana',
                    level: 70,
                    color: 'from-pink-500 to-red-500',
                    badge: 'https://img.shields.io/badge/kibana-%23005571.svg?style=for-the-badge&logo=kibana&logoColor=white'
                },
                {
                    name: "Power BI",
                    level: 60,
                    color: 'from-yellow-400 to-yellow-600',
                    badge: 'https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=power-bi&logoColor=black'
                },
                {
                    name: 'Hadoop',
                    level: 55,
                    color: 'from-yellow-600 to-orange-600',
                    badge: 'https://img.shields.io/badge/Apache%20Hadoop-66CCFF?style=for-the-badge&logo=apachehadoop&logoColor=black'
                },
                {
                    name: 'Spark',
                    level: 40,
                    color: 'from-red-600 to-red-700',
                    badge: 'https://img.shields.io/badge/Apache%20Spark-E25A1C?style=for-the-badge&logo=apachespark&logoColor=white'
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

    return (
        <section id="skills" className="relative section-spacing particles-bg overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0">
                <div className="absolute top-32 right-20 w-40 h-40 bg-blue-500/10 rounded-full animate-float blur-xl"></div>
                <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-500/10 animate-morphing-blob blur-xl"></div>
                <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-pink-500/10 rounded-3xl animate-pulse-scale delay-300 blur-xl"></div>
            </div>

            <div className="relative z-10 section-center">
                {/* En-tête */}
                <div className="text-center mb-4 md:mb-8 lg:mb-12">
                    <div className="inline-flex items-center space-x-4  mb-8">
                        <LightBulbIcon className="w-12 h-12 text-yellow-500 animate-pulse" />
                        <h2 className="text-5xl lg:text-6xl font-black gradient-text">Compétences</h2>
                    </div>
                    <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        <span className="gradient-text font-semibold">Technologies</span> et outils que je maîtrise pour créer des
                        <span className="gradient-text font-semibold"> solutions innovantes</span>
                    </p>
                </div>

                {/* Catégories de compétences */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20 px-4">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={categoryIndex}
                            className={`glass dark:glass-dark rounded-3xl p-8 hover-lift 
                                flex flex-col justify-between group
                                transition-all duration-500 animate-fade-in-up delay-${categoryIndex * 200}`}
                        >
                            {/* En-tête de catégorie */}
                            <div className="text-center mb-8">
                                <div className="relative inline-block mb-4">

                                    <div className="relative w-16 h-16 glass dark:glass-dark rounded-2xl flex items-center justify-center 
                                   
                                    ">
                                        {category.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    {category.description}
                                </p>
                            </div>

                            {/* Liste des compétences */}
                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="group">
                                        {/* Info compétence */}
                                        <div className="flex justify-between items-center mb-3">
                                            <div className="flex items-center space-x-3">
                                                <img
                                                    src={skill.badge}
                                                    alt={skill.name}
                                                    className="h-6 group-hover:scale-105 transition-transform rounded duration-200"
                                                />
                                            </div>
                                            <div className="px-3 py-1">
                                                <span className="text-sm font-bold gradient-text">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                        </div>

                                        {/* Barre de progression */}
                                        <div className="relative">
                                            <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                                                <div
                                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg relative`}
                                                    style={{
                                                        width: `${skill.level}%`,
                                                        animation: `slideIn 1.5s ease-out ${(categoryIndex * 0.3) + (skillIndex * 0.1)}s both`
                                                    }}
                                                >
                                                    {/* Effet de brillance */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-gradient-shift"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Statistiques de catégorie */}
                            <div className="mt-8 pt-6 border-t border-gray-200/30 dark:border-gray-700/30">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500 dark:text-gray-400">Technologies</span>
                                    <div className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                        <span className="font-bold gradient-text">
                                            {category.skills.length}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Compétences additionnelles */}
                <div className="mb-20 px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-black gradient-text mb-6">
                            Autres compétences
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Technologies et méthodologies complémentaires
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {additionalSkills.map((skill, index) => (
                            <div
                                key={index}
                                className={`group glass dark:glass-dark rounded-2xl px-6 py-3 hover-lift  transition-all duration-300 cursor-pointer animate-fade-in-up delay-${index * 50}`}
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-indigo-500 group-hover:animate-bounce">
                                        {skill.icon}
                                    </span>
                                    <span className="font-semibold text-gray-700 dark:text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-600 transition-all duration-300">
                                        {skill.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section apprentissage */}
                <div className="text-center px-4">
                    <div className="relative glass dark:glass-dark rounded-3xl p-8 lg:p-12  overflow-hidden max-w-4xl mx-auto">
                        {/* Arrière-plan animé */}
                        <div className="absolute inset-0 gradient-animated opacity-20 rounded-3xl"></div>

                        <div className="relative z-10 space-y-6">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 glass dark:glass-dark rounded-2xl flex items-center justify-center animate-pulse-scale">
                                    <AcademicCapIcon className="w-10 h-10 text-indigo-500" />
                                </div>
                            </div>

                            <h3 className="text-3xl lg:text-4xl font-black gradient-text mb-4">
                                Toujours en apprentissage
                            </h3>

                            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                                La technologie évolue rapidement, et je m'efforce de rester à jour avec les
                                <span className="gradient-text font-semibold"> dernières tendances</span> et
                                <span className="gradient-text font-semibold"> meilleures pratiques</span> du développement.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
