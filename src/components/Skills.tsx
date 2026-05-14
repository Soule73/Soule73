import Image from 'next/image'
import { AcademicCapIcon } from '@heroicons/react/24/outline'
import { cvData } from '@/data/cvData'
import { createElement } from 'react'

// Les 2 catégories "hero" affichées en grand en haut
const HERO_CATEGORIES = ['Testing & Quality', 'Core Stack']

const Skills = () => {
    const heroCategories = cvData.skills.filter(
        (c) => c.show && HERO_CATEGORIES.includes(c.name)
    )
    const otherCategories = cvData.skills.filter(
        (c) => c.show && !HERO_CATEGORIES.includes(c.name)
    )

    return (
        <section id="skills" className="relative my-4 md:my-8 lg:my-12 particles-bg overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-32 right-20 w-40 h-40 bg-blue-500/10 rounded-full animate-float blur-xl" />
                <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-500/10 animate-morphing-blob blur-xl" />
                <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-indigo-500/10 rounded-3xl animate-pulse-scale delay-300 blur-xl" />
            </div>

            <div className="relative z-10 section-center pt-4 sm:pt-8 md:pt-12 lg:pt-14">

                {/* ── En-tête ───────────────────────────────────────── */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="mb-4 text-3xl md:text-5xl lg:text-6xl font-black gradient-text">Compétences</h2>
                    <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Stack technique orienté{' '}
                        <span className="gradient-text font-semibold">qualité logicielle</span> et{' '}
                        <span className="gradient-text font-semibold">applications SaaS</span>
                    </p>
                </div>

                {/* ── ZONE HAUTE : Core Stack + Testing ─────────────── */}
                <div className="grid md:grid-cols-2 gap-6 mb-6 md:px-4">
                    {heroCategories.map((category, i) => (
                        <div
                            key={category.name}
                            className={`glass dark:glass-dark rounded-3xl p-6 sm:p-8 hover-lift transition-all duration-500 animate-fade-in-up delay-${i * 200}`}
                        >
                            {/* Header catégorie */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                                    {category.icon
                                        ? createElement(category.icon, { className: 'w-6 h-6 text-white' })
                                        : <AcademicCapIcon className="w-6 h-6 text-white" />}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{category.name}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{category.description}</p>
                                </div>
                            </div>

                            {/* Badges skills */}
                            <div className="flex flex-wrap gap-3">
                                {category.skills.filter((s) => s.show).map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group flex items-center gap-2 px-3 py-2 glass dark:glass-dark rounded-xl hover-lift transition-all duration-200 border border-gray-200/40 dark:border-gray-700/40 hover:border-indigo-400/60"
                                    >
                                        <Image
                                            src={skill.badge}
                                            alt={skill.name}
                                            width={skill.width}
                                            height={skill.height}
                                            unoptimized
                                            className="h-6 w-auto rounded group-hover:scale-105 transition-transform duration-200"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── ZONE BASSE : autres catégories en liste compacte ── */}
                <div className="glass dark:glass-dark rounded-3xl p-6 sm:p-8 mb-6 md:mx-4">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">Autres technologies</h3>
                    <div className="space-y-5">
                        {otherCategories.map((category) => (
                            <div key={category.name} className="flex flex-col sm:flex-row sm:items-center gap-3">
                                {/* Nom catégorie */}
                                <div className="flex items-center gap-2 sm:w-52 flex-shrink-0">
                                    <div className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                        {category.icon
                                            ? createElement(category.icon, { className: 'size-5 text-indigo-500' })
                                            : <AcademicCapIcon className="size-5 text-indigo-500" />}
                                    </div>
                                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 whitespace-nowrap">{category.name}</span>
                                </div>
                                {/* Séparateur vertical visible desktop */}
                                <div className="hidden sm:block w-px h-6 bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
                                {/* Badges */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.filter((s) => s.show).map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center px-2 py-1 rounded-lg bg-gray-100/80 dark:bg-gray-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-200"
                                        >
                                            <Image
                                                src={skill.badge}
                                                alt={skill.name}
                                                width={skill.width}
                                                height={skill.height}
                                                unoptimized
                                                className="h-6 w-auto rounded"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Compétences additionnelles ─────────────────────── */}
                <div className="mb-6 md:px-4">
                    <div className="text-center mb-6">
                        <h3 className="text-xl md:text-2xl font-bold gradient-text mb-1">Autres compétences</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Méthodologies et outils complémentaires</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {cvData.additionalSkills.filter((s) => s.show).map((skill, index) => (
                            <div
                                key={index}
                                className="group glass dark:glass-dark rounded-xl px-4 py-2.5 hover-lift transition-all duration-300 cursor-default"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-indigo-500">
                                        {createElement(skill.icon, { className: 'w-4 h-4' })}
                                    </span>
                                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200">
                                        {skill.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Bannière apprentissage ─────────────────────────── */}
                <div className="relative glass dark:glass-dark rounded-3xl p-8 overflow-hidden max-w-4xl mx-auto md:mx-4 lg:mx-auto">
                    <div className="absolute inset-0 gradient-animated opacity-15 rounded-3xl" />
                    <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                        <div className="w-14 h-14 flex-shrink-0 glass dark:glass-dark rounded-2xl flex items-center justify-center">
                            <AcademicCapIcon className="w-7 h-7 text-indigo-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black gradient-text mb-1">Toujours en apprentissage</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                La technologie évolue rapidement - je reste à jour avec les{' '}
                                <span className="gradient-text font-semibold">dernières tendances</span> et{' '}
                                <span className="gradient-text font-semibold">meilleures pratiques</span> du développement.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills
