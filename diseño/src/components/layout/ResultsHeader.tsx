import { Download, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAnalysis } from "@/hooks/useAnalysis";
import Logo from "@/components/shared/Logo";

export default function ResultsHeader() {
  const navigate = useNavigate();
  const { reset } = useAnalysis();

  const handleNewAnalysis = () => {
    reset();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo size="sm" />

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="gap-1.5 text-text-muted hover:text-text-body">
            <Download className="h-3.5 w-3.5" />
            <span className="hidden sm:inline text-sm">Exportar</span>
          </Button>
          <Button size="sm" className="gap-1.5" onClick={handleNewAnalysis}>
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Nuevo analisis</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
