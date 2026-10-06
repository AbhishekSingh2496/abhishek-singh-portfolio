import { useId, useState } from 'react'
import { experience, type Role } from '../data/profile'
import { Check } from './Icons'
import { SectionHeading } from './SectionHeading'

const PREVIEW_COUNT = 6

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="relative border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          id="experience-title"
          eyebrow="02 — Experience"
          title="4+ years building and supporting production platforms."
          intro="From trainee to associate engineer at KNS Technologies — shipping full-stack features, APIs and dashboards for enterprise loyalty platforms."
        />

        <ol className="relative space-y-6 sm:space-y-8">
          <span aria-hidden="true" className="absolute top-3 bottom-3 left-[7px] w-px bg-gradient-to-b from-accent/60 via-line-strong to-transparent md:left-[calc(13rem+7px)]" />
          {experience.map((role) => (
            <RoleItem key={role.title} role={role} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function RoleItem({ role }: { role: Role }) {
  const [expanded, setExpanded] = useState(false)
  const listId = useId()
  const items = expanded ? role.responsibilities : role.responsibilities.slice(0, PREVIEW_COUNT)
  const hidden = role.responsibilities.length - PREVIEW_COUNT

  return (
    <li className="reveal relative grid gap-4 pl-9 md:grid-cols-[13rem_1fr] md:gap-0 md:pl-0">
      {/* Dot */}
      <span
        aria-hidden="true"
        className={`absolute top-2 left-0 grid h-[15px] w-[15px] place-items-center rounded-full border md:left-[13rem] ${
          role.current ? 'border-accent bg-accent/20' : 'border-line-strong bg-bg'
        }`}
      >
        <span className={`h-[5px] w-[5px] rounded-full ${role.current ? 'bg-accent' : 'bg-dim'}`} />
      </span>

      <div className="md:pr-10 md:pt-0.5">
        <p className="font-mono text-sm text-ink">{role.period}</p>
        {role.current && (
          <span className="mt-2 inline-flex rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[0.7rem] font-medium text-accent-strong">
            Current role
          </span>
        )}
      </div>

      <article className="card p-6 sm:p-8 md:ml-10">
        <header>
          <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">{role.title}</h3>
          <p className="mt-1 text-muted">
            {role.company}
            {role.location && <span className="text-dim"> · {role.location}</span>}
          </p>
        </header>
        <p className="mt-5 leading-relaxed text-muted">{role.summary}</p>

        <h4 className="mt-7 mb-3 font-mono text-xs uppercase tracking-[0.14em] text-dim">Responsibilities</h4>
        <ul id={listId} className="grid gap-x-8 gap-y-2.5 text-[0.95rem] leading-relaxed text-muted lg:grid-cols-2">
          {items.map((r) => (
            <li key={r} className="flex gap-2.5">
              <Check size={15} className="mt-[0.3rem] shrink-0 text-accent/80" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
        {hidden > 0 && (
          <button
            type="button"
            className="mt-4 rounded text-sm font-medium text-accent transition-colors hover:text-accent-strong"
            aria-expanded={expanded}
            aria-controls={listId}
            onClick={() => setExpanded((e) => !e)}
          >
            {expanded ? 'Show fewer' : `Show all ${role.responsibilities.length} responsibilities`}
          </button>
        )}

        {role.tags && (
          <ul className="mt-7 flex flex-wrap gap-2 border-t border-line pt-6" aria-label="Technologies used">
            {role.tags.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
        )}
      </article>
    </li>
  )
}
