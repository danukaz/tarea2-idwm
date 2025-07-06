'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Settings,
  Palette,
} from 'lucide-react'

interface SkillCategory {
  title: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  skills: {
    name: string
    level: number
    description?: string
  }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Lenguajes de Programación',
    icon: Code,
    skills: [
      {
        name: 'JavaScript',
        level: 90,
        description: 'ES6+, async/await, módulos',
      },
      {
        name: 'TypeScript',
        level: 85,
        description: 'Tipado estático, interfaces',
      },
      {
        name: 'Python',
        level: 75,
        description: 'Scripts, APIs, automatización',
      },
      { name: 'Dart', level: 70, description: 'Flutter, desarrollo móvil' },
      { name: 'Java', level: 65, description: 'POO, Spring Framework' },
    ],
  },
  {
    title: 'Frontend',
    icon: Globe,
    skills: [
      {
        name: 'React',
        level: 90,
        description: 'Hooks, Context API, componentes',
      },
      { name: 'Next.js', level: 85, description: 'SSR, SSG, App Router' },
      {
        name: 'HTML/CSS',
        level: 95,
        description: 'Semántico, responsive, grid/flexbox',
      },
      {
        name: 'Tailwind CSS',
        level: 90,
        description: 'Utility-first, responsive design',
      },
      { name: 'Vue.js', level: 70, description: 'Composition API, Nuxt.js' },
    ],
  },
  {
    title: 'Backend',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 80, description: 'Express, APIs REST' },
      {
        name: 'PostgreSQL',
        level: 75,
        description: 'Consultas complejas, optimización',
      },
      { name: 'MongoDB', level: 70, description: 'NoSQL, agregaciones' },
      { name: 'Firebase', level: 80, description: 'Firestore, Auth, Storage' },
      { name: 'Prisma', level: 75, description: 'ORM, migraciones' },
    ],
  },
  {
    title: 'Móvil',
    icon: Smartphone,
    skills: [
      { name: 'React Native', level: 80, description: 'Expo, navegación' },
      {
        name: 'Flutter',
        level: 75,
        description: 'Widgets, estado, animations',
      },
      { name: 'PWA', level: 85, description: 'Service Workers, offline' },
    ],
  },
  {
    title: 'Herramientas',
    icon: Settings,
    skills: [
      { name: 'Git', level: 85, description: 'Control de versiones, flujos' },
      { name: 'Docker', level: 70, description: 'Contenedores, compose' },
      { name: 'Webpack', level: 75, description: 'Bundling, optimización' },
      { name: 'Jest', level: 80, description: 'Testing, mocking' },
    ],
  },
  {
    title: 'Diseño',
    icon: Palette,
    skills: [
      { name: 'Figma', level: 80, description: 'Prototipado, componentes' },
      { name: 'Adobe XD', level: 75, description: 'Wireframes, mockups' },
      { name: 'UX/UI', level: 85, description: 'Usabilidad, accesibilidad' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="min-h-screen px-6 py-20 md:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Habilidades</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Tecnologías y herramientas que domino, organizadas por categorías
            con mi nivel de experiencia en cada una.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.title} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                      <IconComponent className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {category.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      {skill.description && (
                        <p className="text-muted-foreground text-xs">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-semibold">
            Otras Competencias
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Metodologías Ágiles',
              'Scrum',
              'CI/CD',
              'GraphQL',
              'REST APIs',
              'Microservicios',
              'Testing',
              'SEO',
              'Accesibilidad',
              'Performance',
              'Responsive Design',
              'Clean Code',
            ].map((skill) => (
              <Badge key={skill} variant="outline" className="px-4 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-semibold">
            Habilidades Blandas
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'Comunicación',
                description: 'Clara y efectiva con equipos multidisciplinarios',
              },
              {
                name: 'Resolución de Problemas',
                description: 'Enfoque analítico y creativo',
              },
              {
                name: 'Trabajo en Equipo',
                description: 'Colaboración y liderazgo',
              },
              {
                name: 'Adaptabilidad',
                description: 'Aprendizaje continuo y flexibilidad',
              },
            ].map((skill) => (
              <Card key={skill.name} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
