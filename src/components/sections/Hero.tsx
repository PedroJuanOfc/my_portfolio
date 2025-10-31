import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="grid gap-8 md:grid-cols-2 md:items-center">
      <div className="text-center md:text-left space-y-4">
        <p className="inline-flex items-center justify-center md:justify-start rounded-full border px-3 py-1 text-sm">
          Desenvolvedor Full Stack
        </p>

        <h1 className="text-3xl md:text-5xl font-bold">
          Olá, meu nome é Pedro Juan
        </h1>

        <p className="text-muted-foreground">
          Eu construo experiências web rápidas e elegantes.
        </p>

        <div className="flex justify-center md:justify-start gap-3 pt-2">
          <a href="#projects">
            <Button>Ver Projetos</Button>
          </a>
          <a href="/cv.pdf" download>
            <Button variant="outline">Baixar CV</Button>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="h-56 w-56 rounded-full bg-muted" />
      </div>
    </section>
  )
}
