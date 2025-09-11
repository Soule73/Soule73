import { LightBulbIcon, RocketLaunchIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const CallToAction = () => {
    return (
        <div className="text-center px-4">
            <div className="relative glass dark:glass-dark rounded-3xl p-8 lg:p-12 overflow-hidden max-w-4xl mx-auto">
                {/* Arrière-plan animé */}
                <div className="absolute inset-0 gradient-animated opacity-20 rounded-3xl"></div>

                <div className="relative z-10 space-y-8">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 glass dark:glass-dark rounded-2xl flex items-center justify-center animate-pulse-scale">
                            <LightBulbIcon className="w-10 h-10 text-yellow-500 dark:text-yellow-400" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-3xl lg:text-4xl font-black gradient-text mb-4">
                            Une idée de projet ?
                        </h3>
                        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Transformons ensemble votre <span className="gradient-text font-semibold">vision</span> en
                            <span className="gradient-text font-semibold"> réalité numérique</span>.
                            Discutons de votre projet !
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <a
                            href="#contact"
                            className="group relative glass dark:glass-dark rounded-2xl px-8 py-4 font-bold text-lg overflow-hidden hover-lift hover-glow transition-all duration-300"
                        >
                            <div className="relative z-10 flex items-center space-x-3 text-gray-700 dark:text-gray-200 group-hover:text-white">
                                <RocketLaunchIcon className="w-6 h-6 group-hover:animate-bounce" />
                                <span>Démarrer un projet</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </a>

                        <a
                            href="mailto:soule73@example.com"
                            className="group flex items-center space-x-3 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl font-bold text-lg text-gray-700 dark:text-gray-200 hover-lift transition-all duration-300 hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400"
                        >
                            <EnvelopeIcon className="w-6 h-6 group-hover:animate-bounce" />
                            <span>Envoyer un email</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
