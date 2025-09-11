import { StaticImageData } from 'next/image'
import type { ReactElement } from 'react'

export interface ProjectCredentials {
    email: string
    password: string
}

export interface ProjectDetails {
    role?: string
    team?: string
    methodology?: string
    period?: string
    type?: string
    achievements?: string[]
    features?: string[]
    responsibilities?: string[]
}

export interface Project {
    id: number
    title: string
    description: string
    image: StaticImageData,
    technologies: string[]
    category: string
    demoUrl: string
    playStoreUrl?: string
    playStoreDriverUrl?: string
    githubUrl: string
    featured: boolean
    color: string
    status: string
    credentials?: ProjectCredentials
    details?: ProjectDetails
}

export interface Category {
    name: string
    icon: ReactElement
    count: number
}
