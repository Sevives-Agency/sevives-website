import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        sage: {
          50: '#f3f6f2', 100: '#e3ebe1', 200: '#c8d6c4', 300: '#a4ba9e',
          400: '#7e9b78', 500: '#5f7f59', 600: '#4b6646', 700: '#3d5239',
          800: '#334331', 900: '#2b382a'
        },
        taupe: {
          50: '#f7f5f2', 100: '#ece7e0', 200: '#d9cfc2', 300: '#c2b3a1',
          400: '#a89580', 500: '#8f7c66', 600: '#756353', 700: '#5e4f44',
          800: '#4d413a', 900: '#423933'
        },
        accent: {
          50: '#fdf3ef', 100: '#fae3d9', 200: '#f4c4b1', 300: '#ec9e82',
          400: '#e07b58', 500: '#d97757', 600: '#c25a3a', 700: '#a2462d',
          800: '#833a28', 900: '#6b3224'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace']
      },
      maxWidth: {
        content: '72rem'
      }
    }
  },
  plugins: []
};

export default config;
