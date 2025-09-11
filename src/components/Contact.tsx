import { useState } from 'react'
import {
    EnvelopeIcon,
    UserIcon,
    ChatBubbleLeftRightIcon,
    LightBulbIcon,
    RocketLaunchIcon,
    CheckCircleIcon,
    XCircleIcon,
    SparklesIcon
} from '@heroicons/react/24/outline'
import {
    EnvelopeIcon as EnvelopeIconSolid
} from '@heroicons/react/24/solid'
import { contactInfo, socialLinks } from './contacts/solialLinks'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const validateForm = (): boolean => {
        const newErrors: { [key: string]: string } = {}

        // Validation du nom
        if (!formData.name.trim()) {
            newErrors.name = 'Le nom est requis'
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Le nom doit contenir au moins 2 caractères'
        }

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est requis'
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Format d\'email invalide'
        }

        // Validation du sujet
        if (!formData.subject.trim()) {
            newErrors.subject = 'Le sujet est requis'
        } else if (formData.subject.trim().length < 5) {
            newErrors.subject = 'Le sujet doit contenir au moins 5 caractères'
        }

        // Validation du message
        if (!formData.message.trim()) {
            newErrors.message = 'Le message est requis'
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Le message doit contenir au moins 10 caractères'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })

        // Effacer l'erreur du champ modifié
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            })
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validation côté client
        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            // Tentative 1: API Vercel en développement ou production
            const apiUrl = '/api/contact';

            console.log('Envoi du formulaire avec les données:', formData);
            console.log('URL de l\'API:', apiUrl);

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            console.log('Statut de la réponse:', response.status);
            console.log('Headers de la réponse:', Object.fromEntries(response.headers.entries()));

            if (!response.ok) {
                // Si l'API n'est pas disponible, afficher un message d'erreur spécifique
                if (response.status === 404) {
                    console.error('API non trouvée - vérifiez que vercel dev est lancé');
                    setSubmitStatus('error');
                    setTimeout(() => setSubmitStatus('idle'), 5000);
                    return;
                }

                const errorResult = await response.json().catch(() => ({ error: 'Erreur inconnue' }));
                console.error('Erreur API:', errorResult);
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus('idle'), 5000);
                return;
            }

            const result = await response.json();
            console.log('Résultat de l\'API:', result);

            setSubmitStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })

            // Masquer le message de succès après 5 secondes
            setTimeout(() => {
                setSubmitStatus('idle')
            }, 5000)

        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error)
            setSubmitStatus('error')

            // Masquer le message d'erreur après 5 secondes
            setTimeout(() => {
                setSubmitStatus('idle')
            }, 5000)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="relative mb-4 md:mb-8 lg:my-12 particles-bg overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full animate-float blur-xl"></div>
                <div className="absolute bottom-32 right-20 w-32 h-32 bg-purple-500/10 animate-morphing-blob blur-xl"></div>
                <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-pink-500/10 rounded-2xl animate-pulse-scale delay-300 blur-xl"></div>
            </div>

            <div className="relative z-10 section-center">
                {/* En-tête */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-4  mb-2 md:mb-4 lg:mb-6">
                        <EnvelopeIconSolid className="w-8 h-8 text-blue-500 animate-pulse-scale" />
                        <h2 className="text-5xl lg:text-6xl font-black gradient-text">Contact</h2>
                    </div>
                    <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Prêt à donner vie à votre <span className="gradient-text font-semibold">projet</span> ?
                        Parlons-en ensemble !
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 px-4">
                    {/* Informations de contact */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="glass dark:glass-dark rounded-3xl p-8 ">
                            <h3 className="text-3xl font-black gradient-text mb-6">
                                Restons connectés ! <RocketLaunchIcon className="inline w-8 h-8 ml-2" />
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                Que vous ayez une <span className="gradient-text font-semibold">idée révolutionnaire</span>,
                                une question technique ou simplement envie de dire bonjour,
                                je suis toujours ravi d&apos;<span className="gradient-text font-semibold">échanger</span> !
                            </p>

                            {/* Disponibilités */}
                            <div className="glass dark:glass-dark rounded-2xl p-4 mb-6">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="font-bold text-gray-800 dark:text-gray-200">Disponible maintenant</span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 ml-6">
                                    Nouveau projet • Consultation • Freelance
                                </p>
                            </div>
                        </div>

                        {/* Informations de contact */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className={`group glass dark:glass-dark rounded-2xl p-6 hover-lift  transition-all duration-500 block animate-fade-in-up delay-${index * 100}`}
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className={`relative w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-white group-hover:animate-pulse-scale shadow-lg`}>
                                            {info.icon}
                                            <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1 group-hover:gradient-text transition-all duration-300">
                                                {info.title}
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400 font-semibold mb-1">
                                                {info.value}
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-500">
                                                {info.description}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Réseaux sociaux */}
                        <div className="glass dark:glass-dark rounded-2xl p-6 ">
                            <h4 className="text-xl font-bold gradient-text mb-6">Suivez-moi <SparklesIcon className="inline w-5 h-5 ml-1" /></h4>
                            <div className="grid grid-cols-2 gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group glass dark:glass-dark rounded-xl p-4 hover-lift transition-all duration-300 animate-fade-in-up delay-${index * 100}`}
                                        aria-label={social.name}
                                    >
                                        <div className="flex items-center space-x-1">
                                            <div className={`w-10 h-10 p-2 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center text-white group-hover:animate-bounce shadow-lg`}>
                                                {social.icon}
                                            </div>
                                            <span className="font-bold text-gray-700 dark:text-gray-200
                                            text-xs md:text-lg  
                                            group-hover:gradient-text transition-all duration-300">
                                                {social.name}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Formulaire de contact */}
                    <div className="lg:col-span-3">
                        <div className="glass dark:glass-dark rounded-3xl p-8 lg:p-10 ">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-black gradient-text mb-4">
                                    Envoyez-moi un message <EnvelopeIcon className="inline w-8 h-8 ml-2" />
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Remplissez le formulaire et je vous répondrai dans les plus brefs délais
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                                            <span className="flex items-center space-x-2">
                                                <UserIcon className="w-4 h-4" />
                                                <span>Nom complet</span>
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-4 glass dark:glass-dark rounded-2xl border-0 focus:ring-2 transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder:text-gray-500 ${errors.name
                                                ? 'focus:ring-red-500 ring-2 ring-red-500'
                                                : 'focus:ring-indigo-500'
                                                }`}
                                            placeholder="Votre nom complet"
                                        />
                                        {errors.name && (
                                            <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1">
                                                <XCircleIcon className="w-4 h-4" />
                                                <span>{errors.name}</span>
                                            </p>
                                        )}
                                    </div>
                                    <div className="group">
                                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                                            <span className="flex items-center space-x-2">
                                                <EnvelopeIcon className="w-4 h-4" />
                                                <span>Adresse email</span>
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-4 glass dark:glass-dark rounded-2xl border-0 focus:ring-2 transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder:text-gray-500 ${errors.email
                                                ? 'focus:ring-red-500 ring-2 ring-red-500'
                                                : 'focus:ring-indigo-500'
                                                }`}
                                            placeholder="votre.email@exemple.com"
                                        />
                                        {errors.email && (
                                            <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1">
                                                <XCircleIcon className="w-4 h-4" />
                                                <span>{errors.email}</span>
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="group">
                                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                                        <span className="flex items-center space-x-2">
                                            <LightBulbIcon className="w-4 h-4" />
                                            <span>Sujet</span>
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-4 glass dark:glass-dark rounded-2xl border-0 focus:ring-2 transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder:text-gray-500 ${errors.subject
                                            ? 'focus:ring-red-500 ring-2 ring-red-500'
                                            : 'focus:ring-indigo-500'
                                            }`}
                                        placeholder="Sujet de votre message"
                                    />
                                    {errors.subject && (
                                        <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1">
                                            <XCircleIcon className="w-4 h-4" />
                                            <span>{errors.subject}</span>
                                        </p>
                                    )}
                                </div>

                                <div className="group">
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                                        <span className="flex items-center space-x-2">
                                            <ChatBubbleLeftRightIcon className="w-4 h-4" />
                                            <span>Message</span>
                                        </span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className={`w-full px-4 py-4 glass dark:glass-dark rounded-2xl border-0 focus:ring-2 transition-all duration-300 text-gray-800 dark:text-gray-200 placeholder:text-gray-500 resize-none ${errors.message
                                            ? 'focus:ring-red-500 ring-2 ring-red-500'
                                            : 'focus:ring-indigo-500'
                                            }`}
                                        placeholder="Décrivez votre projet, vos besoins ou posez votre question..."
                                    ></textarea>
                                    {errors.message && (
                                        <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center space-x-1">
                                            <XCircleIcon className="w-4 h-4" />
                                            <span>{errors.message}</span>
                                        </p>
                                    )}
                                </div>

                                {/* Bouton d'envoi */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`group relative w-full py-4 px-6 font-bold text-lg rounded-2xl overflow-hidden transition-all duration-500 ${isSubmitting
                                        ? 'opacity-70 cursor-not-allowed'
                                        : 'hover-lift '
                                        }`}
                                >
                                    <div className="relative z-10 flex items-center justify-center space-x-3 text-white">
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"></circle>
                                                    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75"></path>
                                                </svg>
                                                <span>Envoi en cours...</span>
                                            </>
                                        ) : (
                                            <>
                                                <RocketLaunchIcon className="w-6 h-6 group-hover:animate-bounce" />
                                                <span>Envoyer le message</span>
                                            </>
                                        )}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                                </button>

                                {/* Messages de statut */}
                                {submitStatus === 'success' && (
                                    <div className="glass dark:glass-dark rounded-2xl p-4 bg-green-500/10 border border-green-500/20 animate-fade-in-up">
                                        <div className="flex items-center space-x-3 text-green-600 dark:text-green-400">
                                            <CheckCircleIcon className="w-6 h-6" />
                                            <div>
                                                <p className="font-bold">Message envoyé avec succès !</p>
                                                <p className="text-sm opacity-80">Je vous répondrai dans les plus brefs délais</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="glass dark:glass-dark rounded-2xl p-4 bg-red-500/10 border border-red-500/20 animate-fade-in-up">
                                        <div className="flex items-center space-x-3 text-red-600 dark:text-red-400">
                                            <XCircleIcon className="w-6 h-6" />
                                            <div>
                                                <p className="font-bold">Erreur lors de l&apos;envoi</p>
                                                <p className="text-sm opacity-80">Veuillez réessayer ou me contacter directement</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
