import type { ReactNode } from 'react'
import { availability, profile, socialLinks } from '../data/profile'
import { ArrowUpRight, Mail, MapPin, Phone } from './Icons'
import { SocialIcon } from './SocialIcon'
import { ContactForm } from './ContactForm'

type ContactLink = { key: string; label: string; sub: string; href: string; icon: ReactNode; external: boolean; title?: string; wide?: boolean }

const contactLinks: ContactLink[] = [
  { key: 'email', label: 'Email me', sub: 'Send me an email', href: `mailto:${profile.email}`, icon: <Mail size={18} />, external: false },
  { key: 'phone', label: 'Call', sub: 'Give me a call', href: `tel:${profile.phone}`, icon: <Phone size={18} />, external: false },
  ...socialLinks.map((s, i, all) => ({
    key: s.id,
    label: s.contactLabel,
    sub: s.contactSub,
    href: s.url,
    icon: <SocialIcon id={s.id} size={17} />,
    external: true,
    title: s.title,
    // An odd card at the end spans both columns so the grid stays even.
    wide: (all.length + 2) % 2 === 1 && i === all.length - 1,
  })),
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(50%_60%_at_20%_0%,rgb(95_212_184/0.08),transparent)]" />
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="reveal min-w-0">
          <p className="eyebrow mb-4">06 — Contact</p>
          <h2 id="contact-title" className="text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            Let&apos;s Build Something Great Together.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m open to Full Stack Developer, MERN Stack Developer, React.js Developer and Node.js Developer opportunities.
          </p>

          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {contactLinks.map((c) => (
              <li key={c.key} className={c.wide ? 'sm:col-span-2' : undefined}>
                <a
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  title={c.title}
                  className="group flex h-full items-center gap-3.5 rounded-xl border border-line bg-white/[0.015] p-3.5 transition-colors duration-300 hover:border-line-strong hover:bg-white/[0.035]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line-strong bg-surface-2 text-muted transition-colors group-hover:text-accent">{c.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-ink">{c.label}</span>
                    <span className="block text-xs text-dim">{c.sub}</span>
                  </span>
                  <ArrowUpRight size={15} className="shrink-0 text-dim transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                  {c.external && <span className="sr-only">(opens in new tab)</span>}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-6 border-t border-line pt-8">
            <div>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-dim">Open to</h3>
              <ul className="flex flex-wrap gap-2">
                {availability.workModes.map((m) => (
                  <li key={m} className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.06] px-3 py-1 text-sm text-accent-strong">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-dim">
                <MapPin size={13} /> Preferred locations
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {availability.locations.map((l) => (
                  <li key={l} className="tag">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="reveal min-w-0 lg:pt-12">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
