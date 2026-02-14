import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  FileText,
  ScanSearch,
  History,
  Shield,
  BookOpen,
} from 'lucide-react'

const ELEMENTOS_NAV = [
  { to: '/', icono: LayoutDashboard, etiqueta: 'Dashboard' },
  { to: '/documents', icono: FileText, etiqueta: 'Documentos' },
  { to: '/analysis', icono: ScanSearch, etiqueta: 'Nuevo Analisis' },
  { to: '/history', icono: History, etiqueta: 'Historial' },
  { to: '/admin/normas', icono: BookOpen, etiqueta: 'Normas CCN-STIC' },
]

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <Shield className="h-8 w-8 text-primary-600" />
        <div className="ml-3">
          <h1 className="text-sm font-bold text-gray-900">ENS Compliance</h1>
          <p className="text-xs text-gray-500">Auditor</p>
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
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
          >
            <elemento.icono className="h-5 w-5" />
            {elemento.etiqueta}
          </NavLink>
        ))}
      </nav>

      {/* Version del sistema */}
      <div className="p-4 border-t border-gray-200">
        <p className="text-xs text-gray-400 text-center">v0.1.0 - Beta</p>
      </div>
    </aside>
  )
}
