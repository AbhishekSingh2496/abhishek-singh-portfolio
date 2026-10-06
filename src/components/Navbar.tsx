import { useEffect, useState } from 'react'
import { navItems, profile, socialLinks } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolled } from '../hooks/useScrolled'
import { Close, Menu } from './Icons'
import { SocialIcon } from './SocialIcon'
import { ResumeButton } from './ResumeButton'

const sectionIds = navItems.map((n) => n.id)

export function Navbar() {
  const scrolled = useScrolled()
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)
  const solid = scrolled || open

  return (
    <>
      {open && <div aria-hidden="true" onClick={close} className="fixed inset-0 z-40 bg-bg/85 backdrop-blur-md lg:hidden" />}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          solid ? 'border-b border-line bg-bg/75 backdrop-blur-xl backdrop-saturate-150' : 'border-b border-transparent'
        }`}
      >
        <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-4">
          <a href="#home" onClick={close} className="group flex items-center gap-2.5" aria-label={`${profile.name} — back to top`}>
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-line-strong bg-surface-2 font-mono text-[0.8rem] font-semibold tracking-tight transition-colors group-hover:border-accent/50">
              <span>
                A<span className="text-accent">S</span>
              </span>
            </span>
            <span className="hidden text-sm font-medium tracking-tight whitespace-nowrap text-ink sm:inline lg:hidden xl:inline">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`relative rounded-md px-2.5 py-2 text-sm whitespace-nowrap transition-colors xl:px-3 ${active === item.id ? 'text-ink' : 'text-muted hover:text-ink'}`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-2.5 -bottom-px xl:inset-x-3 h-px bg-accent transition-opacity duration-300 ${
                      active === item.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            {socialLinks.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                title={s.title}
                className="icon-btn hidden sm:inline-grid"
                aria-label={`${s.title} (opens in new tab)`}
              >
                <SocialIcon id={s.id} size={17} />
              </a>
            ))}
            <ResumeButton className="btn btn-secondary btn-sm ml-2 hidden md:inline-flex">Resume</ResumeButton>
            <button
              type="button"
              className="icon-btn ml-1 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <Close size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          inert={!open}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="container-page max-h-[calc(100dvh-4rem)] overflow-y-auto pb-6 pt-2">
              <ul className="flex flex-col border-t border-line pt-3">
                {navItems.map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={close}
                      aria-current={active === item.id ? 'true' : undefined}
                      style={{ transitionDelay: open ? `${i * 30}ms` : '0ms' }}
                      className={`flex items-center justify-between rounded-lg px-2 py-3 text-lg transition-[color,transform,opacity] duration-300 ${
                        open ? 'translate-y-0 opacity-100' : '-translate-y-1 opacity-0'
                      } ${active === item.id ? 'text-ink' : 'text-muted hover:text-ink'}`}
                    >
                      {item.label}
                      {active === item.id && <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-line pt-5">
                <ResumeButton className="btn btn-primary basis-full sm:basis-auto sm:flex-1" onNavigate={close} />
                {socialLinks.map((s) => (
                  <a
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.title}
                    className="btn btn-secondary flex-1 px-3 sm:flex-none"
                    aria-label={`${s.title} (opens in new tab)`}
                  >
                    <SocialIcon id={s.id} size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
