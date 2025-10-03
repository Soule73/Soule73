import { useState, useEffect } from 'react'
import Link from 'next/link'

interface HeaderProps {
    isDark: boolean
    toggleTheme: () => void
}

const Header = ({ isDark, toggleTheme }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const menuItems = [
        { name: 'Accueil', href: '#home' },
        { name: 'À propos', href: '#about' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Projets', href: '#projects' },
        { name: 'Contact', href: '#contact' },
        { name: 'CV', href: '/cv' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'glass dark:glass-dark shadow-lg py-2'
            : 'bg-transparent py-4'
            }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-end lg:justify-between items-center h-16">

                    {/* Navigation Desktop */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {menuItems.map((item, index) => {
                            if (item.href.startsWith('/')) {
                                // Lien Next.js pour les pages
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`group relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover-lift animate-fade-in-up delay-${index * 100}`}
                                    >
                                        <div className="relative z-10 flex items-center space-x-2 text-gray-700 dark:text-gray-200 group-hover:text-white">
                                            <span>{item.name}</span>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </Link>
                                )
                            } else {
                                // Lien d'ancrage pour les sections
                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`group relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover-lift animate-fade-in-up delay-${index * 100}`}
                                    >
                                        <div className="relative z-10 flex items-center space-x-2 text-gray-700 dark:text-gray-200 group-hover:text-white">
                                            <span>{item.name}</span>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </a>
                                )
                            }
                        })}
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end items-center space-x-3">
                        {/* Theme Toggle avec style glassmorphism */}
                        <button
                            onClick={toggleTheme}
                            className="relative w-12 h-12 glass dark:glass-dark rounded-xl flex items-center justify-center text-gray-700 dark:text-gray-200 hover-glow hover-lift transition-all duration-300"
                            aria-label="Changer le thème"
                        >
                            <div className="relative z-10">
                                {isDark ? (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    </svg>
                                )}
                            </div>
                        </button>

                        {/* Menu Mobile */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="relative w-12 h-12 glass dark:glass-dark rounded-xl flex items-center justify-center text-gray-700 dark:text-gray-200 hover-glow hover-lift transition-all duration-300"
                                aria-label="Menu mobile"
                            >
                                <div className="relative z-10">
                                    <div className={`w-6 h-6 flex flex-col justify-center items-center transform transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}>
                                        <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-90 translate-y-0' : '-translate-y-1.5'}`}></span>
                                        <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                        <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-90 -translate-y-0' : 'translate-y-1.5'}`}></span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menu Mobile avec animation */}
                <MobileMenu isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} menuItems={menuItems} />
            </div>
        </header>
    )
}

const MobileMenu = ({ isOpen, setIsMenuOpen, menuItems }: {
    isOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
    menuItems: { name: string; href: string }[]
}) => {
    return (
        <div className={`lg:hidden transition-all duration-500 ease-in-out  ${isOpen
            ? 'max-h-96 opacity-100 py-4'
            : 'max-h-0 opacity-0 py-0'
            } overflow-hidden`}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl mx-4 p-4 space-y-2">
                {menuItems.map((item, index) => {
                    if (item.href.startsWith('/')) {
                        // Lien Next.js pour les pages
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 animate-slide-in-left delay-${index * 100}`}
                            >
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        )
                    } else {
                        // Lien d'ancrage pour les sections
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 animate-slide-in-left delay-${index * 100}`}
                            >
                                <span className="font-medium">{item.name}</span>
                            </a>
                        )
                    }
                })}
            </div>
        </div>)
}

export default Header
