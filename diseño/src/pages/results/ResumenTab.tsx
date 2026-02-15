import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPLIANCE, RISK_COUNT, PENDIENTES } from "@/data/mockData";
import ComplianceDonut from "@/components/charts/ComplianceDonut";
import RadarDimensions from "@/components/charts/RadarDimensions";
import CategoryBars from "@/components/charts/CategoryBars";
import RiskBars from "@/components/charts/RiskBars";
import RiskBadge from "@/components/shared/RiskBadge";

const kpis = [
  { label: "Cumple", value: COMPLIANCE.cumple, accent: "text-cumple-icon" },
  { label: "Parcial", value: COMPLIANCE.parcial, accent: "text-parcial-icon" },
  { label: "No cumple", value: COMPLIANCE.nocumple, accent: "text-nocumple-icon" },
  { label: "Critico + Alto", value: RISK_COUNT.critico + RISK_COUNT.alto, accent: "text-risk-critico" },
];

export default function ResumenTab() {
  return (
    <div className="space-y-6">
      {/* KPIs — number-first, minimal */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label}>
            <CardContent className="p-4">
              <p className={`text-3xl font-bold tracking-tight ${kpi.accent}`}>{kpi.value}</p>
              <p className="text-xs text-text-muted mt-0.5">{kpi.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts row 1 */}
      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-sm font-medium text-text-muted">
              Cumplimiento General
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ComplianceDonut />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-sm font-medium text-text-muted">
              Dimensiones ENS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadarDimensions />
          </CardContent>
        </Card>
      </div>

      {/* Charts row 2 */}
      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-sm font-medium text-text-muted">
              Por Categoria
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CategoryBars />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-sm font-medium text-text-muted">
              Distribucion de Riesgos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RiskBars />
          </CardContent>
        </Card>
      </div>

      {/* Pending measures — clean table */}
      {PENDIENTES.length > 0 && (
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-sm font-medium text-text-muted">
              Requieren atencion
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 mt-4">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border-subtle">
                {PENDIENTES.slice(0, 5).map((m) => (
                  <tr key={m.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-2.5 font-mono text-xs text-text-muted w-20">{m.codigo}</td>
                    <td className="py-2.5 text-text-body">{m.nombre}</td>
                    <td className="px-6 py-2.5 text-right">
                      <RiskBadge level={m.riesgo} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
