import React, { useState } from 'react'
import { projects, getCategories } from './projects/projectsData'
import ProjectFilters from './projects/ProjectFilters'
import FeaturedProject from './projects/FeaturedProject'
import GitHubSection from './projects/GitHubSection'
import CallToAction from './projects/CallToAction'

const Projects: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Tous')

    const categories = getCategories(projects)

    const filteredProjects = selectedCategory === 'Tous'
        ? projects
        : projects.filter(project => project.category === selectedCategory)
    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen
        
        ">
            <div className="container mx-auto px-6 max-w-6xl ">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        Mes Projets
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Découvrez une sélection de mes réalisations professionnelles et projets personnels
                    </p>
                </div>

                {/* Filtres par catégorie */}
                <ProjectFilters
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />

                {/* Projets en vedette */}
                {filteredProjects.length > 0 && (
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                            🌟 Projets en vedette
                        </h3>
                        <div className={`grid gap-6 grid-cols-1 md:grid-cols-2 
                        place-items-center
                            }`}>
                            {filteredProjects.map((project, index) => {
                                const isLast = index === filteredProjects.length - 1
                                const colSpan = isLast && filteredProjects.length % 2 === 1 ? 'md:col-span-2' : ''
                                return <FeaturedProject
                                    className={colSpan}
                                    key={project.id} project={project} />
                            })}
                        </div>
                    </div>
                )}
                {/* Section GitHub */}
                <GitHubSection />

                {/* Call to Action */}
                <CallToAction />
            </div>
        </section>
    )
}

export default Projects
