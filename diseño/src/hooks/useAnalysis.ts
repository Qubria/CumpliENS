import { createContext, useContext, useState, useCallback, useRef } from "react";
import type { ReactNode } from "react";
import { createElement } from "react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type AnalysisStatus = "idle" | "uploading" | "analyzing" | "complete";

export interface AnalysisStep {
  label: string;
  status: "pending" | "active" | "done";
}

interface FileSlot {
  file: File | null;
  name: string;
  size: number;
}

interface AnalysisState {
  pliegoGeneral: FileSlot | null;
  pliegoTecnico: FileSlot | null;
  status: AnalysisStatus;
  progress: number;
  currentStep: number;
  analysisSteps: AnalysisStep[];
}

interface AnalysisContextType extends AnalysisState {
  uploadFile: (slot: "pliegoGeneral" | "pliegoTecnico", file: File) => void;
  removeFile: (slot: "pliegoGeneral" | "pliegoTecnico") => void;
  startAnalysis: () => void;
  reset: () => void;
  canAnalyze: boolean;
}

// ---------------------------------------------------------------------------
// Default steps
// ---------------------------------------------------------------------------

const DEFAULT_STEPS: AnalysisStep[] = [
  { label: "Extrayendo texto de los documentos...", status: "pending" },
  { label: "Identificando requisitos de seguridad...", status: "pending" },
  { label: "Mapeando medidas del ENS...", status: "pending" },
  { label: "Evaluando nivel de cumplimiento...", status: "pending" },
  { label: "Generando informe de resultados...", status: "pending" },
];

const INITIAL_STATE: AnalysisState = {
  pliegoGeneral: null,
  pliegoTecnico: null,
  status: "idle",
  progress: 0,
  currentStep: -1,
  analysisSteps: DEFAULT_STEPS.map((s) => ({ ...s })),
};

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

const AnalysisContext = createContext<AnalysisContextType | null>(null);

export function useAnalysis(): AnalysisContextType {
  const ctx = useContext(AnalysisContext);
  if (!ctx) throw new Error("useAnalysis must be used within AnalysisProvider");
  return ctx;
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export function AnalysisProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AnalysisState>({ ...INITIAL_STATE });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const uploadFile = useCallback(
    (slot: "pliegoGeneral" | "pliegoTecnico", file: File) => {
      setState((prev) => ({
        ...prev,
        [slot]: { file, name: file.name, size: file.size },
      }));
    },
    []
  );

  const removeFile = useCallback(
    (slot: "pliegoGeneral" | "pliegoTecnico") => {
      setState((prev) => ({
        ...prev,
        [slot]: null,
      }));
    },
    []
  );

  const startAnalysis = useCallback(() => {
    let step = 0;
    const totalSteps = DEFAULT_STEPS.length;

    setState((prev) => ({
      ...prev,
      status: "analyzing",
      progress: 0,
      currentStep: 0,
      analysisSteps: DEFAULT_STEPS.map((s, i) => ({
        ...s,
        status: i === 0 ? "active" : "pending",
      })),
    }));

    intervalRef.current = setInterval(() => {
      step++;
      if (step >= totalSteps) {
        // All done
        if (intervalRef.current) clearInterval(intervalRef.current);
        setState((prev) => ({
          ...prev,
          status: "complete",
          progress: 100,
          currentStep: totalSteps - 1,
          analysisSteps: prev.analysisSteps.map((s) => ({
            ...s,
            status: "done",
          })),
        }));
      } else {
        // Advance to next step
        setState((prev) => ({
          ...prev,
          progress: Math.round((step / totalSteps) * 100),
          currentStep: step,
          analysisSteps: prev.analysisSteps.map((s, i) => ({
            ...s,
            status: i < step ? "done" : i === step ? "active" : "pending",
          })),
        }));
      }
    }, 1000);
  }, []);

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setState({ ...INITIAL_STATE, analysisSteps: DEFAULT_STEPS.map((s) => ({ ...s })) });
  }, []);

  const canAnalyze = state.pliegoGeneral !== null && state.pliegoTecnico !== null;

  const value: AnalysisContextType = {
    ...state,
    uploadFile,
    removeFile,
    startAnalysis,
    reset,
    canAnalyze,
  };

  return createElement(AnalysisContext.Provider, { value }, children);
}
