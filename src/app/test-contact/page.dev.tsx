'use client';

import { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface ApiResponse {
    success?: boolean;
    message?: string;
    error?: string;
    details?: string[];
}

export default function TestContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState<ApiResponse | null>(null);
    const [showEmailPreview, setShowEmailPreview] = useState(false);

    // Données de test pré-remplies
    const fillTestData = () => {
        setFormData({
            name: 'Jean Dupont',
            email: 'jean.dupont@example.com',
            subject: 'Test du formulaire de contact',
            message: `Bonjour,

Ceci est un message de test pour vérifier que le formulaire de contact fonctionne correctement.

Les fonctionnalités testées :
- Validation des champs
- Envoi d'email
- Génération du template HTML
- Gestion des erreurs

Cordialement,
Jean Dupont`
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setResponse(null);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data: ApiResponse = await res.json();
            setResponse(data);

        } catch (error) {
            setResponse({
                error: 'Erreur de connexion',
                details: [(error as Error).message]
            });
        } finally {
            setIsLoading(false);
        }
    };

    const previewEmail = () => {
        const url = '/api/test-email?format=html';
        window.open(url, '_blank');
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        setResponse(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        🧪 Test du Formulaire de Contact
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Cette page permet de tester l'API de contact et de prévisualiser les templates d'email
                        en temps réel sans avoir besoin d'envoyer de vrais emails.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Formulaire de test */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-900">
                                📝 Formulaire de Test
                            </h2>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={fillTestData}
                                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm hover:bg-blue-200 transition-colors"
                                >
                                    📋 Données test
                                </button>
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200 transition-colors"
                                >
                                    🗑️ Reset
                                </button>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nom *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Votre nom complet"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="votre.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Sujet *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Sujet de votre message"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                                    placeholder="Votre message détaillé..."
                                />
                            </div>

                            <div className="flex gap-3">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Envoi...
                                        </span>
                                    ) : (
                                        '📤 Tester l\'envoi'
                                    )}
                                </button>

                                <button
                                    type="button"
                                    onClick={previewEmail}
                                    className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                                >
                                    👁️ Préview Email
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Résultat */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">
                            📊 Résultat du Test
                        </h2>

                        {!response && (
                            <div className="text-center py-12 text-gray-500">
                                <div className="text-6xl mb-4">🎯</div>
                                <p>Remplissez le formulaire et cliquez sur "Tester l'envoi" pour voir le résultat.</p>
                            </div>
                        )}

                        {response && (
                            <div className="space-y-4">
                                {/* Status */}
                                <div className={`p-4 rounded-md ${response.success
                                        ? 'bg-green-50 border border-green-200'
                                        : 'bg-red-50 border border-red-200'
                                    }`}>
                                    <div className="flex items-center">
                                        <div className={`text-2xl mr-3 ${response.success ? 'text-green-600' : 'text-red-600'
                                            }`}>
                                            {response.success ? '✅' : '❌'}
                                        </div>
                                        <div>
                                            <h3 className={`font-medium ${response.success ? 'text-green-800' : 'text-red-800'
                                                }`}>
                                                {response.success ? 'Succès' : 'Erreur'}
                                            </h3>
                                            <p className={`text-sm ${response.success ? 'text-green-700' : 'text-red-700'
                                                }`}>
                                                {response.message || response.error}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Détails des erreurs */}
                                {response.details && response.details.length > 0 && (
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                                        <h4 className="font-medium text-yellow-800 mb-2">
                                            📋 Détails de l'erreur :
                                        </h4>
                                        <ul className="text-sm text-yellow-700 space-y-1">
                                            {response.details.map((detail, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="mr-2">•</span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* JSON brut pour debug */}
                                <details className="bg-gray-50 rounded-md p-4">
                                    <summary className="cursor-pointer font-medium text-gray-700 hover:text-gray-900">
                                        🔍 Voir la réponse JSON complète
                                    </summary>
                                    <pre className="mt-3 text-xs bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
                                        {JSON.stringify(response, null, 2)}
                                    </pre>
                                </details>
                            </div>
                        )}
                    </div>
                </div>

                {/* Liens utiles */}
                <div className="mt-8 bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">
                        🔗 Liens Utiles pour le Développement
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <a
                            href="/api/test-email?list=true"
                            target="_blank"
                            className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                        >
                            <div className="text-2xl mb-2">📧</div>
                            <h4 className="font-medium text-gray-900">Templates Email</h4>
                            <p className="text-sm text-gray-600">Voir tous les templates disponibles</p>
                        </a>

                        <a
                            href="/api/test-email"
                            target="_blank"
                            className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                        >
                            <div className="text-2xl mb-2">👁️</div>
                            <h4 className="font-medium text-gray-900">Préview Email</h4>
                            <p className="text-sm text-gray-600">Prévisualiser le template par défaut</p>
                        </a>

                        <a
                            href="/api/test-email?format=json"
                            target="_blank"
                            className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                        >
                            <div className="text-2xl mb-2">📊</div>
                            <h4 className="font-medium text-gray-900">API JSON</h4>
                            <p className="text-sm text-gray-600">Voir les données JSON de test</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}