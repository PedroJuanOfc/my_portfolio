import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function Contact() {
  return (
    <section id="contact" className="space-y-4 py-16 border-t">
      <h2 className="text-2xl font-semibold">Contato</h2>

      <form className="grid gap-4 max-w-xl" action="#" method="post">
        <div className="grid gap-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" name="name" required />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" name="email" required />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">Mensagem</Label>
          <Textarea id="message" name="message" required />
        </div>

        <Button type="submit">Enviar</Button>
      </form>

      <Separator />

      <div className="grid sm:grid-cols-2 gap-3 text-sm">
        <div>
          <span className="font-medium">WhatsApp:</span>{' '}
          <a
            className="underline"
            href="https://wa.me/5561996334986"
            target="_blank"
          >
            (61) 99633-4986
          </a>
        </div>
        <div>
          <span className="font-medium">E-mail:</span>{' '}
          <a className="underline" href="mailto:pedrosaraivaofc@gmail.com">
            pedrosaraivaofc@gmail.com
          </a>
        </div>
        <div>
          <span className="font-medium">GitHub:</span>{' '}
          <a
            className="underline"
            href="https://github.com/PedroJuanOfc"
            target="_blank"
          >
            @PedroJuanOfc
          </a>
        </div>
        <div>
          <span className="font-medium">LinkedIn:</span>{' '}
          <a
            className="underline"
            href="https://www.linkedin.com/in/pedro-juan-ferreira-saraiva"
            target="_blank"
          >
            /in/pedro-juan-ferreira-saraiva
          </a>
        </div>
      </div>
    </section>
  )
}
