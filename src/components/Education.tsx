import type { CSSProperties } from 'react'
import { education, journey } from '../data/profile'
import { GraduationCap } from './Icons'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="relative border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading id="education-title" eyebrow="05 — Education & Journey" title="Computer Science foundations, applied in production." />

        <article className="reveal card grid gap-6 p-6 sm:p-8 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-8">
          <span className="grid h-12 w-12 place-items-center rounded-xl border border-line-strong bg-surface-2 text-accent">
            <GraduationCap size={22} />
          </span>
          <div className="min-w-0">
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">{education.degree}</h3>
            <p className="mt-1 text-muted">{education.field}</p>
            <p className="mt-1 text-sm text-dim">{education.institution}</p>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted">{education.description}</p>
          </div>
          <dl className="flex gap-6 border-t border-line pt-5 md:flex-col md:gap-4 md:border-t-0 md:border-l md:pt-0 md:pl-8">
            <div>
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-dim">Duration</dt>
              <dd className="mt-1 text-sm whitespace-nowrap text-ink">{education.period}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-dim">Grade</dt>
              <dd className="mt-1 text-sm text-ink">{education.grade}</dd>
            </div>
          </dl>
        </article>

        <div className="mt-20">
          <h3 className="reveal eyebrow mb-10 text-dim">Career Journey</h3>
          <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">
            <span aria-hidden="true" className="absolute top-0 bottom-0 left-[5px] w-px bg-line-strong md:top-[5px] md:right-0 md:bottom-auto md:left-0 md:h-px md:w-full" />
            {journey.map((step, i) => {
              const last = i === journey.length - 1
              return (
                <li
                  key={step.year}
                  className="reveal relative pl-8 md:pt-9 md:pl-0"
                  style={{ '--reveal-delay': `${i * 90}ms` } as CSSProperties}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute top-1 left-0 h-[11px] w-[11px] rounded-full border md:top-0 ${
                      last ? 'border-accent bg-accent shadow-[0_0_0_5px_rgb(95_212_184/0.15)]' : 'border-line-strong bg-surface-3'
                    }`}
                  />
                  <p className={`font-mono text-sm ${last ? 'text-accent' : 'text-ink'}`}>{step.year}</p>
                  <p className="mt-2 font-medium text-ink">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.detail}</p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
