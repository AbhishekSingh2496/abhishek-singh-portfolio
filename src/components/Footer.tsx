import { navItems, profile, socialLinks } from '../data/profile'
import { Mail } from './Icons'
import { SocialIcon } from './SocialIcon'

export function Footer() {
  return (
    <footer className="border-t border-line pt-14 pb-10">
      <div className="container-page">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold tracking-[0.06em] text-ink">ABHISHEK SINGH</p>
            <p className="mt-1 text-sm text-muted">Full Stack Developer | MERN Stack Developer</p>
            <p className="mt-4 text-sm leading-relaxed text-dim">Building modern web experiences with clean code and practical engineering.</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm sm:grid-cols-[auto_auto]">
            <ul className="space-y-2">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="text-muted transition-colors hover:text-ink">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {socialLinks.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.title}
                    className="inline-flex items-center gap-2 whitespace-nowrap text-muted transition-colors hover:text-ink"
                  >
                    <SocialIcon id={s.id} size={14} /> {s.name}
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink">
                  <Mail size={14} /> Email
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Abhishek Singh. All rights reserved.</p>
          <a href="#home" className="self-start text-muted transition-colors hover:text-ink sm:self-auto">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
