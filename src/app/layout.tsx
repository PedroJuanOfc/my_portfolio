import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pedro Juan • Portfólio',
  description: 'Portfólio de Pedro Juan — Desenvolvedor Full Stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
