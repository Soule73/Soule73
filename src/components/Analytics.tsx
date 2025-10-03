'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
    interface Window {
        gtag: (...args: any[]) => void
    }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        })
    }
}

export const event = ({ action, category, label, value }: {
    action: string
    category: string
    label?: string
    value?: number
}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }
}

export default function Analytics() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (GA_TRACKING_ID) {
            const url = pathname + searchParams.toString()
            pageview(url)
        }
    }, [pathname, searchParams])

    useEffect(() => {
        // Track CV download events
        const handleCVDownload = () => {
            event({
                action: 'download',
                category: 'CV',
                label: 'PDF Export',
            })
        }

        // Track navigation events
        const handleNavigation = (section: string) => {
            event({
                action: 'navigate',
                category: 'Navigation',
                label: section,
            })
        }

        // Add global event listeners
        window.addEventListener('cv_download', handleCVDownload)

        return () => {
            window.removeEventListener('cv_download', handleCVDownload)
        }
    }, [])

    if (!GA_TRACKING_ID) {
        return null
    }

    return (
        <>
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
        </>
    )
}