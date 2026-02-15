import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";
import { LogoMark } from "@/components/shared/Logo";
import PageTransition from "@/components/shared/PageTransition";
import { useAnalysis } from "@/hooks/useAnalysis";

export default function AnalyzingPage() {
  const navigate = useNavigate();
  const { status, progress, analysisSteps, currentStep, startAnalysis } = useAnalysis();

  useEffect(() => {
    if (status === "idle") {
      startAnalysis();
    }
  }, [status, startAnalysis]);

  useEffect(() => {
    if (status === "complete") {
      const timer = setTimeout(() => navigate("/results"), 500);
      return () => clearTimeout(timer);
    }
  }, [status, navigate]);

  return (
    <PageTransition className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Shield icon */}
        <div className="flex justify-center mb-8">
          <motion.div
            animate={
              status === "complete"
                ? { scale: [1, 1.1, 1] }
                : { scale: [1, 1.04, 1] }
            }
            transition={
              status === "complete"
                ? { duration: 0.4 }
                : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <LogoMark size={64} />
          </motion.div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold tracking-tight text-text-heading mb-1">
            {status === "complete" ? "Analisis completado" : "Analizando documentos"}
          </h2>
          <p className="text-sm text-text-muted">
            {status === "complete"
              ? "Redirigiendo a resultados..."
              : analysisSteps[currentStep >= 0 ? currentStep : 0]?.label}
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-muted rounded-full mb-8 overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* Steps checklist */}
        <div className="space-y-2.5">
          {analysisSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2.5"
            >
              {step.status === "done" ? (
                <CheckCircle2 className="h-4 w-4 text-cumple-icon flex-shrink-0" />
              ) : step.status === "active" ? (
                <Loader2 className="h-4 w-4 text-primary animate-spin flex-shrink-0" />
              ) : (
                <Circle className="h-4 w-4 text-border flex-shrink-0" />
              )}
              <span
                className={`text-[13px] leading-tight ${
                  step.status === "done"
                    ? "text-text-muted"
                    : step.status === "active"
                    ? "text-text-heading font-medium"
                    : "text-text-placeholder"
                }`}
              >
                {step.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
