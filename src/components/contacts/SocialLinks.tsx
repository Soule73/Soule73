import { SparklesIcon } from "@heroicons/react/16/solid"
import { socialLinks } from "./solialLinks"

const SocialLinks = () => {
    return (
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
    )
}

export default SocialLinks