/**
 * Informe Grafico ENS v5 — 100% graficos, cero texto, cero tarjetas, cero tablas.
 * Solo barras, waffle, heatmap, matrices y numeros grandes.
 * CERO SVG — todo CSS divs. Compatible html2canvas.
 */

import type { InformeCumplimiento } from '@/types/analysis'

function esc(t: string | null | undefined): string {
  if (!t) return ''
  return t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
function pct(n: number, t: number): number { return t > 0 ? Math.round((n / t) * 100) : 0 }

const P = {
  ok: '#059669', parc: '#D97706', nc: '#DC2626', na: '#CBD5E1',
  okBg: '#ECFDF5', parcBg: '#FFFBEB', ncBg: '#FEF2F2', naBg: '#F1F5F9',
  navy: '#0F172A', blue: '#1E3A5F', indigo: '#4F46E5',
  txt: '#1E293B', mut: '#64748B', light: '#94A3B8', bord: '#E2E8F0', sub: '#F8FAFC',
  crit: '#991B1B', alta: '#C2410C', med: '#B45309', baja: '#15803D',
  critBg: '#FEE2E2', altBg: '#FFEDD5', medBg: '#FEF3C7', bajBg: '#DCFCE7',
  dim: ['#4F46E5', '#0891B2', '#D97706', '#DB2777', '#7C3AED'] as string[],
} as const

const CSS = `
  @page { size: A4; margin: 14mm 16mm 16mm 16mm; }
  @media print { .pb { page-break-before: always; } body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', system-ui, sans-serif; font-size: 8pt; color: ${P.txt}; max-width: 210mm; margin: 0 auto; background: #fff; }
  .pb { page-break-before: always; }
  .nb { break-inside: avoid; }
  .badge { display: inline-block; padding: 1px 7px; border-radius: 8px; font-size: 6.5pt; font-weight: 700; }
`

// ─── Waffle Chart 10x10 ─────────────────────────────────────────────────────

function waffle(okPct: number, parcPct: number, ncPct: number): string {
  const cells: string[] = []
  const nOk = Math.round(okPct)
  const nParc = Math.round(parcPct)
  const nNc = Math.round(ncPct)
  const nNa = 100 - nOk - nParc - nNc

  for (let i = 0; i < 100; i++) {
    let color: string = P.na
    if (i < nOk) color = P.ok
    else if (i < nOk + nParc) color = P.parc
    else if (i < nOk + nParc + nNc) color = P.nc
    cells.push(`<div style="display:inline-block;width:18px;height:18px;background:${color};border-radius:3px;margin:1.5px;"></div>`)
  }

  return `
  <div style="width:228px;line-height:0;font-size:0;">${cells.join('')}</div>
  <div style="margin-top:8px;">
    <span style="display:inline-block;width:10px;height:10px;background:${P.ok};border-radius:2px;vertical-align:middle;"></span><span style="font-size:7pt;vertical-align:middle;margin:0 7px 0 3px;">${nOk}%</span>
    <span style="display:inline-block;width:10px;height:10px;background:${P.parc};border-radius:2px;vertical-align:middle;"></span><span style="font-size:7pt;vertical-align:middle;margin:0 7px 0 3px;">${nParc}%</span>
    <span style="display:inline-block;width:10px;height:10px;background:${P.nc};border-radius:2px;vertical-align:middle;"></span><span style="font-size:7pt;vertical-align:middle;margin:0 7px 0 3px;">${nNc}%</span>
    ${nNa > 0 ? `<span style="display:inline-block;width:10px;height:10px;background:${P.na};border-radius:2px;vertical-align:middle;"></span><span style="font-size:7pt;vertical-align:middle;margin-left:3px;">${nNa}%</span>` : ''}
  </div>`
}

// ─── Stacked bar ────────────────────────────────────────────────────────────

function stackedBar(ok: number, parc: number, nc: number, na: number, h = 28): string {
  const t = ok + parc + nc + na
  if (t === 0) return ''
  return `<div style="width:100%;height:${h}px;border-radius:6px;overflow:hidden;line-height:0;font-size:0;white-space:nowrap;">` +
    (ok > 0 ? `<div style="display:inline-block;width:${(ok/t*100).toFixed(1)}%;height:${h}px;background:${P.ok};"></div>` : '') +
    (parc > 0 ? `<div style="display:inline-block;width:${(parc/t*100).toFixed(1)}%;height:${h}px;background:${P.parc};"></div>` : '') +
    (nc > 0 ? `<div style="display:inline-block;width:${(nc/t*100).toFixed(1)}%;height:${h}px;background:${P.nc};"></div>` : '') +
    (na > 0 ? `<div style="display:inline-block;width:${(na/t*100).toFixed(1)}%;height:${h}px;background:${P.na};"></div>` : '') +
    `</div>`
}

// ─── Horizontal bar ─────────────────────────────────────────────────────────

function hBar(label: string, val: number, max: number, color: string): string {
  const w = max > 0 ? Math.max((val / max) * 100, 1) : 0
  return `
  <div class="nb" style="margin:8px 0;">
    <div style="margin-bottom:3px;">
      <span style="font-size:8.5pt;font-weight:700;color:${P.txt};">${esc(label)}</span>
      <span style="float:right;font-size:12pt;font-weight:900;color:${color};">${val}%</span>
    </div>
    <div style="width:100%;height:20px;background:#F1F5F9;border-radius:5px;overflow:hidden;">
      <div style="width:${w.toFixed(1)}%;height:20px;background:${color};border-radius:5px;"></div>
    </div>
  </div>`
}

// ─── Vertical bars ──────────────────────────────────────────────────────────

function vBars(items: { label: string; value: number; color: string; bg: string }[]): string {
  const max = Math.max(...items.map(i => i.value), 1)
  const bH = 100
  return `<div style="display:table;width:100%;max-width:360px;margin:0 auto;table-layout:fixed;">
    ${items.map(it => {
      const h = Math.max((it.value / max) * bH, 2)
      return `<div style="display:table-cell;text-align:center;vertical-align:bottom;padding:0 8px;">
        <div style="font-size:22pt;font-weight:900;color:${it.color};line-height:1;">${it.value}</div>
        <div style="width:44px;height:${bH}px;background:${it.bg};border-radius:6px;margin:6px auto 0;position:relative;overflow:hidden;">
          <div style="position:absolute;bottom:0;left:0;right:0;height:${h.toFixed(0)}px;background:${it.color};border-radius:6px;"></div>
        </div>
        <div style="font-size:7pt;font-weight:700;color:${P.mut};margin-top:6px;text-transform:uppercase;letter-spacing:0.5px;">${esc(it.label)}</div>
      </div>`
    }).join('')}
  </div>`
}

// ─── Dimension gauges ───────────────────────────────────────────────────────

function dimGauges(dimensiones: InformeCumplimiento['dimensiones']): string {
  if (!dimensiones) return ''
  const dims = [
    { key: 'confidencialidad', label: 'CONFIDENCIALIDAD', short: 'C' },
    { key: 'integridad', label: 'INTEGRIDAD', short: 'I' },
    { key: 'disponibilidad', label: 'DISPONIBILIDAD', short: 'D' },
    { key: 'trazabilidad', label: 'TRAZABILIDAD', short: 'T' },
    { key: 'autenticidad', label: 'AUTENTICIDAD', short: 'A' },
  ]
  return dims.map((d, i) => {
    const val = (dimensiones as Record<string, { nivel: string }>)?.[d.key]
    const nivel = val?.nivel ?? 'BAJO'
    const v = nivel === 'ALTO' ? 100 : nivel === 'MEDIO' ? 67 : 33
    const color = P.dim[i] ?? P.indigo
    const nivelC = nivel === 'ALTO' ? P.ok : nivel === 'MEDIO' ? P.parc : P.nc
    return `
    <div class="nb" style="margin:6px 0;display:table;width:100%;">
      <div style="display:table-cell;width:38px;vertical-align:middle;text-align:center;">
        <div style="width:32px;height:32px;border-radius:50%;background:${color};color:#fff;font-size:14pt;font-weight:900;line-height:32px;text-align:center;margin:0 auto;">${d.short}</div>
      </div>
      <div style="display:table-cell;vertical-align:middle;padding:0 10px;">
        <div style="font-size:7pt;font-weight:700;color:${P.mut};letter-spacing:1px;margin-bottom:2px;">${d.label}</div>
        <div style="width:100%;height:14px;background:#E2E8F0;border-radius:7px;overflow:hidden;">
          <div style="width:${v}%;height:14px;background:${color};border-radius:7px;"></div>
        </div>
      </div>
      <div style="display:table-cell;width:55px;vertical-align:middle;text-align:right;">
        <div style="font-size:16pt;font-weight:900;color:${color};line-height:1;">${v}%</div>
        <div style="margin-top:1px;"><span class="badge" style="background:${nivelC}22;color:${nivelC};">${nivel}</span></div>
      </div>
    </div>`
  }).join('')
}

// ─── Heatmap ────────────────────────────────────────────────────────────────

function heatmap(hallazgos: InformeCumplimiento['hallazgos']): string {
  const cm: Record<string, string> = { CONFORME: P.ok, PARCIALMENTE_CONFORME: P.parc, NO_CONFORME: P.nc, NO_APLICA: '#D1D5DB' }
  const grupos: Record<string, typeof hallazgos> = {}
  hallazgos.forEach(h => {
    const p = h.control_id.split('.')[0]
    const g = p === 'org' ? 'ORG' : p === 'op' ? 'OP' : p === 'mp' ? 'MP' : '?'
    if (!grupos[g]) grupos[g] = []
    grupos[g].push(h)
  })
  const gMeta: Record<string, { full: string; color: string }> = {
    ORG: { full: 'Marco Organizativo', color: '#3B82F6' },
    OP: { full: 'Marco Operacional', color: P.indigo },
    MP: { full: 'Medidas de Proteccion', color: '#7C3AED' },
  }
  let html = ''
  for (const [gKey, items] of Object.entries(grupos)) {
    const m = gMeta[gKey] ?? { full: gKey, color: P.indigo }
    const nConf = items.filter(h => h.nivel_cumplimiento === 'CONFORME').length
    const nNc = items.filter(h => h.nivel_cumplimiento === 'NO_CONFORME').length
    const nParc = items.filter(h => h.nivel_cumplimiento === 'PARCIALMENTE_CONFORME').length
    const nNa = items.filter(h => h.nivel_cumplimiento === 'NO_APLICA').length
    const gPct = pct(nConf + nParc * 0.5, items.length)
    html += `<div class="nb" style="margin:10px 0;">
      <div style="display:table;width:100%;margin-bottom:5px;">
        <div style="display:table-cell;vertical-align:middle;">
          <span style="display:inline-block;width:4px;height:14px;background:${m.color};border-radius:2px;vertical-align:middle;margin-right:5px;"></span>
          <span style="font-size:9pt;font-weight:800;color:${P.blue};vertical-align:middle;">${m.full}</span>
        </div>
        <div style="display:table-cell;text-align:right;vertical-align:middle;">
          <span style="font-size:8pt;color:${P.ok};font-weight:700;">${nConf}</span>
          <span style="font-size:7pt;color:${P.mut};">/</span>
          <span style="font-size:8pt;color:${P.nc};font-weight:700;">${nNc}</span>
          <span style="font-size:11pt;font-weight:900;color:${gPct >= 70 ? P.ok : gPct >= 40 ? P.parc : P.nc};margin-left:8px;">${gPct}%</span>
        </div>
      </div>
      <div style="line-height:0;font-size:0;">
        ${items.map(h => {
          const col = cm[h.nivel_cumplimiento] ?? '#D1D5DB'
          const id = h.control_id.split('.').slice(1).join('.')
          return `<div style="display:inline-block;width:26px;height:26px;background:${col};border-radius:3px;margin:1.5px;text-align:center;line-height:26px;font-size:5.5pt;color:#fff;font-weight:700;">${esc(id)}</div>`
        }).join('')}
      </div>
      <div style="margin-top:4px;">${stackedBar(nConf, nParc, nNc, nNa, 8)}</div>
    </div>`
  }
  return html
}

// ─── NUEVO: Barras de incumplimiento (reemplaza tarjetas) ───────────────────
// Cada control NO_CONFORME o PARCIAL como barra horizontal, largo = severidad

function incumplimientoBars(hallazgos: InformeCumplimiento['hallazgos']): string {
  const crit = hallazgos
    .filter(h => h.nivel_cumplimiento === 'NO_CONFORME' || h.nivel_cumplimiento === 'PARCIALMENTE_CONFORME')
    .sort((a, b) => {
      const o: Record<string, number> = { CRITICA: 0, ALTA: 1, MEDIA: 2, BAJA: 3 }
      return (o[a.prioridad] ?? 2) - (o[b.prioridad] ?? 2)
    })
    .slice(0, 20)

  if (crit.length === 0) return ''

  const wMap: Record<string, number> = { CRITICA: 100, ALTA: 80, MEDIA: 55, BAJA: 30 }
  const cMap: Record<string, string> = { CRITICA: '#DC2626', ALTA: '#EA580C', MEDIA: '#F59E0B', BAJA: '#22C55E' }
  const bgMap: Record<string, string> = { CRITICA: P.critBg, ALTA: P.altBg, MEDIA: P.medBg, BAJA: P.bajBg }

  return crit.map(h => {
    const w = wMap[h.prioridad] ?? 50
    const c = cMap[h.prioridad] ?? '#F59E0B'
    const bg = bgMap[h.prioridad] ?? P.medBg
    const isNc = h.nivel_cumplimiento === 'NO_CONFORME'
    return `
    <div style="display:table;width:100%;margin:3px 0;">
      <div style="display:table-cell;width:60px;vertical-align:middle;text-align:right;padding-right:8px;">
        <span style="font-size:7.5pt;font-weight:800;color:${P.txt};">${esc(h.control_id)}</span>
      </div>
      <div style="display:table-cell;vertical-align:middle;">
        <div style="width:100%;height:16px;background:${bg};border-radius:4px;overflow:hidden;position:relative;">
          <div style="width:${w}%;height:16px;background:${c};border-radius:4px;"></div>
          <div style="position:absolute;right:4px;top:0;line-height:16px;font-size:6pt;font-weight:700;color:${isNc ? '#fff' : P.txt};">${isNc ? 'NC' : 'PC'}</div>
        </div>
      </div>
      <div style="display:table-cell;width:40px;vertical-align:middle;text-align:center;">
        <span style="font-size:7pt;font-weight:800;color:${c};">${esc(h.prioridad).substring(0, 4)}</span>
      </div>
    </div>`
  }).join('')
}

// ─── NUEVO: Risk Matrix (prioridad x cumplimiento) ──────────────────────────
// Grid 4x2: filas=prioridad (CRIT/ALTA/MED/BAJA), cols=(NC, PARC)

function riskMatrix(hallazgos: InformeCumplimiento['hallazgos']): string {
  const grid: Record<string, { NC: number; PC: number }> = {
    CRITICA: { NC: 0, PC: 0 },
    ALTA: { NC: 0, PC: 0 },
    MEDIA: { NC: 0, PC: 0 },
    BAJA: { NC: 0, PC: 0 },
  }
  hallazgos.forEach(h => {
    const row = grid[h.prioridad]
    if (!row) return
    if (h.nivel_cumplimiento === 'NO_CONFORME') row.NC++
    if (h.nivel_cumplimiento === 'PARCIALMENTE_CONFORME') row.PC++
  })

  const rowColors: Record<string, { bg: string; txt: string }> = {
    CRITICA: { bg: '#DC2626', txt: '#fff' },
    ALTA: { bg: '#EA580C', txt: '#fff' },
    MEDIA: { bg: '#F59E0B', txt: '#fff' },
    BAJA: { bg: '#22C55E', txt: '#fff' },
  }

  const max = Math.max(...Object.values(grid).map(r => Math.max(r.NC, r.PC)), 1)

  return `
  <div style="display:table;width:100%;max-width:400px;margin:0 auto;border-collapse:collapse;">
    <!-- Header -->
    <div style="display:table-row;">
      <div style="display:table-cell;width:70px;padding:6px;"></div>
      <div style="display:table-cell;padding:6px;text-align:center;font-size:7pt;font-weight:800;color:${P.nc};letter-spacing:0.5px;">NO CONFORME</div>
      <div style="display:table-cell;padding:6px;text-align:center;font-size:7pt;font-weight:800;color:${P.parc};letter-spacing:0.5px;">PARCIAL</div>
    </div>
    ${(['CRITICA', 'ALTA', 'MEDIA', 'BAJA'] as const).map(prio => {
      const row = grid[prio] ?? { NC: 0, PC: 0 }
      const rc = rowColors[prio] ?? { bg: '#999', txt: '#fff' }
      return `
    <div style="display:table-row;">
      <div style="display:table-cell;padding:4px 6px;vertical-align:middle;">
        <div style="background:${rc.bg};color:${rc.txt};font-size:6.5pt;font-weight:800;padding:3px 8px;border-radius:4px;text-align:center;">${prio}</div>
      </div>
      <div style="display:table-cell;padding:4px;vertical-align:middle;text-align:center;">
        <div style="display:inline-block;width:${Math.max(24, (row.NC / max) * 80)}px;height:${Math.max(24, (row.NC / max) * 80)}px;border-radius:50%;background:${row.NC > 0 ? P.nc + '22' : P.sub};border:2px solid ${row.NC > 0 ? P.nc : P.bord};line-height:${Math.max(24, (row.NC / max) * 80)}px;text-align:center;font-size:${row.NC > 5 ? 16 : 14}pt;font-weight:900;color:${row.NC > 0 ? P.nc : P.light};">${row.NC}</div>
      </div>
      <div style="display:table-cell;padding:4px;vertical-align:middle;text-align:center;">
        <div style="display:inline-block;width:${Math.max(24, (row.PC / max) * 80)}px;height:${Math.max(24, (row.PC / max) * 80)}px;border-radius:50%;background:${row.PC > 0 ? P.parc + '22' : P.sub};border:2px solid ${row.PC > 0 ? P.parc : P.bord};line-height:${Math.max(24, (row.PC / max) * 80)}px;text-align:center;font-size:${row.PC > 5 ? 16 : 14}pt;font-weight:900;color:${row.PC > 0 ? P.parc : P.light};">${row.PC}</div>
      </div>
    </div>`
    }).join('')}
  </div>`
}

// ─── NUEVO: Subgroup mini stacked bars ──────────────────────────────────────
// Cada subgrupo (org.1, org.2, op.pl, op.acc...) como barra apilada

function subgroupBars(hallazgos: InformeCumplimiento['hallazgos']): string {
  const subs: Record<string, { ok: number; pc: number; nc: number; na: number }> = {}
  hallazgos.forEach(h => {
    const parts = h.control_id.split('.')
    const sub = parts.length >= 2 ? parts.slice(0, 2).join('.') : (parts[0] ?? '?')
    if (!subs[sub]) subs[sub] = { ok: 0, pc: 0, nc: 0, na: 0 }
    const s = subs[sub]!
    if (h.nivel_cumplimiento === 'CONFORME') s.ok++
    else if (h.nivel_cumplimiento === 'PARCIALMENTE_CONFORME') s.pc++
    else if (h.nivel_cumplimiento === 'NO_CONFORME') s.nc++
    else s.na++
  })

  return Object.entries(subs).map(([sub, d]) => {
    const total = d.ok + d.pc + d.nc + d.na
    const cumPct = pct(d.ok + d.pc * 0.5, total)
    const cumColor = cumPct >= 70 ? P.ok : cumPct >= 40 ? P.parc : P.nc
    return `
    <div style="display:table;width:100%;margin:3px 0;">
      <div style="display:table-cell;width:52px;vertical-align:middle;text-align:right;padding-right:6px;">
        <span style="font-size:7pt;font-weight:800;color:${P.txt};">${esc(sub)}</span>
      </div>
      <div style="display:table-cell;vertical-align:middle;">
        ${stackedBar(d.ok, d.pc, d.nc, d.na, 14)}
      </div>
      <div style="display:table-cell;width:36px;vertical-align:middle;text-align:right;">
        <span style="font-size:8pt;font-weight:900;color:${cumColor};">${cumPct}%</span>
      </div>
    </div>`
  }).join('')
}

// ─── NUEVO: Treemap de incumplimientos ──────────────────────────────────────
// Rectangulos proporcionales al numero de NC por subgrupo

function treemap(hallazgos: InformeCumplimiento['hallazgos']): string {
  const subs: Record<string, { nc: number; pc: number }> = {}
  hallazgos.forEach(h => {
    const parts = h.control_id.split('.')
    const sub = parts.length >= 2 ? parts.slice(0, 2).join('.') : (parts[0] ?? '?')
    if (!subs[sub]) subs[sub] = { nc: 0, pc: 0 }
    const s = subs[sub]!
    if (h.nivel_cumplimiento === 'NO_CONFORME') s.nc++
    if (h.nivel_cumplimiento === 'PARCIALMENTE_CONFORME') s.pc++
  })

  // Solo mostrar subgrupos con problemas, ordenados por severidad
  const items = Object.entries(subs)
    .filter(([, d]) => d.nc + d.pc > 0)
    .sort((a, b) => (b[1].nc * 2 + b[1].pc) - (a[1].nc * 2 + a[1].pc))
    .slice(0, 16)

  if (items.length === 0) return ''

  const maxScore = Math.max(...items.map(([, d]) => d.nc * 2 + d.pc), 1)

  return `<div style="line-height:0;font-size:0;">
    ${items.map(([sub, d]) => {
      const score = d.nc * 2 + d.pc
      const severity = d.nc > d.pc ? 1 : 0.5 // more NC = more red
      const size = Math.max(40, Math.round((score / maxScore) * 90))
      const bg = severity > 0.7 ? P.nc : P.parc
      const bgA = severity > 0.7 ? P.ncBg : P.parcBg
      return `<div style="display:inline-block;width:${size}px;height:${size}px;background:${bgA};border:2px solid ${bg};border-radius:6px;margin:3px;text-align:center;vertical-align:top;position:relative;overflow:hidden;">
        <div style="position:absolute;bottom:0;left:0;right:0;height:${Math.round((score / maxScore) * 100)}%;background:${bg}20;"></div>
        <div style="position:relative;padding-top:${Math.max(4, size/2 - 14)}px;">
          <div style="font-size:${size > 60 ? 14 : 10}pt;font-weight:900;color:${bg};line-height:1;">${d.nc + d.pc}</div>
          <div style="font-size:${size > 50 ? 6 : 5}pt;font-weight:700;color:${P.mut};margin-top:1px;">${esc(sub)}</div>
        </div>
      </div>`
    }).join('')}
  </div>`
}

// ─── Action plan ────────────────────────────────────────────────────────────

function actionPlan(hallazgos: InformeCumplimiento['hallazgos']): string {
  const nc = hallazgos.filter(h => h.nivel_cumplimiento === 'NO_CONFORME')
  const par = hallazgos.filter(h => h.nivel_cumplimiento === 'PARCIALMENTE_CONFORME')
  const groups = [
    { label: 'URGENTE', items: nc.filter(h => h.prioridad === 'CRITICA' || h.prioridad === 'ALTA'), color: P.nc, bg: P.ncBg, border: '#DC2626' },
    { label: 'MEDIO PLAZO', items: nc.filter(h => h.prioridad === 'MEDIA'), color: P.parc, bg: P.parcBg, border: '#D97706' },
    { label: 'MEJORA', items: [...nc.filter(h => h.prioridad === 'BAJA'), ...par], color: P.ok, bg: P.okBg, border: '#059669' },
  ]
  return `<div style="display:table;width:100%;table-layout:fixed;">
    ${groups.map(g => `
    <div style="display:table-cell;padding:5px;vertical-align:top;">
      <div class="nb" style="border:2px solid ${g.border};border-radius:10px;padding:14px;text-align:center;min-height:140px;">
        <div style="font-size:40pt;font-weight:900;color:${g.color};line-height:1;">${g.items.length}</div>
        <div style="font-size:7pt;font-weight:800;color:${g.color};letter-spacing:1.5px;margin-top:4px;">${g.label}</div>
        <div style="width:40px;height:3px;background:${g.color};border-radius:2px;margin:8px auto;"></div>
        ${g.items.slice(0, 5).map(h => `<div style="font-size:6.5pt;color:${P.mut};padding:1px 0;">${esc(h.control_id)}</div>`).join('')}
        ${g.items.length > 5 ? `<div style="font-size:6pt;color:${P.light};margin-top:2px;">+${g.items.length - 5}</div>` : ''}
      </div>
    </div>`).join('')}
  </div>`
}

// ─── NUEVO: Compliance comparison bars (OK vs NC por marco) ─────────────────

function comparisonBars(hallazgos: InformeCumplimiento['hallazgos']): string {
  const grupos: Record<string, { ok: number; nc: number; total: number }> = {}
  hallazgos.forEach(h => {
    const p = h.control_id.split('.')[0]
    const g = p === 'org' ? 'ORG' : p === 'op' ? 'OP' : p === 'mp' ? 'MP' : '?'
    if (!grupos[g]) grupos[g] = { ok: 0, nc: 0, total: 0 }
    grupos[g].total++
    if (h.nivel_cumplimiento === 'CONFORME') grupos[g].ok++
    if (h.nivel_cumplimiento === 'NO_CONFORME') grupos[g].nc++
  })

  const maxTotal = Math.max(...Object.values(grupos).map(g => g.total), 1)

  return Object.entries(grupos).map(([g, d]) => {
    const okW = (d.ok / maxTotal) * 100
    const ncW = (d.nc / maxTotal) * 100
    return `
    <div style="margin:10px 0;">
      <div style="font-size:8pt;font-weight:800;color:${P.blue};margin-bottom:4px;">${g === 'ORG' ? 'Organizativo' : g === 'OP' ? 'Operacional' : 'Proteccion'}</div>
      <div style="display:table;width:100%;">
        <div style="display:table-cell;width:50%;vertical-align:middle;text-align:right;padding-right:4px;">
          <div style="width:100%;height:18px;background:#F1F5F9;border-radius:4px;overflow:hidden;direction:rtl;">
            <div style="width:${okW.toFixed(1)}%;height:18px;background:${P.ok};border-radius:4px;display:inline-block;"></div>
          </div>
        </div>
        <div style="display:table-cell;width:60px;vertical-align:middle;text-align:center;">
          <span style="font-size:10pt;font-weight:900;color:${P.ok};">${d.ok}</span>
          <span style="font-size:7pt;color:${P.mut};"> / </span>
          <span style="font-size:10pt;font-weight:900;color:${P.nc};">${d.nc}</span>
        </div>
        <div style="display:table-cell;width:50%;vertical-align:middle;padding-left:4px;">
          <div style="width:100%;height:18px;background:#F1F5F9;border-radius:4px;overflow:hidden;">
            <div style="width:${ncW.toFixed(1)}%;height:18px;background:${P.nc};border-radius:4px;"></div>
          </div>
        </div>
      </div>
    </div>`
  }).join('')
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════════════════

export function generarInformeGraficoHTML(informe: InformeCumplimiento): string {
  const total = informe.totalControles
  const aplicables = total - informe.cantidadNoAplica
  const tasa = pct(informe.cantidadConforme + informe.cantidadParcial * 0.5, total)
  const tasaC = tasa >= 80 ? P.ok : tasa >= 50 ? P.parc : P.nc
  const okPct = pct(informe.cantidadConforme, total)
  const parcPct = pct(informe.cantidadParcial, total)
  const ncPct = pct(informe.cantidadNoConforme, total)

  const catData: Record<string, { ok: number; t: number }> = {}
  informe.hallazgos.forEach(h => {
    const p = h.control_id.split('.')[0]
    const cat = p === 'org' ? 'Organizativo' : p === 'op' ? 'Operacional' : p === 'mp' ? 'Proteccion' : 'Otros'
    if (!catData[cat]) catData[cat] = { ok: 0, t: 0 }
    catData[cat].t++
    if (h.nivel_cumplimiento === 'CONFORME') catData[cat].ok++
    if (h.nivel_cumplimiento === 'PARCIALMENTE_CONFORME') catData[cat].ok += 0.5
  })

  const risk = { CRITICA: 0, ALTA: 0, MEDIA: 0, BAJA: 0 }
  informe.hallazgos.forEach(h => { if (h.prioridad in risk) risk[h.prioridad as keyof typeof risk]++ })

  const catColors: Record<string, string> = { Organizativo: '#3B82F6', Operacional: P.indigo, Proteccion: '#7C3AED', Otros: P.mut }

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Informe ENS - ${esc(informe.nombreDocumento)}</title>
<style>${CSS}</style>
</head>
<body>

<!-- P1: HERO DASHBOARD -->
<div style="padding:40px 20px 20px;text-align:center;">
  <div style="display:inline-block;width:44px;height:44px;background:${P.indigo};border-radius:12px;margin-bottom:14px;"></div>
  <div style="font-size:20pt;font-weight:800;color:${P.navy};letter-spacing:-0.5px;">CUMPLIMIENTO ENS</div>
  <div style="font-size:8pt;color:${P.mut};margin-bottom:24px;">${esc(informe.nombreDocumento)}</div>
  <div style="display:inline-block;padding:20px 44px;border-radius:18px;background:${tasaC}08;border:2.5px solid ${tasaC};">
    <div style="font-size:72pt;font-weight:900;color:${tasaC};line-height:1;letter-spacing:-3px;">${tasa}%</div>
  </div>
  <div style="max-width:420px;margin:20px auto 0;">
    ${stackedBar(informe.cantidadConforme, informe.cantidadParcial, informe.cantidadNoConforme, informe.cantidadNoAplica, 24)}
  </div>
  <div style="display:table;width:100%;max-width:480px;margin:20px auto 0;table-layout:fixed;">
    ${[
      { v: `${tasa}%`, l: 'GLOBAL', c: tasaC },
      { v: `${informe.cantidadConforme}`, l: 'CONFORME', c: P.ok },
      { v: `${informe.cantidadNoConforme}`, l: 'NO CONF.', c: P.nc },
      { v: `${informe.cantidadParcial}`, l: 'PARCIAL', c: P.parc },
    ].map(k => `<div style="display:table-cell;padding:4px;">
      <div style="border:1px solid ${P.bord};border-radius:10px;padding:12px 6px;text-align:center;border-top:3px solid ${k.c};">
        <div style="font-size:26pt;font-weight:900;color:${k.c};line-height:1;">${k.v}</div>
        <div style="font-size:6.5pt;color:${P.mut};margin-top:3px;">${k.l}</div>
      </div>
    </div>`).join('')}
  </div>
  <div style="display:table;width:100%;max-width:480px;margin:16px auto 0;background:${P.sub};border:1px solid ${P.bord};border-radius:8px;">
    ${[
      { l: 'Organizacion', v: esc(informe.organizacion), c: P.txt },
      { l: 'Categoria', v: esc(informe.categoriaENS), c: P.indigo },
      { l: 'Fecha', v: esc(informe.fechaAnalisis), c: P.txt },
      { l: 'Controles', v: `${aplicables}/${total}`, c: P.txt },
    ].map((m, i, a) => `<div style="display:table-cell;padding:8px;text-align:center;${i < a.length - 1 ? `border-right:1px solid ${P.bord};` : ''}width:25%;">
      <div style="font-size:6pt;color:${P.light};text-transform:uppercase;letter-spacing:0.5px;">${m.l}</div>
      <div style="font-size:8pt;font-weight:700;color:${m.c};margin-top:1px;">${m.v}</div>
    </div>`).join('')}
  </div>
</div>

<!-- P2: WAFFLE + DIMENSIONES -->
<div class="pb" style="padding:20px;">
  <div style="display:table;width:100%;">
    <div style="display:table-cell;width:260px;vertical-align:top;padding-right:20px;">
      <div style="font-size:11pt;font-weight:800;color:${P.navy};margin-bottom:10px;">Distribucion</div>
      ${waffle(okPct, parcPct, ncPct)}
    </div>
    <div style="display:table-cell;vertical-align:top;">
      <div style="font-size:11pt;font-weight:800;color:${P.navy};margin-bottom:10px;">Dimensiones</div>
      ${dimGauges(informe.dimensiones)}
    </div>
  </div>
</div>

<!-- P3: CATEGORIAS + RIESGO -->
<div class="pb" style="padding:20px;">
  <div style="display:table;width:100%;">
    <div style="display:table-cell;width:55%;vertical-align:top;padding-right:16px;">
      <div style="font-size:11pt;font-weight:800;color:${P.navy};margin-bottom:8px;">Cumplimiento por Marco</div>
      ${Object.entries(catData).map(([cat, { ok, t }]) => hBar(cat, pct(ok, t), 100, catColors[cat] ?? P.indigo)).join('')}
    </div>
    <div style="display:table-cell;width:45%;vertical-align:top;padding-left:16px;">
      <div style="font-size:11pt;font-weight:800;color:${P.navy};margin-bottom:8px;">Riesgo</div>
      ${vBars([
        { label: 'CRIT', value: risk.CRITICA, color: '#DC2626', bg: P.critBg },
        { label: 'ALTA', value: risk.ALTA, color: '#EA580C', bg: P.altBg },
        { label: 'MED', value: risk.MEDIA, color: '#F59E0B', bg: P.medBg },
        { label: 'BAJA', value: risk.BAJA, color: '#22C55E', bg: P.bajBg },
      ])}
    </div>
  </div>
</div>

<!-- P4: MAPA HEATMAP -->
<div class="pb" style="padding:20px;">
  <div style="font-size:11pt;font-weight:800;color:${P.navy};margin-bottom:6px;">Mapa de Controles</div>
  <div style="margin-bottom:8px;">
    <span style="display:inline-block;width:10px;height:10px;background:${P.ok};border-radius:2px;vertical-align:middle;"></span><span style="font-size:7pt;vertical-align:middle;margin:0 8px 0 3px;">OK</span>
    <span style="display:inline-block;width:10px;height:10px;background:${P.parc};border-radius:2px;vertical-align:middle;"></span><span style="font-size:7pt;vertical-align:middle;margin:0 8px 0 3px;">Parcial</span>
    <span style="display:inline-block;width:10px;height:10px;background:${P.nc};border-radius:2px;vertical-align:middle;"></span><span style="font-size:7pt;vertical-align:middle;margin:0 8px 0 3px;">No conf.</span>
    <span style="display:inline-block;width:10px;height:10px;background:#D1D5DB;border-radius:2px;vertical-align:middle;"></span><span style="font-size:7pt;vertical-align:middle;margin-left:3px;">N/A</span>
  </div>
  ${heatmap(informe.hallazgos)}
</div>

<!-- P5: BARRAS INCUMPLIMIENTO + RISK MATRIX -->
<div class="pb" style="padding:20px;">
  <div style="display:table;width:100%;">
    <div style="display:table-cell;width:58%;vertical-align:top;padding-right:16px;">
      <div style="font-size:11pt;font-weight:800;color:${P.navy};margin-bottom:8px;">Incumplimientos</div>
      ${incumplimientoBars(informe.hallazgos)}
    </div>
    <div style="display:table-cell;width:42%;vertical-align:top;padding-left:16px;">
      <div style="font-size:11pt;font-weight:800;color:${P.navy};margin-bottom:8px;">Matriz de Riesgo</div>
      ${riskMatrix(informe.hallazgos)}
    </div>
  </div>
</div>

<!-- P6: COMPARATIVA + TREEMAP -->
<div class="pb" style="padding:20px;">
  <div style="display:table;width:100%;">
    <div style="display:table-cell;width:50%;vertical-align:top;padding-right:14px;">
      <div style="font-size:11pt;font-weight:800;color:${P.navy};margin-bottom:8px;">Conforme vs No Conforme</div>
      <div style="text-align:center;margin-bottom:6px;">
        <span style="font-size:7pt;color:${P.ok};font-weight:700;">&#9664; CONFORME</span>
        <span style="font-size:7pt;color:${P.mut};margin:0 8px;">|</span>
        <span style="font-size:7pt;color:${P.nc};font-weight:700;">NO CONFORME &#9654;</span>
      </div>
      ${comparisonBars(informe.hallazgos)}
    </div>
    <div style="display:table-cell;width:50%;vertical-align:top;padding-left:14px;">
      <div style="font-size:11pt;font-weight:800;color:${P.navy};margin-bottom:8px;">Mapa de Problemas</div>
      ${treemap(informe.hallazgos)}
    </div>
  </div>
</div>

<!-- P7: SUBGROUP BARS + PLAN ACCION -->
<div class="pb" style="padding:20px;">
  <div style="font-size:11pt;font-weight:800;color:${P.navy};margin-bottom:8px;">Detalle por Subgrupo</div>
  ${subgroupBars(informe.hallazgos)}
</div>

<!-- P8: PLAN ACCION -->
<div class="pb" style="padding:20px;">
  <div style="font-size:11pt;font-weight:800;color:${P.navy};margin-bottom:10px;">Plan de Accion</div>
  ${actionPlan(informe.hallazgos)}
</div>

<!-- Footer -->
<div style="text-align:center;font-size:6.5pt;color:${P.light};padding:10px;border-top:1px solid ${P.bord};margin-top:16px;">
  ${esc(informe.organizacion)} &middot; ${esc(informe.categoriaENS)} &middot; ${esc(informe.fechaAnalisis)} &middot; CumpliENS
</div>

</body>
</html>`
}

export function abrirInformeGraficoImprimible(html: string): void {
  const v = window.open('', '_blank')
  if (v) { v.document.write(html); v.document.close(); setTimeout(() => v.print(), 500) }
  else {
    const b = new Blob([html], { type: 'text/html;charset=utf-8' })
    const u = URL.createObjectURL(b)
    const a = document.createElement('a'); a.href = u; a.download = 'informe-ens.html'
    document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(u)
  }
}
