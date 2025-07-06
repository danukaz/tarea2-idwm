'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react'

interface TimelineEvent {
  id: string
  title: string
  company: string
  location: string
  date: string
  description: string
  achievements: string[]
  technologies?: string[]
  type: 'work' | 'education' | 'certification'
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    title: 'Desarrollador Full Stack Senior',
    company: 'TechSolutions SpA',
    location: 'Santiago, Chile',
    date: '2023 - Presente',
    description:
      'Lidero el desarrollo de aplicaciones web y móviles para clientes enterprise, implementando arquitecturas escalables y optimizadas.',
    achievements: [
      'Reduje el tiempo de carga de aplicaciones en un 40%',
      'Implementé sistema de autenticación con JWT',
      'Lideré equipo de 4 desarrolladores junior',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    type: 'work',
  },
  {
    id: '2',
    title: 'Desarrollador Frontend',
    company: 'StartupTech',
    location: 'Antofagasta, Chile',
    date: '2022 - 2023',
    description:
      'Desarrollo de interfaces de usuario modernas y responsivas para aplicaciones SaaS.',
    achievements: [
      'Migré codebase de JavaScript a TypeScript',
      'Implementé design system con Storybook',
      'Mejoré la accesibilidad web (WCAG 2.1)',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
    type: 'work',
  },
  {
    id: '3',
    title: 'Desarrollador Junior',
    company: 'WebAgency',
    location: 'Antofagasta, Chile',
    date: '2021 - 2022',
    description:
      'Desarrollo de sitios web y aplicaciones para pequeñas y medianas empresas.',
    achievements: [
      'Desarrollé más de 15 sitios web corporativos',
      'Implementé SEO técnico en todos los proyectos',
      'Mantuve 99% de uptime en hosting',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP'],
    type: 'work',
  },
  {
    id: '4',
    title: 'Ingeniería Civil en Computación e Informática',
    company: 'Universidad Católica del Norte',
    location: 'Antofagasta, Chile',
    date: '2022 - 2026',
    description:
      'Titulado con distinción en Ingeniería en Informática, especialización en desarrollo de software.',
    achievements: [
      'Promedio 6.2/7.0 (Distinción)',
      'Ayudante en Programación Web',
      'Tesis: "Sistema de gestión inteligente para inventarios"',
    ],
    technologies: ['Java', 'Python', 'C++', 'SQL', 'Git'],
    type: 'education',
  },
  {
    id: '5',
    title: 'AWS Cloud Practitioner',
    company: 'Amazon Web Services',
    location: 'Online',
    date: '2023',
    description:
      'Certificación en fundamentos de AWS Cloud Computing y servicios principales.',
    achievements: [
      'Comprensión de arquitecturas cloud',
      'Conocimiento de servicios AWS core',
      'Principios de seguridad y compliance',
    ],
    type: 'certification',
  },
  {
    id: '6',
    title: 'React Developer Certification',
    company: 'Meta (Facebook)',
    location: 'Online',
    date: '2022',
    description:
      'Certificación profesional en desarrollo con React y ecosistema relacionado.',
    achievements: [
      'Desarrollo de aplicaciones React avanzadas',
      'Manejo de estado con Redux',
      'Testing con Jest y React Testing Library',
    ],
    technologies: ['React', 'Redux', 'Jest', 'JavaScript'],
    type: 'certification',
  },
]

const getIcon = (type: string) => {
  switch (type) {
    case 'work':
      return Calendar
    case 'education':
      return BookOpen
    case 'certification':
      return Award
    default:
      return Calendar
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'work':
      return 'bg-blue-500'
    case 'education':
      return 'bg-green-500'
    case 'certification':
      return 'bg-purple-500'
    default:
      return 'bg-gray-500'
  }
}

export default function Timeline() {
  return (
    <section className="min-h-screen px-6 py-20 md:px-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Mi Trayectoria
          </h2>
          <p className="text-muted-foreground text-lg">
            Un recorrido por mi experiencia profesional, educación y
            certificaciones
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="bg-border absolute top-0 bottom-0 left-8 w-0.5"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineEvents.map((event) => {
              const IconComponent = getIcon(event.type)
              return (
                <div key={event.id} className="relative flex items-start gap-6">
                  {/* Icon */}
                  <div
                    className={`h-16 w-16 rounded-full ${getTypeColor(event.type)} z-10 flex items-center justify-center`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <Card className="w-full">
                      <CardHeader>
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <CardTitle className="text-xl">
                              {event.title}
                            </CardTitle>
                            <CardDescription className="text-primary text-lg font-medium">
                              {event.company}
                            </CardDescription>
                          </div>
                          <div className="flex flex-col gap-1 sm:items-end">
                            <div className="text-muted-foreground flex items-center gap-1 text-sm">
                              <Calendar className="h-4 w-4" />
                              {event.date}
                            </div>
                            <div className="text-muted-foreground flex items-center gap-1 text-sm">
                              <MapPin className="h-4 w-4" />
                              {event.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                          {event.description}
                        </p>

                        {/* Achievements */}
                        <div>
                          <h4 className="mb-2 font-semibold">
                            Logros principales:
                          </h4>
                          <ul className="space-y-1">
                            {event.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-muted-foreground flex items-start gap-2 text-sm"
                              >
                                <span className="bg-primary mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        {event.technologies && (
                          <div>
                            <h4 className="mb-2 font-semibold">Tecnologías:</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            ¿Quieres saber más sobre mi experiencia o discutir una oportunidad?
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/cv.pdf"
              download
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 transition-colors"
            >
              Descargar CV
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
