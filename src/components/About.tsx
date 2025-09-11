import {
    RocketLaunchIcon,
    HandRaisedIcon,
    ComputerDesktopIcon,
    DevicePhoneMobileIcon,
    CodeBracketIcon,
    SparklesIcon
} from '@heroicons/react/24/outline'
import { qualities, stats } from './abouts/qualities'

const About = () => {

    return (
        <section id="about" className=" my-4 md:my-8 lg:my-12 relative particles-bg overflow-hidden">

            {/* Éléments décoratifs */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-float blur-xl"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-xl animate-float delay-200 blur-xl"></div>
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-pink-500/10 animate-morphing-blob blur-xl"></div>
                <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-indigo-500/10 rounded-full animate-pulse-scale delay-500 blur-xl"></div>
            </div>

            <div className="relative z-30 section-center pt-4 sm:pt-8 md:pt-12 lg:pt-14">
                {/* En-tête */}
                <div className="text-center mb-4 md:mb-6 lg:mb-8 ">
                    <h2 className=" mb-4 text-3xl md:text-5xl lg:text-6xl font-black gradient-text">À propos</h2>
                    <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Découvrez mon parcours, mes <span className="gradient-text font-semibold">passions</span> et
                        ce qui m&apos;inspire dans le <span className="gradient-text font-semibold">développement Full Stack</span>
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-center mb-4 md:mb-8 lg:mb-12 md:px-4">
                    {/* Section visuelle */}
                    <AboutCard />

                    {/* Contenu textuel */}
                    <AboutContent />
                </div>

                {/* Section qualités */}
                <Qualities />

                {/* Statistiques */}
                <Stats />
            </div>
        </section>
    )
}

const Stats = () => (
    <div className="glass dark:glass-dark rounded-3xl p-8 lg:p-12 md:mx-4 lg:mx-0">
        <div className="text-center mb-12">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-black  gradient-text mb-6">Quelques chiffres</h3>
            <p className="text-gray-600 dark:text-gray-300">Aperçu de mon parcours en développement</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className={`text-center group  animate-fade-in-up delay-${index * 200}`}
                >
                    <div className="relative mb-4 hover-lift">
                        <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                        <div className="relative glass dark:glass-dark rounded-2xl p-4 hover-glow">
                            <div className="mb-2 flex justify-center">{stat.icon}</div>
                            <div className="text-4xl lg:text-5xl font-bold group-hover:animate-pulse-scale">
                                {stat.value}
                            </div>
                        </div>
                    </div>
                    <div className="font-semibold text-gray-600 dark:text-gray-300">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Qualities = () => (
    <div className="mb-4 md:mb-8 lg:mb-12 md:px-4">
        <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black gradient-text mb-6">Ce qui me définit</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Les valeurs qui guident mon approche du développement</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {qualities.map((quality, index) => (
                <div
                    key={index}
                    className={`glass dark:glass-dark rounded-2xl p-6 hover-lift hover-glow transition-all duration-300 animate-fade-in-up delay-${index * 100}`}
                >
                    <div className="mb-4 animate-pulse-scale">{quality.icon}</div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">{quality.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{quality.description}</p>
                </div>
            ))}
        </div>
    </div>
);

const AboutContent = () => (
    <div className="space-y-10">
        <div>
            <h3 className=" text-2xl md:text-4xl lg:text-5xl font-black text-gray-800 dark:text-gray-200 mb-6 text-center md:text-start leading-tight">
                Développeur <span className="gradient-text">Full Stack</span> & créatif
            </h3>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p className="flex items-start space-x-3">
                    <RocketLaunchIcon className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                        <strong>Développeur Full Stack</strong> passionné, je transforme des idées créatives
                        en expériences numériques exceptionnelles. Ma mission est de créer des
                        <span className="gradient-text font-semibold"> solutions innovantes</span> qui marquent la différence.
                    </span>
                </p>
                <p className="flex items-start space-x-3">
                    <CodeBracketIcon className="w-6 h-6 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span>
                        Spécialisé dans le <span className="gradient-text font-semibold">développement Full Stack web et mobile
                        </span> . Je conçois des<span className="gradient-text font-semibold"> applications robustes</span> de bout en bout avec une attention particulière à l&apos;UX.
                    </span>
                </p>
                <p className="flex items-start space-x-3">
                    <SparklesIcon className="w-6 h-6 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>
                        Animé par l&apos;<span className="gradient-text font-semibold">innovation technologique</span>,
                        j&apos;adopte une approche pragmatique pour délivrer des
                        <span className="gradient-text font-semibold"> solutions performantes</span> qui répondent aux besoins métier.
                    </span>
                </p>
            </div>
        </div>

        {/* Bouton CTA */}
        <div className=' flex justify-center md:justify-start'>
            <a
                href="#contact"
                className="group inline-flex items-center space-x-1 glass dark:glass-dark rounded-2xl px-8 py-4 font-bold text-lg hover-lift hover-glow transition-all duration-300 relative overflow-hidden"
            >
                <div className="relative z-10 flex items-center space-x-1 text-gray-700 dark:text-gray-200 group-hover:text-white">
                    <HandRaisedIcon className="w-6 h-6 group-hover:animate-bounce" />
                    <span className=' text-xs md:text-lg'>Collaborons ensemble</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
        </div>
    </div>
);

const AboutCard = () => (<div className="relative">
    {/* Card principale */}
    <div className="glass dark:glass-dark rounded-3xl p-8 hover-lift relative overflow-hidden">
        {/* Gradient animé en arrière-plan */}
        <div className="absolute inset-0 gradient-animated opacity-20 rounded-3xl"></div>

        <div className="relative z-10 text-center space-y-8">
            {/* Avatar codé */}
            <div className="relative mx-auto w-48 h-48 lg:w-56 lg:h-56">
                <div className="absolute inset-0 gradient-animated rounded-3xl rotate-6 animate-rotate-slow"></div>
                <div className="relative w-full h-full glass dark:glass-dark rounded-3xl flex items-center justify-center">
                    <div className="flex -space-x-14">
                        <ComputerDesktopIcon className="w-20 h-20 lg:w-24 lg:h-24 stroke-blue-500 fill-white" />
                        <DevicePhoneMobileIcon className="w-20 h-10 lg:w-24 lg:h-14 stroke-purple-500 fill-white " />
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-lg md:text-2xl lg:text-3xl text-center md:text-start font-bold gradient-text mb-2">Full Stack Developer</h3>
                <p className="text-gray-600 dark:text-gray-300">Web & Mobile, Passionné de technologie</p>
            </div>
        </div>

        {/* Éléments flottants */}
        <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400/20 rounded-2xl animate-float blur-sm"></div>
        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-400/20 rounded-full animate-bounce blur-sm"></div>
        <div className="absolute top-1/3 -left-8 w-12 h-12 bg-blue-400/20 rounded-xl animate-pulse-scale delay-300 blur-sm"></div>
    </div>
</div>);

export default About
