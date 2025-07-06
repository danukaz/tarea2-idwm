'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col-reverse items-center justify-center gap-10 px-6 py-20 md:flex-row md:px-16">
      {/* Texto */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          ¡Hola! Soy <span className="text-primary">Daniel Tomigo</span>
        </h1>
        <p className="text-muted-foreground mb-6 text-lg md:text-xl">
          Desarrollador apasionado por crear experiencias web modernas y
          accesibles.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          <Button asChild>
            <Link href="/about">Conóceme</Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="/cv.pdf" download>
              Descargar CV
            </a>
          </Button>
        </div>
      </div>

      {/* Imagen */}
      <div className="relative h-40 w-40 overflow-hidden rounded-full md:h-64 md:w-64">
        <Image
          src="/images/profile.png"
          alt="Tu nombre"
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}
