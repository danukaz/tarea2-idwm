'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Code, Database, Globe, Smartphone } from 'lucide-react'

const techBadges = [
  { name: 'JavaScript', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'React', icon: Globe },
  { name: 'Next.js', icon: Globe },
  { name: 'Node.js', icon: Database },
  { name: 'Python', icon: Code },
  { name: 'Flutter', icon: Smartphone },
  { name: 'Tailwind CSS', icon: Globe },
]

export default function AboutMe() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-20 md:px-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Sobre Mí</h2>
          <p className="text-muted-foreground text-lg">
            Conoce un poco más sobre mi historia y experiencia
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="relative mx-auto h-80 w-80 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/profile.png"
              alt="Daniel Tomigo - Desarrollador"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-2xl font-semibold">¡Hola! Soy Daniel</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Soy un desarrollador apasionado por la tecnología y la creación
                de experiencias digitales innovadoras. Con más de 3 años de
                experiencia en desarrollo web y móvil, me especializo en crear
                soluciones eficientes y escalables.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Mi enfoque principal está en el desarrollo frontend con React y
                Next.js, pero también tengo experiencia en backend con Node.js y
                Python. Me encanta aprender nuevas tecnologías y mantenerme al
                día con las últimas tendencias.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cuando no estoy programando, disfruto de la fotografía, los
                videojuegos y explorar nuevos lugares. Siempre estoy buscando
                nuevos desafíos y oportunidades para crecer profesionalmente.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="mb-4 text-xl font-semibold">
                Tecnologías Principales
              </h4>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((tech) => {
                  const IconComponent = tech.icon
                  return (
                    <Badge
                      key={tech.name}
                      variant="secondary"
                      className="flex items-center gap-1 px-3 py-1"
                    >
                      <IconComponent className="h-4 w-4" />
                      {tech.name}
                    </Badge>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
