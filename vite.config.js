import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Project page lives at https://<user>.github.io/SurPort/, so production
// assets need that prefix. Dev server keeps the root path.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/SurPort/' : '/',
  plugins: [react()],
}))
