import { useNavigate, useLocation } from 'react-router-dom'
import Logo from '@/components/shared/Logo'
import { Plus } from 'lucide-react'

export function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const enNuevo = location.pathname === '/new'

  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6 sticky top-0 z-50"
      style={{ boxShadow: 'var(--shadow-xs)' }}>
      <div className="cursor-pointer" onClick={() => navigate('/')}>
        <Logo size="sm" />
      </div>
      <div className="flex items-center gap-3">
        {!enNuevo && (
          <button
            onClick={() => navigate('/new')}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Nuevo Analisis
          </button>
        )}
      </div>
    </header>
  )
}
