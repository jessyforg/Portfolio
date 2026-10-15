import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// The site is served from the domain root on Vercel.
// If it is ever hosted under a subpath (e.g. GitHub Pages at /Portfolio/),
// change this value; asset URLs and the router basename should read from it.
const BASE_PATH = '/'

// https://vite.dev/config/
export default defineConfig({
  base: BASE_PATH,
  plugins: [react()],
})
