'use client'

import ProjectCard, { Project } from './ProjectCard'

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Moderno',
    description:
      'Plataforma de comercio electrónico completa con carrito de compras, procesamiento de pagos y panel de administración. Construida con Next.js y integrada con Stripe para pagos seguros.',
    image: '/images/projects/e-commerce.jpg',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Stripe',
      'PostgreSQL',
    ],
    demoUrl: '/demo',
    codeUrl: 'https://github.com/danukaz/Taller1IDWM',
  },
  {
    id: '2',
    title: 'Dashboard Analytics',
    description:
      'Dashboard interactivo para visualización de datos con gráficos dinámicos, filtros avanzados y reportes personalizables. Perfecto para análisis de métricas empresariales.',
    image: '/images/projects/analytics.png',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Material-UI', 'Node.js'],
    demoUrl: '/demo',
    codeUrl: 'https://github.com/danukaz/Taller1IDWM',
  },
  {
    id: '3',
    title: 'Portfolio Interactivo',
    description:
      'Sitio web personal con animaciones suaves, modo oscuro/claro y optimización SEO. Desarrollado con las mejores prácticas de performance y accesibilidad.',
    image: '/images/projects/portfolio.png',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Vercel',
    ],
    demoUrl: '/demo',
    codeUrl: 'https://github.com/danukaz/Taller1IDWM',
  },
]

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-20 md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Proyectos</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Una selección de proyectos que demuestran mis habilidades y
            experiencia en diferentes tecnologías y áreas de desarrollo.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            ¿Interesado en ver más proyectos o colaborar en uno nuevo?
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/danukaz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 transition-colors"
            >
              Ver más en GitHub
            </a>
            <a
              href="/contact"
              className="border-border hover:bg-accent inline-flex items-center gap-2 rounded-lg border px-6 py-3 transition-colors"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
