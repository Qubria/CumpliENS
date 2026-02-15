import type { ComplianceStatusKey, EnsCategoryKey, RiskLevelKey } from "@/config/designTokens";

export interface Medida {
  id: string;
  codigo: string;
  nombre: string;
  categoria: EnsCategoryKey;
  estado: ComplianceStatusKey;
  dimensiones: string[];
  riesgo: RiskLevelKey;
  responsable: string;
  fechaRevision: string;
}

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  rol: "admin" | "auditor" | "consultor";
  iniciales: string;
}

export interface DimensionData {
  key: string;
  label: string;
  description?: string;
  cumplimiento: number;
  totalMedidas: number;
  medidasCumplidas: number;
}

export interface CategoriaData {
  key: EnsCategoryKey;
  label: string;
  descripcion: string;
  totalMedidas: number;
  medidasCumplidas: number;
  cumplimiento: number;
  medidas: Medida[];
}
