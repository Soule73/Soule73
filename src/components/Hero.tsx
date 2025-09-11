import { useState, useEffect, useRef, useMemo } from 'react'
import ProfileAvatar from './ProfileAvatar'
import {
    RocketLaunchIcon,
    EnvelopeIcon,
    ArrowDownIcon,
    CodeBracketIcon,
    SparklesIcon,
    HandRaisedIcon
} from '@heroicons/react/24/outline'
import { socialLinks } from './contacts/solialLinks'

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const heroRef = useRef<HTMLElement>(null)

    const titles = useMemo(() => [
        "Développeur Full Stack",
        "Créateur d'Expériences",
        "Passionné de Code",
        "Innovation & Design"
    ], [])

    useEffect(() => {
        setIsVisible(true)
    }, [])

    useEffect(() => {
        const currentTitle = titles[currentIndex]
        let index = 0

        const typeWriter = () => {
            if (index < currentTitle.length) {
                setDisplayedText(currentTitle.slice(0, index + 1))
                index++
                setTimeout(typeWriter, 80)
            } else {
                setTimeout(() => {
                    setDisplayedText('')
                    setCurrentIndex((prev) => (prev + 1) % titles.length)
                }, 3000)
            }
        }

        const timeout = setTimeout(typeWriter, 500)
        return () => clearTimeout(timeout)
    }, [currentIndex, titles])

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            ref={heroRef}
            id="home"
            className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden particles-bg transition-all duration-1000 pt-20 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            {/* Background dynamique */}
            <div className="absolute inset-0 gradient-animated opacity-20"></div>

            {/* Formes géométriques flottantes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-float"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-xl animate-float delay-200 animate-rotate-slow"></div>
                <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-pink-500/20 animate-morphing-blob"></div>
                <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-indigo-500/20 rounded-full animate-pulse-scale delay-500"></div>
                <div className="absolute bottom-20 right-10 w-14 h-14 bg-cyan-500/20 rounded-lg animate-float delay-700"></div>
            </div>

            {/* Grille de points en arrière-plan */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:20px_20px] opacity-50"></div>

            <div className="relative z-10 section-center">
                <div className="text-center space-y-3 px-4">
                    {/* Salutation avec icône */}
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center space-x-3">
                            <HandRaisedIcon className="w-6 h-6 text-yellow-500" />
                            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 font-medium">
                                Salut ! Moi c&apos;est
                            </p>
                        </div>
                    </div>

                    {/* Nom principal */}
                    <div className="animate-fade-in-up delay-200  ">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight mb-8 flex flex-wrap justify-center space-x-2">
                            <span className="hero-gradient-text">Soulé</span>
                            {/* <br /> */}
                            <span className="text-gray-800 dark:text-gray-200">Soumaré</span>
                        </h1>
                    </div>

                    {/* Avatar repositionné */}
                    <div className="flex justify-center animate-scale-in delay-300">
                        <div className="relative group">
                            <div className="absolute -inset-2 sm:-inset-1 gradient-animated rounded-full blur opacity-60 group-hover:opacity-80 transition duration-1000"></div>
                            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 glass dark:glass-dark rounded-full p-2 sm:p-3 hover-lift">
                                <ProfileAvatar
                                    size={160}
                                    className="w-full h-full"
                                    priority={true}
                                />
                                {/* Indicateur de statut */}
                                <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-10 h-10 sm:w-14 sm:h-14 bg-green-400 rounded-full flex items-center justify-center border-2 sm:border-4 border-white dark:border-gray-800 shadow-lg animate-pulse-scale">
                                    <SparklesIcon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Typewriter Effect */}
                    <div className="animate-fade-in-up delay-500">
                        <div className=" px-8 inline-flex items-center space-x-1">
                            <CodeBracketIcon className="w-6 h-6 text-indigo-500" />
                            <p className=" text-base sm:text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-200"
                            >
                                <span
                                    dangerouslySetInnerHTML={{ __html: displayedText }}
                                >
                                </span>
                                <span className="animate-pulse text-indigo-500 ml-1">|</span>
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="animate-fade-in-up delay-700 max-w-4xl mx-auto">
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            Développeur <span className="gradient-text font-semibold">Full Stack</span>,
                            je transforme des idées créatives en <span className="gradient-text font-semibold">expériences numériques</span> exceptionnelles.
                        </p>
                    </div>

                    {/* Boutons d'action */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-1000">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="group relative px-8 py-4 glass dark:glass-dark rounded-2xl font-bold text-base lg:text-lg overflow-hidden hover-lift hover-glow transition-all duration-300 w-full sm:w-auto"
                        >
                            <div className="relative z-10 flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-200 group-hover:text-white">
                                <RocketLaunchIcon className="w-5 h-5" />
                                <span>Découvrir mes projets</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </button>

                        <button
                            onClick={() => scrollToSection('contact')}
                            className="group relative px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-2xl font-bold text-base lg:text-lg text-gray-700 dark:text-gray-200 hover-lift transition-all duration-300 hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 w-full sm:w-auto"
                        >
                            <span className="flex items-center justify-center space-x-3">
                                <EnvelopeIcon className="w-5 h-5" />
                                <span>Me contacter</span>
                            </span>
                        </button>
                    </div>

                    {/* Liens sociaux */}
                    <div className="flex justify-center space-x-4 sm:space-x-6 animate-fade-in-up delay-1000">
                        {socialLinks.map((social, index) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-12 h-12 sm:w-14 sm:h-14 glass dark:glass-dark rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover-lift hover-glow transition-all duration-300 animate-scale-in delay-${1200 + index * 100}`}
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Scroll Indicator */}
                    <div className="pt-4 left-0 bottom-0.5 absolute animate-fade-in-up delay-1000">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="w-12 h-12 glass dark:glass-dark rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover-lift animate-bounce group mx-auto"
                        >
                            <ArrowDownIcon className="w-6 h-6 group-hover:text-indigo-500 transition-colors duration-300" />
                        </button>
                        {/* <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Défiler vers le bas</p> */}
                    </div>
                </div>
            </div>
            {/* SVG Wave Separator - positioned above the section */}
            <div className='absolute bottom-0 left-0 right-0'>
                <svg
                    className="block w-full h-12 sm:h-16 md:h-20 lg:h-24"
                    data-name="Wave Separator"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,90.7C672,75,768,53,864,58.7C960,64,1056,96,1152,106.7C1200,117,1248,107,1296,96L1344,85L1344,120L1296,120C1248,120,1152,120,1056,120C960,120,864,120,768,120C672,120,576,120,480,120C384,120,288,120,192,120C96,120,48,120,24,120L0,120Z"
                        className="fill-gray-100 dark:fill-gray-900"
                    />
                </svg>
            </div>
        </section>
    )
}

export default Hero
