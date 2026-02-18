import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RISK_COLORS } from "@/config/chartColors";
import { RISK_LEVELS } from "@/config/designTokens";
import RiskBars from "@/components/charts/RiskBars";
import type { RiskBarData } from "@/components/charts/RiskBars";
import RiskBadge from "@/components/shared/RiskBadge";
import ComplianceBadge from "@/components/shared/ComplianceBadge";
import type { RiskLevelKey, ComplianceStatusKey } from "@/config/designTokens";
import type { BaseDatos, NivelCumplimiento, PrioridadHallazgo } from "@/types/database";

type FilaHallazgo = BaseDatos['public']['Tables']['hallazgos_analisis']['Row']

const NIVEL_A_STATUS: Record<NivelCumplimiento, ComplianceStatusKey> = {
  CONFORME: 'cumple',
  PARCIALMENTE_CONFORME: 'parcial',
  NO_CONFORME: 'nocumple',
  NO_APLICA: 'noaplica',
}

const PRIORIDAD_A_RIESGO: Record<PrioridadHallazgo, RiskLevelKey> = {
  CRITICA: 'critico',
  ALTA: 'alto',
  MEDIA: 'medio',
  BAJA: 'bajo',
}

interface RiesgosTabProps {
  hallazgos: FilaHallazgo[];
  datosRiesgo: RiskBarData;
}

export default function RiesgosTab({ hallazgos, datosRiesgo }: RiesgosTabProps) {
  const riskKpis = (Object.keys(RISK_LEVELS) as RiskLevelKey[]).map((key) => ({
    key,
    label: RISK_LEVELS[key].label,
    value: datosRiesgo[key],
    color: RISK_COLORS[key].fill,
  }));

  const criticalMeasures = hallazgos.filter(
    (h) => h.prioridad === 'CRITICA' || h.prioridad === 'ALTA'
  );

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {riskKpis.map((kpi) => (
          <Card key={kpi.key}>
            <CardContent className="p-4">
              <p className="text-3xl font-bold tracking-tight" style={{ color: kpi.color }}>
                {kpi.value}
              </p>
              <p className="text-xs text-text-muted mt-0.5">{kpi.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Risk bars chart */}
      <Card>
        <CardHeader className="pb-0">
          <CardTitle className="text-sm font-medium text-text-muted">
            Distribucion de riesgos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RiskBars data={datosRiesgo} />
        </CardContent>
      </Card>

      {/* Critical measures table */}
      {criticalMeasures.length > 0 && (
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-sm font-medium text-text-muted">
              Medidas criticas y altas
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 mt-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-6 py-2.5 text-xs font-medium text-text-placeholder uppercase tracking-wider">
                      Codigo
                    </th>
                    <th className="text-left px-4 py-2.5 text-xs font-medium text-text-placeholder uppercase tracking-wider">
                      Medida
                    </th>
                    <th className="text-left px-4 py-2.5 text-xs font-medium text-text-placeholder uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="text-left px-6 py-2.5 text-xs font-medium text-text-placeholder uppercase tracking-wider">
                      Riesgo
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  {criticalMeasures.map((h) => (
                    <tr key={h.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-2.5 font-mono text-xs text-text-muted whitespace-nowrap">
                        {h.control_id}
                      </td>
                      <td className="px-4 py-2.5 text-text-body">{h.nombre_control}</td>
                      <td className="px-4 py-2.5">
                        <ComplianceBadge status={NIVEL_A_STATUS[h.nivel_cumplimiento]} />
                      </td>
                      <td className="px-6 py-2.5">
                        {h.prioridad && (
                          <RiskBadge level={PRIORIDAD_A_RIESGO[h.prioridad as PrioridadHallazgo]} />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
