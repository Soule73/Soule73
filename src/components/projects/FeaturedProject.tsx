import Image from 'next/image'
import type { Project } from './types'

interface FeaturedProjectProps {
    project: Project
    className?: string
}

const FeaturedProject = ({ project, className }: FeaturedProjectProps) => {
    return (
        <div
            className={`group relative glass dark:glass-dark rounded-3xl overflow-hidden hover-lift hover-glow 
                max-w-4xl
                transition-all duration-700 animate-fade-in-up ${className}`}
        >
            {/* Image avec overlay */}
            <div className="relative overflow-hidden h-64">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay dégradé */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Badge catégorie */}
                <div className="absolute top-4 right-4">
                    <div className={`glass dark:glass-dark rounded-xl px-3 py-1 backdrop-blur-lg`}>
                        <span className="text-sm font-bold gradient-text flex items-center space-x-2">
                            <span className="w-4 h-4">{project.icon}</span>
                            <span>{project.category}</span>
                        </span>
                    </div>
                </div>

                {/* Badge status */}
                <div className="absolute top-4 left-4">
                    <div className={`px-3 py-1 rounded-xl text-xs font-bold backdrop-blur-lg ${project.status === 'En ligne'
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : project.status === 'En développement'
                            ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                            : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        }`}>
                        {project.status}
                    </div>
                </div>

                {/* Titre sur l'image */}
                <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-2xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300">
                        {project.title}
                    </h4>
                </div>
            </div>

            {/* Contenu */}
            <div className="p-8">
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech: string, techIndex: number) => (
                        <span
                            key={techIndex}
                            className="glass dark:glass-dark rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 hover-glow transition-all duration-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="space-y-3">
                    {/* Ligne principale avec démo et GitHub */}
                    <div className="flex space-x-4">
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 group relative glass dark:glass-dark rounded-2xl px-6 py-3 font-bold overflow-hidden hover-lift transition-all duration-300"
                        >
                            <div className="relative z-10 flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-200 group-hover:text-white">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                <span>Voir</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </a>

                        {project.githubUrl !== '#' && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold rounded-2xl hover:border-indigo-500 hover:text-indigo-500 transition-all duration-300 hover-lift"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span>Code</span>
                            </a>
                        )}
                    </div>

                    {/* Ligne secondaire pour les liens Play Store */}
                    {(project.playStoreUrl || project.playStoreDriverUrl) && (
                        <div className="flex space-x-4">
                            {project.playStoreUrl && (
                                <a
                                    href={project.playStoreUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all duration-300 hover-lift text-sm"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                    </svg>
                                    <span>App Client</span>
                                </a>
                            )}
                            {project.playStoreDriverUrl && (
                                <a
                                    href={project.playStoreDriverUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover-lift text-sm"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                    </svg>
                                    <span>App Livreur</span>
                                </a>
                            )}
                        </div>
                    )}

                    {/* Informations de connexion pour Data Vise */}
                    {project.credentials && (
                        <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Accès démo :</p>
                            <p className="text-xs text-blue-700 dark:text-blue-300">
                                <span className="font-medium">Email:</span> {project.credentials.email}<br />
                                <span className="font-medium">Mot de passe:</span> {project.credentials.password}
                            </p>
                        </div>
                    )}
                </div>

                {/* Détails professionnels */}
                {project.details && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div className="space-y-3">
                            {project.details.role && (
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Rôle : </span>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">{project.details.role}</span>
                                    </div>
                                </div>
                            )}
                            {project.details.team && (
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Équipe : </span>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">{project.details.team}</span>
                                    </div>
                                </div>
                            )}
                            {project.details.methodology && (
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Méthodologie : </span>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">{project.details.methodology}</span>
                                    </div>
                                </div>
                            )}
                            {project.details.period && (
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Période : </span>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">{project.details.period}</span>
                                    </div>
                                </div>
                            )}
                            {project.details.type && (
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Type : </span>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">{project.details.type}</span>
                                    </div>
                                </div>
                            )}
                            {project.details.achievements && (
                                <div className="mt-4">
                                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Réalisations :</p>
                                    <ul className="space-y-1">
                                        {project.details.achievements.map((achievement: string, index: number) => (
                                            <li key={index} className="flex items-start space-x-2">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {project.details.features && (
                                <div className="mt-4">
                                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Fonctionnalités clés :</p>
                                    <ul className="space-y-1">
                                        {project.details.features.map((feature: string, index: number) => (
                                            <li key={index} className="flex items-start space-x-2">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {project.details.responsibilities && (
                                <div className="mt-4">
                                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Responsabilités :</p>
                                    <ul className="space-y-1">
                                        {project.details.responsibilities.map((responsibility: string, index: number) => (
                                            <li key={index} className="flex items-start space-x-2">
                                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-sm text-gray-600 dark:text-gray-400">{responsibility}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FeaturedProject
