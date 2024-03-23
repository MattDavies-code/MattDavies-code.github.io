module.exports = {
  content: ['./index.html', './src/**/*.{jsx, js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      },
      colors: {
        blueGray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        offWhite: '#E0E0E0',
      },
      animation: {
        'glow-dark': 'glow-dark 2s ease-in-out infinite',
        'glow-light': 'glow-light 2s ease-in-out infinite',
      },
      keyframes: {
        'glow-dark': {
            '0%, 100%': { boxShadow: '0 0 3px #CBD5E1, 0 0 6px #CBD5E1, 0 0 9px #CBD5E1, 0 0 12px #CBD5E1' },
            '50%': { boxShadow: '0 0 6px #CBD5E1, 0 0 12px #CBD5E1, 0 0 18px #CBD5E1, 0 0 24px #CBD5E1' },
        },
        'glow-light': {
            '0%, 100%': { boxShadow: '0 0 3px #FB7185, 0 0 6px #FB7185, 0 0 9px #FB7185, 0 0 12px #FB7185' },
            '50%': { boxShadow: '0 0 6px #FB7185, 0 0 12px #FB7185, 0 0 18px #FB7185, 0 0 24px #FB7185' },
        },
      },
    },
  },
  plugins: [],
};

