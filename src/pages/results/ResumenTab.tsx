import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ComplianceDonut from "@/components/charts/ComplianceDonut";
import RadarDimensions from "@/components/charts/RadarDimensions";
import type { DimensionDataItem } from "@/components/charts/RadarDimensions";
import CategoryBars from "@/components/charts/CategoryBars";
import type { CategoryBarItem } from "@/components/charts/CategoryBars";
import RiskBars from "@/components/charts/RiskBars";
import type { RiskBarData } from "@/components/charts/RiskBars";
import RiskBadge from "@/components/shared/RiskBadge";
import type { RiskLevelKey } from "@/config/designTokens";
import type { BaseDatos, PrioridadHallazgo } from "@/types/database";

type FilaAnalisis = BaseDatos['public']['Tables']['analisis']['Row']
type FilaHallazgo = BaseDatos['public']['Tables']['hallazgos_analisis']['Row']

interface ResumenTabProps {
  analisis: FilaAnalisis;
  hallazgos: FilaHallazgo[];
  tasaCumplimiento: number;
  datosDimensiones: DimensionDataItem[];
  datosCategoria: CategoryBarItem[];
  datosRiesgo: RiskBarData;
}

const PRIORIDAD_A_RIESGO: Record<PrioridadHallazgo, RiskLevelKey> = {
  CRITICA: 'critico',
  ALTA: 'alto',
  MEDIA: 'medio',
  BAJA: 'bajo',
}

export default function ResumenTab({
  analisis,
  hallazgos,
  tasaCumplimiento,
  datosDimensiones,
  datosCategoria,
  datosRiesgo,
}: ResumenTabProps) {
  const kpis = [
    { label: "Cumple", value: analisis.cantidad_conforme, accent: "text-cumple-icon" },
    { label: "Parcial", value: analisis.cantidad_parcial, accent: "text-parcial-icon" },
    { label: "No cumple", value: analisis.cantidad_no_conforme, accent: "text-nocumple-icon" },
    { label: "Critico + Alto", value: datosRiesgo.critico + datosRiesgo.alto, accent: "text-risk-critico" },
  ];

  // Hallazgos que requieren atencion (no conformes + parciales)
  const pendientes = hallazgos
    .filter((h) => h.nivel_cumplimiento === 'NO_CONFORME' || h.nivel_cumplimiento === 'PARCIALMENTE_CONFORME')
    .sort((a, b) => {
      const orden: Record<string, number> = { CRITICA: 0, ALTA: 1, MEDIA: 2, BAJA: 3 }
      return (orden[a.prioridad ?? 'MEDIA'] ?? 2) - (orden[b.prioridad ?? 'MEDIA'] ?? 2)
    })
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* KPIs */}
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
            <ComplianceDonut
              cumple={analisis.cantidad_conforme}
              parcial={analisis.cantidad_parcial}
              nocumple={analisis.cantidad_no_conforme}
              noaplica={analisis.cantidad_no_aplica}
              porcentaje={tasaCumplimiento}
            />
          </CardContent>
        </Card>
        {datosDimensiones.length > 0 && (
          <Card>
            <CardHeader className="pb-0">
              <CardTitle className="text-sm font-medium text-text-muted">
                Dimensiones ENS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadarDimensions dimensions={datosDimensiones} />
            </CardContent>
          </Card>
        )}
      </div>

      {/* Charts row 2 */}
      <div className="grid lg:grid-cols-2 gap-4">
        {datosCategoria.length > 0 && (
          <Card>
            <CardHeader className="pb-0">
              <CardTitle className="text-sm font-medium text-text-muted">
                Por Categoria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CategoryBars data={datosCategoria} />
            </CardContent>
          </Card>
        )}
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-sm font-medium text-text-muted">
              Distribucion de Riesgos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RiskBars data={datosRiesgo} />
          </CardContent>
        </Card>
      </div>

      {/* Pending measures table */}
      {pendientes.length > 0 && (
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-sm font-medium text-text-muted">
              Requieren atencion
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 mt-4">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border-subtle">
                {pendientes.map((h) => (
                  <tr key={h.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-2.5 font-mono text-xs text-text-muted w-20">{h.control_id}</td>
                    <td className="py-2.5 text-text-body">{h.nombre_control}</td>
                    <td className="px-6 py-2.5 text-right">
                      <RiskBadge level={PRIORIDAD_A_RIESGO[(h.prioridad ?? 'MEDIA') as PrioridadHallazgo]} />
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
