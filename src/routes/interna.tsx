import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/interna')({
  component: InternaPage,
})

function InternaPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground">Area interna</h1>
        <p className="mt-3 text-muted-foreground">
          Voce esta dentro do sistema.
        </p>
      </div>
    </div>
  )
}
