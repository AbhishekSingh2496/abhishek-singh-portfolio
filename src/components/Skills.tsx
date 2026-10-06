import type { CSSProperties, ReactNode } from 'react'
import { engineeringSkills, skillGroups } from '../data/profile'
import { Cloud, Cog, Database, Layers, Server, TechGlyph, Wrench } from './Icons'
import { SectionHeading } from './SectionHeading'

const groupIcon: Record<string, ReactNode> = {
  Frontend: <Layers size={18} />,
  Backend: <Server size={18} />,
  Database: <Database size={18} />,
  'Cloud & Deployment': <Cloud size={18} />,
  Tools: <Wrench size={18} />,
}

const span: Record<string, string> = {
  Frontend: 'lg:col-span-4',
  Backend: 'lg:col-span-2',
  Database: 'lg:col-span-2',
  'Cloud & Deployment': 'lg:col-span-2',
  Tools: 'lg:col-span-2',
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          id="skills-title"
          eyebrow="03 — Skills"
          title="A focused MERN toolkit, used daily in production."
          intro="The technologies and engineering practices I work with across frontend, backend, data and deployment."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((g, i) => (
            <article
              key={g.title}
              className={`reveal card p-5 transition-colors duration-300 hover:border-line-strong sm:p-6 ${span[g.title] ?? 'lg:col-span-2'} ${g.title === 'Frontend' ? 'sm:col-span-2' : ''}`}
              style={{ '--reveal-delay': `${(i % 3) * 70}ms` } as CSSProperties}
            >
              <header className="mb-5 flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line-strong bg-surface-2 text-accent">{groupIcon[g.title]}</span>
                <div>
                  <h3 className="font-semibold tracking-[-0.01em] text-ink">{g.title}</h3>
                  <p className="text-sm text-dim">{g.description}</p>
                </div>
              </header>
              <ul className={`grid gap-2 ${g.title === 'Frontend' ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-1'}`}>
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="group/skill flex items-center gap-3 rounded-xl border border-line bg-white/[0.015] px-3.5 py-3 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-accent/[0.04]"
                  >
                    <span className="text-muted transition-colors duration-300 group-hover/skill:text-accent">
                      <TechGlyph name={item} size={20} />
                    </span>
                    <span className="min-w-0 text-sm font-medium text-ink/90">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <article className="reveal card p-5 sm:col-span-2 sm:p-6 lg:col-span-6">
            <header className="mb-5 flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line-strong bg-surface-2 text-accent">
                <Cog size={18} />
              </span>
              <div>
                <h3 className="font-semibold tracking-[-0.01em] text-ink">Engineering</h3>
                <p className="text-sm text-dim">Practices and problem areas I work on end to end</p>
              </div>
            </header>
            <ul className="flex flex-wrap gap-2">
              {engineeringSkills.map((s) => (
                <li
                  key={s}
                  className="rounded-lg border border-line bg-white/[0.015] px-3.5 py-2 text-sm text-ink/85 transition-colors duration-300 hover:border-accent/35 hover:text-ink"
                >
                  {s}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
