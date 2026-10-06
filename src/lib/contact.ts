import { profile } from '../data/profile'

export type ContactPayload = { name: string; email: string; message: string }

/**
 * Endpoint that accepts a JSON POST of { name, email, message }.
 * Set VITE_CONTACT_ENDPOINT in .env (e.g. a Formspree form URL or your own API route).
 * To use EmailJS instead, replace the body of `sendContactMessage` with `emailjs.send(...)`.
 */
const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim()

export const isContactServiceConfigured = Boolean(endpoint)

export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  if (!endpoint) throw new Error('Contact service is not configured')
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
}

/** Fallback when no service is configured: hand the message to the visitor's own email app. */
export function buildMailto({ name, email, message }: ContactPayload) {
  const subject = `Portfolio enquiry from ${name}`
  const body = `${message}\n\n— ${name}\n${email}`
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
