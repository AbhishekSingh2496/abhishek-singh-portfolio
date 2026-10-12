import { profile } from '../data/profile'
import { showToast } from './toast'

/** True when public/Abhishek_Singh_Resume.pdf existed when the dev server / build started. */
export const hasResume = __HAS_RESUME__

export const resumeFileName = profile.resumeFile

/** Prefixed with Vite's base path so the link also resolves when deployed under a sub-path. */
export const resumeHref = `${import.meta.env.BASE_URL}${resumeFileName}`

export function notifyResumeMissing() {
  showToast({
    title: 'Resume coming soon',
    body: 'The PDF hasn’t been uploaded yet. Please connect on LinkedIn or by email to request a copy.',
  })
}
