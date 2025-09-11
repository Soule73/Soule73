import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid"
import { githubIcon, linkedinIcon } from "../svg"

const contactInfo = [
    {
        icon: <EnvelopeIcon className="w-6 h-6" />,
        title: 'Email',
        value: 'sourtoumo@gmail.com',
        link: 'mailto:sourtoumo@gmail.com',
        color: 'from-blue-500 to-cyan-500',
        description: 'Réponse sous 24h'
    },
    {
        icon: <PhoneIcon className="w-6 h-6" />,
        title: 'Téléphone',
        value: '+33 7 75 77 92 34',
        link: 'tel:+33775779234',
        color: 'from-green-500 to-emerald-500',
        description: 'Disponible à tout moment'
    },
    {
        icon: <MapPinIcon className="w-6 h-6" />,
        title: 'Localisation',
        value: 'Paris, France',
        link: '#',
        color: 'from-purple-500 to-pink-500',
        description: 'Fuseau GMT+1'
    }
]

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/soule73',
        icon: githubIcon,
        color: 'from-gray-700 to-gray-900'
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/soulé-soumaré',
        icon: linkedinIcon,
        color: 'from-blue-600 to-blue-700'
    },
    // {
    //     name: 'Twitter',
    //     url: 'https://twitter.com/sdssoum',
    //     icon: xIcon,
    //     color: 'from-sky-400 to-blue-500'
    // },
    // {
    //     name: 'Discord',
    //     url: 'https://discord.com/users/soule73',
    //     icon: discordIcon,
    //     color: 'from-indigo-500 to-purple-600'
    // }
]

export { contactInfo, socialLinks }