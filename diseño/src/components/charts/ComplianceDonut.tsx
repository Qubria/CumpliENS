import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { COMPLIANCE } from "@/data/mockData";
import { COMPLIANCE_COLORS } from "@/config/chartColors";
import { COMPLIANCE_STATUS } from "@/config/designTokens";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import ChartContainer from "./ChartContainer";
import type { ComplianceStatusKey } from "@/config/designTokens";

const tooltipStyle = {
  background: "white",
  border: "1px solid #E5E7EB",
  borderRadius: "6px",
  boxShadow: "0 4px 8px -2px rgba(0,0,0,0.06), 0 2px 4px -2px rgba(0,0,0,0.04)",
  fontSize: "13px",
};

const data = (
  Object.keys(COMPLIANCE_STATUS) as ComplianceStatusKey[]
).map((key) => ({
  name: COMPLIANCE_STATUS[key].label,
  value: COMPLIANCE[key],
  color: COMPLIANCE_COLORS[key].fill,
}));

export default function ComplianceDonut() {
  return (
    <ChartContainer className="relative h-[280px] sm:h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="62%"
            outerRadius="82%"
            paddingAngle={2}
            dataKey="value"
            strokeWidth={0}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [value, name]}
            contentStyle={tooltipStyle}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <AnimatedCounter
          target={COMPLIANCE.porcentaje}
          className="text-3xl font-bold tracking-tight text-text-heading"
        />
        <span className="text-xs text-text-muted">Cumplimiento</span>
      </div>
    </ChartContainer>
  );
}
