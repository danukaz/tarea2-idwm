export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground mt-16 py-6 text-center">
      <p>
        © {new Date().getFullYear()} Daniel Tomigo. Todos los derechos
        reservados.
      </p>
      <div className="mt-2 flex justify-center gap-4">
        <a href="https://github.com/danukaz/" target="_blank">
          GitHub
        </a>
        <a href="mailto:daniel.tomigo@alumnos.ucn.cl">Correo</a>
        <a href="https://www.instagram.com/danukz_/" target="_blank">
          Instagram
        </a>
        <a href="https://www.x.com/danukzz/" target="_blank">
          Twitter
        </a>
      </div>
    </footer>
  )
}
