import { Routes, Route, Navigate } from 'react-router-dom'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { AnalysisPage } from '@/pages/AnalysisPage'
import { AnalysisDetailPage } from '@/pages/AnalysisDetailPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<AnalysisPage />} />
        <Route path="analysis/:id" element={<AnalysisDetailPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
