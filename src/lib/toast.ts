// Minimal event-based notifier — avoids pulling in a toast library for a single use case.
export type ToastMessage = { title: string; body?: string }

const EVENT = 'app:toast'

export function showToast(message: ToastMessage) {
  window.dispatchEvent(new CustomEvent<ToastMessage>(EVENT, { detail: message }))
}

export function onToast(handler: (m: ToastMessage) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<ToastMessage>).detail)
  window.addEventListener(EVENT, listener)
  return () => window.removeEventListener(EVENT, listener)
}
