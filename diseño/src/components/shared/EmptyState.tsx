import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  titulo: string;
  descripcion?: string;
  accion?: React.ReactNode;
  className?: string;
}

export default function EmptyState({ icon: Icon, titulo, descripcion, accion, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center rounded-xl border border-dashed border-border-strong bg-surface-muted px-6 py-16 text-center", className)}>
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-subtle">
        <Icon className="h-7 w-7 text-text-muted" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-text-heading">{titulo}</h3>
      {descripcion && (
        <p className="mt-1.5 max-w-sm text-sm text-text-muted">{descripcion}</p>
      )}
      {accion && <div className="mt-5">{accion}</div>}
    </div>
  );
}
