import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hasFile?: boolean;
}

export default function GlassCard({ children, className, onClick, hasFile }: GlassCardProps) {
  return (
    <div
      className={cn(
        "upload-zone p-6",
        hasFile && "has-file",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
