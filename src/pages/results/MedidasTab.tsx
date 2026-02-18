import { useState, useMemo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ComplianceBadge from "@/components/shared/ComplianceBadge";
import RiskBadge from "@/components/shared/RiskBadge";
import type { ComplianceStatusKey } from "@/config/designTokens";
import type { BaseDatos, NivelCumplimiento, PrioridadHallazgo } from "@/types/database";
import type { RiskLevelKey } from "@/config/designTokens";

type FilaHallazgo = BaseDatos['public']['Tables']['hallazgos_analisis']['Row']

type FilterKey = "todas" | ComplianceStatusKey;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "todas", label: "Todas" },
  { key: "cumple", label: "Cumple" },
  { key: "parcial", label: "Parcial" },
  { key: "nocumple", label: "No Cumple" },
];

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

interface MedidasTabProps {
  hallazgos: FilaHallazgo[];
}

export default function MedidasTab({ hallazgos }: MedidasTabProps) {
  const [filter, setFilter] = useState<FilterKey>("todas");
  const [expandido, setExpandido] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (filter === "todas") return hallazgos;
    return hallazgos.filter((h) => NIVEL_A_STATUS[h.nivel_cumplimiento] === filter);
  }, [hallazgos, filter]);

  return (
    <div className="space-y-4">
      {/* Filter pills */}
      <div className="flex gap-1.5 flex-wrap">
        {FILTERS.map((f) => {
          const count = f.key === "todas"
            ? hallazgos.length
            : hallazgos.filter((h) => NIVEL_A_STATUS[h.nivel_cumplimiento] === f.key).length;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors ${
                filter === f.key
                  ? "bg-text-heading text-white"
                  : "text-text-muted hover:text-text-body hover:bg-muted"
              }`}
            >
              {f.label}
              <span className="ml-1 opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-4 py-2.5 text-xs font-medium text-text-placeholder uppercase tracking-wider">Codigo</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-text-placeholder uppercase tracking-wider">Medida</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-text-placeholder uppercase tracking-wider">Estado</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-text-placeholder uppercase tracking-wider hidden sm:table-cell">Riesgo</th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            {filtered.map((h) => (
              <tr key={h.id} className="hover:bg-muted/30 transition-colors group">
                <td className="px-4 py-2.5 font-mono text-xs text-text-muted whitespace-nowrap">
                  {h.control_id}
                </td>
                <td className="px-4 py-2.5 text-text-body">
                  <button
                    className="text-left w-full"
                    onClick={() => setExpandido(expandido === h.id ? null : h.id)}
                  >
                    <p className="font-medium text-text-heading text-sm">{h.nombre_control}</p>
                    <p className="text-xs text-text-muted truncate max-w-md">{h.resumen_hallazgo}</p>
                  </button>
                </td>
                <td className="px-4 py-2.5">
                  <ComplianceBadge status={NIVEL_A_STATUS[h.nivel_cumplimiento]} />
                </td>
                <td className="px-4 py-2.5 hidden sm:table-cell">
                  {h.prioridad && (
                    <RiskBadge level={PRIORIDAD_A_RIESGO[h.prioridad as PrioridadHallazgo]} />
                  )}
                </td>
                <td className="px-2 py-2.5">
                  <button
                    onClick={() => setExpandido(expandido === h.id ? null : h.id)}
                    className="p-1 text-text-placeholder hover:text-text-body"
                  >
                    {expandido === h.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Expanded IRAC detail */}
        {filtered.map((h) =>
          expandido === h.id ? (
            <div key={`detail-${h.id}`} className="border-t border-border bg-surface-muted/50 px-6 py-4 space-y-3">
              {h.irac_asunto && (
                <div className="bg-card rounded-lg p-4 space-y-3 border border-border">
                  <h4 className="text-xs font-bold uppercase text-text-muted">Analisis IRAC</h4>
                  <div>
                    <p className="text-xs font-semibold text-primary">Cuestion (Issue)</p>
                    <p className="text-sm text-text-body">{h.irac_asunto}</p>
                  </div>
                  {h.irac_regla && (
                    <div>
                      <p className="text-xs font-semibold text-primary">Norma (Rule)</p>
                      <p className="text-sm text-text-body">{h.irac_regla}</p>
                    </div>
                  )}
                  {h.irac_aplicacion && (
                    <div>
                      <p className="text-xs font-semibold text-primary">Aplicacion</p>
                      <p className="text-sm text-text-body">{h.irac_aplicacion}</p>
                    </div>
                  )}
                  {h.irac_conclusion && (
                    <div>
                      <p className="text-xs font-semibold text-primary">Conclusion</p>
                      <p className="text-sm text-text-body">{h.irac_conclusion}</p>
                    </div>
                  )}
                </div>
              )}

              {h.texto_evidencia && (
                <div className="bg-cumple-bg border-l-[3px] border-cumple-icon p-3 rounded">
                  <p className="text-xs font-semibold text-cumple-text mb-1">Evidencia del Documento</p>
                  <p className="text-sm text-text-body italic">"{h.texto_evidencia}"</p>
                </div>
              )}

              {h.descripcion_brecha && (
                <div className="bg-nocumple-bg border-l-[3px] border-nocumple-icon p-3 rounded">
                  <p className="text-xs font-semibold text-nocumple-text mb-1">Brecha Identificada</p>
                  <p className="text-sm text-text-body">{h.descripcion_brecha}</p>
                </div>
              )}

              {h.recomendacion && (
                <div className="bg-parcial-bg border-l-[3px] border-parcial-icon p-3 rounded">
                  <p className="text-xs font-semibold text-parcial-text mb-1">Recomendacion</p>
                  <p className="text-sm text-text-body">{h.recomendacion}</p>
                </div>
              )}
            </div>
          ) : null
        )}

        {filtered.length === 0 && (
          <div className="py-12 text-center text-text-muted text-sm">
            No hay medidas con este filtro
          </div>
        )}
      </div>

      <p className="text-xs text-text-placeholder">
        {filtered.length} de {hallazgos.length} medidas
      </p>
    </div>
  );
}
