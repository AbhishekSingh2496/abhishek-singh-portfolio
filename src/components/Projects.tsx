import { lazy, Suspense, useCallback, useRef, useState } from 'react'
import { links, projects, type Project } from '../data/profile'
import { ArrowRight, ArrowUpRight, GitHubIcon } from './Icons'
import { ProjectPreview } from './ProjectPreview'
import { SectionHeading } from './SectionHeading'

const loadModal = () => import('./ProjectModal')
const ProjectModal = lazy(loadModal)

const TAG_LIMIT = 7

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const open = (project: Project, trigger: HTMLElement) => {
    triggerRef.current = trigger
    setSelected(project)
  }
  const close = useCallback(() => {
    setSelected(null)
    triggerRef.current?.focus()
  }, [])

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative border-t border-line py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          id="projects-title"
          eyebrow="04 — Featured Projects"
          title="Real platforms, built and supported in production."
          intro="Two enterprise loyalty platforms I build and support at KNS Technologies, and the personal MERN project where my full-stack journey started."
        />

        <div className="space-y-8 sm:space-y-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} reversed={i % 2 === 1} onOpen={open} />
          ))}
        </div>

        <div className="reveal mt-12 flex justify-center">
          <a href={links.githubRepos} target="_blank" rel="noopener noreferrer" className="btn btn-secondary group">
            <GitHubIcon size={16} />
            Browse all repositories
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <span className="sr-only">(opens in new tab)</span>
          </a>
        </div>
      </div>

      {selected && (
        <Suspense fallback={null}>
          <ProjectModal project={selected} onClose={close} />
        </Suspense>
      )}
    </section>
  )
}

type CardProps = { project: Project; reversed: boolean; onOpen: (p: Project, trigger: HTMLElement) => void }

function ProjectCard({ project: p, reversed, onOpen }: CardProps) {
  const extra = p.tech.length - TAG_LIMIT
  return (
    <article
      aria-labelledby={`${p.id}-title`}
      className="reveal group card grid overflow-hidden transition-colors duration-300 hover:border-line-strong lg:grid-cols-2"
    >
      <div className={`relative border-line max-lg:border-b ${reversed ? 'lg:order-2 lg:border-l' : 'lg:border-r'}`}>
        <ProjectPreview project={p} />
      </div>

      <div className="flex min-w-0 flex-col p-6 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-dim">
          <span className="uppercase tracking-[0.12em] text-accent">{p.category}</span>
          <span aria-hidden="true">/</span>
          <span>{p.period}</span>
        </div>

        <h3 id={`${p.id}-title`} className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-[1.75rem]">
          {p.title}
        </h3>
        <p className="mt-1 text-muted">{p.subtitle}</p>
        <p className="mt-1 text-sm text-dim">
          {p.role}
          {p.association && ` · ${p.association}`}
        </p>

        <p className="mt-5 leading-relaxed text-muted">{p.description}</p>

        <ul className="mt-6 grid gap-2 text-sm text-ink/90 sm:grid-cols-2" aria-label="Key features">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2.5">
              <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
          {p.tech.slice(0, TAG_LIMIT).map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
          {extra > 0 && (
            <li className="tag text-dim">
              +{extra}
              <span className="sr-only"> more</span>
            </li>
          )}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-8">
          <button
            type="button"
            className="btn btn-primary btn-sm group/btn"
            onClick={(e) => onOpen(p, e.currentTarget)}
            onMouseEnter={loadModal}
            onFocus={loadModal}
            aria-haspopup="dialog"
          >
            View Details
            <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            <span className="sr-only">about {p.title}</span>
          </button>
          {p.links.live && (
            <a href={p.links.live} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
              Live Demo <ArrowUpRight size={15} />
              <span className="sr-only">of {p.title} (opens in new tab)</span>
            </a>
          )}
          {p.links.github && (
            <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
              <GitHubIcon size={15} /> GitHub
              <span className="sr-only">repository for {p.title} (opens in new tab)</span>
            </a>
          )}
          {p.linkNote && <p className="w-full pt-1 text-xs text-dim">{p.linkNote}</p>}
        </div>
      </div>
    </article>
  )
}
