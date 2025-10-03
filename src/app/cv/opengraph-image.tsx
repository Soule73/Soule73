import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'CV - Soulé Soumaré | Développeur Full Stack'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 60,
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'Inter',
                    position: 'relative',
                }}
            >
                <div style={{
                    position: 'absolute',
                    top: 40,
                    left: 60,
                    fontSize: 28,
                    opacity: 0.8
                }}>
                    CV
                </div>

                <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 20 }}>
                    Soulé Soumaré
                </div>
                <div style={{ fontSize: 36, fontWeight: 'normal', opacity: 0.9 }}>
                    Développeur Full Stack
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 40,
                    marginTop: 40,
                    fontSize: 20,
                    opacity: 0.8
                }}>
                    <div>3+ ans d&apos;expérience</div>
                    <div>TypeScript & Node.js, PHP (Laravel/Symfony)</div>
                    <div>React & Next.js, Java (Spring Boot)</div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}