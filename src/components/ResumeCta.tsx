import { ArrowRight } from './Icons'
import { ResumeButton } from './ResumeButton'

export function ResumeCta() {
  return (
    <section aria-labelledby="resume-cta-title" className="py-6 sm:py-10">
      <div className="container-page">
        <div className="reveal relative overflow-hidden rounded-2xl border border-line-strong bg-surface px-6 py-10 sm:px-10 sm:py-12">
          <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(90deg,transparent,black)]" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 id="resume-cta-title" className="text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-3xl">
                Have a project or opportunity in mind?
              </h2>
              <p className="mt-2 text-muted">Grab my resume for the full picture, or reach out directly — I&apos;m happy to talk.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ResumeButton className="btn btn-primary" />
              <a href="#contact" className="btn btn-secondary group">
                Get in touch
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
