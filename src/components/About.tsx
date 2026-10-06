import type { CSSProperties } from 'react'
import { about, profile } from '../data/profile'
import { Check, MapPin } from './Icons'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading id="about-title" eyebrow="01 — About" title="Engineer focused on dependable, business-ready web applications." />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="reveal space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'text-ink' : undefined}>
                {p}
              </p>
            ))}

            <ul className="grid gap-x-6 gap-y-3 pt-4 text-[0.95rem] sm:grid-cols-2">
              {about.focus.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check size={16} className="mt-1 shrink-0 text-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <figure className="reveal group overflow-hidden rounded-2xl border border-line-strong bg-surface">
              <div className="overflow-hidden">
                <img
                  src={profile.photo.src}
                  srcSet={profile.photo.srcSet}
                  sizes="(min-width: 1024px) 30rem, (min-width: 640px) 36rem, 100vw"
                  width={800}
                  height={800}
                  alt={profile.photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover object-[50%_18%] grayscale-[15%] transition-[transform,filter] duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.02] group-hover:grayscale-0 motion-reduce:transform-none"
                />
              </div>
              <figcaption className="border-t border-line px-5 py-4 sm:px-6">
                <p className="eyebrow mb-1.5">Currently</p>
                <p className="font-medium text-ink">
                  {profile.role} · {profile.company}
                </p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted">
                  <MapPin size={14} /> {profile.location}
                </p>
              </figcaption>
            </figure>

            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {about.stats.map((s, i) => (
                <div
                  key={s.label}
                  className="reveal flex flex-col justify-between gap-4 bg-bg p-5 sm:p-6"
                  style={{ '--reveal-delay': `${i * 70}ms` } as CSSProperties}
                >
                  <dt className="order-2 text-sm text-muted">{s.label}</dt>
                  <dd className={`order-1 font-semibold tracking-[-0.04em] text-ink ${s.value.length > 3 ? 'text-2xl sm:text-3xl' : 'text-4xl sm:text-5xl'}`}>
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
