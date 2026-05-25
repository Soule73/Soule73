'use client'

import { useEffect, useState } from 'react'
import { CodeBracketIcon, StarIcon, BookOpenIcon, UsersIcon } from '@heroicons/react/24/outline'
import profileImage from '@/assets/sds.png'
import Image from 'next/image'

interface GitHubStats {
    repos: number
    stars: number
    followers: number
    topLanguages: string[]
}

const LANG_COLORS: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f7df1e',
    Dart: '#00b4ab',
    Python: '#3572A5',
    Java: '#b07219',
    PHP: '#4F5D95',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Go: '#00ADD8',
    Rust: '#dea584',
    Kotlin: '#A97BFF',
    Swift: '#F05138',
}

const FALLBACK_LANGS = ['TypeScript', 'Dart', 'JavaScript', 'PHP', 'Java']

const GitHubSection = () => {
    const [stats, setStats] = useState<GitHubStats | null>(null)

    useEffect(() => {
        fetch('/api/github-stats')
            .then(r => r.ok ? r.json() : null)
            .then(data => setStats(data))
            .catch(() => null)
    }, []) // tableau vide = une seule exécution au montage

    return (
        <div className="my-4 md:my-8 lg:my-12 px-4">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-black gradient-text mb-6 flex items-center justify-center space-x-4">
                    <CodeBracketIcon className="w-10 h-10" />
                    <span>Plus de projets sur GitHub</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Découvrez l&apos;ensemble de mes contributions et projets open source
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="group relative glass dark:glass-dark rounded-3xl p-8 hover-lift transition-all duration-500 overflow-hidden">
                    {/* Arrière-plan animé */}
                    <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-purple-900 to-violet-900 opacity-20 rounded-3xl"></div>

                    <div className="relative z-10 text-center space-y-6">
                        {/* Avatar GitHub */}
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                                    <Image
                                        src={profileImage}
                                        alt="Soule Soumare GitHub"
                                        width={96}
                                        height={96}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-2xl font-black text-gray-800 dark:text-gray-200 mb-2">
                                @Soule73
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Explorez mes repositories
                            </p>
                        </div>

                        {/* Statistiques GitHub */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="text-center">
                                <div className="text-2xl font-black gradient-text mb-1">
                                    {stats ? `${stats.repos}` : '50+'}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
                                    <BookOpenIcon className="w-3.5 h-3.5" />
                                    Repositories
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-black gradient-text mb-1">
                                    {stats ? `${stats.stars}` : '-'}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
                                    <StarIcon className="w-3.5 h-3.5" />
                                    Stars
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-black gradient-text mb-1">
                                    {stats ? `${stats.followers}` : '-'}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
                                    <UsersIcon className="w-3.5 h-3.5" />
                                    Followers
                                </div>
                            </div>
                        </div>

                        {/* Bouton GitHub */}
                        <a
                            href="https://github.com/Soule73"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center space-x-3 glass dark:glass-dark rounded-2xl px-8 py-4 font-bold text-lg overflow-hidden hover-lift transition-all duration-300 relative before:absolute before:inset-0 before:bg-linear-to-r before:from-gray-800 before:to-gray-900 before:scale-x-0 group-hover:before:scale-x-100 before:transition-transform before:duration-500 before:origin-left before:rounded-2xl"
                        >
                            <div className="relative z-10 flex items-center space-x-3 text-gray-700 dark:text-gray-200 group-hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span>Profil GitHub</span>
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        </a>

                        {/* GitHub Stats Cards */}
                        <div className="grid md:grid-cols-2 gap-4 mt-8">
                            {/* Top Languages */}
                            <div className="glass dark:glass-dark rounded-xl p-5 text-left">
                                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                                    Top Languages
                                </div>
                                <div className="space-y-2">
                                    {(stats?.topLanguages ?? FALLBACK_LANGS).map((lang) => (
                                        <div key={lang} className="flex items-center gap-3">
                                            <div
                                                className="w-3 h-3 rounded-full flex-shrink-0"
                                                style={{ background: LANG_COLORS[lang] ?? '#6b7280' }}
                                            />
                                            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{lang}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Activité récente */}
                            <div className="glass dark:glass-dark rounded-xl p-5 text-left flex flex-col justify-between">
                                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                                    Contributions récentes
                                </div>
                                {/* Grille de contribution stylisée -valeurs fixes pour éviter l'erreur d'hydratation */}
                                <div className="grid grid-cols-12 gap-1 my-2">
                                    {[0.1, 0.3, 0.6, 1, 0.1, 0.6, 0.3, 0.1, 1, 0.3, 0.1, 1,
                                        0.6, 0.1, 0.3, 0.6, 0.1, 1, 0.3, 0.6, 0.1, 0.3, 1, 0.1,
                                        0.3, 0.1, 0.6, 0.1, 1, 0.6, 0.1, 0.3, 0.1, 0.3, 0.1, 1,
                                        0.6, 1, 0.1, 0.3, 0.6, 1, 0.1, 0.3, 0.1, 0.3, 0.1, 1
                                    ].map((opacity, i) => (
                                        <div
                                            key={i}
                                            className="h-3 rounded-sm bg-indigo-500"
                                            style={{ opacity }}
                                        />
                                    ))}
                                </div>
                                <a
                                    href="https://github.com/Soule73"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-indigo-500 dark:text-indigo-400 hover:underline mt-2"
                                >
                                    Voir l'activité complète
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default GitHubSection
