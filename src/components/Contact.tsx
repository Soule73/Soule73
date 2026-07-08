import { useState } from 'react'
import {
    EnvelopeIcon,
    UserIcon,
    ChatBubbleLeftRightIcon,
    LightBulbIcon,
    RocketLaunchIcon,
    CheckCircleIcon,
    XCircleIcon,
    MapPinIcon,
} from '@heroicons/react/24/outline'
import { Input } from './Input'
import { socialLinks } from './contacts/solialLinks'

const CONTACT_ITEMS = [
    { icon: MapPinIcon, label: 'Localisation', value: 'Paris, France', href: '#' },
]

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const validateForm = (): boolean => {
        const newErrors: { [key: string]: string } = {}
        if (!formData.name.trim() || formData.name.trim().length < 2)
            newErrors.name = 'Nom requis (min. 2 caractères)'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email))
            newErrors.email = "Format d'email invalide"
        if (!formData.subject.trim() || formData.subject.trim().length < 5)
            newErrors.subject = 'Sujet requis (min. 5 caractères)'
        if (!formData.message.trim() || formData.message.trim().length < 10)
            newErrors.message = 'Message requis (min. 10 caractères)'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        if (errors[name]) setErrors({ ...errors, [name]: '' })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validateForm()) return
        setIsSubmitting(true)
        setSubmitStatus('idle')
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            if (!response.ok) throw new Error('API error')
            setSubmitStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setSubmitStatus('idle'), 5000)
        }
    }

    return (
        <section id="contact" className="relative mb-4 md:mb-8 lg:my-12 particles-bg overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full animate-float blur-xl" />
                <div className="absolute bottom-32 right-20 w-32 h-32 bg-purple-500/10 animate-morphing-blob blur-xl" />
            </div>

            <div className="relative z-10 section-center">
                {/* En-tête */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black gradient-text mb-4">Contact</h2>
                    <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Une question ?{' '}
                        <span className="gradient-text font-semibold">Écrivez-moi.</span>
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-10 md:px-4">

                    {/* ── Colonne gauche ── */}
                    <div className="lg:col-span-2 flex flex-col gap-8">

                        {/* Disponibilité */}
                        <div className="glass dark:glass-dark rounded-2xl p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Frontend Engineer @ Opensee</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                En poste chez <strong>Opensee</strong> (Fintech SaaS, Paris) en tant que Frontend Engineer depuis juin 2026.
                            </p>
                        </div>

                        {/* Infos de contact */}
                        <div className="space-y-3">
                            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="flex items-center gap-3 group py-2 transition-colors duration-200"
                                >
                                    <div className="w-9 h-9 rounded-xl glass dark:glass-dark flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-4 h-4 text-indigo-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 dark:text-gray-500">{label}</p>
                                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200">{value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Réseaux */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Réseaux</p>
                            <div className="flex gap-3">
                                {socialLinks.map((s) => (
                                    <a
                                        key={s.name}
                                        href={s.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.name}
                                        className="w-10 h-10 glass dark:glass-dark rounded-xl flex items-center justify-center text-gray-500 hover:text-indigo-500 dark:hover:text-indigo-400 hover-lift transition-all duration-200"
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Formulaire flat ── */}
                    <div className="lg:col-span-3">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <Input type="text" id="name" name="name" value={formData.name}
                                    onChange={handleChange} placeholder="Votre nom complet"
                                    label="Nom" icon={<UserIcon className="w-4 h-4" />} error={errors.name} />
                                <Input type="text" id="email" name="email" value={formData.email}
                                    onChange={handleChange} placeholder="votre@email.com"
                                    label="Email" icon={<EnvelopeIcon className="w-4 h-4" />} error={errors.email} />
                            </div>
                            <Input type="text" id="subject" name="subject" value={formData.subject}
                                onChange={handleChange} placeholder="Question..."
                                label="Sujet" icon={<LightBulbIcon className="w-4 h-4" />} error={errors.subject} />
                            <Input type="text" id="message" name="message" value={formData.message}
                                onChange={handleChange} placeholder="Décrivez votre besoin ou votre message..."
                                label="Message" icon={<ChatBubbleLeftRightIcon className="w-4 h-4" />}
                                isTextarea error={errors.message} />

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`group relative w-full py-3.5 px-6 font-bold rounded-2xl overflow-hidden transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover-lift'}`}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                                                <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75" />
                                            </svg>
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        <>
                                            <RocketLaunchIcon className="w-4 h-4" />
                                            Envoyer le message
                                        </>
                                    )}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600" />
                            </button>

                            {submitStatus === 'success' && (
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 animate-fade-in-up">
                                    <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-sm">Message envoyé !</p>
                                        <p className="text-xs opacity-80">Je vous répondrai dans les plus brefs délais.</p>
                                    </div>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 animate-fade-in-up">
                                    <XCircleIcon className="w-5 h-5 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-sm">Erreur lors de l&apos;envoi</p>
                                        <p className="text-xs opacity-80">Réessayez ou contactez-moi directement par email.</p>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
