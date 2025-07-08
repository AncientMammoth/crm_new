/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add the rian.io color palette
      colors: {
        background: '#0D0D0D', // Main dark background
        foreground: '#FFFFFF', // Main text color
        card: '#1D1D1D',       // Card background from the new theme
        'card-foreground': '#FFFFFF',
        primary: '#FFFFFF',
        'primary-foreground': '#0D0D0D',
        secondary: '#232323',   // Secondary background color
        'secondary-foreground': '#FFFFFF',
        muted: '#A1A1A1',       // Muted text color for subtitles
        'muted-foreground': '#D1D5DB',
        accent: {
          DEFAULT: '#67F5C8',  // Default accent color from gradient
          secondary: '#ADFF15', // Secondary accent color from gradient
        },
        border: 'hsl(0 0% 100% / 0.1)', // Border color for UI elements
        input: 'hsl(0 0% 100% / 0.1)',
      },
      // Adds the 'shine' animation for the border effect
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        }
      },
      animation: {
        shine: 'shine 14s linear infinite',
      },
    },
  },
  plugins: [],
}