'use client'

import LayoutWrapper from '@/components/LayoutWrapper'

export default function Template({ children }: { children: React.ReactNode }) {
    return <LayoutWrapper>{children}</LayoutWrapper>
}