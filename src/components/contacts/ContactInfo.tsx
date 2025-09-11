import { contactInfo } from "./solialLinks"

const ContactInfo = () => {
    return (
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
    )
}

export default ContactInfo