import { ENS_CATEGORIES, type EnsCategoryKey } from "@/config/designTokens";
import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  category: EnsCategoryKey;
  className?: string;
}

export default function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const config = ENS_CATEGORIES[category];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        config.badgeClass,
        className,
      )}
    >
      {config.label}
    </span>
  );
}
