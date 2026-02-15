import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/shared/PageTransition";
import ResultsHeader from "@/components/layout/ResultsHeader";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { COMPLIANCE } from "@/data/mockData";
import ResumenTab from "@/pages/results/ResumenTab";
import MedidasTab from "@/pages/results/MedidasTab";
import DimensionesTab from "@/pages/results/DimensionesTab";
import RiesgosTab from "@/pages/results/RiesgosTab";

const TABS = [
  { id: "resumen", label: "Resumen" },
  { id: "medidas", label: "Medidas" },
  { id: "dimensiones", label: "Dimensiones" },
  { id: "riesgos", label: "Riesgos" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const TAB_COMPONENTS: Record<TabId, React.ComponentType> = {
  resumen: ResumenTab,
  medidas: MedidasTab,
  dimensiones: DimensionesTab,
  riesgos: RiesgosTab,
};

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("resumen");
  const ActiveComponent = TAB_COMPONENTS[activeTab];

  return (
    <PageTransition className="min-h-screen bg-background">
      <ResultsHeader />

      {/* Hero section — white bg, oversized number */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-text-muted mb-1">
                Nivel de cumplimiento ENS
              </p>
              <div className="flex items-baseline gap-2">
                <AnimatedCounter
                  target={COMPLIANCE.porcentaje}
                  className="text-5xl sm:text-6xl font-bold tracking-[-0.03em] text-text-heading"
                />
              </div>
              <p className="mt-1 text-sm text-text-muted">
                {COMPLIANCE.cumple} de {COMPLIANCE.aplicables} medidas aplicables
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <div>
                <span className="text-2xl font-semibold text-text-heading">{COMPLIANCE.cumple}</span>
                <p className="text-text-muted">Cumple</p>
              </div>
              <div>
                <span className="text-2xl font-semibold text-text-heading">{COMPLIANCE.parcial}</span>
                <p className="text-text-muted">Parcial</p>
              </div>
              <div>
                <span className="text-2xl font-semibold text-text-heading">{COMPLIANCE.nocumple}</span>
                <p className="text-text-muted">No cumple</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-0 overflow-x-auto border-b border-border">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "text-text-heading"
                  : "text-text-muted hover:text-text-body"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="py-6"
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
