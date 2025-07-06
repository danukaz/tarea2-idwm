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
  authors: [{ name: 'Daniel Tomigo' }],
  openGraph: {
    title: 'Daniel Tomigo | Desarrollador Full Stack',
    description:
      'Portfolio profesional de Daniel Tomigo - Desarrollador Full Stack especializado en React, Next.js y tecnologías web modernas',
    url: 'https://tarea2-idwm.vercel.app',
    siteName: 'Daniel Tomigo Portfolio',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function Home() {
  return <Hero />
}
