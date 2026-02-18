import { useState, useEffect } from "react";

interface ChartContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ChartContainer({ children, className }: ChartContainerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return <div className={className}>{mounted && children}</div>;
}
