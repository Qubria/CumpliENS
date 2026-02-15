/**
 * /dev/colors — Design System Verification Page
 *
 * Renders every design token with hex value, intended use, and contrast info.
 * Use this page to visually verify the CumpliENS color system.
 */

import {
  COMPLIANCE_STATUS,
  ENS_CATEGORIES,
  ENS_DIMENSIONS,
  RISK_LEVELS,
  TYPOGRAPHY,
  INTERACTIVE_STATES,
} from "@/config/designTokens";
import { PRIMARY_SCALE, DIMENSION_COLORS } from "@/config/chartColors";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function ColorSwatch({
  color,
  label,
  hex,
  usage,
  contrastInfo,
}: {
  color: string;
  label: string;
  hex: string;
  usage: string;
  contrastInfo?: string;
}) {
  return (
    <div className="flex items-center gap-3 py-2">
      <div
        className="w-10 h-10 rounded-lg border border-border-strong shrink-0 shadow-card"
        style={{ backgroundColor: color }}
      />
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-text-body">{hex}</span>
          <span className="text-xs font-medium text-text-heading">{label}</span>
          {contrastInfo && (
            <span className="text-xs text-text-muted">({contrastInfo})</span>
          )}
        </div>
        <p className="text-xs text-text-muted truncate">{usage}</p>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-surface rounded-xl p-6 shadow-card">
      <h2 className="text-lg font-semibold text-text-heading mb-4 border-b border-border pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Badge({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function DevColors() {
  return (
    <div className="min-h-screen bg-background p-6 sm:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header className="space-y-2">
          <h1 className={TYPOGRAPHY.pageTitle}>
            CumpliENS Design System
          </h1>
          <p className={TYPOGRAPHY.body}>
            Estudio de colores inspirado en Monday.com. Blanco, limpio, aireado,
            sin negro, moderno y profesional. Primary: Indigo{" "}
            <code className="font-mono text-primary">#4F46E5</code>
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ============================================================= */}
          {/* BACKGROUNDS */}
          {/* ============================================================= */}
          <Section title="Fondos (todo blanco, cero oscuro)">
            <ColorSwatch
              color="#FAFBFF"
              label="bg-page / background"
              hex="#FAFBFF"
              usage="Fondo principal de pagina. Blanco con sutil tinte lavanda"
            />
            <ColorSwatch
              color="#FFFFFF"
              label="surface / card"
              hex="#FFFFFF"
              usage="Tarjetas, paneles, contenedores"
            />
            <ColorSwatch
              color="#F0F1FE"
              label="surface-subtle / secondary"
              hex="#F0F1FE"
              usage="Highlights sutiles, zebra stripes, hover"
            />
            <ColorSwatch
              color="#F5F5F9"
              label="surface-muted / muted"
              hex="#F5F5F9"
              usage="Areas deshabilitadas, empty states"
            />
            <ColorSwatch
              color="#EEF0FF"
              label="surface-wash"
              hex="#EEF0FF"
              usage="Hero sections, areas destacadas, onboarding"
            />
          </Section>

          {/* ============================================================= */}
          {/* TEXT COLORS */}
          {/* ============================================================= */}
          <Section title="Textos (SIN negro puro #000)">
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-background">
                <p
                  className="text-lg font-bold"
                  style={{ color: "#1E1B4B" }}
                >
                  Heading — indigo-950
                </p>
                <p className="text-xs text-text-muted font-mono">
                  #1E1B4B — 14.5:1 AAA
                </p>
              </div>
              <div className="p-3 rounded-lg bg-background">
                <p className="text-sm" style={{ color: "#4B5563" }}>
                  Body — gray-600: Texto cuerpo, descripciones
                </p>
                <p className="text-xs text-text-muted font-mono">
                  #4B5563 — 7.5:1 AAA
                </p>
              </div>
              <div className="p-3 rounded-lg bg-background">
                <p className="text-sm" style={{ color: "#6B7280" }}>
                  Muted — gray-500: Texto auxiliar, captions
                </p>
                <p className="text-xs text-text-muted font-mono">
                  #6B7280 — 4.6:1 AA
                </p>
              </div>
              <div className="p-3 rounded-lg bg-background">
                <p className="text-sm" style={{ color: "#9CA3AF" }}>
                  Placeholder — gray-400: Solo placeholders en inputs
                </p>
                <p className="text-xs text-text-muted font-mono">
                  #9CA3AF — 2.7:1 (placeholders only)
                </p>
              </div>
            </div>
          </Section>

          {/* ============================================================= */}
          {/* PRIMARY INDIGO SCALE */}
          {/* ============================================================= */}
          <Section title="Escala Primary — Indigo">
            <div className="grid grid-cols-1 gap-1">
              {(
                Object.entries(PRIMARY_SCALE) as [string, string][]
              ).map(([step, hex]) => (
                <div key={step} className="flex items-center gap-3 py-1">
                  <div
                    className="w-full h-8 rounded-md"
                    style={{ backgroundColor: hex }}
                  />
                  <span className="font-mono text-xs text-text-body w-20 shrink-0">
                    {step}
                  </span>
                  <span className="font-mono text-xs text-text-muted w-20 shrink-0">
                    {hex}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-text-muted">
              600 = Primary. Botones, acciones clave. 700 = Hover. 800 = Active/Pressed.
            </p>
          </Section>

          {/* ============================================================= */}
          {/* COMPLIANCE STATUS */}
          {/* ============================================================= */}
          <Section title="Estados de Cumplimiento ENS">
            <div className="space-y-4">
              {(
                Object.entries(COMPLIANCE_STATUS) as [
                  string,
                  (typeof COMPLIANCE_STATUS)[keyof typeof COMPLIANCE_STATUS],
                ][]
              ).map(([key, status]) => (
                <div
                  key={key}
                  className="flex items-center justify-between gap-3"
                >
                  <Badge className={status.badgeClass}>{status.label}</Badge>
                  <span className="font-mono text-xs text-text-muted">
                    {key}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-text-muted">
              Todos los badges pasan WCAG AA para contraste texto/fondo.
            </p>
          </Section>

          {/* ============================================================= */}
          {/* ENS CATEGORIES */}
          {/* ============================================================= */}
          <Section title="Categorias ENS (azul → indigo → violeta)">
            <div className="space-y-4">
              {(
                Object.entries(ENS_CATEGORIES) as [
                  string,
                  (typeof ENS_CATEGORIES)[keyof typeof ENS_CATEGORIES],
                ][]
              ).map(([key, cat]) => (
                <div key={key} className="flex items-center gap-3">
                  <Badge className={cat.badgeClass}>{cat.label}</Badge>
                  <span className="text-xs text-text-muted">
                    {cat.description}
                  </span>
                  <span className="font-mono text-xs text-text-placeholder ml-auto">
                    {key}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-text-muted">
              Progresion de intensidad: Basica (azul tranquilo) → Media (indigo
              primary) → Alta (violeta intenso)
            </p>
          </Section>

          {/* ============================================================= */}
          {/* 5 ENS DIMENSIONS */}
          {/* ============================================================= */}
          <Section title="5 Dimensiones ENS (Radar Chart)">
            <div className="space-y-3">
              {(
                Object.entries(ENS_DIMENSIONS) as [
                  string,
                  (typeof ENS_DIMENSIONS)[keyof typeof ENS_DIMENSIONS],
                ][]
              ).map(([key, dim]) => (
                <div key={key} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full shrink-0"
                    style={{
                      backgroundColor:
                        DIMENSION_COLORS[
                          key as keyof typeof DIMENSION_COLORS
                        ],
                    }}
                  />
                  <div>
                    <span className="text-sm font-medium text-text-heading">
                      {dim.label}
                    </span>
                    <span className="text-xs text-text-muted ml-2">
                      ({dim.shortLabel})
                    </span>
                  </div>
                  <span className="font-mono text-xs text-text-placeholder ml-auto">
                    {
                      DIMENSION_COLORS[
                        key as keyof typeof DIMENSION_COLORS
                      ]
                    }
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-text-muted">
              ~72 grados de separacion en rueda de color = maxima
              distinguibilidad
            </p>
          </Section>

          {/* ============================================================= */}
          {/* RISK LEVELS */}
          {/* ============================================================= */}
          <Section title="Niveles de Riesgo">
            <div className="space-y-4">
              {(
                Object.entries(RISK_LEVELS) as [
                  string,
                  (typeof RISK_LEVELS)[keyof typeof RISK_LEVELS],
                ][]
              ).map(([key, risk]) => (
                <div key={key} className="flex items-center gap-3">
                  <Badge className={risk.badgeClass}>{risk.label}</Badge>
                  <span className="font-mono text-xs text-text-placeholder ml-auto">
                    {key}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          {/* ============================================================= */}
          {/* BORDERS & DIVIDERS */}
          {/* ============================================================= */}
          <Section title="Bordes y Divisores">
            <ColorSwatch
              color="#E5E7EB"
              label="border (default)"
              hex="#E5E7EB"
              usage="Bordes de cards, inputs"
            />
            <ColorSwatch
              color="#F3F4F6"
              label="border-subtle"
              hex="#F3F4F6"
              usage="Separadores de filas en tablas"
            />
            <ColorSwatch
              color="#D1D5DB"
              label="border-strong"
              hex="#D1D5DB"
              usage="Divisores de seccion"
            />
            <ColorSwatch
              color="#818CF8"
              label="border-focus / ring"
              hex="#818CF8"
              usage="Focus ring en inputs y botones"
            />
          </Section>

          {/* ============================================================= */}
          {/* ACCENT VIOLET */}
          {/* ============================================================= */}
          <Section title="Accent Violet (AI / Premium)">
            <ColorSwatch
              color="#F5F3FF"
              label="accent-violet-bg"
              hex="#F5F3FF"
              usage="Background para secciones AI/Premium"
            />
            <ColorSwatch
              color="#8B5CF6"
              label="accent-violet"
              hex="#8B5CF6"
              usage="Links accent, badges"
            />
            <ColorSwatch
              color="#7C3AED"
              label="accent-violet-strong"
              hex="#7C3AED"
              usage="Botones accent (uso raro)"
            />
          </Section>

          {/* ============================================================= */}
          {/* INTERACTIVE STATES */}
          {/* ============================================================= */}
          <Section title="Estados Interactivos">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium text-text-heading mb-2">
                  Botones
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-card hover:bg-indigo-700 active:bg-indigo-800 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors">
                    Default
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-indigo-700 text-white text-sm font-medium shadow-card">
                    Hover
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-indigo-800 text-white text-sm font-medium shadow-card">
                    Active
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium ring-2 ring-ring ring-offset-2">
                    Focus
                  </button>
                  <button
                    className="px-4 py-2 rounded-lg bg-muted text-text-placeholder text-sm font-medium cursor-not-allowed"
                    disabled
                  >
                    Disabled
                  </button>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-text-heading mb-2">
                  Filas de tabla
                </p>
                <div className="rounded-lg border border-border overflow-hidden">
                  <div className="px-4 py-2 text-sm text-text-body hover:bg-indigo-50/50 transition-colors cursor-pointer">
                    Fila normal — hover:bg-indigo-50/50
                  </div>
                  <div className="px-4 py-2 text-sm text-text-body bg-indigo-50 border-l-2 border-l-primary">
                    Fila seleccionada — bg-indigo-50 border-l-2 border-l-primary
                  </div>
                  <div className="px-4 py-2 text-sm text-text-body hover:bg-indigo-50/50 transition-colors cursor-pointer">
                    Otra fila normal
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* ============================================================= */}
          {/* TYPOGRAPHY */}
          {/* ============================================================= */}
          <Section title="Tipografia">
            <div className="space-y-3">
              <div>
                <p className={TYPOGRAPHY.pageTitle}>
                  Titulo pagina (2xl/3xl bold)
                </p>
              </div>
              <div>
                <p className={TYPOGRAPHY.sectionTitle}>
                  Titulo seccion (xl semibold)
                </p>
              </div>
              <div>
                <p className={TYPOGRAPHY.cardTitle}>
                  Titulo card (lg semibold)
                </p>
              </div>
              <div>
                <p className={TYPOGRAPHY.subtitle}>
                  Subtitulo (base medium)
                </p>
              </div>
              <div>
                <p className={TYPOGRAPHY.body}>
                  Body text (sm regular) — Texto cuerpo, descripciones
                </p>
              </div>
              <div>
                <p className={TYPOGRAPHY.caption}>
                  Caption (xs regular) — Texto auxiliar
                </p>
              </div>
              <div>
                <p className={TYPOGRAPHY.kpiNumber}>87.5%</p>
                <p className={TYPOGRAPHY.caption}>
                  KPI Number (3xl bold tracking-tight)
                </p>
              </div>
              <div>
                <p className={TYPOGRAPHY.code}>
                  mp.if.1 — Monospace (JetBrains Mono)
                </p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-surface-wash rounded-lg">
              <p className="text-xs text-text-muted">
                Font: <strong>Figtree</strong> (sans-serif, Google Fonts) +{" "}
                <strong className="font-mono">JetBrains Mono</strong>{" "}
                (monospace, IDs ENS)
              </p>
            </div>
          </Section>

          {/* ============================================================= */}
          {/* SHADOWS */}
          {/* ============================================================= */}
          <Section title="Sombras (elevacion Monday-style)">
            <div className="space-y-4 p-4 bg-background rounded-lg">
              <div className="p-4 bg-surface rounded-lg shadow-card">
                <p className="text-sm text-text-body">
                  <strong>shadow-card</strong> — 0 1px 3px rgb(0 0 0 / 0.04)
                </p>
              </div>
              <div className="p-4 bg-surface rounded-lg shadow-card-hover">
                <p className="text-sm text-text-body">
                  <strong>shadow-card-hover</strong> — 0 4px 6px rgb(0 0 0 /
                  0.06)
                </p>
              </div>
              <div className="p-4 bg-surface rounded-lg shadow-elevated">
                <p className="text-sm text-text-body">
                  <strong>shadow-elevated</strong> — 0 10px 15px rgb(0 0 0 /
                  0.06)
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* ============================================================= */}
        {/* DECISION SUMMARY */}
        {/* ============================================================= */}
        <Section title="Decision Summary">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-strong">
                  <th className="text-left py-2 text-text-heading font-semibold">
                    Decision
                  </th>
                  <th className="text-left py-2 text-text-heading font-semibold">
                    Elegido
                  </th>
                  <th className="text-left py-2 text-text-heading font-semibold">
                    Descartado
                  </th>
                  <th className="text-left py-2 text-text-heading font-semibold">
                    Por que
                  </th>
                </tr>
              </thead>
              <tbody className="text-text-body">
                <tr className="border-b border-border-subtle">
                  <td className="py-2">Primary</td>
                  <td className="py-2">
                    <Badge className={`${INTERACTIVE_STATES.button.default}`}>
                      Indigo #4F46E5
                    </Badge>
                  </td>
                  <td className="py-2 text-text-muted">Purple #7C3AED</td>
                  <td className="py-2">Mas seguridad, menos playful</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2">"Negro"</td>
                  <td className="py-2 font-mono text-xs">#1E1B4B indigo-950</td>
                  <td className="py-2 text-text-muted font-mono text-xs">
                    #000000
                  </td>
                  <td className="py-2">Branding cohesivo, se ve igual</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2">Fondo pagina</td>
                  <td className="py-2 font-mono text-xs">#FAFBFF lavanda</td>
                  <td className="py-2 text-text-muted font-mono text-xs">
                    #F8FAFC slate
                  </td>
                  <td className="py-2">Tinte primary = mas calido/moderno</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2">Font</td>
                  <td className="py-2">Figtree</td>
                  <td className="py-2 text-text-muted">Inter, Poppins</td>
                  <td className="py-2">Kinship Monday, menos overused</td>
                </tr>
                <tr className="border-b border-border-subtle">
                  <td className="py-2">Border radius</td>
                  <td className="py-2">10px</td>
                  <td className="py-2 text-text-muted">8px</td>
                  <td className="py-2">Mas redondeado = moderno 2026</td>
                </tr>
                <tr>
                  <td className="py-2">Dark mode</td>
                  <td className="py-2 font-semibold text-nocumple-text">NO</td>
                  <td className="py-2 text-text-muted">Si</td>
                  <td className="py-2">User pidio explicitamente NO oscuro</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* Footer */}
        <footer className="text-center py-8">
          <p className={TYPOGRAPHY.caption}>
            CumpliENS Design System v1.0 — Verificacion de tokens
          </p>
        </footer>
      </div>
    </div>
  );
}
