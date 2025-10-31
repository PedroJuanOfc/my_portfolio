import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Education from '@/components/sections/Education'

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <Hero />
      <About />
      <Projects />
      <Education />
    </main>
  )
}
