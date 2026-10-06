import { useEffect, useRef, type ReactNode } from 'react'
import type { Project } from '../data/profile'
import { ArrowUpRight, Check, Close, GitHubIcon, Shield } from './Icons'

type Props = { project: Project; onClose: () => void }

/** Accessible project details dialog built on native <dialog> (focus trapping, Esc, inert background). */
export default function ProjectModal({ project: p, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (!dialog.open) dialog.showModal()
    closeRef.current?.focus()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleClose = () => onClose()
    // Keep Tab / Shift+Tab cycling inside the dialog instead of escaping to browser chrome.
    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const focusables = dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    dialog.addEventListener('close', handleClose)
    dialog.addEventListener('keydown', handleKey)
    return () => {
      dialog.removeEventListener('close', handleClose)
      dialog.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
      // No dialog.close() here: unmounting removes it from the top layer, and a queued
      // 'close' event would otherwise fire after StrictMode's effect re-run.
    }
  }, [onClose])

  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onClick={(e) => {
        // Click on the backdrop (outside the panel) closes the dialog.
        if (e.target === e.currentTarget) ref.current?.close()
      }}
    >
      <div className="dialog-panel max-h-[calc(100dvh-1.5rem)] overflow-y-auto overscroll-contain rounded-2xl border border-line-strong bg-surface shadow-[0_40px_120px_-20px_rgb(0_0_0/0.9)]">
        <header className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-line bg-surface/95 px-5 py-5 backdrop-blur sm:px-8 sm:py-6">
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent">{p.category}</p>
            <h2 id="project-dialog-title" className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-3xl">
              {p.title}
            </h2>
            <p className="mt-1 text-muted">{p.subtitle}</p>
          </div>
          <button type="button" className="icon-btn -mr-2 shrink-0" onClick={() => ref.current?.close()} aria-label="Close project details" ref={closeRef}>
            <Close size={20} />
          </button>
        </header>

        <div className="space-y-9 px-5 py-7 sm:px-8 sm:py-8">
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            <Meta label="Role" value={p.role} />
            <Meta label="Duration" value={p.period} />
            <Meta label={p.association ? 'Associated with' : 'Type'} value={p.association ?? 'Personal project'} />
          </dl>

          <Block title="Overview">
            <p className="leading-relaxed text-muted">{p.description}</p>
          </Block>

          <div className="grid gap-6 sm:grid-cols-2">
            <Block title="Problem">
              <p className="leading-relaxed text-muted">{p.details.problem}</p>
            </Block>
            <Block title="Solution">
              <p className="leading-relaxed text-muted">{p.details.solution}</p>
            </Block>
          </div>

          <Block title="Key Features">
            <ul className="grid gap-x-6 gap-y-2 text-[0.95rem] text-muted sm:grid-cols-2 md:grid-cols-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={15} className="mt-[0.3rem] shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </Block>

          {p.security && (
            <Block title="Security">
              <ul className="flex flex-wrap gap-2">
                {p.security.map((s) => (
                  <li key={s} className="inline-flex items-center gap-2 rounded-lg border border-accent/25 bg-accent/[0.06] px-3 py-1.5 text-sm text-accent-strong">
                    <Shield size={15} /> {s}
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {p.details.architecture && (
            <Block title="Architecture">
              <p className="leading-relaxed text-muted">{p.details.architecture}</p>
            </Block>
          )}

          <Block title="Technologies">
            <ul className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </Block>

          <div className="grid gap-8 md:grid-cols-2">
            <Block title="Responsibilities">
              <BulletList items={p.details.responsibilities} />
            </Block>
            <Block title="Challenges">
              <BulletList items={p.details.challenges} />
            </Block>
          </div>

          <Block title="Links">
            {p.links.live || p.links.github ? (
              <div className="flex flex-wrap gap-2.5">
                {p.links.live && (
                  <a href={p.links.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    Live Demo <ArrowUpRight size={15} />
                    <span className="sr-only">(opens in new tab)</span>
                  </a>
                )}
                {p.links.github && (
                  <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                    <GitHubIcon size={15} /> View on GitHub
                    <span className="sr-only">(opens in new tab)</span>
                  </a>
                )}
              </div>
            ) : (
              <p className="text-sm text-dim">{p.linkNote}</p>
            )}
          </Block>
        </div>
      </div>
    </dialog>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-surface px-4 py-3.5">
      <dt className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-dim">{label}</dt>
      <dd className="mt-1 text-sm text-ink">{value}</dd>
    </div>
  )
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="mb-3 text-sm font-semibold tracking-wide text-ink">{title}</h3>
      {children}
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 text-[0.95rem] leading-relaxed text-muted">
      {items.map((i) => (
        <li key={i} className="flex gap-2.5">
          <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  )
}
