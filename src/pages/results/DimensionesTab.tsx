import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RadarDimensions from "@/components/charts/RadarDimensions";
import type { DimensionDataItem } from "@/components/charts/RadarDimensions";
import { getDimensionColor } from "@/config/chartColors";
import { ENS_DIMENSIONS } from "@/config/designTokens";

interface DimensionDetail {
  key: string;
  label: string;
  cumplimiento: number;
  description?: string;
  medidasCumplidas: number;
  totalMedidas: number;
}

interface DimensionesTabProps {
  dimensions: DimensionDataItem[];
  dimensionDetails: DimensionDetail[];
}

export default function DimensionesTab({ dimensions, dimensionDetails }: DimensionesTabProps) {
  return (
    <div className="space-y-6">
      {/* Radar chart */}
      {dimensions.length > 0 && (
        <Card>
          <CardHeader className="pb-0">
            <CardTitle className="text-sm font-medium text-text-muted">
              Vision general
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadarDimensions dimensions={dimensions} />
          </CardContent>
        </Card>
      )}

      {/* Dimension cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dimensionDetails.map((dim, index) => {
          const color = getDimensionColor(dim.key, index);
          return (
            <Card key={dim.key}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="inline-block h-3 w-3 rounded-sm flex-shrink-0"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-sm font-medium text-text-heading">
                      {dim.label}
                    </span>
                  </div>
                  <span
                    className="text-xl font-bold tracking-tight"
                    style={{ color }}
                  >
                    {dim.cumplimiento}%
                  </span>
                </div>
                {dim.description && (
                  <p className="text-xs text-text-muted mb-3">{dim.description}</p>
                )}
                <div className="h-1 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${dim.cumplimiento}%`, backgroundColor: color }}
                  />
                </div>
                <p className="text-xs text-text-muted mt-2">
                  {dim.medidasCumplidas} de {dim.totalMedidas} medidas
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {dimensionDetails.length === 0 && (
        <div className="py-12 text-center text-text-muted text-sm">
          No hay datos de dimensiones disponibles
        </div>
      )}
    </div>
  );
}

/** Helper to derive ENS_DIMENSIONS label */
export function getDimensionLabel(key: string): string {
  return ENS_DIMENSIONS[key]?.label ?? key.charAt(0).toUpperCase() + key.slice(1);
}
