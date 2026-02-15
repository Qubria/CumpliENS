import type { Medida, Usuario, DimensionData, CategoriaData } from "./types";
import type { ComplianceStatusKey, EnsCategoryKey, RiskLevelKey } from "@/config/designTokens";
import { ENS_DIMENSIONS } from "@/config/designTokens";

// ---------------------------------------------------------------------------
// Source of truth: 25 medidas ENS reales
// ---------------------------------------------------------------------------

export const MEDIDAS: Medida[] = [
  { id: "1", codigo: "org.1", nombre: "Politica de seguridad", categoria: "basica", estado: "cumple", dimensiones: ["confidencialidad", "integridad", "disponibilidad", "trazabilidad", "autenticidad"], riesgo: "bajo", responsable: "Ana Garcia", fechaRevision: "2025-11-15" },
  { id: "2", codigo: "org.2", nombre: "Normativa de seguridad", categoria: "basica", estado: "cumple", dimensiones: ["confidencialidad", "integridad"], riesgo: "bajo", responsable: "Ana Garcia", fechaRevision: "2025-11-15" },
  { id: "3", codigo: "org.3", nombre: "Procedimientos de seguridad", categoria: "basica", estado: "parcial", dimensiones: ["confidencialidad", "integridad", "disponibilidad"], riesgo: "medio", responsable: "Carlos Lopez", fechaRevision: "2025-10-20" },
  { id: "4", codigo: "org.4", nombre: "Proceso de autorizacion", categoria: "media", estado: "cumple", dimensiones: ["confidencialidad", "autenticidad"], riesgo: "bajo", responsable: "Ana Garcia", fechaRevision: "2025-11-10" },
  { id: "5", codigo: "op.pl.1", nombre: "Analisis de riesgos", categoria: "basica", estado: "parcial", dimensiones: ["confidencialidad", "integridad", "disponibilidad", "trazabilidad", "autenticidad"], riesgo: "alto", responsable: "Carlos Lopez", fechaRevision: "2025-09-30" },
  { id: "6", codigo: "op.pl.2", nombre: "Arquitectura de seguridad", categoria: "media", estado: "nocumple", dimensiones: ["confidencialidad", "integridad", "disponibilidad"], riesgo: "critico", responsable: "Carlos Lopez", fechaRevision: "2025-08-15" },
  { id: "7", codigo: "op.pl.3", nombre: "Adquisicion de nuevos componentes", categoria: "media", estado: "parcial", dimensiones: ["confidencialidad", "integridad"], riesgo: "medio", responsable: "Maria Torres", fechaRevision: "2025-10-05" },
  { id: "8", codigo: "op.acc.1", nombre: "Identificacion", categoria: "basica", estado: "cumple", dimensiones: ["autenticidad", "trazabilidad"], riesgo: "bajo", responsable: "Ana Garcia", fechaRevision: "2025-11-20" },
  { id: "9", codigo: "op.acc.2", nombre: "Requisitos de acceso", categoria: "basica", estado: "cumple", dimensiones: ["confidencialidad", "autenticidad"], riesgo: "bajo", responsable: "Ana Garcia", fechaRevision: "2025-11-18" },
  { id: "10", codigo: "op.acc.3", nombre: "Segregacion de funciones y tareas", categoria: "media", estado: "nocumple", dimensiones: ["confidencialidad", "integridad"], riesgo: "alto", responsable: "Carlos Lopez", fechaRevision: "2025-09-10" },
  { id: "11", codigo: "op.acc.4", nombre: "Proceso de gestion de derechos de acceso", categoria: "media", estado: "parcial", dimensiones: ["confidencialidad", "autenticidad", "trazabilidad"], riesgo: "medio", responsable: "Maria Torres", fechaRevision: "2025-10-12" },
  { id: "12", codigo: "op.exp.1", nombre: "Inventario de activos", categoria: "basica", estado: "cumple", dimensiones: ["disponibilidad", "integridad"], riesgo: "bajo", responsable: "Ana Garcia", fechaRevision: "2025-11-01" },
  { id: "13", codigo: "op.exp.2", nombre: "Configuracion de seguridad", categoria: "basica", estado: "parcial", dimensiones: ["confidencialidad", "integridad", "disponibilidad"], riesgo: "medio", responsable: "Carlos Lopez", fechaRevision: "2025-10-25" },
  { id: "14", codigo: "op.exp.3", nombre: "Gestion de la configuracion", categoria: "media", estado: "nocumple", dimensiones: ["integridad", "disponibilidad"], riesgo: "alto", responsable: "Carlos Lopez", fechaRevision: "2025-09-05" },
  { id: "15", codigo: "op.exp.6", nombre: "Proteccion frente a codigo danino", categoria: "basica", estado: "cumple", dimensiones: ["confidencialidad", "integridad", "disponibilidad"], riesgo: "bajo", responsable: "Maria Torres", fechaRevision: "2025-11-22" },
  { id: "16", codigo: "op.exp.8", nombre: "Registro de la actividad", categoria: "basica", estado: "cumple", dimensiones: ["trazabilidad"], riesgo: "bajo", responsable: "Ana Garcia", fechaRevision: "2025-11-05" },
  { id: "17", codigo: "op.mon.1", nombre: "Deteccion de intrusiones", categoria: "media", estado: "nocumple", dimensiones: ["confidencialidad", "disponibilidad", "trazabilidad"], riesgo: "critico", responsable: "Carlos Lopez", fechaRevision: "2025-08-20" },
  { id: "18", codigo: "op.mon.2", nombre: "Sistema de metricas", categoria: "alta", estado: "nocumple", dimensiones: ["disponibilidad", "trazabilidad"], riesgo: "alto", responsable: "Carlos Lopez", fechaRevision: "2025-09-15" },
  { id: "19", codigo: "op.cont.1", nombre: "Analisis de impacto", categoria: "media", estado: "parcial", dimensiones: ["disponibilidad"], riesgo: "medio", responsable: "Maria Torres", fechaRevision: "2025-10-18" },
  { id: "20", codigo: "mp.if.1", nombre: "Areas separadas con control de acceso", categoria: "basica", estado: "cumple", dimensiones: ["confidencialidad", "disponibilidad"], riesgo: "bajo", responsable: "Ana Garcia", fechaRevision: "2025-11-12" },
  { id: "21", codigo: "mp.if.2", nombre: "Identificacion de las personas", categoria: "basica", estado: "cumple", dimensiones: ["autenticidad", "trazabilidad"], riesgo: "bajo", responsable: "Ana Garcia", fechaRevision: "2025-11-14" },
  { id: "22", codigo: "mp.per.1", nombre: "Caracterizacion del puesto de trabajo", categoria: "basica", estado: "parcial", dimensiones: ["confidencialidad"], riesgo: "medio", responsable: "Maria Torres", fechaRevision: "2025-10-30" },
  { id: "23", codigo: "mp.per.2", nombre: "Deberes y obligaciones", categoria: "basica", estado: "cumple", dimensiones: ["confidencialidad", "integridad"], riesgo: "bajo", responsable: "Ana Garcia", fechaRevision: "2025-11-08" },
  { id: "24", codigo: "mp.com.1", nombre: "Perimetro seguro", categoria: "basica", estado: "parcial", dimensiones: ["confidencialidad", "integridad", "disponibilidad"], riesgo: "alto", responsable: "Carlos Lopez", fechaRevision: "2025-09-25" },
  { id: "25", codigo: "mp.s.1", nombre: "Proteccion de los servicios", categoria: "alta", estado: "noaplica", dimensiones: ["disponibilidad"], riesgo: "bajo", responsable: "Maria Torres", fechaRevision: "2025-11-25" },
];

// ---------------------------------------------------------------------------
// Todo computado desde MEDIDAS — cero numeros hardcodeados
// ---------------------------------------------------------------------------

function countByField<K extends string>(arr: Medida[], field: keyof Medida, value: K) {
  return arr.filter((m) => m[field] === value).length;
}

// Compliance
const _aplicables = MEDIDAS.filter((m) => m.estado !== "noaplica");
export const COMPLIANCE = {
  cumple: countByField(MEDIDAS, "estado", "cumple" as ComplianceStatusKey),
  parcial: countByField(MEDIDAS, "estado", "parcial" as ComplianceStatusKey),
  nocumple: countByField(MEDIDAS, "estado", "nocumple" as ComplianceStatusKey),
  noaplica: countByField(MEDIDAS, "estado", "noaplica" as ComplianceStatusKey),
  total: MEDIDAS.length,
  aplicables: _aplicables.length,
  porcentaje: Math.round((_aplicables.filter((m) => m.estado === "cumple").length / _aplicables.length) * 100),
};

// Risk
export const RISK_COUNT: Record<RiskLevelKey, number> = {
  critico: countByField(MEDIDAS, "riesgo", "critico" as RiskLevelKey),
  alto: countByField(MEDIDAS, "riesgo", "alto" as RiskLevelKey),
  medio: countByField(MEDIDAS, "riesgo", "medio" as RiskLevelKey),
  bajo: countByField(MEDIDAS, "riesgo", "bajo" as RiskLevelKey),
};

// Measures that need attention (nocumple + parcial, sorted by risk severity)
const RISK_ORDER: Record<RiskLevelKey, number> = { critico: 0, alto: 1, medio: 2, bajo: 3 };
export const PENDIENTES = MEDIDAS
  .filter((m) => m.estado === "nocumple" || m.estado === "parcial")
  .sort((a, b) => RISK_ORDER[a.riesgo] - RISK_ORDER[b.riesgo]);

// Dimensions — auto-discovered from MEDIDAS (not hardcoded)
// This way the backend can return any dimensions and the UI adapts.
function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const discoveredDimKeys = Array.from(
  new Set(MEDIDAS.flatMap((m) => m.dimensiones))
);

export const DIMENSIONES: DimensionData[] = discoveredDimKeys.map((key) => {
  const medidas = MEDIDAS.filter((m) => m.dimensiones.includes(key));
  const cumplidas = medidas.filter((m) => m.estado === "cumple").length;
  return {
    key,
    label: ENS_DIMENSIONS[key]?.label ?? capitalize(key),
    totalMedidas: medidas.length,
    medidasCumplidas: cumplidas,
    cumplimiento: medidas.length > 0 ? Math.round((cumplidas / medidas.length) * 100) : 0,
  };
});

// Categories — computed
const CAT_META: { key: EnsCategoryKey; label: string; descripcion: string }[] = [
  { key: "basica", label: "Basica", descripcion: "Medidas de nivel basico que toda organizacion debe implementar." },
  { key: "media", label: "Media", descripcion: "Medidas intermedias para sistemas de nivel medio." },
  { key: "alta", label: "Alta", descripcion: "Medidas avanzadas para sistemas con mayor exigencia." },
];
export const CATEGORIAS: CategoriaData[] = CAT_META.map(({ key, label, descripcion }) => {
  const medidas = MEDIDAS.filter((m) => m.categoria === key);
  const cumplidas = medidas.filter((m) => m.estado === "cumple").length;
  return {
    key, label, descripcion, medidas,
    totalMedidas: medidas.length,
    medidasCumplidas: cumplidas,
    cumplimiento: medidas.length > 0 ? Math.round((cumplidas / medidas.length) * 100) : 0,
  };
});

// Users
export const USUARIOS: Usuario[] = [
  { id: "1", nombre: "Ana Garcia", email: "ana.garcia@ejemplo.es", rol: "admin", iniciales: "AG" },
  { id: "2", nombre: "Carlos Lopez", email: "carlos.lopez@ejemplo.es", rol: "auditor", iniciales: "CL" },
  { id: "3", nombre: "Maria Torres", email: "maria.torres@ejemplo.es", rol: "consultor", iniciales: "MT" },
];
