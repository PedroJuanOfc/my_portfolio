import { Card, CardContent } from '@/components/ui/card'

const items = [
  { id: 1, title: 'Projeto 1', desc: 'Descrição breve do projeto 1.' },
  { id: 2, title: 'Projeto 2', desc: 'Descrição breve do projeto 2.' },
  { id: 3, title: 'Projeto 3', desc: 'Descrição breve do projeto 3.' },
]

export default function Projects() {
  return (
    <section id="projects" className="space-y-4 py-16 border-t">
      <h2 className="text-2xl font-semibold">Projetos</h2>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((p) => (
          <Card key={p.id} className="overflow-hidden">
            {/* Placeholder da imagem do projeto — trocaremos por <Image /> depois */}
            <div className="aspect-video bg-muted" />
            <CardContent className="p-4">
              <div className="font-medium">{p.title}</div>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
