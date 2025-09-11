import Image from 'next/image'
import {
    AcademicCapIcon
} from '@heroicons/react/24/outline'
import { additionalSkills, skillCategories } from './skills/skills'

const Skills = () => {

    return (
        <section id="skills" className="relative my-4 md:my-8 lg:my-12 particles-bg overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0">
                <div className="absolute top-32 right-20 w-40 h-40 bg-blue-500/10 rounded-full animate-float blur-xl"></div>
                <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-500/10 animate-morphing-blob blur-xl"></div>
                <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-pink-500/10 rounded-3xl animate-pulse-scale delay-300 blur-xl"></div>
            </div>

            <div className="relative z-10 section-center  pt-4 sm:pt-8 md:pt-12 lg:pt-14">
                {/* En-tête */}
                <div className="text-center mb-4 md:mb-8 lg:mb-12">
                    <h2 className="mb-4 text-3xl md:text-5xl lg:text-6xl font-black gradient-text">Compétences</h2>
                    <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        <span className="gradient-text font-semibold">Technologies</span> et outils que je maîtrise pour créer des
                        <span className="gradient-text font-semibold"> solutions innovantes</span>
                    </p>
                </div>

                {/* Catégories de compétences */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-4 md:-8 lg:mb-12 md:px-4">
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
                                                <Image
                                                    src={skill.badge}
                                                    alt={skill.name}
                                                    width={skill.width}
                                                    height={skill.height}
                                                    unoptimized
                                                    className="group-hover:scale-105 transition-transform rounded duration-200"
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
                <div className="my-4 md:my-8 lg:my-12 px-4">
                    <div className="text-center my-2 md:my-4 lg:my-6">
                        <h3 className=" text-2xl md:text-4xl lg:text-5xl gradient-text font-black gradient-text mb-6">
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
                <div className="text-center md:px-4">
                    <div className="relative glass dark:glass-dark rounded-3xl p-8 lg:p-12  overflow-hidden max-w-4xl mx-auto my-4 md:my-8 lg:my-12 ">
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
                                La technologie évolue rapidement, et je m&apos;efforce de rester à jour avec les
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
