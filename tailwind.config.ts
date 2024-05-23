import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-main': '#004BF5',
        'brand-darker': '#040C2C',
        'brand-dark': '#0F298E',
        'brand-light': '#6AA6FF',
        'gray-main': '#D2CFCF',
        'gray-darker': '#333333',
        'gray-dark': '#636363',
        'gray-light': '#F2F2F2',
        'white': '#FFFFFF',
        'blue-bg': '#E9F2FF',
        'blue-dbc-bg': '#1E62FE',
      },
      fontSize: {
        h1: '56px',
        h2: '48px',
        h3: '40px',
        h4: '32px',
      },
    },
  },
  plugins: [],
};
export default config;
