module.exports = {
    content: ['./index.html', './src/**/*.{jsx, js}'],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          inter: ['inter', 'serif'],
        },
        colors: {
          'offWhite-1': '#F0F0F0',
          'offWhite-2': '#D8D8D8',
        },
        animation: {
          'glow-dark': 'glow-dark 2s ease-in-out infinite',
          'glow-light': 'glow-light 2s ease-in-out infinite',
        },
        keyframes: {
            'glow-dark': {
              '0%, 100%': { boxShadow: '0 0 3px #0000FF, 0 0 6px #0000FF, 0 0 9px #0000FF, 0 0 12px #0000FF;' },
              '50%': { boxShadow: '0 0 6px #0000FF, 0 0 12px #0000FF, 0 0 18px #0000FF, 0 0 24px #0000FF;' },
            },
            'glow-light': {
              '0%, 100%': { boxShadow: '0 0 3px #FF0000, 0 0 6px #FF0000, 0 0 9px #FF0000, 0 0 12px #FF0000;' },
              '50%': { boxShadow: '0 0 6px #FF0000, 0 0 12px #FF0000, 0 0 18px #FF0000, 0 0 24px #FF0000;' },
            },
          },
      },
    },
    plugins: [],
  };