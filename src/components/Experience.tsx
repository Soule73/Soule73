'use client'

import {
  BriefcaseIcon,
  CheckCircleIcon,
  BeakerIcon,
  CommandLineIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline'

interface ExperienceItem {
  id: number
  period: string
  jobTitle: string
  company: string
  location: string
  type: string
  typeColor: string
  featured?: boolean
  icon: React.ReactNode
  tags: string[]
  highlights: { icon: React.ReactNode; text: string }[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    period: 'Nov 2025 - Jun 2026',
    jobTitle: 'Frontend Engineer - Testing & Quality',
    company: 'Opensee',
    location: 'Paris, France',
    type: 'Stage',
    typeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300',
    featured: true,
    icon: <BeakerIcon className="w-6 h-6 text-indigo-500" />,
    tags: ['React', 'TypeScript', 'Vitest', 'Jest', 'Playwright', 'NestJS', 'PostgreSQL', 'GraphQL', 'GitLab CI/CD'],
    highlights: [
      {
        icon: <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />,
        text: 'Rebuilt the entire unit test suite of the main React web app'
      },
      {
        icon: <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />,
        text: 'Reactivated and stabilized GitLab CI/CD testing pipelines that were suspended during migration'
      },
      {
        icon: <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />,
        text: 'Added unit tests (Vitest) and E2E tests (Supertest, GraphQL Request) on a Node.js / NestJS / PostgreSQL backend owned by the frontend team'
      },
      {
        icon: <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />,
        text: 'Added unit (Vitest) and E2E (Playwright) tests for a new Agentic AI frontend application'
      },
      {
        icon: <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />,
        text: 'Contributed to a centralized Settings console consolidating configurations across all Opensee products'
      },
      {
        icon: <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />,
        text: 'Collaborated cross-functionally with backend, DevOps, analytics and AI teams in an Agile environment'
      },
    ]
  },
  {
    id: 2,
    period: 'Mar 2025 - Aug 2025',
    jobTitle: 'Mobile Developer & API',
    company: 'HudHud Shipping',
    location: 'Remote',
    type: 'Freelance',
    typeColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
    icon: <CpuChipIcon className="w-6 h-6 text-yellow-500" />,
    tags: ['Flutter', 'Dart', 'Spring Boot', 'React', 'REST API'],
    highlights: [
      {
        icon: <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />,
        text: 'Developed two Flutter mobile apps (customer & delivery agent) published on Google Play Store and App Store'
      },
      {
        icon: <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />,
        text: 'Built a REST API with Spring Boot for delivery management and a React admin web app'
      },
    ]
  },
  {
    id: 3,
    period: 'Aug 2024 - Nov 2025',
    jobTitle: 'Web Developer & Administrator',
    company: 'APSJ.org',
    location: 'Remote',
    type: 'Freelance',
    typeColor: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
    icon: <CommandLineIcon className="w-6 h-6 text-green-500" />,
    tags: ['WordPress', 'PHP', 'MySQL', 'SEO'],
    highlights: [
      {
        icon: <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />,
        text: 'Full website redesign with WordPress & Elementor, MySQL optimization, SEO and deployment on Hostinger'
      },
    ]
  },
]

const featured = experiences.find((e) => e.featured)!
const secondary = experiences.filter((e) => !e.featured)

const Experience = () => {
  return (
    <section id="experience" className="relative my-4 md:my-8 lg:my-12 particles-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 bg-indigo-500/10 rounded-full animate-float blur-xl" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-500/10 animate-morphing-blob blur-xl" />
      </div>

      <div className="relative z-10 section-center">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-5xl lg:text-6xl font-black gradient-text">Expériences</h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Parcours professionnel &amp; <span className="gradient-text font-semibold">impact engineering</span>
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6 px-4">

          {/* ── Card Featured - Opensee ── */}
          <div className="glass dark:glass-dark rounded-3xl p-6 md:p-8 border border-indigo-500/30 shadow-xl shadow-indigo-500/10 hover-lift transition-all duration-300">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  {featured.icon}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <h3 className="text-lg md:text-xl font-black text-gray-800 dark:text-gray-100">{featured.jobTitle}</h3>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 border border-indigo-400/30">
                      ★ Principal
                    </span>
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

            {/* Highlights en 2 colonnes sur md+ */}
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2.5 mb-6">
              {featured.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm">
                  {h.icon}
                  <span>{h.text}</span>
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-lg glass dark:glass-dark text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── Expériences secondaires en 2 colonnes ── */}
          <div className="grid md:grid-cols-2 gap-6">
            {secondary.map((exp) => (
              <div key={exp.id} className="glass dark:glass-dark rounded-3xl p-6 hover-lift transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                    {exp.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <h3 className="text-base font-black text-gray-800 dark:text-gray-100 leading-tight">{exp.jobTitle}</h3>
                    </div>
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
                      {h.icon}
                      <span>{h.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold px-2 py-0.5 rounded-md glass dark:glass-dark text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── Banner CDI ── */}
          <div className="glass dark:glass-dark rounded-3xl p-6 md:p-8 border border-green-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <BriefcaseIcon className="w-6 h-6 text-indigo-500" />
              </div>
              <div>
                <p className="font-black text-gray-800 dark:text-gray-100 text-lg">Frontend Engineer en CDI @ Opensee</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">React · TypeScript · Testing Automation · Fintech SaaS · Paris</p>
              </div>
            </div>
            <a
              href="#contact"
              className="group relative px-6 py-3 rounded-2xl font-bold text-sm overflow-hidden hover-lift transition-all duration-300 whitespace-nowrap glass dark:glass-dark"
            >
              <span className="relative z-10 text-gray-700 dark:text-gray-200 group-hover:text-white flex items-center gap-2">
                Me contacter
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-2xl" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
