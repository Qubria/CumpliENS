import { NavLink } from 'react-router-dom'
import {
  ScanSearch,
  History,
  Home,
} from 'lucide-react'
import { LogoMark } from '@/components/shared/Logo'

const ELEMENTOS_NAV = [
  { to: '/', icono: Home, etiqueta: 'Inicio' },
  { to: '/new', icono: ScanSearch, etiqueta: 'Nuevo Analisis' },
  { to: '/history', icono: History, etiqueta: 'Historial' },
]

export function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-sidebar-border">
        <LogoMark size={28} />
        <div className="ml-3">
          <h1 className="text-sm font-bold text-text-heading">
            <span>Cumpli</span>
            <span className="text-primary">ENS</span>
          </h1>
          <p className="text-xs text-text-muted">Auditor ENS</p>
        </div>
      </div>

      {/* Navegacion */}
      <nav className="flex-1 py-4 px-3 space-y-1">
        {ELEMENTOS_NAV.map((elemento) => (
          <NavLink
            key={elemento.to}
            to={elemento.to}
            end={elemento.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-sidebar-accent text-sidebar-primary'
                  : 'text-text-body hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              }`
            }
          >
            <elemento.icono className="h-5 w-5" />
            {elemento.etiqueta}
          </NavLink>
        ))}
      </nav>

      {/* Version del sistema */}
      <div className="p-4 border-t border-sidebar-border">
        <p className="text-xs text-text-placeholder text-center">v0.1.0 - Beta</p>
      </div>
    </aside>
  )
}
