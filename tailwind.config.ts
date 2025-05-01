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
        shopify: {
          primary: '#1A2B5F',
          secondary: '#2FAC5D',
          gray: {
            dark: '#6D7175',
            medium: '#8C9196',
            light: '#F1F1F1'
          }
        }
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#1A2B5F',
              textDecoration: 'underline',
              '&:hover': {
                color: '#2FAC5D'
              }
            },
            h1: {
              color: '#1A2B5F'
            },
            h2: {
              color: '#1A2B5F'
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
export default config