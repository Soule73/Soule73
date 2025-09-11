import { useState } from 'react'
import {
    EnvelopeIcon,
    UserIcon,
    ChatBubbleLeftRightIcon,
    LightBulbIcon,
    RocketLaunchIcon,
    CheckCircleIcon,
    XCircleIcon
} from '@heroicons/react/24/outline'
import { Input } from './Input'
import ContactInfo from './contacts/ContactInfo'
import SocialLinks from './contacts/SocialLinks'

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
                        </div>

                        {/* Informations de contact */}
                        <ContactInfo />

                        {/* Réseaux sociaux */}
                        <SocialLinks />
                    </div>

                    {/* Formulaire de contact */}
                    <div className="lg:col-span-3">
                        <div className="glass dark:glass-dark rounded-3xl p-8 lg:p-10 ">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-black gradient-text mb-4">
                                    Envoyez-moi un message
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Remplissez le formulaire et je vous répondrai dans les plus brefs délais
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Votre nom complet"
                                        label="Nom complet"
                                        icon={<UserIcon className="w-4 h-4" />}
                                        error={errors.name}
                                    />
                                    <Input
                                        type="text"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Votre adresse email"
                                        label="Adresse email"
                                        icon={<EnvelopeIcon className="w-4 h-4" />}
                                        error={errors.email}
                                    />

                                </div>

                                <Input
                                    type="text"
                                    name="name"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Sujet de votre message"
                                    label="Sujet"
                                    icon={<LightBulbIcon className="w-4 h-4" />}
                                    error={errors.subject}
                                />
                                <Input
                                    type="text"
                                    name="name"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Décrivez votre projet, vos besoins ou posez votre question..."
                                    label="Message"
                                    icon={<ChatBubbleLeftRightIcon className="w-4 h-4" />}
                                    isTextarea={true}
                                    error={errors.message}
                                />
                                {/* Bouton d'envoi */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`group relative cursor-pointer w-full py-4 px-6 font-bold text-lg rounded-2xl overflow-hidden transition-all duration-500 ${isSubmitting
                                        ? 'opacity-70 cursor-not-allowed'
                                        : 'hover-lift '
                                        }`}
                                >
                                    <div className="relative z-10 flex items-center justify-center space-x-1 text-white">
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
                                                <span className=' text-xs md:text-lg'>Envoyer le message</span>
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
