import Hero from '@/components/Hero'

export const metadata = {
  title: 'Daniel Tomigo | Desarrollador Full Stack',
  description:
    'Portfolio profesional de Daniel Tomigo - Desarrollador Full Stack especializado en React, Next.js y tecnologías web modernas',
  keywords: [
    'desarrollador',
    'full stack',
    'react',
    'next.js',
    'javascript',
    'typescript',
  ],
  openGraph: {
    title: 'Daniel Tomigo | Desarrollador Full Stack',
    description: 'Portfolio profesional de Daniel Tomigo',
    url: 'https://daniel-tomigo.vercel.app',
    siteName: 'Daniel Tomigo Portfolio',
    images: [
      {
        url: 'https://daniel-tomigo.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Daniel Tomigo Portfolio',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
}

export default function Home() {
  return <Hero />
}
