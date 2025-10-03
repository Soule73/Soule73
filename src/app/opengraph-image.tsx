import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Soulé Soumaré - Développeur Full Stack'
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
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'Inter',
                }}
            >
                <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 20 }}>
                    Soulé Soumaré
                </div>
                <div style={{ fontSize: 36, fontWeight: 'normal', opacity: 0.9 }}>
                    Développeur Full Stack
                </div>
                <div style={{
                    fontSize: 24,
                    fontWeight: 'normal',
                    opacity: 0.8,
                    marginTop: 20,
                    textAlign: 'center'
                }}>
                    React • Next.js • TypeScript • Node.js
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}