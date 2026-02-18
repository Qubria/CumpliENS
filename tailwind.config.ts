import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Figtree"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
        '3xl': 'calc(var(--radius) + 12px)',
      },
      colors: {
        // Core shadcn/ui tokens
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: { DEFAULT: 'var(--card)', foreground: 'var(--card-foreground)' },
        popover: { DEFAULT: 'var(--popover)', foreground: 'var(--popover-foreground)' },
        primary: { DEFAULT: 'var(--primary)', foreground: 'var(--primary-foreground)' },
        secondary: { DEFAULT: 'var(--secondary)', foreground: 'var(--secondary-foreground)' },
        muted: { DEFAULT: 'var(--muted)', foreground: 'var(--muted-foreground)' },
        accent: { DEFAULT: 'var(--accent)', foreground: 'var(--accent-foreground)' },
        destructive: { DEFAULT: 'var(--destructive)' },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',

        // Charts
        'chart-1': 'var(--chart-1)',
        'chart-2': 'var(--chart-2)',
        'chart-3': 'var(--chart-3)',
        'chart-4': 'var(--chart-4)',
        'chart-5': 'var(--chart-5)',

        // Sidebar
        sidebar: {
          DEFAULT: 'var(--sidebar)',
          foreground: 'var(--sidebar-foreground)',
          primary: 'var(--sidebar-primary)',
          'primary-foreground': 'var(--sidebar-primary-foreground)',
          accent: 'var(--sidebar-accent)',
          'accent-foreground': 'var(--sidebar-accent-foreground)',
          border: 'var(--sidebar-border)',
          ring: 'var(--sidebar-ring)',
        },

        // Surface variants
        surface: {
          DEFAULT: 'var(--surface)',
          subtle: 'var(--surface-subtle)',
          muted: 'var(--surface-muted)',
          wash: 'var(--surface-wash)',
        },

        // Compliance status badges
        'cumple-bg': 'var(--cumple-bg)',
        'cumple-text': 'var(--cumple-text)',
        'cumple-icon': 'var(--cumple-icon)',
        'parcial-bg': 'var(--parcial-bg)',
        'parcial-text': 'var(--parcial-text)',
        'parcial-icon': 'var(--parcial-icon)',
        'nocumple-bg': 'var(--nocumple-bg)',
        'nocumple-text': 'var(--nocumple-text)',
        'nocumple-icon': 'var(--nocumple-icon)',
        'noaplica-bg': 'var(--noaplica-bg)',
        'noaplica-text': 'var(--noaplica-text)',
        'noaplica-icon': 'var(--noaplica-icon)',

        // ENS categories
        'ens-basica-bg': 'var(--ens-basica-bg)',
        'ens-basica': 'var(--ens-basica)',
        'ens-media-bg': 'var(--ens-media-bg)',
        'ens-media': 'var(--ens-media)',
        'ens-alta-bg': 'var(--ens-alta-bg)',
        'ens-alta': 'var(--ens-alta)',

        // Risk levels
        'risk-critico-bg': 'var(--risk-critico-bg)',
        'risk-critico': 'var(--risk-critico)',
        'risk-alto-bg': 'var(--risk-alto-bg)',
        'risk-alto': 'var(--risk-alto)',
        'risk-medio-bg': 'var(--risk-medio-bg)',
        'risk-medio': 'var(--risk-medio)',
        'risk-bajo-bg': 'var(--risk-bajo-bg)',
        'risk-bajo': 'var(--risk-bajo)',

        // Border variants
        'border-subtle': 'var(--border-subtle)',
        'border-strong': 'var(--border-strong)',
        'border-focus': 'var(--border-focus)',

        // Text variants
        'text-heading': 'var(--text-heading)',
        'text-body': 'var(--text-body)',
        'text-muted': 'var(--text-muted)',
        'text-placeholder': 'var(--text-placeholder)',

        // Accent violet
        'accent-violet-bg': 'var(--accent-violet-bg)',
        'accent-violet': 'var(--accent-violet)',
        'accent-violet-strong': 'var(--accent-violet-strong)',
      },
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'card': 'var(--shadow-sm)',
        'card-hover': 'var(--shadow-md)',
        'elevated': 'var(--shadow-lg)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
