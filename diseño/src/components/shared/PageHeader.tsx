import { cn } from "@/lib/utils";

interface PageHeaderProps {
  titulo: string;
  descripcion?: string;
  acciones?: React.ReactNode;
  className?: string;
}

export default function PageHeader({ titulo, descripcion, acciones, className }: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between", className)}>
      <div>
        <h1 className="text-2xl font-bold text-text-heading sm:text-3xl">{titulo}</h1>
        {descripcion && (
          <p className="mt-1 text-sm text-text-muted">{descripcion}</p>
        )}
      </div>
      {acciones && <div className="mt-3 flex gap-2 sm:mt-0">{acciones}</div>}
    </div>
  );
}
