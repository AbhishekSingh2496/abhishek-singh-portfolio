import { useEffect, useRef, useState } from 'react'
import { onToast, type ToastMessage } from '../lib/toast'
import { Close } from './Icons'

export function Toaster() {
  const [toast, setToast] = useState<ToastMessage | null>(null)
  const timer = useRef<number | undefined>(undefined)

  useEffect(
    () =>
      onToast((m) => {
        setToast(m)
        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => setToast(null), 6000)
      }),
    [],
  )

  return (
    <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-4 z-[60] flex justify-center px-4 sm:bottom-6">
      {toast && (
        <div role="status" className="enter pointer-events-auto flex w-full max-w-md items-start gap-3 rounded-xl border border-line-strong bg-surface-2/95 p-4 shadow-2xl shadow-black/40 backdrop-blur">
          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-ink">{toast.title}</p>
            {toast.body && <p className="mt-1 text-sm leading-relaxed text-muted">{toast.body}</p>}
          </div>
          <button type="button" className="icon-btn -m-1.5 h-8 w-8" onClick={() => setToast(null)} aria-label="Dismiss notification">
            <Close size={16} />
          </button>
        </div>
      )}
    </div>
  )
}
