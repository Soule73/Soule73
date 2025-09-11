import {
    RocketLaunchIcon,
    ClockIcon,
    BoltIcon,
    PaintBrushIcon,
    BookOpenIcon,
    UserGroupIcon,
    CodeBracketIcon,
    EyeIcon
} from '@heroicons/react/24/outline'

const stats = [
    {
        label: 'Projets réalisés',
        value: '25+',
        icon: <RocketLaunchIcon className="w-8 h-8" />,
        color: 'from-blue-500 to-cyan-500'
    },
    {
        label: 'Années d\'expérience',
        value: '5+',
        icon: <ClockIcon className="w-8 h-8" />,
        color: 'from-purple-500 to-pink-500'
    },
    // {
    //     label: 'Clients satisfaits',
    //     value: '15+',
    //     icon: <FaceSmileIcon className="w-8 h-8" />,
    //     color: 'from-green-500 to-emerald-500'
    // },
    {
        label: 'Technologies maîtrisées',
        value: '12+',
        icon: <BoltIcon className="w-8 h-8" />,
        color: 'from-orange-500 to-red-500'
    },
]

const qualities = [
    {
        icon: <PaintBrushIcon className="w-8 h-8 text-blue-500" />,
        title: 'Créativité & Innovation',
        description: 'Chaque projet est une toile vierge pour exprimer ma créativité'
    },
    {
        icon: <CodeBracketIcon className="w-8 h-8 text-purple-500" />,
        title: 'Code de qualité',
        description: 'Attention aux détails et aux bonnes pratiques de développement'
    },
    {
        icon: <UserGroupIcon className="w-8 h-8 text-green-500" />,
        title: 'Collaboration',
        description: 'Travail d\'équipe efficace et communication transparente'
    },
    {
        icon: <BookOpenIcon className="w-8 h-8 text-orange-500" />,
        title: 'Apprentissage continu',
        description: 'Veille technologique et formation continue'
    },
    {
        icon: <EyeIcon className="w-8 h-8 text-indigo-500" />,
        title: 'Accessibilité',
        description: 'Applications inclusives et accessibles à tous'
    },
    {
        icon: <BoltIcon className="w-8 h-8 text-yellow-500" />,
        title: 'Performance',
        description: 'Optimisation et expérience utilisateur fluide'
    }
]

export { stats, qualities }