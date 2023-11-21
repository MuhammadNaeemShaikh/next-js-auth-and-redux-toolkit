import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        backgroundSoft: '#182237',
        textColor: '#fff',
        textSoft: '#b7bac1',
        background: '#151c2c',
      },
    },
  },
  plugins: [],
};
export default config;
