import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ context }) => {
  return {
    plugins: context === 'ui' ? [react()] : [],
  }
})
