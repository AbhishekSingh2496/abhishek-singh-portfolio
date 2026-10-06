import type { ReactNode } from 'react'
import type { Project } from '../data/profile'

/**
 * Project "screenshot" area. Uses a real screenshot when `project.image` is set
 * (place files in /public/projects), otherwise renders a lightweight illustrative
 * mock-up so no fake screenshots are presented.
 */
export function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface lg:aspect-auto lg:h-full lg:min-h-[24rem]">
      <div className="absolute inset-0 transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.035] motion-reduce:transform-none">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
        ) : project.visual === 'social' ? (
          <SocialMock />
        ) : (
          <DashboardMock variant={project.id} />
        )}
      </div>
      {!project.image && (
        <span className="absolute right-3 bottom-3 rounded-md border border-line bg-bg/70 px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-dim backdrop-blur">
          Illustration
        </span>
      )}
    </div>
  )
}

const bar = 'rounded-full bg-white/[0.08]'

function MockFrame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_0%,rgb(95_212_184/0.14),transparent_60%)] p-4 sm:p-6">
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line-strong bg-bg/80 shadow-2xl shadow-black/50">
        <div className="flex items-center gap-2 border-b border-line px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="ml-2 truncate font-mono text-[0.6rem] text-dim">{label}</span>
        </div>
        {children}
      </div>
    </div>
  )
}

function DashboardMock({ variant }: { variant: string }) {
  const isSea = variant.includes('sea')
  const heights = isSea ? [40, 62, 48, 75, 58, 88, 70, 92] : [55, 38, 70, 52, 80, 66, 90, 74]
  return (
    <MockFrame label={isSea ? 'mh-privilege · sea / dashboard' : 'mh-privilege · india / dashboard'}>
      <div className="flex min-h-0 flex-1">
        {/* sidebar */}
        <div className="hidden w-[22%] shrink-0 flex-col gap-2 border-r border-line p-3 sm:flex">
          <div className="mb-2 h-2.5 w-3/4 rounded-full bg-accent/40" />
          {['w-5/6', 'w-2/3', 'w-3/4', 'w-1/2', 'w-2/3', 'w-3/5'].map((w, i) => (
            <div key={i} className={`h-2 ${w} ${i === 1 ? 'rounded-full bg-white/20' : bar}`} />
          ))}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-2 p-2.5 sm:gap-3 sm:p-4">
          {/* KPI tiles */}
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-line bg-white/[0.02] p-2">
                <div className={`h-1.5 w-1/2 ${bar}`} />
                <div className={`mt-2 h-3 w-3/4 rounded-full ${i === 0 ? 'bg-accent/50' : 'bg-white/15'}`} />
              </div>
            ))}
          </div>
          <div className="grid min-h-0 flex-1 grid-cols-5 gap-2">
            {/* chart */}
            <div className="col-span-3 flex items-end gap-1.5 rounded-lg border border-line bg-white/[0.02] p-2.5">
              {heights.map((h, i) => (
                <div key={i} className={`flex-1 rounded-sm ${i === heights.length - 1 ? 'bg-accent/70' : 'bg-white/[0.12]'}`} style={{ height: `${h}%` }} />
              ))}
            </div>
            {/* QR tile */}
            <div className="col-span-2 flex flex-col items-center justify-center gap-2 rounded-lg border border-line bg-white/[0.02] p-2">
              <QrGlyph />
              <div className={`h-1.5 w-2/3 ${bar}`} />
            </div>
          </div>
          {/* table */}
          <div className="hidden space-y-1.5 rounded-lg sm:block border border-line bg-white/[0.02] p-2.5">
            {[0, 1, 2].map((r) => (
              <div key={r} className="flex items-center gap-2">
                <div className={`h-1.5 w-1/4 ${bar}`} />
                <div className={`h-1.5 w-1/5 ${bar}`} />
                <div className={`h-1.5 flex-1 ${bar}`} />
                <div className={`h-3 w-10 rounded-full ${r === 0 ? 'bg-accent/30' : 'bg-white/10'}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockFrame>
  )
}

function QrGlyph() {
  // Decorative QR-like pattern (not a real code).
  const cells = '1110111100101011101011010001101100101110111101010001111011011'.split('')
  return (
    <div className="grid aspect-square w-[46%] max-w-16 grid-cols-8 gap-[2px] rounded-md bg-white/[0.04] p-1">
      {Array.from({ length: 64 }, (_, i) => (
        <span key={i} className={`aspect-square rounded-[1px] ${cells[i % cells.length] === '1' ? 'bg-ink/70' : 'bg-transparent'}`} />
      ))}
    </div>
  )
}

function SocialMock() {
  return (
    <MockFrame label="ourspace · feed">
      <div className="flex min-h-0 flex-1 gap-3 p-3 sm:p-4">
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          {/* stories / reels */}
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className={`h-7 w-7 shrink-0 rounded-full border-2 ${i < 2 ? 'border-accent/70' : 'border-white/15'} bg-white/10`} />
            ))}
          </div>
          {/* post */}
          <div className="flex min-h-0 flex-1 flex-col gap-2 rounded-lg border border-line bg-white/[0.02] p-2.5">
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full bg-white/15" />
              <div className={`h-1.5 w-1/3 ${bar}`} />
            </div>
            <div className="min-h-0 flex-1 rounded-md bg-[linear-gradient(135deg,rgb(95_212_184/0.25),rgb(56_189_248/0.12)_60%,rgb(255_255_255/0.03))]" />
            <div className="flex items-center gap-2">
              <span className="text-[0.7rem] text-accent">♥</span>
              <div className={`h-1.5 w-1/4 ${bar}`} />
              <div className={`ml-auto h-1.5 w-1/6 ${bar}`} />
            </div>
          </div>
        </div>
        {/* chat */}
        <div className="hidden w-[38%] shrink-0 flex-col gap-2 rounded-lg border border-line bg-white/[0.02] p-2.5 sm:flex">
          <div className={`h-1.5 w-1/2 ${bar}`} />
          <div className="mt-1 h-4 w-4/5 self-start rounded-lg rounded-bl-sm bg-white/10" />
          <div className="h-4 w-3/5 self-end rounded-lg rounded-br-sm bg-accent/40" />
          <div className="h-4 w-2/3 self-start rounded-lg rounded-bl-sm bg-white/10" />
          <div className="h-4 w-1/2 self-end rounded-lg rounded-br-sm bg-accent/40" />
          <div className="mt-auto h-5 rounded-md border border-line" />
        </div>
      </div>
    </MockFrame>
  )
}
