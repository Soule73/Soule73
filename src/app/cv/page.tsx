'use client'

import { Metadata } from 'next'
import CV from '@/components/cv/CV'

// Note: Dans Next.js App Router, les métadonnées doivent être exportées depuis des Server Components
// Pour les Client Components, nous utiliserons un wrapper ou le template
export default function CVPage() {
    return <CV />
}