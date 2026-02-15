/**
 * CumpliENS Chart Colors
 *
 * Hex values for chart libraries (Recharts, D3, Chart.js, etc.)
 * Chart libraries need direct hex/rgb values, not CSS variables.
 * Source of truth: src/index.css CSS custom properties.
 */

// ---------------------------------------------------------------------------
// Dimension Colors — dynamic palette for any number of dimensions
// The palette supports up to 12 dimensions. Colors are assigned in order.
// Known dimension keys get stable colors; new ones get the next available.
// ---------------------------------------------------------------------------

/** 12-color palette with good distinguishability */
export const DIMENSION_PALETTE = [
  "#6366F1", // Indigo
  "#14B8A6", // Teal
  "#F59E0B", // Amber
  "#EC4899", // Pink
  "#8B5CF6", // Violet
  "#3B82F6", // Blue
  "#10B981", // Emerald
  "#F97316", // Orange
  "#06B6D4", // Cyan
  "#E11D48", // Rose
  "#84CC16", // Lime
  "#A855F7", // Purple
] as const;

/** Known dimension → stable color index mapping (for consistency) */
const KNOWN_DIMENSION_INDEX: Record<string, number> = {
  confidencialidad: 0,
  integridad: 1,
  disponibilidad: 2,
  trazabilidad: 3,
  autenticidad: 4,
};

/**
 * Get a color for any dimension key. Known dimensions get stable colors,
 * unknown ones get assigned from the palette by their position.
 */
export function getDimensionColor(key: string, index: number): string {
  const known = KNOWN_DIMENSION_INDEX[key];
  const i = known !== undefined ? known : index;
  return DIMENSION_PALETTE[i % DIMENSION_PALETTE.length];
}

/**
 * Build a key→color map from an array of dimension keys.
 * Use this when you need a lookup table for a specific dataset.
 */
export function buildDimensionColorMap(keys: string[]): Record<string, string> {
  const map: Record<string, string> = {};
  keys.forEach((key, i) => {
    map[key] = getDimensionColor(key, i);
  });
  return map;
}

// ---------------------------------------------------------------------------
// Compliance Status — Pie/Donut/Bar Charts
// ---------------------------------------------------------------------------

export const COMPLIANCE_COLORS = {
  cumple: {
    fill: "#22C55E",      // green-500 (icon color, used as fill)
    bg: "#D1FAE5",        // light green bg
    text: "#15803D",      // dark green text
  },
  parcial: {
    fill: "#F59E0B",      // amber-500
    bg: "#FEF3C7",        // light amber bg
    text: "#B45309",      // dark amber text
  },
  nocumple: {
    fill: "#EF4444",      // red-500
    bg: "#FEE2E2",        // light red bg
    text: "#B91C1C",      // dark red text
  },
  noaplica: {
    fill: "#9CA3AF",      // gray-400
    bg: "#F3F4F6",        // light gray bg
    text: "#6B7280",      // gray-500 text
  },
} as const;

/** Ordered array for indexed chart access */
export const COMPLIANCE_COLORS_ARRAY = [
  "#22C55E", // Cumple
  "#F59E0B", // Parcial
  "#EF4444", // No Cumple
  "#9CA3AF", // No Aplica
] as const;

// ---------------------------------------------------------------------------
// ENS Categories — Category breakdowns
// ---------------------------------------------------------------------------

export const CATEGORY_COLORS = {
  basica: {
    fill: "#3B82F6",      // blue-500
    bg: "#DBEAFE",        // blue-100
  },
  media: {
    fill: "#4F46E5",      // indigo-600 (primary)
    bg: "#E0E7FF",        // indigo-100
  },
  alta: {
    fill: "#7C3AED",      // violet-600
    bg: "#EDE9FE",        // violet-100
  },
} as const;

// ---------------------------------------------------------------------------
// Risk Levels — Risk matrices, heatmaps
// ---------------------------------------------------------------------------

export const RISK_COLORS = {
  critico: {
    fill: "#DC2626",      // red-600
    bg: "#FEE2E2",        // red-100
  },
  alto: {
    fill: "#EA580C",      // orange-600
    bg: "#FFEDD5",        // orange-100
  },
  medio: {
    fill: "#F59E0B",      // amber-500
    bg: "#FEF3C7",        // amber-100
  },
  bajo: {
    fill: "#22C55E",      // green-500
    bg: "#DCFCE7",        // green-100
  },
} as const;

/** Ordered array (critico → bajo) for indexed chart access */
export const RISK_COLORS_ARRAY = [
  "#DC2626", // Critico
  "#EA580C", // Alto
  "#F59E0B", // Medio
  "#22C55E", // Bajo
] as const;

// ---------------------------------------------------------------------------
// Primary Indigo Scale — Gradient fills, area charts
// ---------------------------------------------------------------------------

export const PRIMARY_SCALE = {
  50: "#EEF2FF",
  100: "#E0E7FF",
  200: "#C7D2FE",
  300: "#A5B4FC",
  400: "#818CF8",
  500: "#6366F1",
  600: "#4F46E5",
  700: "#4338CA",
  800: "#3730A3",
  900: "#312E81",
  950: "#1E1B4B",
} as const;
