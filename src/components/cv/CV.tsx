'use client'

import { useRef } from 'react'
import usePDFExport from '@/hooks/usePDFExport'
import profileImage from '@/assets/sds.png'
import { cvData, cvLabels } from '@/data/cvData'
import './CV.css'
import {
    BriefcaseIcon,
    AcademicCapIcon,
    CodeBracketIcon,
    LanguageIcon,
    SparklesIcon
} from '@heroicons/react/24/outline'
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
                    <h1 className="text-5xl lg:text-6xl font-black bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Curriculum Vitae
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Découvrez mon parcours professionnel, mes compétences et mes réalisations.
                        Un <span className="text-blue-600 font-semibold">développeur passionné</span> prêt à relever
                        de nouveaux défis et à contribuer au succès de votre équipe.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={handlePDFExport}
                            className="inline-flex cursor-pointer items-center space-x-2 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            {cvLabels.buttons.exportPDF}
                        </button>
                        <Link
                            href="/"
                            className="inline-flex items-center space-x-2 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300"
                        >
                            Voir Portfolio
                        </Link>
                    </div>
                </div>

                {/* CV Document */}
                <div className="cv-document-container">

                    <div className="cv-document" ref={cvRef}>
                        {/* Header */}
                        <div className="cv-document-header">
                            <div className="cv-header-content">
                                <div className="cv-photo">
                                    <Image
                                        src={profileImage}
                                        alt="Soule Soumaré"
                                        className="cv-photo-img"
                                        width={112}
                                        height={112}
                                    />
                                </div>
                                <div className="cv-header-info">
                                    <h1 className="cv-name">{cvData.personalInfo.name}</h1>
                                    <div className="cv-professional-info">

                                        {cvData.personalInfo.searchingFor && (
                                            <span className="cv-searching-for">{cvData.personalInfo.searchingFor.label}</span>
                                        )}
                                        <span className="cv-title">{cvData.personalInfo.title}</span>
                                        {cvData.personalInfo.availableFrom && (
                                            <span className="cv-available-from">
                                                ({cvData.personalInfo.availableFrom})</span>
                                        )}
                                    </div>
                                    {cvData.status == 'available' && <div className="cv-professional-info">
                                        {cvData.personalInfo.searchingFor?.rythm && (
                                            <div className="cv-rythm">
                                                Rythme : {cvData.personalInfo.searchingFor.rythm}</div>
                                        )}

                                        {cvData.personalInfo.searchingFor?.rythm && cvData.personalInfo.searchingFor?.duration && (
                                            <span className="cv-separator">|</span>
                                        )}

                                        {cvData.personalInfo.searchingFor?.duration && (
                                            <div className="cv-duration">
                                                Durée : {cvData.personalInfo.searchingFor.duration}</div>
                                        )}
                                    </div>}
                                    <div className="cv-contact-grid">
                                        {cvData.personalInfo.contact.map((contact, index) => (
                                            <div className="cv-contact-item" key={index}>
                                                <span>{contact.name} : </span>
                                                {contact.type === 'email' ? (
                                                    <a href={`mailto:${contact.value}`} rel='noopener noreferrer'>{contact.value}</a>
                                                ) : contact.type === 'website' ? (
                                                    <a
                                                        href={
                                                            contact.value.startsWith('http://') || contact.value.startsWith('https://')
                                                                ? contact.value
                                                                : `https://${contact.value}`
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {contact.value}
                                                    </a>
                                                ) : (
                                                    <span>{contact.value}</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Section Profil */}
                        <div className="cv-profile-section">
                            <h2 className="cv-section-title">Profil</h2>
                            <p className="cv-profile-text">{cvData.personalInfo.profile}</p>
                        </div>
                        {/* Content */}
                        <div className="cv-content">
                            <div className="cv-main-content">
                                {/* Expérience Professionnelle */}
                                <section className="cv-section">
                                    <h2 className="cv-section-title">
                                        <BriefcaseIcon className="cv-section-icon" />
                                        {cvLabels.sections.experience}
                                    </h2>
                                    <div className="cv-timeline">
                                        {cvData.experience.map((exp, index) => {
                                            const isLast = index === cvData.experience.length - 1
                                            return (<div key={index} className={` ${isLast ? 'cv-timeline-item-last' : 'cv-timeline-item'}`}>
                                                <div className="cv-timeline-header">
                                                    <h3 className="cv-job-title">{exp.jobTitle}</h3>
                                                    <span className="cv-period">{exp.period}</span>
                                                </div>
                                                <div className="cv-company-info">
                                                    <span className="cv-company">{exp.company}</span>
                                                    <span className="cv-location">- {exp.location}</span>
                                                </div>
                                                <ul className="cv-description-list">
                                                    {exp.description.map((desc, i) => (
                                                        <li key={i}>{desc}</li>
                                                    ))}
                                                </ul>
                                            </div>)
                                        })}
                                    </div>
                                </section>

                                {/* Compétences Techniques */}
                                <section className="cv-section">
                                    <h2 className="cv-section-title">
                                        <CodeBracketIcon className="cv-section-icon" />
                                        {cvLabels.sections.skills}
                                    </h2>
                                    <div className="cv-skills-compact">
                                        {/* {cvData.skills.filter((category) => category.show).map((category) => (
                                            <div key={category.name} className="cv-skill-row">
                                                <span className="cv-skill-label">{category.name}</span>
                                                <span className="cv-skill-list">
                                                    {category.skills.filter((skill) => skill.show).map((skill) =>
                                                        `${skill.name}`
                                                    ).join(', ')}
                                                </span>
                                            </div>
                                        ))} */}
                                        <div className="cv-skill-row">
                                            <span className="cv-skill-label">Languages</span>
                                            {/* <span className="cv-skill-separator"> : </span> */}
                                            <span className="cv-skill-list">
                                                JavaScript, TypeScript, Python, PHP, Java, SQL.
                                            </span>
                                        </div>
                                        <div className="cv-skill-row">
                                            <span className="cv-skill-label">Framworks</span>
                                            {/* <span className="cv-skill-separator"> : </span> */}
                                            <span className="cv-skill-list">
                                                React.js, Tailwind CSS.
                                            </span>
                                        </div>
                                        <div className="cv-skill-row">
                                            <span className="cv-skill-label">Backend</span>
                                            <span className="cv-skill-list">
                                                Node.js, Express.js, Next.js, GraphQL.
                                            </span>
                                        </div>
                                        <div className="cv-skill-row">
                                            <span className="cv-skill-label">Base de données</span>
                                            {/* <span className="cv-skill-separator"> : </span> */}
                                            <span className="cv-skill-list">
                                                MySQL, PostgreSQL, MongoDB.
                                            </span>
                                        </div>
                                        <div className="cv-skill-row">
                                            <span className="cv-skill-label">DevOps</span>
                                            {/* <span className="cv-skill-separator"> : </span> */}
                                            <span className="cv-skill-list">
                                                Git, GitHub, GitLab, Docker, GitHub Actions, CI/CD.
                                            </span>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div className="cv-sidebar">
                                {/* Formation */}
                                <section>
                                    <h2 className="cv-section-title">
                                        <AcademicCapIcon className="cv-section-icon" />
                                        {cvLabels.sections.education}
                                    </h2>
                                    <div className="cv-education-list">
                                        {cvData.education.map((edu, index) => (
                                            <div key={index} className="cv-education-item">
                                                <h3 className="cv-degree">{edu.degree}</h3>
                                                <div className="cv-school">{edu.school}</div>
                                                <div className="cv-edu-details">
                                                    <span className="cv-edu-period">{edu.period}</span>
                                                    <span className="cv-edu-location">{edu.location}</span>
                                                </div>
                                                <p className="cv-edu-description">
                                                    {edu.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Langues */}
                                <section>
                                    <h2 className="cv-section-title">
                                        <LanguageIcon className="cv-section-icon" />
                                        {cvLabels.sections.languages}
                                    </h2>
                                    <div className="cv-languages-list">
                                        {cvData.languages.map((lang, index) => (
                                            <div key={index} className="cv-language-item">
                                                <span className="cv-language-name">{lang.name}</span>
                                                <span className="cv-language-level">{lang.level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                                {/* Qualités */}
                                <section>
                                    <h2 className="cv-section-title">
                                        <SparklesIcon className="cv-section-icon" />
                                        Qualités
                                    </h2>
                                    <div className="cv-qualities-list">
                                        <ul className="cv-description-list">
                                            {cvData.qualities.map((quality, index) => (
                                                <li key={index}>{quality}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CV