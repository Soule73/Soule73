import type { Category } from './types'

interface ProjectFiltersProps {
    categories: Category[]
    selectedCategory: string
    onCategoryChange: (category: string) => void
}

const ProjectFilters = ({ categories, selectedCategory, onCategoryChange }: ProjectFiltersProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
            {categories.map((category) => (
                <button
                    key={category.name}
                    onClick={() => onCategoryChange(category.name)}
                    className={`group relative glass dark:glass-dark rounded-2xl px-6 py-3 font-bold transition-all duration-300 hover-lift ${selectedCategory === category.name
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                            : 'text-gray-700 dark:text-gray-200 hover-glow'
                        }`}
                >
                    <div className="flex items-center space-x-3">
                        <span className="group-hover:animate-bounce">{category.icon}</span>
                        <span>{category.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${selectedCategory === category.name
                                ? 'bg-white/20 text-white'
                                : 'bg-gray-200/50 dark:bg-gray-700/50'
                            }`}>
                            {category.count}
                        </span>
                    </div>
                </button>
            ))}
        </div>
    )
}

export default ProjectFilters
