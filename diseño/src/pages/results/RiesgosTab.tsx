import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RISK_COUNT, MEDIDAS } from "@/data/mockData";
import { RISK_COLORS } from "@/config/chartColors";
import { RISK_LEVELS } from "@/config/designTokens";
import RiskBars from "@/components/charts/RiskBars";
import RiskBadge from "@/components/shared/RiskBadge";
import ComplianceBadge from "@/components/shared/ComplianceBadge";
import type { RiskLevelKey } from "@/config/designTokens";

const riskKpis = (Object.keys(RISK_LEVELS) as RiskLevelKey[]).map((key) => ({
  key,
  label: RISK_LEVELS[key].label,
  value: RISK_COUNT[key],
  color: RISK_COLORS[key].fill,
}));

const criticalMeasures = MEDIDAS.filter(
  (m) => m.riesgo === "critico" || m.riesgo === "alto"
);

export default function RiesgosTab() {
  return (
    <div className="space-y-6">
      {/* KPIs — number-first, accent color */}
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
          <RiskBars />
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
                  {criticalMeasures.map((m) => (
                    <tr key={m.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-2.5 font-mono text-xs text-text-muted whitespace-nowrap">
                        {m.codigo}
                      </td>
                      <td className="px-4 py-2.5 text-text-body">{m.nombre}</td>
                      <td className="px-4 py-2.5">
                        <ComplianceBadge status={m.estado} />
                      </td>
                      <td className="px-6 py-2.5">
                        <RiskBadge level={m.riesgo} />
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
