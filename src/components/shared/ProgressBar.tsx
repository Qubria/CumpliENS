import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
  showLabel?: boolean;
  className?: string;
}

export default function ProgressBar({
  value,
  max = 100,
  color = "bg-primary",
  showLabel = true,
  className,
}: ProgressBarProps) {
  const pct = max > 0 ? Math.max(0, Math.min(Math.round((value / max) * 100), 100)) : 0;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className="h-2 flex-1 overflow-hidden rounded-full bg-surface-subtle"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={cn("h-full rounded-full transition-all", color)}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && (
        <span className="w-10 text-right text-xs font-medium text-text-body">{pct}%</span>
      )}
    </div>
  );
}
