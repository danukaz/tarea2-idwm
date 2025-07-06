import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contacto | Daniel Tomigo',
  description:
    'Ponte en contacto con Daniel Tomigo para proyectos, colaboraciones o consultas',
  openGraph: {
    title: 'Contacto | Daniel Tomigo',
    description:
      'Ponte en contacto con Daniel Tomigo para proyectos, colaboraciones o consultas',
  },
}

export default function ContactPage() {
  return <ContactForm />
}
