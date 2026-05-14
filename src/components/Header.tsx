'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface HeaderProps {
    isDark: boolean
    toggleTheme: () => void
}

const Header = ({ isDark, toggleTheme }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    const menuItems = [
        { name: 'À propos', href: '/#about', section: 'about' },
        { name: 'Skills', href: '/#skills', section: 'skills' },
        { name: 'Projects', href: '/#projects', section: 'projects' },
        { name: 'Contact', href: '/#contact', section: 'contact' },
        { name: 'CV', href: '/cv', section: '' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)

            const sections = menuItems
                .filter(i => i.section)
                .map(i => i.section)
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id)
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(id)
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {/* ── PILL FLOTTANTE DESKTOP ─────────────────────────── */}
            <header className={`
                fixed top-4 left-1/2 -translate-x-1/2 z-50
                hidden lg:flex items-center gap-1
                transition-all duration-500
                px-3 py-2 rounded-full
                ${scrolled
                    ? 'glass dark:glass-dark shadow-xl shadow-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10'
                    : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-lg'
                }
            `}>
                {/* Logo / Nom */}
                <a
                    href="/#home"
                    className="mr-2 px-3 py-1.5 font-black text-sm gradient-text whitespace-nowrap tracking-tight"
                >
                    SS
                </a>

                <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-1" />

                {/* Nav items */}
                {menuItems.map((item) => {
                    const isActive = item.section && activeSection === item.section
                    const isCVPage = item.href === '/cv'
                    const Tag = isCVPage ? Link : 'a'
                    return (
                        <Tag
                            key={item.name}
                            href={item.href}
                            className={`
                                relative px-4 py-1.5 rounded-full text-sm font-semibold
                                transition-all duration-300
                                ${isActive
                                    ? 'text-white'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                                }
                            `}
                        >
                            {isActive && (
                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 -z-10" />
                            )}
                            {item.name}
                        </Tag>
                    )
                })}

                <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-1" />

                {/* Dark mode toggle */}
                <button
                    onClick={toggleTheme}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
                    aria-label="Toggle theme"
                >
                    {isDark ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    )}
                </button>
            </header>

            {/* ── HEADER MOBILE ──────────────────────────────────── */}
            <header className="fixed top-0 left-0 right-0 z-50 lg:hidden">
                <div className={`
                    mx-3 mt-3 rounded-2xl px-4 py-3
                    flex items-center justify-between
                    transition-all duration-500
                    ${scrolled
                        ? 'glass dark:glass-dark shadow-lg backdrop-blur-xl border border-white/20 dark:border-white/10'
                        : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-white/30 dark:border-white/10'
                    }
                `}>
                    {/* Logo mobile */}
                    <a href="/#home" className="font-black text-sm gradient-text tracking-tight">
                        Soulé Soumaré
                    </a>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-700 dark:text-gray-200 transition-colors"
                            aria-label="Menu"
                        >
                            <div className="w-5 flex flex-col gap-1.5">
                                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Dropdown mobile */}
                <div className={`mx-3 overflow-hidden transition-all duration-400 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                    <div className="glass dark:glass-dark rounded-2xl p-3 border border-white/20 dark:border-white/10 backdrop-blur-xl space-y-1">
                        {menuItems.map((item) => {
                            const isCVPage = item.href === '/cv'
                            const Tag = isCVPage ? Link : 'a'
                            const isActive = item.section && activeSection === item.section
                            return (
                                <Tag
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`
                                        flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200
                                        ${isActive
                                            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                                            : 'text-gray-700 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-white/10'
                                        }
                                    `}
                                >
                                    {item.name}
                                </Tag>
                            )
                        })}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header