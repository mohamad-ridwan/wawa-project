import type {Config} from 'tailwindcss'

const withMT = require("@material-tailwind/react/utils/withMT")

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "avant-garde": 'Avant Garde,Avantgarde,Century Gothic,CenturyGothic,AppleGothic,sans-serif',
      "apple-system": '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      "montserrat": '"Montserrat","HelveticaNeue","Helvetica Neue",sans-serif'
    }
  },
  plugins: [],
})

export default config