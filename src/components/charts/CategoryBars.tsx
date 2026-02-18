import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { CATEGORY_COLORS } from "@/config/chartColors";
import ChartContainer from "./ChartContainer";
import type { EnsCategoryKey } from "@/config/designTokens";

const tooltipStyle = {
  background: "white",
  border: "1px solid #E5E7EB",
  borderRadius: "6px",
  boxShadow: "0 4px 8px -2px rgba(0,0,0,0.06), 0 2px 4px -2px rgba(0,0,0,0.04)",
  fontSize: "13px",
};

export interface CategoryBarItem {
  key: EnsCategoryKey;
  label: string;
  cumplimiento: number;
}

interface CategoryBarsProps {
  data: CategoryBarItem[];
}

export default function CategoryBars({ data }: CategoryBarsProps) {
  const chartData = data.map((c) => ({
    name: c.label,
    cumplimiento: c.cumplimiento,
    key: c.key,
  }));

  return (
    <ChartContainer className="h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" horizontal={false} />
          <XAxis type="number" domain={[0, 100]} tick={{ fill: "#9CA3AF", fontSize: 11 }} />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: "#6B7280", fontSize: 12 }}
            width={55}
          />
          <Tooltip
            formatter={(value) => [`${value}%`, "Cumplimiento"]}
            contentStyle={tooltipStyle}
          />
          <Bar dataKey="cumplimiento" radius={[0, 4, 4, 0]} barSize={24}>
            {chartData.map((entry) => (
              <Cell
                key={entry.key}
                fill={CATEGORY_COLORS[entry.key as EnsCategoryKey]?.fill ?? "#9CA3AF"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
