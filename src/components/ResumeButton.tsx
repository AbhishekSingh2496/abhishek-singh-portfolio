import type { ReactNode } from 'react'
import { hasResume, notifyResumeMissing, resumeHref } from '../lib/resume'
import { Download } from './Icons'

type Props = { className?: string; children?: ReactNode; onNavigate?: () => void }

export function ResumeButton({ className = 'btn btn-secondary', children = 'Download Resume', onNavigate }: Props) {
  if (hasResume) {
    return (
      <a href={resumeHref} download="Abhishek-Singh-Resume.pdf" className={className} onClick={onNavigate}>
        <Download size={16} />
        {children}
      </a>
    )
  }
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onNavigate?.()
        notifyResumeMissing()
      }}
    >
      <Download size={16} />
      {children}
    </button>
  )
}
