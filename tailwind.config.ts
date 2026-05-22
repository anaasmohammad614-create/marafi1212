import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(222, 47%, 5%)',
        foreground: 'hsl(210, 40%, 98%)',
        card: 'hsl(222, 47%, 8%)',
        primary: 'hsl(192, 100%, 42%)',
        'primary-foreground': 'hsl(222, 47%, 5%)',
        muted: 'hsl(217, 19%, 27%)',
        'muted-foreground': 'hsl(215, 16%, 47%)',
        border: 'hsl(217, 19%, 17%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
