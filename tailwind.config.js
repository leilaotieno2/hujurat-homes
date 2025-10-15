/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slow-zoom': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' }, // subtle zoom effect
        },
      },
      animation: {
        // Updated duration: 2400 seconds (40 minutes) for extreme slowness.
        // Updated timing function: 'steps(1)' makes the transition instantaneous (like frame-by-frame)
        // instead of smooth, achieving the discrete 'frames changing' look.
        'slow-zoom': 'slow-zoom 2400s steps(1) infinite alternate', 
      },
    },
  },
  plugins: [],
};
