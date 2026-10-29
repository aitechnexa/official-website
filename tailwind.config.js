/** @type {import('tailwindcss').Config} */
// THEME: edit colors here AND in the :root CSS variables in src/index.css (the 3D scene reads the CSS variables).
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05060A',
        surface: '#0B0E17',
        cyan: { DEFAULT: '#22D3EE', 400: '#22D3EE' },
        violet: { DEFAULT: '#8B5CF6', 500: '#8B5CF6' },
        magenta: { DEFAULT: '#F472B6', 400: '#F472B6' },
        ink: '#E6EAF2',
        muted: '#8A93A6',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 24px rgba(34,211,238,0.35)',
        'glow-cyan-lg': '0 0 48px rgba(34,211,238,0.45)',
        'glow-violet': '0 0 32px rgba(139,92,246,0.4)',
        'glow-magenta': '0 0 32px rgba(244,114,182,0.35)',
        glass: '0 8px 32px 0 rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'nexus-gradient': 'linear-gradient(120deg, #22D3EE 0%, #8B5CF6 55%, #F472B6 100%)',
      },
      keyframes: {
        'gradient-pan': { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
        float: { '0%,100%': { transform: 'translate3d(0,0,0)' }, '50%': { transform: 'translate3d(0,-24px,0)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'scroll-dot': { '0%': { transform: 'translateY(0)', opacity: 1 }, '100%': { transform: 'translateY(14px)', opacity: 0 } },
      },
      animation: {
        'gradient-pan': 'gradient-pan 8s ease infinite',
        float: 'float 9s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'scroll-dot': 'scroll-dot 1.6s ease-out infinite',
      },
    },
  },
  plugins: [],
}
