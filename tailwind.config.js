/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Samantha's Luxury Theme
        primary: {
          DEFAULT: '#C5A059', // Gold
          hover: '#B08D45',   // Darker Gold
          foreground: '#FFFFFF', // White text on primary
          light: '#E5C585',   // Light Gold
        },
        secondary: {
          DEFAULT: '#C0C0C0', // Silver
          hover: '#A9A9A9',   // Darker Silver
          foreground: '#101010', // Black text on secondary
        },
        dark: {
          DEFAULT: '#101010', // Deep Black
          lighter: '#1A1A1A', // Lighter Black
        },
        light: {
          DEFAULT: '#FAF9F6', // Off-White
          darker: '#F0F0F0',
        },
        // Mapping old variable names to the new system to prevent breaking
        navy: '#101010',
        rose: {
          50: '#FAF9F6',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          DEFAULT: '#101010',
        },
        // Gold color palette for shadows and accents
        gold: {
          50: '#FDFBF4',
          100: '#F9F5E6',
          200: '#F0E6C8',
          300: '#E5D09E',
          400: '#D8B873',
          500: '#C5A059',
          600: '#A88242',
          700: '#866333',
          800: '#6D4F2E',
          900: '#594029',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Inter', 'system-ui', 'sans-serif'], // Added Playfair for elegance
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        'gold-sm': '0 2px 4px rgba(197, 160, 89, 0.2)',
        'gold-md': '0 4px 6px rgba(197, 160, 89, 0.25)',
        'gold-lg': '0 10px 15px rgba(197, 160, 89, 0.3)',
        'gold-xl': '0 20px 25px rgba(197, 160, 89, 0.25)',
        'gold-2xl': '0 25px 50px rgba(197, 160, 89, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-gold': '0 8px 32px rgba(197, 160, 89, 0.15)',
        // Keep pink shadows mapped to gold for compatibility if needed, or replace usage
        'pink-sm': '0 2px 4px rgba(197, 160, 89, 0.2)',
        'pink-md': '0 4px 6px rgba(197, 160, 89, 0.25)',
        'pink-lg': '0 10px 15px rgba(197, 160, 89, 0.3)',
        'pink-xl': '0 20px 25px rgba(197, 160, 89, 0.25)',
        'pink-2xl': '0 25px 50px rgba(197, 160, 89, 0.3)',
      }
    },
  },
  plugins: [],
}
