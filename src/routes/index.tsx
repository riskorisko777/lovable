import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: LoginPage,
})

function LoginPage() {
  const navigate = useNavigate()

  const handleEntrar = () => {
    // Autenticacao desligada temporariamente: entra direto na area interna.
    navigate({ to: '/interna' })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-background p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground text-center">
          Bem-vindo
        </h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Clique em Entrar para acessar o sistema.
        </p>
        <button
          onClick={handleEntrar}
          className="mt-6 w-full rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Entrar
        </button>
      </div>
    </div>
  )
}
