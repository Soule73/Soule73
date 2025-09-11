import { CodeBracketIcon } from '@heroicons/react/24/outline'

import Image from 'next/image'

const GitHubSection = () => {
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
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 opacity-20 rounded-3xl"></div>

                    <div className="relative z-10 text-center space-y-6">
                        {/* Avatar GitHub */}
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                                    <Image
                                        src="https://github.com/Soule73.png"
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
                                <div className="text-2xl font-black gradient-text mb-1">50+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Repositories</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-black gradient-text mb-1">200+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Commits</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-black gradient-text mb-1">5+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Languages</div>
                            </div>
                        </div>

                        {/* Bouton GitHub */}
                        <a
                            href="https://github.com/Soule73"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center space-x-3 glass dark:glass-dark rounded-2xl px-8 py-4 font-bold text-lg overflow-hidden hover-lift transition-all duration-300 relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-gray-800 before:to-gray-900 before:scale-x-0 group-hover:before:scale-x-100 before:transition-transform before:duration-500 before:origin-left before:rounded-2xl"
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
                            <div className="glass dark:glass-dark rounded-xl p-4">
                                <Image
                                    src="https://github-readme-stats.vercel.app/api?username=Soule73&show_icons=true&theme=transparent&hide_border=true&text_color=6B7280&icon_color=8B5CF6&title_color=3B82F6"
                                    alt="GitHub Stats"
                                    width={500}
                                    height={200}
                                    unoptimized
                                    className="w-full"
                                />
                            </div>
                            <div className="glass dark:glass-dark rounded-xl p-4">
                                <Image
                                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=Soule73&layout=compact&theme=transparent&hide_border=true&text_color=6B7280&title_color=3B82F6"
                                    alt="Top Languages"
                                    width={500}
                                    height={200}
                                    unoptimized
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GitHubSection
