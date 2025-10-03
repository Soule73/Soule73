'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'

interface LayoutWrapperProps {
    children: React.ReactNode
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDark])

    const toggleTheme = () => {
        setIsDark(!isDark)
    }

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <Header isDark={isDark} toggleTheme={toggleTheme} />
                <main>
                    {children}
                </main>
                <Footer />
                <Analytics />
            </div>
        </div>
    )
}

export default LayoutWrapper