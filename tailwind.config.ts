import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#EB5D1D',
          darkBlue: '#0A1934',
          darkBlueLight: '#19223C',
          darkBlueLighter: '#182743',
          darkBlueDark: '#131428',
          darkBlueDarker: '#1A1F36',
          darkBlueAccent: '#21253D',
          darkBlueAccent2: '#35405C',
        },
        accent: {
          electricBlue: '#00D9FF',
          neonGreen: '#39FF14',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config

