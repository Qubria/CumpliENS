import { Shield } from 'lucide-react'

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <Shield className="h-5 w-5 text-primary-600" />
        <span className="font-semibold text-gray-900">CumpliENS</span>
        <span className="text-xs text-gray-400">Auditor ENS</span>
      </div>
      <div />
    </header>
  )
}
