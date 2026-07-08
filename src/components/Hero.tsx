import { useState, useEffect, useRef } from 'react'
import ProfileAvatar from './ProfileAvatar'
import {
    RocketLaunchIcon,
    EnvelopeIcon,
    ArrowDownIcon,
} from '@heroicons/react/24/outline'
import { socialLinks } from './contacts/solialLinks'

const TERMINAL_LINES = [
    { type: 'prompt', text: 'const engineer = {' },
    { type: 'key', label: '  name', value: '"Soulé Soumaré"' },
    { type: 'key', label: '  role', value: '"Frontend / Full Stack Engineer"' },
    { type: 'key', label: '  stack', value: '["React", "TypeScript", "NestJS"]' },
    { type: 'key', label: '  testing', value: '["Playwright", "Vitest", "RTL"]' },
    { type: 'key', label: '  company', value: '"Opensee (Fintech SaaS)"' },
    { type: 'key', label: '  contract', value: '"Frontend Engineer"' },
    { type: 'key', label: '  location', value: '"Paris, France 🇫🇷"' },
    { type: 'close', text: '}' },
]

const Hero = () => {
    const [visibleLines, setVisibleLines] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const heroRef = useRef<HTMLElement>(null)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    // Reveal terminal lines one by one
    useEffect(() => {
        if (!isVisible) return
        if (visibleLines >= TERMINAL_LINES.length) return
        const t = setTimeout(() => setVisibleLines(v => v + 1), visibleLines === 0 ? 600 : 180)
        return () => clearTimeout(t)
    }, [isVisible, visibleLines])

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            ref={heroRef}
            id="home"
            className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden particles-bg transition-opacity duration-700 pt-20 pb-28 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            {/* Background */}
            <div className="absolute inset-0 gradient-animated opacity-15 pointer-events-none" />
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-24 left-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-32 right-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float delay-700" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.08)_1px,transparent_0)] bg-[size:28px_28px] pointer-events-none" />

            {/* Split layout */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 pt-10 lg:pt-0">

                    {/* ── LEFT COLUMN ─────────────────────────────────────── */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">

                        {/* Badge disponibilité */}
                        <div className="animate-fade-in-up">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                                Frontend Engineer @ Opensee
                            </span>
                        </div>

                        {/* Nom */}
                        <div className="animate-fade-in-up delay-200">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                                <span className="hero-gradient-text">Soulé</span>
                                <br />
                                <span className="text-gray-800 dark:text-gray-100">Soumaré</span>
                            </h1>
                            <p className="mt-3 text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-medium tracking-wide">
                                Frontend / Full Stack Engineer
                            </p>
                        </div>

                        {/* Terminal card */}
                        <div className="animate-fade-in-up delay-500 w-full max-w-lg">
                            <div className="glass dark:glass-dark rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60 shadow-xl">
                                {/* Barre titre terminal */}
                                <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-100/80 dark:bg-gray-800/80 border-b border-gray-200/60 dark:border-gray-700/60">
                                    <span className="w-3 h-3 rounded-full bg-red-400" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <span className="w-3 h-3 rounded-full bg-green-400" />
                                    <span className="ml-3 text-xs text-gray-400 dark:text-gray-500 font-mono">engineer.ts</span>
                                </div>
                                {/* Contenu */}
                                <div className="p-5 font-mono text-sm leading-7 min-h-[200px]">
                                    {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
                                        <div key={i} className="animate-fade-in-up">
                                            {line.type === 'prompt' || line.type === 'close' ? (
                                                <span className="text-gray-500 dark:text-gray-400">{line.text}</span>
                                            ) : (
                                                <span>
                                                    <span className="text-indigo-500 dark:text-indigo-400">{line.label}</span>
                                                    <span className="text-gray-500 dark:text-gray-400">: </span>
                                                    <span className="text-emerald-600 dark:text-emerald-400">{line.value}</span>
                                                    <span className="text-gray-400">,</span>
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                    {visibleLines < TERMINAL_LINES.length && (
                                        <span className="inline-block w-2 h-4 bg-indigo-500 animate-pulse ml-0.5 align-middle" />
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-700 w-full max-w-lg">
                            <button
                                onClick={() => scrollToSection('experience')}
                                className="group relative flex-1 px-6 py-3.5 rounded-2xl font-bold text-sm overflow-hidden hover-lift transition-all duration-300 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <RocketLaunchIcon className="w-4 h-4" />
                                    View Experience
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="group flex-1 px-6 py-3.5 border-2 border-gray-300 dark:border-gray-600 rounded-2xl font-bold text-sm text-gray-700 dark:text-gray-200 hover-lift transition-all duration-300 hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <EnvelopeIcon className="w-4 h-4" />
                                    Me contacter
                                </span>
                            </button>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-3 animate-fade-in-up delay-1000">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 glass dark:glass-dark rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover-lift transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT COLUMN ─────────────────────────────────────── */}
                    <div className="flex flex-col items-center gap-6 lg:w-72 xl:w-80 animate-scale-in delay-300">

                        {/* Avatar */}
                        <div className="relative group">
                            <div className="absolute -inset-3 gradient-animated rounded-full blur-lg opacity-50 group-hover:opacity-70 transition duration-700" />
                            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 glass dark:glass-dark rounded-full p-3 hover-lift">
                                <ProfileAvatar size={260} className="w-full h-full" priority={true} />
                            </div>
                        </div>

                        {/* Stack badges */}
                        <div className="flex flex-wrap justify-center gap-2 w-full">
                            {['React', 'TypeScript', 'Nest.js', 'Playwright', 'Vitest'].map((tech) => (
                                <span key={tech} className="px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-up delay-1000">
                <button
                    onClick={() => scrollToSection('about')}
                    className="w-10 h-10 glass dark:glass-dark rounded-full flex items-center justify-center text-gray-400 hover:text-indigo-500 animate-bounce hover-lift transition-colors duration-300"
                    aria-label="Défiler vers le bas"
                >
                    <ArrowDownIcon className="w-5 h-5" />
                </button>
            </div>

            {/* Wave separator */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
                <svg
                    className="block w-full h-12 sm:h-16 md:h-20"
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
