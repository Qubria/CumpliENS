import { RISK_LEVELS, type RiskLevelKey } from "@/config/designTokens";
import { AlertOctagon, AlertTriangle, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS = {
  critico: AlertOctagon,
  alto: AlertTriangle,
  medio: AlertCircle,
  bajo: Info,
} as const;

interface RiskBadgeProps {
  level: RiskLevelKey;
  className?: string;
}

export default function RiskBadge({ level, className }: RiskBadgeProps) {
  const config = RISK_LEVELS[level];
  const Icon = ICONS[level];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        config.badgeClass,
        className,
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {config.label}
    </span>
  );
}
