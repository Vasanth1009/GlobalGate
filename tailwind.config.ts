// import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
import colors from 'tailwindcss/colors';

const config: any = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        'sm-450': '450px',
        'md-650': '650px',
        'lg-1k': '1000px',
        'xl-12': '1210px',
        '2xl-12p': '1290px',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        quicksand: ['var(--font-quicksand)'],
        geistSans: ['var(--font-geist-sans)'],
        geistMono: ['var(--font-geist-mono)'],
      },
      colors: {
        border: 'hsl(var(--border))',
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
        primary: {
          DEFAULT: '#4F3727',
          100: '#E3CFCF',
          200: '#D1AFAF',
          300: '#BF8F8F',
          400: '#AD6F6F',
          500: '#9B4F4F',
          600: '#8A3F3F',
          700: '#782F2F',
          800: '#661F1F',
          900: '#551010',
        },
        secondary: '#b2967d',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
