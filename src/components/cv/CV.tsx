'use client'

import { useRef } from 'react'
import usePDFExport from '@/hooks/usePDFExport'
import profileImage from '@/assets/sds.png'
import { cvData, cvLabels } from '@/data/cvData'
import './CV.css'
import Link from 'next/link'
import Image from 'next/image'

const CV = () => {
    const cvRef = useRef<HTMLDivElement>(null)
    const { exportToPDF } = usePDFExport()

    const handlePDFExport = async () => {
        if (!cvRef.current) return

        try {
            await exportToPDF(cvRef.current, {
                filename: 'CV_Soule_Soumare.pdf'
            })
        } catch (error) {
            console.error('Erreur export PDF:', error)
            alert('Erreur lors de l\'export PDF. Veuillez réessayer.')
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl lg:text-6xl font-black gradient-text mb-4">
                        Curriculum Vitae
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-2 max-w-3xl mx-auto leading-relaxed">
                        <span className="gradient-text font-semibold">Frontend Engineer @ Opensee</span> - React · TypeScript · Testing Automation
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        Spécialisé en testing automation (Playwright, Vitest) · Fintech SaaS · Paris
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={handlePDFExport}
                            className="group relative inline-flex cursor-pointer items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white overflow-hidden hover-lift transition-all duration-300"
                        >
                            <span className="relative z-10">{cvLabels.buttons.exportPDF}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600" />
                        </button>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 glass dark:glass-dark px-8 py-4 rounded-2xl font-bold text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 hover-lift transition-all duration-300"
                        >
                            Portfolio
                        </Link>
                    </div>
                </div>

                {/* CV Document */}
                <div className="cv-document-container">
                    <div className="cv-document" ref={cvRef}>

                        {/* ── Sidebar sombre ── */}
                        <div className="cv-sidebar-panel">
                            {/* Photo + identité */}
                            <div className="cv-sidebar-identity">
                                <div className="cv-photo">
                                    <Image
                                        src={profileImage}
                                        alt="Soule Soumaré"
                                        className="cv-photo-img"
                                        width={96}
                                        height={96}
                                    />
                                </div>
                                <h1 className="cv-name">{cvData.personalInfo.name}</h1>
                                <p className="cv-title-text">{cvData.personalInfo.title}</p>
                                {cvData.personalInfo.availableFrom && (
                                    <p className="cv-availability">{cvData.personalInfo.availableFrom}</p>
                                )}
                            </div>

                            {/* Contact */}
                            <div className="cv-sidebar-section">
                                <h3 className="cv-sidebar-title">Contact</h3>
                                <div className="cv-contact-list">
                                    {cvData.personalInfo.contact.map((contact, index) => (
                                        <div className="cv-contact-item" key={index}>
                                            <span className="cv-contact-label">{contact.name}</span>
                                            {contact.type === 'email' ? (
                                                <a href={`mailto:${contact.value}`} className="cv-contact-value">{contact.value}</a>
                                            ) : contact.type === 'website' ? (
                                                <a href={contact.value.startsWith('http') ? contact.value : `https://${contact.value}`} target="_blank" rel="noopener noreferrer" className="cv-contact-value">{contact.value}</a>
                                            ) : (
                                                <span className="cv-contact-value">{contact.value}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Compétences */}
                            <div className="cv-sidebar-section">
                                <h3 className="cv-sidebar-title">Compétences</h3>
                                <div className="cv-skills-list">
                                    <div className="cv-skill-group">
                                        <span className="cv-skill-cat">Testing & QA</span>
                                        <span className="cv-skill-tags">Playwright, Vitest, Jest, RTL, Supertest</span>
                                    </div>
                                    <div className="cv-skill-group">
                                        <span className="cv-skill-cat">Frontend</span>
                                        <span className="cv-skill-tags">React, TypeScript, Nest.js, Tailwind CSS</span>
                                    </div>
                                    <div className="cv-skill-group">
                                        <span className="cv-skill-cat">Backend</span>
                                        <span className="cv-skill-tags">Node.js, Nest.js, GraphQL, PostgreSQL</span>
                                    </div>
                                    <div className="cv-skill-group">
                                        <span className="cv-skill-cat">DevOps</span>
                                        <span className="cv-skill-tags">GitLab CI/CD, GitHub Actions, Docker</span>
                                    </div>
                                    <div className="cv-skill-group">
                                        <span className="cv-skill-cat">Autres</span>
                                        <span className="cv-skill-tags">Flutter, Spring Boot, WordPress, Agile</span>
                                    </div>
                                </div>
                            </div>

                            {/* Langues */}
                            <div className="cv-sidebar-section">
                                <h3 className="cv-sidebar-title">Langues</h3>
                                <div className="cv-languages-list">
                                    {cvData.languages.map((lang, index) => (
                                        <div key={index} className="cv-language-item">
                                            <span className="cv-language-name">{lang.name}</span>
                                            <span className="cv-language-level">{lang.level}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Qualités */}
                            <div className="cv-sidebar-section">
                                <h3 className="cv-sidebar-title">Qualités</h3>
                                <ul className="cv-qualities-list">
                                    {cvData.qualities.map((quality, index) => (
                                        <li key={index}>{quality}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* ── Contenu principal ── */}
                        <div className="cv-main-panel">
                            {/* Profil */}
                            <section className="cv-main-section">
                                <h2 className="cv-main-title">Profil</h2>
                                <p className="cv-profile-text">{cvData.personalInfo.profile}</p>
                            </section>

                            {/* Expériences */}
                            <section className="cv-main-section">
                                <h2 className="cv-main-title">
                                    {cvLabels.sections.experience}
                                </h2>
                                <div className="cv-timeline">
                                    {cvData.experience.map((exp, index) => (
                                        <div key={index} className="cv-timeline-item">
                                            <div className="cv-timeline-dot" />
                                            <div className="cv-timeline-body">
                                                <div className="cv-timeline-header">
                                                    <h3 className="cv-job-title">{exp.jobTitle}</h3>
                                                    <span className="cv-period">{exp.period}</span>
                                                </div>
                                                <div className="cv-company-info">
                                                    <span className="cv-company">{exp.company}</span>
                                                    <span className="cv-location">{exp.location}</span>
                                                </div>
                                                <ul className="cv-description-list">
                                                    {exp.description.map((desc, i) => (
                                                        <li key={i}>{desc}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Formation */}
                            <section className="cv-main-section">
                                <h2 className="cv-main-title">
                                    {cvLabels.sections.education}
                                </h2>
                                <div className="cv-education-list">
                                    {cvData.education.map((edu, index) => (
                                        <div key={index} className="cv-education-item">
                                            <div className="cv-timeline-header">
                                                <h3 className="cv-degree">{edu.degree}</h3>
                                                <span className="cv-period">{edu.period}</span>
                                            </div>
                                            <div className="cv-school">{edu.school} -{edu.location}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CV