import type { CSSProperties } from 'react'
import { profile, socialLinks } from '../data/profile'
import { ArrowRight, MapPin, TechGlyph } from './Icons'
import { SocialIcon } from './SocialIcon'
import { ResumeButton } from './ResumeButton'

const d = (ms: number) => ({ '--enter-delay': `${ms}ms` }) as CSSProperties

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40">
      <HeroBackdrop />

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="min-w-0">
          <div className="enter flex flex-wrap gap-2" style={d(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-3 py-1 text-xs font-medium text-accent-strong">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {profile.experienceLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs text-muted">
              <MapPin size={13} />
              Based in {profile.locationShort}
            </span>
          </div>

          <h1 id="hero-title" className="enter mt-7 text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.25rem]" style={d(80)}>
            Hi, I&apos;m Abhishek&nbsp;Singh.
          </h1>

          <p className="enter mt-5 text-2xl font-medium leading-tight tracking-[-0.025em] sm:text-[2rem]" style={d(160)}>
            <span className="block text-ink">Full Stack Developer</span>
            <span className="block text-muted">MERN Stack Developer</span>
          </p>

          <p className="enter mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg" style={d(240)}>
            {profile.summary}
          </p>

          <div className="enter mt-9 flex flex-wrap items-center gap-3" style={d(320)}>
            <a href="#projects" className="btn btn-primary group">
              View My Work
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <ResumeButton />
            <a href="#contact" className="btn btn-ghost">
              Let&apos;s Connect
            </a>
          </div>

          <div className="enter mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-dim" style={d(400)}>
            <span className="font-mono text-xs uppercase tracking-[0.14em] max-[400px]:hidden">Find me on</span>
            <span className="h-px w-8 bg-line-strong max-[400px]:hidden" aria-hidden="true" />
            {socialLinks.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                title={s.title}
                className="inline-flex items-center gap-2 whitespace-nowrap text-muted transition-colors hover:text-ink"
              >
                <SocialIcon id={s.id} /> {s.name}
                <span className="sr-only"> — {s.title} (opens in new tab)</span>
              </a>
            ))}
          </div>
        </div>

        <div className="enter min-w-0" style={d(300)}>
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_60%_30%,black,transparent)]" />
      <div className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] animate-drift rounded-full bg-accent/[0.09] blur-[120px] will-change-transform" />
      <div className="absolute top-1/3 left-[-15%] h-[28rem] w-[28rem] animate-drift rounded-full bg-sky-400/[0.05] blur-[120px] [animation-delay:-8s] will-change-transform" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
    </div>
  )
}

/* ---------- Developer-themed visual: editor + terminal + floating stack chips ---------- */

const K = ({ children }: { children: string }) => <span className="text-[#c4a7ff]">{children}</span>
const S = ({ children }: { children: string }) => <span className="text-accent-strong">{children}</span>
const F = ({ children }: { children: string }) => <span className="text-[#8cc8ff]">{children}</span>
const C = ({ children }: { children: string }) => <span className="text-dim italic">{children}</span>
const P = ({ children }: { children: string }) => <span className="text-[#f2c38b]">{children}</span>

const codeLines = [
  <C>{'// rewards.routes.ts'}</C>,
  <>
    <K>router</K>.<F>post</F>(<S>{"'/qr/scan'"}</S>,
  </>,
  <>
    {'  '}
    <F>authenticate</F>, <F>authorize</F>(<S>{"'scan:qr'"}</S>),
  </>,
  <>
    {'  '}
    <K>async</K> (req, res) =&gt; {'{'}
  </>,
  <>
    {'    '}
    <K>const</K> qr = <K>await</K> <F>verifyQr</F>(req.body.<P>code</P>)
  </>,
  <>
    {'    '}
    <K>if</K> (!qr) <K>return</K> res.<F>status</F>(<P>400</P>).<F>end</F>()
  </>,
  <>{''}</>,
  <>
    {'    '}
    <K>const</K> points = <K>await</K> <F>allocate</F>(req.user, qr)
  </>,
  <>
    {'    '}
    res.<F>json</F>({'{ '}
    <P>points</P>
    {' }'})
  </>,
  <>{'  })'}</>,
]

const floaters = [
  { name: 'React.js', className: 'left-[-0.75rem] top-[38%] sm:left-[-3.25rem]', delay: '0s' },
  { name: 'Node.js', className: 'right-[-0.5rem] top-[-1rem] sm:right-[-1.5rem]', delay: '-2.2s' },
  { name: 'MongoDB', className: 'right-[-0.5rem] bottom-24 sm:right-[-2rem]', delay: '-4.1s' },
  { name: 'TypeScript', className: 'left-[-0.5rem] bottom-[-1rem] sm:left-6', delay: '-1.3s' },
]

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] px-3 py-4 sm:px-6" role="img" aria-label="Illustration of a code editor showing an Express.js API route and a deployment terminal">
      {/* Editor */}
      <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface/90 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8)] backdrop-blur-sm">
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="flex min-w-0 gap-1 font-mono text-[0.7rem]">
            <span className="truncate rounded-md bg-white/[0.06] px-2.5 py-1 text-ink">rewards.routes.ts</span>
            <span className="hidden truncate px-2.5 py-1 text-dim sm:inline">Dashboard.tsx</span>
          </div>
        </div>
        <pre className="overflow-x-auto px-4 pt-5 pb-12 sm:pb-16 font-mono text-[0.6rem] min-[400px]:text-[0.66rem] leading-[1.75] text-ink/90 sm:text-[0.8rem]">
          <code>
            {codeLines.map((line, i) => (
              <span key={i} className="flex">
                <span className="mr-3 inline-block w-4 shrink-0 select-none sm:mr-4 text-right text-dim/60" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="whitespace-pre">{line}</span>
              </span>
            ))}
          </code>
        </pre>
      </div>

      {/* Terminal */}
      <div className="relative z-10 -mt-6 ml-auto w-[88%] overflow-hidden rounded-xl border border-line-strong bg-[#0a0c10]/95 shadow-[0_30px_60px_-25px_rgb(0_0_0/0.9)] backdrop-blur sm:-mt-10 sm:w-[78%]">
        <div className="flex items-center justify-between border-b border-line px-3.5 py-2">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-dim">terminal</span>
          <span className="font-mono text-[0.65rem] text-dim">zsh</span>
        </div>
        <div className="space-y-1 px-3.5 py-3 font-mono text-[0.68rem] leading-relaxed sm:text-[0.74rem]">
          <p className="text-muted">
            <span className="text-accent">$</span> git push origin release
          </p>
          <p className="text-dim">→ deploying api &amp; web to staging…</p>
          <p className="text-accent-strong">
            ✓ ready <span className="text-dim">· mongodb · s3 · express</span>
          </p>
          <p className="text-muted">
            <span className="text-accent">$</span>{' '}
            <span className="inline-block h-3.5 w-1.5 translate-y-0.5 animate-blink bg-ink/80" aria-hidden="true" />
          </p>
        </div>
      </div>

      {/* Floating stack chips */}
      {floaters.map((f) => (
        <div
          key={f.name}
          aria-hidden="true"
          className={`absolute z-20 flex items-center gap-2 rounded-xl border border-line-strong bg-surface-2/90 px-2.5 py-2 text-ink/90 shadow-lg shadow-black/40 backdrop-blur animate-float will-change-transform ${f.className}`}
          style={{ animationDelay: f.delay }}
        >
          <span className="text-accent">
            <TechGlyph name={f.name} size={18} />
          </span>
          <span className="hidden font-mono text-[0.7rem] sm:inline">{f.name.replace('.js', '')}</span>
        </div>
      ))}
    </div>
  )
}
