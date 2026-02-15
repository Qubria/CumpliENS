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
import { RISK_COUNT } from "@/data/mockData";
import { RISK_COLORS } from "@/config/chartColors";
import { RISK_LEVELS } from "@/config/designTokens";
import ChartContainer from "./ChartContainer";
import type { RiskLevelKey } from "@/config/designTokens";

const tooltipStyle = {
  background: "white",
  border: "1px solid #E5E7EB",
  borderRadius: "6px",
  boxShadow: "0 4px 8px -2px rgba(0,0,0,0.06), 0 2px 4px -2px rgba(0,0,0,0.04)",
  fontSize: "13px",
};

const data = (Object.keys(RISK_LEVELS) as RiskLevelKey[]).map((key) => ({
  name: RISK_LEVELS[key].label,
  count: RISK_COUNT[key],
  key,
}));

export default function RiskBars() {
  return (
    <ChartContainer className="h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, bottom: 5, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "#6B7280", fontSize: 12 }} />
          <YAxis tick={{ fill: "#9CA3AF", fontSize: 11 }} allowDecimals={false} />
          <Tooltip
            formatter={(value) => [value, "Medidas"]}
            contentStyle={tooltipStyle}
          />
          <Bar dataKey="count" radius={[4, 4, 0, 0]} barSize={36}>
            {data.map((entry) => (
              <Cell
                key={entry.key}
                fill={RISK_COLORS[entry.key as RiskLevelKey].fill}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
