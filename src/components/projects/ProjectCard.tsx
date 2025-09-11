import Image from 'next/image'
import type { Project } from './types'

interface ProjectCardProps {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div
            className="group glass dark:glass-dark rounded-2xl overflow-hidden hover-lift hover-glow transition-all duration-500 animate-fade-in-up"
        >
            {/* Image */}
            <div className="relative overflow-hidden h-48">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between">
                    <div className="glass dark:glass-dark rounded-lg px-2 py-1 backdrop-blur-lg">
                        <span className="text-xs font-bold gradient-text flex items-center space-x-1">
                            <span className="w-3 h-3">{project.icon}</span>
                            <span>{project.category}</span>
                        </span>
                    </div>
                    <div className={`px-2 py-1 rounded-lg text-xs font-bold backdrop-blur-lg ${project.status === 'En ligne'
                        ? 'bg-green-500/20 text-green-300'
                        : project.status === 'En développement'
                            ? 'bg-orange-500/20 text-orange-300'
                            : 'bg-blue-500/20 text-blue-300'
                        }`}>
                        {project.status}
                    </div>
                </div>
            </div>

            {/* Contenu */}
            <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                        <span
                            key={techIndex}
                            className="glass dark:glass-dark rounded-lg px-2 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="glass dark:glass-dark rounded-lg px-2 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400">
                            +{project.technologies.length - 3} plus
                        </span>
                    )}
                </div>

                {/* Détails du projet si disponibles */}
                {project.details && (
                    <div className="mb-4 space-y-2">
                        {project.details.role && (
                            <div className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <div>
                                    <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">Rôle : </span>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">{project.details.role}</span>
                                </div>
                            </div>
                        )}
                        {project.details.type && (
                            <div className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <div>
                                    <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">Type : </span>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">{project.details.type}</span>
                                </div>
                            </div>
                        )}
                        {project.details.period && (
                            <div className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                <div>
                                    <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">Période : </span>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">{project.details.period}</span>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Actions */}
                <div className="flex space-x-3">
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 glass dark:glass-dark rounded-xl px-4 py-2 text-sm font-bold text-center text-gray-700 dark:text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 transition-all duration-300"
                    >
                        Demo
                    </a>
                    {project.githubUrl !== '#' && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 text-sm font-bold text-center text-gray-700 dark:text-gray-300 hover:border-indigo-500 hover:text-indigo-500 transition-all duration-300"
                        >
                            Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
