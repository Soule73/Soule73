import {
    RocketLaunchIcon,
    BeakerIcon,
    BoltIcon,
    PaintBrushIcon,
    BookOpenIcon,
    UserGroupIcon,
    CodeBracketIcon,
    EyeIcon
} from '@heroicons/react/24/outline'

const stats = [
    {
        label: 'Applications testées',
        value: '10+',
        icon: <RocketLaunchIcon className="w-8 h-8" />,
        color: 'from-indigo-500 to-blue-500'
    },
    {
        label: 'Tests écrits / réécrits',
        value: '500+',
        icon: <BeakerIcon className="w-8 h-8" />,
        color: 'from-purple-500 to-violet-500'
    },
    {
        label: 'Technologies maîtrisées',
        value: '15+',
        icon: <BoltIcon className="w-8 h-8" />,
        color: 'from-emerald-500 to-teal-500'
    },
]

const qualities = [
    {
        icon: <EyeIcon className="w-8 h-8 text-blue-500" />,
        title: 'Software Quality',
        description: 'Testing unitaire, E2E et intégration - chaque ligne de code est validée'
    },
    {
        icon: <CodeBracketIcon className="w-8 h-8 text-purple-500" />,
        title: 'Engineering mindset',
        description: 'Architecture solide, code maintenable et bonnes pratiques au quotidien'
    },
    {
        icon: <UserGroupIcon className="w-8 h-8 text-green-500" />,
        title: 'Collaboration',
        description: 'Travail transversal avec les équipes frontend, backend, DevOps et IA'
    },
    {
        icon: <BookOpenIcon className="w-8 h-8 text-orange-500" />,
        title: 'Ownership',
        description: 'Je prends en charge des sujets de bout en bout avec autonomie'
    },
    {
        icon: <PaintBrushIcon className="w-8 h-8 text-indigo-500" />,
        title: 'Adaptabilité',
        description: 'Capacité à monter rapidement en compétence sur de nouveaux frameworks, contextes métier et environnements techniques'
    },
    {
        icon: <BoltIcon className="w-8 h-8 text-yellow-500" />,
        title: 'Performance & CI/CD',
        description: 'Pipelines GitLab CI/CD, optimisation et livraison continue fiable'
    }
]

export { stats, qualities }