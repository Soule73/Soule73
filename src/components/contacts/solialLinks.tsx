import { MapPinIcon } from "@heroicons/react/16/solid"
import { githubIcon, linkedinIcon } from "../svg"
import { personal } from "../../lib/personal"

const contactInfo = [
    {
        icon: <MapPinIcon className="w-6 h-6" />,
        title: 'Localisation',
        value: personal.location,
        link: '#',
        color: 'from-purple-500 to-pink-500',
        description: 'Fuseau GMT+1'
    }
]

const socialLinks = [
    {
        name: 'GitHub',
        url: personal.github.url,
        icon: githubIcon,
        color: 'from-gray-700 to-gray-900'
    },
    {
        name: 'LinkedIn',
        url: personal.linkedin.url,
        icon: linkedinIcon,
        color: 'from-blue-600 to-blue-700'
    },
]

export { contactInfo, socialLinks }