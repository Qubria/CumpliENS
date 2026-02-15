/**
 * CumpliENS Design Tokens
 *
 * Maps ENS domain concepts to Tailwind CSS classes.
 * Use these constants throughout the app for consistent styling.
 * Source of truth for colors is src/index.css — this file maps to utility classes.
 */

// ---------------------------------------------------------------------------
// Compliance Status
// ---------------------------------------------------------------------------

export const COMPLIANCE_STATUS = {
  cumple: {
    label: "Cumple",
    badgeClass: "bg-cumple-bg text-cumple-text",
    iconClass: "text-cumple-icon",
    icon: "check-circle",
  },
  parcial: {
    label: "Parcial",
    badgeClass: "bg-parcial-bg text-parcial-text",
    iconClass: "text-parcial-icon",
    icon: "alert-triangle",
  },
  nocumple: {
    label: "No Cumple",
    badgeClass: "bg-nocumple-bg text-nocumple-text",
    iconClass: "text-nocumple-icon",
    icon: "x-circle",
  },
  noaplica: {
    label: "No Aplica",
    badgeClass: "bg-noaplica-bg text-noaplica-text",
    iconClass: "text-noaplica-icon",
    icon: "minus-circle",
  },
} as const;

export type ComplianceStatusKey = keyof typeof COMPLIANCE_STATUS;

// ---------------------------------------------------------------------------
// ENS Categories (Basica → Media → Alta progression)
// ---------------------------------------------------------------------------

export const ENS_CATEGORIES = {
  basica: {
    label: "Basica",
    badgeClass: "bg-ens-basica-bg text-ens-basica",
    description: "Nivel de entrada",
  },
  media: {
    label: "Media",
    badgeClass: "bg-ens-media-bg text-ens-media",
    description: "Nivel intermedio",
  },
  alta: {
    label: "Alta",
    badgeClass: "bg-ens-alta-bg text-ens-alta",
    description: "Nivel mas exigente",
  },
} as const;

export type EnsCategoryKey = keyof typeof ENS_CATEGORIES;

// ---------------------------------------------------------------------------
// ENS Dimensions — default labels for the standard 5
// This is a fallback lookup. The app discovers dimensions dynamically from
// the data (MEDIDAS). If the backend returns new/different dimensions,
// they'll render automatically using auto-generated labels & colors.
// ---------------------------------------------------------------------------

export const ENS_DIMENSIONS: Record<string, { label: string; shortLabel: string }> = {
  confidencialidad: { label: "Confidencialidad", shortLabel: "Conf." },
  integridad: { label: "Integridad", shortLabel: "Integ." },
  disponibilidad: { label: "Disponibilidad", shortLabel: "Disp." },
  trazabilidad: { label: "Trazabilidad", shortLabel: "Traz." },
  autenticidad: { label: "Autenticidad", shortLabel: "Auth." },
};

/** Kept for backwards compatibility — now just string */
export type EnsDimensionKey = string;

// ---------------------------------------------------------------------------
// Risk Levels
// ---------------------------------------------------------------------------

export const RISK_LEVELS = {
  critico: {
    label: "Critico",
    badgeClass: "bg-risk-critico-bg text-risk-critico",
    icon: "alert-octagon",
    order: 0,
  },
  alto: {
    label: "Alto",
    badgeClass: "bg-risk-alto-bg text-risk-alto",
    icon: "alert-triangle",
    order: 1,
  },
  medio: {
    label: "Medio",
    badgeClass: "bg-risk-medio-bg text-risk-medio",
    icon: "alert-circle",
    order: 2,
  },
  bajo: {
    label: "Bajo",
    badgeClass: "bg-risk-bajo-bg text-risk-bajo",
    icon: "info",
    order: 3,
  },
} as const;

export type RiskLevelKey = keyof typeof RISK_LEVELS;

// ---------------------------------------------------------------------------
// Interactive States (reference classes for documentation)
// ---------------------------------------------------------------------------

export const INTERACTIVE_STATES = {
  button: {
    default: "bg-primary text-primary-foreground",
    hover: "hover:bg-indigo-700",
    active: "active:bg-indigo-800",
    focus: "focus-visible:ring-2 ring-ring ring-offset-2",
    disabled: "bg-muted text-text-placeholder cursor-not-allowed",
  },
  row: {
    hover: "hover:bg-indigo-50/50",
    selected: "bg-indigo-50 border-l-2 border-l-primary",
  },
} as const;

// ---------------------------------------------------------------------------
// Typography Scale (reference for component development)
// ---------------------------------------------------------------------------

export const TYPOGRAPHY = {
  pageTitle: "text-2xl sm:text-3xl font-bold text-text-heading",
  sectionTitle: "text-xl font-semibold text-text-heading",
  cardTitle: "text-lg font-semibold text-text-heading",
  subtitle: "text-base font-medium text-text-heading",
  body: "text-sm text-text-body",
  caption: "text-xs text-text-muted",
  kpiNumber: "text-3xl font-bold tracking-tight text-text-heading",
  code: "font-mono text-sm",
} as const;
