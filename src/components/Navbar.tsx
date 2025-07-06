'use client'

import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Sobre mí' },
  { href: '/projects', label: 'Proyectos' },
  { href: '/skills', label: 'Habilidades' },
  { href: '/contact', label: 'Contacto' },
  { href: '/timeline', label: 'Extra' },
]

export default function Navbar() {
  return (
    <nav className="bg-background fixed top-0 right-0 left-0 z-50 border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <span className="font-bold">Tomigo.dev</span>
        <ul className="flex gap-4">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  )
}
