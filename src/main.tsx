import '@fontsource-variable/manrope'
import './styles/reset.css'
import './styles/tokens.css'
import './styles/global.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { motionAllowed } from './utils/reveal'

// Enable scroll-reveal starting states before the first render, so content never
// flashes visible and then hides. Skipped entirely when the OS asks for reduced motion.
if (motionAllowed()) {
  document.documentElement.classList.add('reveal-ready')
}

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element #root not found in index.html')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
