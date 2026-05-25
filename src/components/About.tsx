import {
    RocketLaunchIcon,
    CodeBracketIcon,
    BriefcaseIcon,
    CheckCircleIcon,
    BeakerIcon,
    CommandLineIcon,
    CpuChipIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline'
import { qualities, stats } from './abouts/qualities'

// ── Données expériences ──────────────────────────────────────────
const experiences = [
    {
        id: 1,
        period: 'Nov 2025 - Juin 2026',
        jobTitle: 'Frontend Engineer - Testing & Quality',
        company: 'Opensee',
        location: 'Paris, France',
        type: 'Stage',
        typeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300',
        featured: true,
        icon: <BeakerIcon className="w-6 h-6 text-indigo-500" />,
        tags: ['React', 'TypeScript', 'Vitest', 'Jest', 'Playwright', 'NestJS', 'PostgreSQL', 'GraphQL', 'GitLab CI/CD'],
        highlights: [
            { text: 'Refonte complète de la suite de tests unitaires' },
            { text: 'Réactivation et stabilisation des pipelines CI/CD GitLab suspendus pendant la migration' },
            { text: 'Tests unitaires (Vitest) et E2E (Supertest, GraphQL Request) sur un backend NestJS / PostgreSQL' },
            { text: 'Tests unitaires et E2E Playwright pour une nouvelle application frontend IA Agentique' },
            { text: 'Contribution à une console Settings centralisée pour tous les produits Opensee' },
            { text: 'Collaboration transverse avec backend, DevOps, analytics et équipes IA en Agile' },
        ],
    },
    {
        id: 2,
        period: 'Mar 2025 - Août 2025',
        jobTitle: 'Mobile Developer & API',
        company: 'HudHud Shipping',
        location: 'Remote',
        type: 'Freelance',
        typeColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
        icon: <CpuChipIcon className="w-6 h-6 text-yellow-500" />,
        tags: ['Flutter', 'Dart', 'Spring Boot', 'React', 'REST API'],
        highlights: [
            { text: '2 apps Flutter (client & livreur) publiées sur Google Play Store et App Store' },
            { text: 'API REST Spring Boot pour la gestion livraisons + app admin React' },
        ],
    },
    {
        id: 3,
        period: 'Août 2024 - Nov 2025',
        jobTitle: 'Web Developer & Administrator',
        company: 'APSJ.org',
        location: 'Remote',
        type: 'Freelance',
        typeColor: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
        icon: <CommandLineIcon className="w-6 h-6 text-green-500" />,
        tags: ['WordPress', 'PHP', 'MySQL', 'SEO'],
        highlights: [
            { text: 'Refonte complète WordPress & Elementor, optimisation MySQL, SEO et déploiement Hostinger' },
        ],
    },
]

const About = () => {
    const featured = experiences.find((e) => e.featured)!
    const secondary = experiences.filter((e) => !e.featured)

    return (
        <section id="about" className="my-4 md:my-8 lg:my-12 relative particles-bg overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-float blur-xl" />
                <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-xl animate-float delay-200 blur-xl" />
                <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-pink-500/10 animate-morphing-blob blur-xl" />
            </div>

            <div className="relative z-10 section-center">
                {/* En-tête */}
                <div className="text-center mb-10">
                    <h2 className="mb-4 text-3xl md:text-5xl lg:text-6xl font-black gradient-text">À propos & Expériences</h2>
                    <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Mon parcours, mes <span className="gradient-text font-semibold">réalisations</span> et ce qui me distingue
                    </p>
                </div>

                {/* ── Texte + stats ── */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-10 md:px-4">
                    <AboutContent />
                    <StatsCompact />
                </div>

                {/* ── Expérience featured - Opensee ── */}
                <div className="mb-6 md:px-4">
                    <div className="glass dark:glass-dark rounded-3xl p-6 md:p-8 border border-indigo-500/30 shadow-xl shadow-indigo-500/10 hover-lift transition-all duration-300">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                    {featured.icon}
                                </div>
                                <div>
                                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                                        <h3 className="text-lg md:text-xl font-black text-gray-800 dark:text-gray-100">{featured.jobTitle}</h3>
                                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 border border-indigo-400/30">★ Principal</span>
                                    </div>
                                    <p className="text-base font-semibold gradient-text">{featured.company}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{featured.location}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`text-xs font-bold px-3 py-1 rounded-full ${featured.typeColor}`}>{featured.type}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">{featured.period}</span>
                            </div>
                        </div>
                        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2.5 mb-6">
                            {featured.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                                    <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span>{h.text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                            {featured.tags.map((tag) => (
                                <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-lg glass dark:glass-dark text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Expériences secondaires ── */}
                <div className="grid md:grid-cols-2 gap-6 mb-10 md:px-4">
                    {secondary.map((exp) => (
                        <div key={exp.id} className="glass dark:glass-dark rounded-3xl p-6 hover-lift transition-all duration-300">
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">{exp.icon}</div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base font-black text-gray-800 dark:text-gray-100 leading-tight">{exp.jobTitle}</h3>
                                    <p className="text-sm font-semibold gradient-text">{exp.company}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${exp.typeColor}`}>{exp.type}</span>
                                        <span className="text-xs text-gray-400 dark:text-gray-500">{exp.period}</span>
                                    </div>
                                </div>
                            </div>
                            <ul className="space-y-2 mb-4">
                                {exp.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                                        <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>{h.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-1.5">
                                {exp.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-semibold px-2 py-0.5 rounded-md glass dark:glass-dark text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Banner CDI ── */}
                <div className="mb-10 md:px-4">
                    <div className="glass dark:glass-dark rounded-3xl p-6 md:p-8 border border-green-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                <BriefcaseIcon className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <p className="font-black text-gray-800 dark:text-gray-100 text-lg">Disponible en CDI - dès juillet 2026</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Frontend / Full Stack Engineer · React · TypeScript · Testing · Paris</p>
                            </div>
                        </div>
                        <a href="#contact" className="group relative px-6 py-3 rounded-2xl font-bold text-sm overflow-hidden hover-lift transition-all duration-300 whitespace-nowrap glass dark:glass-dark">
                            <span className="relative z-10 text-gray-700 dark:text-gray-200 group-hover:text-white flex items-center gap-2">Me contacter</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-2xl" />
                        </a>
                    </div>
                </div>

                {/* ── Qualités ── */}
                <Qualities />
            </div>
        </section>
    )
}

const StatsCompact = () => (
    <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
            <div key={index} className={`group relative glass dark:glass-dark rounded-2xl p-5 hover-lift transition-all duration-300 text-center overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-3 mx-auto`}>{stat.icon}</div>
                <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>{stat.value}</div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
        ))}
    </div>
);

const Qualities = () => (
    <div className="mb-4 md:mb-8 lg:mb-12 md:px-4">
        <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black gradient-text mb-6">Ce qui me définit</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Les valeurs qui guident mon approche du développement</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {qualities.map((quality, index) => (
                <div
                    key={index}
                    className={`glass dark:glass-dark rounded-2xl p-6 hover-lift hover-glow transition-all duration-300 animate-fade-in-up delay-${index * 100}`}
                >
                    <div className="mb-4 animate-pulse-scale">{quality.icon}</div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">{quality.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{quality.description}</p>
                </div>
            ))}
        </div>
    </div>
);

const AboutContent = () => (
    <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        <h3 className="text-2xl md:text-4xl font-black text-gray-800 dark:text-gray-200 leading-tight">
            Frontend / <span className="gradient-text">Full Stack</span> Engineer
        </h3>
        <p className="flex items-start space-x-3">
            <RocketLaunchIcon className="w-6 h-6 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span>
                En stage chez <span className="gradient-text font-semibold">Opensee</span> (Fintech SaaS, Paris), je travaille sur les tests Unitaire & E2E, les pipelines CI/CD GitLab et le développement backend <strong>NestJS</strong>.
            </span>
        </p>
        <p className="flex items-start space-x-3">
            <CodeBracketIcon className="w-6 h-6 text-purple-500 mt-0.5 flex-shrink-0" />
            <span>
                Spécialisé en <span className="gradient-text font-semibold">testing automation</span> - Playwright, Vitest, React Testing Library - avec plus de <strong>500 tests écrits</strong> sur des applications SaaS en production.
            </span>
        </p>
        <p className="flex items-start space-x-3">
            <SparklesIcon className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
            <span>
                Diplômé d&apos;un <span className="gradient-text font-semibold">Master Expert IT</span> (IRIS Paris, 2026), je cherche un <strong>CDI à partir de juillet 2026</strong> pour contribuer à des produits ambitieux.
            </span>
        </p>
    </div>
);

export default About
