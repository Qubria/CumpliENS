import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RadarDimensions from "@/components/charts/RadarDimensions";
import { DIMENSIONES } from "@/data/mockData";
import { getDimensionColor } from "@/config/chartColors";

export default function DimensionesTab() {
  return (
    <div className="space-y-6">
      {/* Radar chart */}
      <Card>
        <CardHeader className="pb-0">
          <CardTitle className="text-sm font-medium text-text-muted">
            Vision general
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadarDimensions />
        </CardContent>
      </Card>

      {/* Dimension cards — renders any number of dimensions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {DIMENSIONES.map((dim, index) => {
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
    </div>
  );
}
