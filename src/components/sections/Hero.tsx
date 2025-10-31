import { Button } from '@/components/ui/button'
import Image from 'next/image'

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
        <Image
          src="/profile.png"
          alt="Foto de Pedro Juan"
          width={320} // antes: 224
          height={320} // antes: 224
          className="rounded-full object-cover shadow-md"
          sizes="(min-width: 768px) 320px, 256px"
        />
      </div>
    </section>
  )
}
