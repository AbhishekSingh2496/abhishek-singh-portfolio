import { existsSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Resume availability is resolved at build/dev-start time so the UI can
// tell visitors honestly when the PDF hasn't been added yet.
const hasResume = existsSync(new URL('./public/resume.pdf', import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __HAS_RESUME__: JSON.stringify(hasResume),
  },
})
