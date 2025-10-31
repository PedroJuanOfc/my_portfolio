'use client'
import { Link } from 'react-scroll'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <nav className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">
        <div className="font-semibold text-lg">Pedro Juan</div>

        <div className="hidden sm:flex items-center gap-6 text-sm">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            Sobre
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            Projetos
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            Formação
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline"
          >
            Contato
          </Link>
        </div>

        <Button variant="outline" size="sm" asChild>
          <a href="/cv.pdf" download>
            Baixar CV
          </a>
        </Button>
      </nav>
    </header>
  )
}
