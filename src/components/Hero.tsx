import { useState, useEffect, useRef } from 'react'
import ProfileAvatar from './ProfileAvatar'
import {
    RocketLaunchIcon,
    EnvelopeIcon,
    ArrowDownIcon,
    CodeBracketIcon,
    SparklesIcon,
    HandRaisedIcon
} from '@heroicons/react/24/outline'

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const heroRef = useRef<HTMLElement>(null)

    const titles = [
        'Développeur Full Stack',
        'Créateur d\'Expériences',
        'Passionné de Code',
        'Innovation & Design'
    ]

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
    }, [currentIndex])

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/soule73',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/soule73',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/soule73',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            )
        },
    ]

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
                                Salut ! Moi c'est
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
                            <div className="absolute -inset-1 gradient-animated rounded-full blur opacity-60 group-hover:opacity-80 transition duration-1000"></div>
                            <div className="relative w-48 h-48 lg:w-56 lg:h-56 glass dark:glass-dark rounded-full p-3 hover-lift">
                                <ProfileAvatar
                                    size={200}
                                    className="w-full h-full"
                                    priority={true}
                                />
                                {/* Indicateur de statut */}
                                <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-green-400 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-lg animate-pulse-scale">
                                    <SparklesIcon className="w-7 h-7 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Typewriter Effect */}
                    <div className="animate-fade-in-up delay-500">
                        <div className=" px-8 inline-flex items-center space-x-3">
                            <CodeBracketIcon className="w-6 h-6 text-indigo-500" />
                            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-200">
                                {displayedText}
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
