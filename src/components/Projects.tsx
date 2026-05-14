'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { projects } from './projects/projectsData'
import GitHubSection from './projects/GitHubSection'
import {
    ChevronDownIcon,
    ArrowTopRightOnSquareIcon,
    CheckCircleIcon,
} from '@heroicons/react/24/outline'
import type { Project } from './projects/types'

const ProjectRow: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const [open, setOpen] = useState(false)

    const achievements = project.details?.achievements ?? project.details?.features ?? []

    return (
        <div className={`glass dark:glass-dark rounded-2xl overflow-hidden transition-all duration-300 hover-lift animate-fade-in-up delay-${index * 100}`}>
            {/* ── Row compact (toujours visible) ── */}
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full flex items-center gap-4 p-4 sm:p-5 text-left group"
                aria-expanded={open}
            >
                {/* Thumbnail */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800">
                    {project.image && (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="64px"
                        />
                    )}
                </div>

                {/* Infos principales */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-gray-800 dark:text-gray-100 text-sm sm:text-base leading-tight truncate">
                            {project.title}
                        </h3>
                        {project.status === 'En ligne' && (
                            <span className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                Live
                            </span>
                        )}
                    </div>
                    {/* Tech stack compact */}
                    <div className="flex flex-wrap gap-1 mt-1.5">
                        {project.technologies.slice(0, 4).map(tech => (
                            <span key={tech} className="px-1.5 py-0.5 rounded text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 4 && (
                            <span className="px-1.5 py-0.5 rounded text-xs text-gray-400">
                                +{project.technologies.length - 4}
                            </span>
                        )}
                    </div>
                </div>

                {/* Chevron */}
                <ChevronDownIcon
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                />
            </button>

            {/* ── Détails expandables ── */}
            <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-gray-200/40 dark:border-gray-700/40">
                        <div className="flex flex-col md:flex-row gap-5 mt-4">
                            {/* Image grande */}
                            <div className="relative w-full md:w-56 h-36 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-800">
                                {project.image && (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        sizes="224px"
                                    />
                                )}
                            </div>

                            {/* Contenu */}
                            <div className="flex-1 space-y-3">
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Achievements */}
                                {achievements.length > 0 && (
                                    <ul className="space-y-1">
                                        {achievements.map((a, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                                <CheckCircleIcon className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                                                {a}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Crédentials si présents */}
                                {project.credentials && (
                                    <div className="inline-flex items-center gap-3 px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-xs font-mono text-gray-500 dark:text-gray-400">
                                        <span>Demo: <strong>{project.credentials.email}</strong></span>
                                        <span>/ <strong>{project.credentials.password}</strong></span>
                                    </div>
                                )}

                                {/* Liens */}
                                {project.urls && (
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {project.urls.map(url => (
                                            <a
                                                key={url.name}
                                                href={url.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 hover-lift ${url.type === 'primary'
                                                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm shadow-indigo-500/30'
                                                    : 'glass dark:glass-dark text-gray-700 dark:text-gray-200 border border-gray-200/60 dark:border-gray-700/60'
                                                    }`}
                                            >
                                                {url.name}
                                                <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Projects: React.FC = () => {
    return (
        <section id="projects" className="relative my-4 md:my-8 lg:my-12 particles-bg overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-16 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-32 left-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-float delay-500" />
            </div>

            <div className="relative z-10 section-center pt-4 sm:pt-8 md:pt-12 lg:pt-14">

                {/* En-tête */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="mb-4 text-3xl md:text-5xl lg:text-6xl font-black gradient-text">Projets</h2>
                    <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Réalisations <span className="gradient-text font-semibold">personnelles</span> et{' '}
                        <span className="gradient-text font-semibold">freelance</span> - cliquez pour les détails
                    </p>
                </div>

                {/* Liste projets */}
                <div className="space-y-3 mb-10 md:px-4">
                    {projects.map((project, index) => (
                        <ProjectRow key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Section GitHub */}
                <GitHubSection />
            </div>
        </section>
    )
}

export default Projects
