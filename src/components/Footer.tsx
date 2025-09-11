import { HeartIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const technologies = [
        {
            name: 'React',
            badge: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
            color: 'from-cyan-400 to-blue-500',
            width: 81,
            height: 28
        },
        {
            name: 'Next.js',
            badge: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white',
            color: 'from-gray-700 to-black',
            width: 81,
            height: 28
        },
        {
            name: 'TypeScript',
            badge: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
            color: 'from-blue-600 to-indigo-600',
            width: 117,
            height: 28
        },
        {
            name: 'Tailwind CSS',
            badge: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
            color: 'from-teal-400 to-cyan-500',
            width: 142,
            height: 28
        }
    ]

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative particles-bg overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-20 w-32 h-32 bg-blue-500/10 rounded-full animate-float blur-xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 animate-morphing-blob blur-xl"></div>
            </div>

            <div className="relative z-10 section-center">
                {/* Technologies utilisées */}
                <div className="py-8">
                    <div className="text-center mb-6">
                        <h4 className="text-lg font-bold gradient-text mb-4">Créé avec passion ❤️</h4>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className={`group glass dark:glass-dark rounded-xl p-3 hover-lift transition-all duration-300 animate-fade-in-up delay-${index * 100}`}
                            >
                                <div className="flex items-center space-x-3">
                                    <Image
                                        src={tech.badge}
                                        alt={tech.name}
                                        width={tech.width}
                                        height={tech.height}
                                        unoptimized
                                        className="group-hover:scale-105 transition-transform duration-200 rounded"
                                    />
                                    <span className="font-semibold text-gray-700 dark:text-gray-200 group-hover:gradient-text transition-all duration-300">
                                        {tech.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section finale */}
                <div className="py-8 border-t border-gray-200/30 dark:border-gray-700/30">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-gray-600 dark:text-gray-400 font-semibold">
                                © {currentYear} <span className="gradient-text">Soulé Soumaré</span>. Tous droits réservés.
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                                <span>

                                    Fait avec
                                </span>
                                <HeartIcon className="w-4 h-4 inline-block text-red-500 mx-1" />
                                <span>
                                    | Paris, France 🇫🇷
                                </span>
                            </p>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span>Portfolio v2.0</span>
                            </div>

                            {/* Bouton retour en haut */}
                            <button
                                onClick={scrollToTop}
                                className="group w-12 h-12 glass dark:glass-dark rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover-lift  transition-all duration-300 relative overflow-hidden"
                                aria-label="Retour en haut"
                            >
                                <svg className="w-5 h-5 relative z-10 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
