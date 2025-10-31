export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-5xl px-4 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Pedro Juan — Todos os direitos reservados.
      </div>
    </footer>
  )
}
