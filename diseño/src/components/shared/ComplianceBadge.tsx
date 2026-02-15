import { COMPLIANCE_STATUS, type ComplianceStatusKey } from "@/config/designTokens";
import { CheckCircle, AlertTriangle, XCircle, MinusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS = {
  cumple: CheckCircle,
  parcial: AlertTriangle,
  nocumple: XCircle,
  noaplica: MinusCircle,
} as const;

interface ComplianceBadgeProps {
  status: ComplianceStatusKey;
  className?: string;
}

export default function ComplianceBadge({ status, className }: ComplianceBadgeProps) {
  const config = COMPLIANCE_STATUS[status];
  const Icon = ICONS[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        config.badgeClass,
        className,
      )}
    >
      <Icon className={cn("h-3.5 w-3.5", config.iconClass)} />
      {config.label}
    </span>
  );
}
