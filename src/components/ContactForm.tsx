import { useState, type FormEvent, type ReactNode } from 'react'
import { buildMailto, isContactServiceConfigured, sendContactMessage, type ContactPayload } from '../lib/contact'
import { ArrowRight, Check, Mail } from './Icons'

type Field = keyof ContactPayload
type Errors = Partial<Record<Field, string>>
type Status = 'idle' | 'sending' | 'sent' | 'error' | 'unconfigured'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(v: ContactPayload): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!v.email.trim()) e.email = 'Please enter your email address.'
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.message.trim().length < 10) e.message = 'Please write a message of at least 10 characters.'
  else if (v.message.length > 3000) e.message = 'Please keep your message under 3000 characters.'
  return e
}

const empty: ContactPayload = { name: '', email: '', message: '' }

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(empty)
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [honeypot, setHoneypot] = useState('')

  const errors = validate(values)
  const show = (f: Field) => (touched[f] ? errors[f] : undefined)

  const update = (f: Field, val: string) => {
    setValues((v) => ({ ...v, [f]: val }))
    if (status !== 'idle' && status !== 'sending') setStatus('idle')
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    const firstInvalid = (Object.keys(errors) as Field[])[0]
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }
    if (honeypot) return // bot

    if (!isContactServiceConfigured) {
      setStatus('unconfigured')
      return
    }
    setStatus('sending')
    try {
      const payload = { name: values.name.trim(), email: values.email.trim(), message: values.message.trim() }
      await sendContactMessage(payload)
      setStatus('sent')
      setValues(empty)
      setTouched({})
    } catch {
      setStatus('error')
    }
  }

  const mailto = buildMailto({ name: values.name.trim(), email: values.email.trim(), message: values.message.trim() })

  return (
    <form noValidate onSubmit={onSubmit} className="card space-y-5 p-6 sm:p-8" aria-labelledby="contact-form-title">
      <h3 id="contact-form-title" className="text-lg font-semibold tracking-[-0.01em] text-ink">
        Send a message
      </h3>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input id="name" label="Name" autoComplete="name" value={values.name} error={show('name')} onChange={(v) => update('name', v)} onBlur={() => setTouched((t) => ({ ...t, name: true }))} />
        <Input
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          value={values.email}
          error={show('email')}
          onChange={(v) => update('email', v)}
          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-ink/90">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
          aria-invalid={!!show('message')}
          aria-describedby={show('message') ? 'contact-message-error' : undefined}
          placeholder="Tell me about the role, project or opportunity…"
          className={fieldClass(!!show('message'))}
        />
        {show('message') && <ErrorText id="contact-message-error">{show('message')}</ErrorText>}
      </div>

      {/* Honeypot — hidden from people, catches naive bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this empty
          <input tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button type="submit" className="btn btn-primary group" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send Message'}
          {status !== 'sending' && <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />}
        </button>
      </div>

      <div aria-live="polite">
        {status === 'sent' && (
          <Notice tone="success">
            <Check size={16} className="mt-0.5 shrink-0" />
            Thanks — your message has been sent. I&apos;ll get back to you soon.
          </Notice>
        )}
        {status === 'error' && (
          <Notice tone="error">
            <span>
              Sorry, the message couldn&apos;t be sent right now.{' '}
              <a href={mailto} className="font-medium underline underline-offset-2">
                Send it by email instead
              </a>
              .
            </span>
          </Notice>
        )}
        {status === 'unconfigured' && (
          <Notice tone="info">
            <div className="space-y-3">
              <p>
                Online form delivery isn&apos;t connected yet, so <strong className="font-medium text-ink">your message has not been sent</strong>. You can send
                it through your own email app instead — it&apos;s already filled in.
              </p>
              <a href={mailto} className="btn btn-secondary btn-sm">
                <Mail size={15} /> Open in email app
              </a>
            </div>
          </Notice>
        )}
      </div>
    </form>
  )
}

const fieldClass = (invalid: boolean) =>
  `block w-full rounded-xl border bg-bg/60 px-4 py-3 text-[0.95rem] text-ink placeholder:text-dim transition-colors focus:outline-none focus-visible:outline-none focus:ring-2 ${
    invalid ? 'border-red-400/60 focus:ring-red-400/30' : 'border-line-strong focus:border-accent/60 focus:ring-accent/20'
  }`

type InputProps = {
  id: Field
  label: string
  type?: string
  autoComplete?: string
  value: string
  error?: string
  onChange: (v: string) => void
  onBlur: () => void
}

function Input({ id, label, type = 'text', autoComplete, value, error, onChange, onBlur }: InputProps) {
  const fieldId = `contact-${id}`
  return (
    <div>
      <label htmlFor={fieldId} className="mb-2 block text-sm font-medium text-ink/90">
        {label}
      </label>
      <input
        id={fieldId}
        name={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        aria-invalid={!!error}
        aria-describedby={error ? `${fieldId}-error` : undefined}
        className={fieldClass(!!error)}
      />
      {error && <ErrorText id={`${fieldId}-error`}>{error}</ErrorText>}
    </div>
  )
}

function ErrorText({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-1.5 text-sm text-red-300">
      {children}
    </p>
  )
}

function Notice({ tone, children }: { tone: 'success' | 'error' | 'info'; children: ReactNode }) {
  const styles = {
    success: 'border-accent/30 bg-accent/[0.07] text-accent-strong',
    error: 'border-red-400/30 bg-red-400/[0.07] text-red-200',
    info: 'border-line-strong bg-white/[0.03] text-muted',
  }[tone]
  return <div className={`flex items-start gap-2.5 rounded-xl border p-4 text-sm leading-relaxed ${styles}`}>{children}</div>
}
