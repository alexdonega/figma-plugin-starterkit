import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Importar CSS do Figma Plugin DS
import 'figma-plugin-ds/dist/figma-plugin-ds.css'

// Criar elemento root se não existir
const rootElement = document.getElementById('root') || document.body.appendChild(document.createElement('div'))
if (rootElement.id !== 'root') {
  rootElement.id = 'root'
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
