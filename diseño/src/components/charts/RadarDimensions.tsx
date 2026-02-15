import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { DIMENSIONES } from "@/data/mockData";
import { PRIMARY_SCALE } from "@/config/chartColors";
import ChartContainer from "./ChartContainer";
import type { DimensionData } from "@/data/types";

const tooltipStyle = {
  background: "white",
  border: "1px solid #E5E7EB",
  borderRadius: "6px",
  boxShadow: "0 4px 8px -2px rgba(0,0,0,0.06), 0 2px 4px -2px rgba(0,0,0,0.04)",
  fontSize: "13px",
};

interface RadarDimensionsProps {
  /** Override default data. Falls back to DIMENSIONES from mockData. */
  dimensions?: DimensionData[];
}

export default function RadarDimensions({ dimensions }: RadarDimensionsProps) {
  const source = dimensions ?? DIMENSIONES;

  const data = source.map((d) => ({
    dimension: d.label,
    cumplimiento: d.cumplimiento,
    fullMark: 100,
  }));

  return (
    <ChartContainer className="h-[280px] sm:h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid stroke="#E5E7EB" />
          <PolarAngleAxis
            dataKey="dimension"
            tick={{ fill: "#6B7280", fontSize: 11 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: "#9CA3AF", fontSize: 10 }}
          />
          <Tooltip
            formatter={(value) => [`${value}%`, "Cumplimiento"]}
            contentStyle={tooltipStyle}
          />
          <Radar
            name="Cumplimiento"
            dataKey="cumplimiento"
            stroke={PRIMARY_SCALE[600]}
            fill={PRIMARY_SCALE[400]}
            fillOpacity={0.2}
            strokeWidth={1.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
