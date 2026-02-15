import { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FileUp, FileText, X, ArrowRight, CheckCircle2 } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/shared/GlassCard";
import PageTransition from "@/components/shared/PageTransition";
import { useAnalysis } from "@/hooks/useAnalysis";

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

interface UploadZoneProps {
  slot: "pliegoGeneral" | "pliegoTecnico";
  title: string;
  description: string;
  icon: typeof FileUp;
}

function UploadZone({ slot, title, description, icon: Icon }: UploadZoneProps) {
  const { uploadFile, removeFile, pliegoGeneral, pliegoTecnico } = useAnalysis();
  const inputRef = useRef<HTMLInputElement>(null);
  const fileSlot = slot === "pliegoGeneral" ? pliegoGeneral : pliegoTecnico;

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) uploadFile(slot, file);
    },
    [slot, uploadFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) uploadFile(slot, file);
  };

  return (
    <GlassCard
      className="flex flex-col items-center justify-center gap-4 min-h-[200px] text-center"
      onClick={fileSlot ? undefined : handleClick}
      hasFile={!!fileSlot}
    >
      <div
        className="w-full h-full flex flex-col items-center justify-center gap-3"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {fileSlot ? (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-2.5"
          >
            <CheckCircle2 className="h-8 w-8 text-cumple-icon" />
            <div>
              <p className="font-medium text-text-heading text-sm">{fileSlot.name}</p>
              <p className="text-xs text-text-muted mt-0.5">{formatFileSize(fileSlot.size)}</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeFile(slot);
              }}
              className="flex items-center gap-1 text-xs text-text-muted hover:text-destructive transition-colors"
            >
              <X className="h-3 w-3" />
              Eliminar
            </button>
          </motion.div>
        ) : (
          <>
            <Icon className="h-8 w-8 text-text-placeholder" />
            <div>
              <p className="font-medium text-text-heading text-sm">{title}</p>
              <p className="text-[13px] text-text-muted mt-0.5">{description}</p>
            </div>
            <p className="text-xs text-text-placeholder">
              Arrastra aqui o haz clic para seleccionar
            </p>
          </>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={handleChange}
      />
    </GlassCard>
  );
}

export default function UploadPage() {
  const navigate = useNavigate();
  const { canAnalyze, startAnalysis } = useAnalysis();

  const handleAnalyze = () => {
    startAnalysis();
    navigate("/analyzing");
  };

  return (
    <PageTransition className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0 }}
        className="flex flex-col items-center text-center mb-12"
      >
        <Logo size="lg" className="mb-4" />
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-border text-xs font-medium text-text-muted">
          Esquema Nacional de Seguridad
        </div>
        <p className="text-[15px] sm:text-base text-text-muted max-w-md mx-auto leading-relaxed">
          Sube los pliegos de tu licitacion y obtendras un analisis detallado de cumplimiento ENS
        </p>
      </motion.div>

      {/* Upload zones */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl lg:max-w-2xl"
      >
        <UploadZone
          slot="pliegoGeneral"
          title="Pliego General"
          description="Clausulas administrativas"
          icon={FileUp}
        />
        <UploadZone
          slot="pliegoTecnico"
          title="Pliego Tecnico"
          description="Prescripciones tecnicas"
          icon={FileText}
        />
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-8"
      >
        <Button
          size="lg"
          disabled={!canAnalyze}
          onClick={handleAnalyze}
          className="gap-2 px-6 h-11 text-sm font-medium disabled:opacity-40"
        >
          Analizar cumplimiento
          <ArrowRight className="h-4 w-4" />
        </Button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.45 }}
        className="mt-4 text-xs text-text-placeholder"
      >
        Admite PDF, DOC y DOCX
      </motion.p>
    </PageTransition>
  );
}
