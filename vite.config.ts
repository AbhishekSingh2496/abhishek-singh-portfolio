import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Resume availability is resolved at build/dev-start time so the UI can
// tell visitors honestly when the PDF hasn't been added yet.
const resumePath = fileURLToPath(new URL('./public/Abhishek_Singh_Resume.pdf', import.meta.url))
const hasResume = existsSync(resumePath)

// Restart the dev server when the resume PDF is added or removed, so
// __HAS_RESUME__ never goes stale while `npm run dev` is running.
function resumeWatcher(): Plugin {
  return {
    name: 'resume-watcher',
    apply: 'serve',
    configureServer(server) {
      const restart = (file: string) => {
        if (file === resumePath) server.restart()
      }
      server.watcher.on('add', restart)
      server.watcher.on('unlink', restart)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), resumeWatcher()],
  define: {
    __HAS_RESUME__: JSON.stringify(hasResume),
  },
})
