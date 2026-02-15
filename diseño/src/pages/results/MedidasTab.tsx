import { useState, useMemo } from "react";
import { MEDIDAS } from "@/data/mockData";
import { buildDimensionColorMap } from "@/config/chartColors";
import ComplianceBadge from "@/components/shared/ComplianceBadge";
import RiskBadge from "@/components/shared/RiskBadge";
import CategoryBadge from "@/components/shared/CategoryBadge";
import type { ComplianceStatusKey } from "@/config/designTokens";

type FilterKey = "todas" | ComplianceStatusKey;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "todas", label: "Todas" },
  { key: "cumple", label: "Cumple" },
  { key: "parcial", label: "Parcial" },
  { key: "nocumple", label: "No Cumple" },
];

export default function MedidasTab() {
  const [filter, setFilter] = useState<FilterKey>("todas");

  // Build a stable color map from all dimension keys found in the data
  const dimColors = useMemo(() => {
    const allKeys = Array.from(new Set(MEDIDAS.flatMap((m) => m.dimensiones)));
    return buildDimensionColorMap(allKeys);
  }, []);

  const filtered = filter === "todas"
    ? MEDIDAS
    : MEDIDAS.filter((m) => m.estado === filter);

  return (
    <div className="space-y-4">
      {/* Filter pills — outline/ghost style */}
      <div className="flex gap-1.5 flex-wrap">
        {FILTERS.map((f) => {
          const count = f.key === "todas" ? MEDIDAS.length : MEDIDAS.filter((m) => m.estado === f.key).length;
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

      {/* Table — Stripe clean */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-4 py-2.5 text-xs font-medium text-text-placeholder uppercase tracking-wider">Codigo</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-text-placeholder uppercase tracking-wider">Medida</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-text-placeholder uppercase tracking-wider hidden sm:table-cell">Categoria</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-text-placeholder uppercase tracking-wider hidden md:table-cell">Dimensiones</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-text-placeholder uppercase tracking-wider">Estado</th>
              <th className="text-left px-4 py-2.5 text-xs font-medium text-text-placeholder uppercase tracking-wider hidden sm:table-cell">Riesgo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            {filtered.map((m) => (
              <tr key={m.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-4 py-2.5 font-mono text-xs text-text-muted whitespace-nowrap">
                  {m.codigo}
                </td>
                <td className="px-4 py-2.5 text-text-body max-w-[200px] sm:max-w-none truncate">
                  {m.nombre}
                </td>
                <td className="px-4 py-2.5 hidden sm:table-cell">
                  <CategoryBadge category={m.categoria} />
                </td>
                <td className="px-4 py-2.5 hidden md:table-cell">
                  <div className="flex gap-1">
                    {m.dimensiones.map((d) => (
                      <span
                        key={d}
                        className="inline-block h-2 w-2 rounded-full"
                        style={{ backgroundColor: dimColors[d] ?? "#9CA3AF" }}
                        title={d}
                      />
                    ))}
                  </div>
                </td>
                <td className="px-4 py-2.5">
                  <ComplianceBadge status={m.estado} />
                </td>
                <td className="px-4 py-2.5 hidden sm:table-cell">
                  <RiskBadge level={m.riesgo} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-text-muted text-sm">
            No hay medidas con este filtro
          </div>
        )}
      </div>

      <p className="text-xs text-text-placeholder">
        {filtered.length} de {MEDIDAS.length} medidas
      </p>
    </div>
  );
}
