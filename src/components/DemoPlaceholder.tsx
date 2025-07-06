'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, User, Check, Construction } from 'lucide-react'
export default function DemoPlaceholder() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-20 text-center md:px-16">
      {/* Ícono de construcción - Usando el mismo sistema de diseño */}
      <div className="relative mb-8 h-24 w-24 md:h-32 md:w-32">
        <Construction className="text-primary h-full w-full" />
      </div>

      {/* Texto - Manteniendo la tipografía de tu Hero */}
      <div className="max-w-2xl">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">
          <span className="text-primary">Demo</span> en construcción
        </h1>
        <p className="text-muted-foreground mb-6 text-lg md:text-xl">
          Estamos trabajando en esta demostración interactiva. Mientras tanto,
          puedes explorar el código fuente o aprender más sobre mi enfoque de
          desarrollo.
        </p>

        {/* Botones - Iguales a tu Hero */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild className="gap-2">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4" />
              Volver a proyectos
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">
              <User className="mr-2 h-4 w-4" />
              Sobre mi proceso
            </Link>
          </Button>
        </div>
      </div>

      {/* Sección adicional opcional */}
      <div className="bg-accent/50 mt-16 max-w-3xl rounded-lg p-6">
        <h3 className="mb-3 font-medium">¿Qué encontrarás aquí?</h3>
        <ul className="text-muted-foreground grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
          <li className="flex items-center gap-2">
            <Check className="text-primary h-4 w-4" />
            Demo interactiva
          </li>
          <li className="flex items-center gap-2">
            <Check className="text-primary h-4 w-4" />
            Caso de estudio
          </li>
          <li className="flex items-center gap-2">
            <Check className="text-primary h-4 w-4" />
            Detalles técnicos
          </li>
        </ul>
      </div>
    </section>
  )
}
