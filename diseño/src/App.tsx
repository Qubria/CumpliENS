import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AnalysisProvider } from "@/hooks/useAnalysis";
import UploadPage from "@/pages/UploadPage";
import AnalyzingPage from "@/pages/AnalyzingPage";
import ResultsPage from "@/pages/ResultsPage";
import DevColors from "@/pages/DevColors";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<UploadPage />} />
        <Route path="/analyzing" element={<AnalyzingPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/dev/colors" element={<DevColors />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnalysisProvider>
        <AnimatedRoutes />
      </AnalysisProvider>
    </BrowserRouter>
  );
}

export default App;
