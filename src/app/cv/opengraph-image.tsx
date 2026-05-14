import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import path from 'path'

export const alt = 'CV - Soulé Soumaré | Frontend / Full Stack Engineer'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    let photoSrc: string | undefined
    try {
        const photoBuffer = readFileSync(path.join(process.cwd(), 'public/sds.png'))
        photoSrc = `data:image/png;base64,${photoBuffer.toString('base64')}`
    } catch {
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
                {/* Accent bar */}
                <div style={{
                    position: 'absolute',
                    left: 0, top: 0, bottom: 0,
                    width: 8,
                    background: 'linear-gradient(180deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
                }} />

                {/* Badge CV en haut à droite */}
                <div style={{
                    position: 'absolute',
                    top: 40,
                    right: 80,
                    background: 'rgba(99,102,241,0.2)',
                    border: '1.5px solid #6366f1',
                    color: '#818cf8',
                    padding: '6px 18px',
                    borderRadius: 20,
                    fontSize: 20,
                    fontWeight: 600,
                    display: 'flex',
                }}>
                    Curriculum Vitæ
                </div>

                {/* Photo */}
                {photoSrc && (
                    <div style={{
                        display: 'flex',
                        flexShrink: 0,
                        width: 200,
                        height: 200,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '5px solid #3b82f6',
                        boxShadow: '0 0 40px rgba(59,130,246,0.4)',
                    }}>
                        <img
                            src={photoSrc}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                )}

                {/* Texte */}
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
                        Soulé Soumaré
                    </div>
                    <div style={{ fontSize: 28, color: '#60a5fa', marginTop: 12, fontWeight: 500 }}>
                        Frontend / Full Stack Engineer
                    </div>

                    {/* Compétences clés */}
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 12, marginTop: 20 }}>
                        {['React', 'TypeScript', 'Playwright', 'Vitest', 'NestJS'].map((tech) => (
                            <div key={tech} style={{
                                display: 'flex',
                                background: 'rgba(255,255,255,0.08)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                color: '#e2e8f0',
                                padding: '6px 14px',
                                borderRadius: 8,
                                fontSize: 17,
                            }}>
                                {tech}
                            </div>
                        ))}
                    </div>

                    {/* Expérience Opensee */}
                    <div style={{ marginTop: 20, fontSize: 19, color: '#94a3b8' }}>
                        Stage · Opensee (Fintech SaaS) - Paris
                    </div>

                    <div style={{ marginTop: 8, fontSize: 18, color: '#475569' }}>
                        soulesoumare.dev/cv
                    </div>
                </div>
            </div>
        ),
        { ...size }
    )
}