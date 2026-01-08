import Image from 'next/image'
import profileImage from '@/assets/sds.png'

interface ProfileAvatarProps {
    size?: number
    className?: string
    priority?: boolean
}

const ProfileAvatar = ({
    size = 300,
    className = '',
    priority = false
}: ProfileAvatarProps) => {
    return (
        <div className={`relative overflow-hidden rounded-full ${className}`}>
            <Image
                src={profileImage}
                alt="Soule73 - Développeur Full Stack"
                width={size}
                height={size}
                priority={priority}
                className="rounded-full object-cover profile-image-glow w-full h-full"
                style={{
                    aspectRatio: '1 / 1',
                }}
            />

            {/* Cercles animés autour de l'avatar */}
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 animate-pulse-scale"></div>
            <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-pulse-scale delay-500"></div>

            {/* Effet de lueur */}
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-indigo-500/20 to-purple-500/20 animate-pulse opacity-50"></div>
        </div>
    )
}

export default ProfileAvatar
