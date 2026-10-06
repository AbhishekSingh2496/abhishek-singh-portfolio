import { profile } from '../data/profile'
import { showToast } from './toast'

/** True when public/resume.pdf existed when the dev server / build started. */
export const hasResume = __HAS_RESUME__

export const resumeHref = profile.resumeUrl

export function notifyResumeMissing() {
  showToast({
    title: 'Resume coming soon',
    body: 'The PDF hasn’t been uploaded yet. Please connect on LinkedIn or by email to request a copy.',
  })
}
