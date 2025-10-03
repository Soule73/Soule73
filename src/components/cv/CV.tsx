'use client'

import { useRef } from 'react'
import usePDFExport from '@/hooks/usePDFExport'
import profileImage from '@/assets/sds.jpg'
import { cvData, cvLabels } from '@/data/cvData'
import './CV.css'
import {
    BriefcaseIcon,
    AcademicCapIcon,
    CodeBracketIcon,
    LanguageIcon
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
                    <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
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
                            className="inline-flex cursor-pointer items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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
                                    <h2 className="cv-title">{cvData.personalInfo.title}</h2>
                                    <div className="cv-contact-grid">
                                        {cvData.personalInfo.contact.map((contact, index) => (
                                            <div className="cv-contact-item" key={index}>
                                                <span>{contact.name} : </span>
                                                {contact.type === 'email' ? (
                                                    <a href={`mailto:${contact.value}`} rel='noopener noreferrer'>{contact.value}</a>
                                                ) : contact.type === 'website' ? (
                                                    <a href={contact.value} target="_blank" rel="noopener noreferrer">
                                                        {contact.value}
                                                    </a>
                                                ) : (
                                                    <span>{contact.value}</span>
                                                )}
                                            </div>
                                        ))}
                                        {/* <div className="cv-contact-item">
                                        <span>Téléphone : </span>
                                        <span>{cvData.personalInfo.contact.phone}</span>
                                    </div>
                                    <div className="cv-contact-item">
                                        <span>Email : </span>
                                        <a
                                            href={`mailto:${cvData.personalInfo.contact.email}`}
                                        >
                                            {cvData.personalInfo.contact.email}
                                        </a>
                                    </div>
                                    <div className="cv-contact-item">
                                        <span>Adresse : </span>
                                        <span>{cvData.personalInfo.contact.location}</span>
                                    </div>
                                    <div className="cv-contact-item">
                                        <span>Portfolio : </span>
                                        <a
                                            href={cvData.personalInfo.contact.website}
                                            target="_blank"
                                            className='cv-contact-website'
                                            rel="noopener noreferrer"
                                        >
                                            {cvData.personalInfo.contact.website}
                                        </a>
                                    </div>
                                    <div className="cv-contact-item">
                                        <span>LinkedIn :</span>
                                        <a
                                            href={cvData.personalInfo.contact.linkedin}
                                            target="_blank"
                                            className='cv-contact-website'
                                            rel="noopener noreferrer"
                                        >
                                            {cvData.personalInfo.contact.linkedin}
                                        </a>
                                    </div>
                                    <div className="cv-contact-item">
                                        <span>GitHub :</span>
                                        <a
                                            href={cvData.personalInfo.contact.github}
                                            target="_blank"
                                            className='cv-contact-website'
                                            rel="noopener noreferrer"
                                        >
                                            {cvData.personalInfo.contact.github}
                                        </a>
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Section Profil */}
                        <div className=" cv-profile-section">
                            <h2 className="cv-section-title cv-profile-title">Profil</h2>
                            <div className="cv-section-content">
                                <p className="cv-profile-text">{cvData.personalInfo.profile}</p>
                            </div>
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
                                        {cvData.experience.map((exp, index) => (
                                            <div key={index} className="cv-timeline-item">
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
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Compétences Techniques */}
                                <section className="cv-section">
                                    <h2 className="cv-section-title">
                                        <CodeBracketIcon className="cv-section-icon" />
                                        {cvLabels.sections.skills}
                                    </h2>
                                    <div className="cv-skills-compact">
                                        <div className="cv-skill-row">
                                            <span className="cv-skill-label">{cvLabels.skillCategories.frontend}</span>
                                            <span className="cv-skill-list">
                                                {cvData.skills.frontend.map((skill) =>
                                                    `${skill.name}`
                                                ).join(', ')}
                                            </span>
                                        </div>
                                        <div className="cv-skill-row">
                                            <span className="cv-skill-label">{cvLabels.skillCategories.backend}</span>
                                            <span className="cv-skill-list">
                                                {cvData.skills.backend.map((skill) =>
                                                    `${skill.name}`
                                                ).join(', ')}
                                            </span>
                                        </div>
                                        <div className="cv-skill-row">
                                            <span className="cv-skill-label">{cvLabels.skillCategories.databases}</span>
                                            <span className="cv-skill-list">
                                                {cvData.skills.databases.map((skill) =>
                                                    `${skill.name}`
                                                ).join(', ')}
                                            </span>
                                        </div>
                                        <div className="cv-skill-row">
                                            <span className="cv-skill-label">{cvLabels.skillCategories.devops}</span>
                                            <span className="cv-skill-list">
                                                {cvData.skills.devops.map((skill) =>
                                                    `${skill.name}`
                                                ).join(', ')}
                                            </span>
                                        </div>
                                        <div className="cv-skill-row">
                                            <span className="cv-skill-label">{cvLabels.skillCategories.mobile}</span>
                                            <span className="cv-skill-list">
                                                {cvData.skills.mobile.map((skill) =>
                                                    `${skill.name}`
                                                ).join(', ')}
                                            </span>
                                        </div>
                                        <div className="cv-skill-row">
                                            <span className="cv-skill-label">{cvLabels.skillCategories.cms}</span>
                                            <span className="cv-skill-list">
                                                {cvData.skills.cms.map((skill) =>
                                                    `${skill.name}`
                                                ).join(', ')}
                                            </span>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div className="cv-sidebar">
                                {/* Formation */}
                                <section className="cv-section">
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
                                <section className="cv-section">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CV