import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import path from 'path'

export const alt = 'Soulé Soumaré - Frontend / Full Stack Engineer'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    // Lecture de la photo depuis /public/sds.png (runtime Node.js)
    let photoSrc: string | undefined
    try {
        const photoBuffer = readFileSync(path.join(process.cwd(), 'public/sds.png'))
        photoSrc = `data:image/png;base64,${photoBuffer.toString('base64')}`
    } catch {
        // Fichier absent - OG sans photo
        photoSrc = undefined
    }

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #0f0c29 0%, #1a1a2e 55%, #16213e 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '0 80px',
                    gap: 64,
                    color: 'white',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                {/* Accent bar gauche */}
                <div style={{
                    position: 'absolute',
                    left: 0, top: 0, bottom: 0,
                    width: 8,
                    background: 'linear-gradient(180deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
                }} />

                {/* Photo de profil */}
                {photoSrc && (
                    <div style={{
                        display: 'flex',
                        flexShrink: 0,
                        width: 220,
                        height: 220,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '5px solid #6366f1',
                        boxShadow: '0 0 40px rgba(99,102,241,0.5)',
                    }}>
                        <img
                            src={photoSrc}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                )}

                {/* Texte */}
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1 }}>
                        Soulé Soumaré
                    </div>
                    <div style={{
                        fontSize: 30,
                        color: '#818cf8',
                        marginTop: 12,
                        fontWeight: 500,
                    }}>
                        Frontend / Full Stack Engineer
                    </div>
                    <div style={{
                        fontSize: 22,
                        color: '#94a3b8',
                        marginTop: 14,
                        letterSpacing: 0.5,
                    }}>
                        React · TypeScript · Testing Automation · Nest.js
                    </div>

                    {/* Badge disponibilité */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 28,
                        gap: 16,
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            background: 'rgba(34,197,94,0.15)',
                            border: '1.5px solid #22c55e',
                            color: '#4ade80',
                            padding: '8px 20px',
                            borderRadius: 24,
                            fontSize: 18,
                            fontWeight: 600,
                        }}>
                            <div style={{
                                background: '#6366f1',
                                borderRadius: '50%',
                            }} />
                            {process.env.NEXT_PUBLIC_PERSONAL_TITLE}
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            color: '#64748b',
                            fontSize: 16,
                        }}>
                            {process.env.NEXT_PUBLIC_LOCATION}
                        </div>
                    </div>

                    {/* URL */}
                    <div style={{
                        marginTop: 24,
                        fontSize: 18,
                        color: '#475569',
                        letterSpacing: 0.5,
                    }}>
                        {process.env.NEXT_PUBLIC_SITE_URL?.replace(/^https?:\/\//, '')}
                    </div>
                </div>
            </div>
        ),
        { ...size }
    )
}