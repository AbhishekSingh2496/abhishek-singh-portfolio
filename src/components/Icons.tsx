import { useId, type SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function Stroke({ size = 18, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
}

export const ArrowRight = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Stroke>
)
export const ArrowUpRight = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Stroke>
)
export const Download = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 4v11m0 0 4.5-4.5M12 15l-4.5-4.5M5 19h14" />
  </Stroke>
)
export const Mail = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </Stroke>
)
export const Phone = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5l1.5-2 4 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </Stroke>
)
export const MapPin = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Stroke>
)
export const Menu = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Stroke>
)
export const Close = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Stroke>
)
export const Check = (p: IconProps) => (
  <Stroke {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Stroke>
)
export const Briefcase = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2.5" />
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12.5h18" />
  </Stroke>
)
export const GraduationCap = (p: IconProps) => (
  <Stroke {...p}>
    <path d="m2 9 10-5 10 5-10 5L2 9Z" />
    <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6" />
  </Stroke>
)
export const Shield = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6L12 3Z" />
    <path d="m9 12 2 2 4-4" />
  </Stroke>
)
export const Layers = (p: IconProps) => (
  <Stroke {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </Stroke>
)
export const Server = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3.5" y="4" width="17" height="7" rx="2" />
    <rect x="3.5" y="13" width="17" height="7" rx="2" />
    <path d="M7.5 7.5h.01M7.5 16.5h.01" />
  </Stroke>
)
export const Database = (p: IconProps) => (
  <Stroke {...p}>
    <ellipse cx="12" cy="5.5" rx="7.5" ry="2.5" />
    <path d="M4.5 5.5v13c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-13M4.5 12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5" />
  </Stroke>
)
export const Cloud = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M7 19a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 9.5a4.75 4.75 0 0 1-.5 9.5H7Z" />
  </Stroke>
)
export const Wrench = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M14.5 6.5a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8M14.5 6.5 13 5a4 4 0 0 0-5.5 5.5L3 15l3 3 4.5-4.5" />
  </Stroke>
)
export const Cog = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
  </Stroke>
)
export const Terminal = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="m7 9 3 3-3 3M12.5 15H17" />
  </Stroke>
)
export const Sparkle = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  </Stroke>
)

export function LinkedInIcon({ size = 18, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export function GitHubIcon({ size = 18, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...rest}>
      <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57l-.02-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3Z" />
    </svg>
  )
}

/** Naukri-style mark: a filled disc with the glyph cut out, so it inherits currentColor and hover like the other brand icons. */
export function NaukriIcon({ size = 18, ...rest }: IconProps) {
  const maskId = `naukri-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...rest}>
      <defs>
        <mask id={maskId}>
          <rect width="24" height="24" fill="white" />
          <g transform="translate(12 12) scale(1.3) translate(-11.6 -11.2)">
            <path
              d="M8.2 15.8c1.05-1.05 1.85-2.35 2.35-3.78.5-1.43.65-2.97.45-4.47M11 7.55c1.15.65 2.15 1.6 2.85 2.75.7 1.15 1.1 2.45 1.15 3.8"
              fill="none"
              stroke="black"
              strokeWidth={1.8}
              strokeLinecap="round"
            />
            <circle cx="11" cy="6.5" r="1.35" fill="black" />
          </g>
        </mask>
      </defs>
      <circle cx="12" cy="12" r="11" fill="currentColor" mask={`url(#${maskId})`} />
    </svg>
  )
}

/* ---------- Technology glyphs (simplified, monochrome-friendly) ---------- */

export function TechGlyph({ name, size = 20 }: { name: string; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', 'aria-hidden': true, focusable: false } as const
  switch (name) {
    case 'React.js':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.3}>
          <ellipse cx="12" cy="12" rx="10" ry="3.9" />
          <ellipse cx="12" cy="12" rx="10" ry="3.9" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.9" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.9" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'Node.js':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round">
          <path d="M12 2.5 20.25 7.25v9.5L12 21.5l-8.25-4.75v-9.5L12 2.5Z" />
          <path
            d="M10 9v5.2c0 .9-.6 1.4-1.5 1.1M16 10c-.4-.7-1.2-1-2-1-1 0-1.7.5-1.7 1.3 0 1.8 3.9 1 3.9 2.9 0 .9-.8 1.5-2 1.5-.9 0-1.7-.4-2.1-1.1"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'Express.js':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round">
          <path d="M3 8h6M3 12h5M3 16h6M3 8v8M13 8l7 8M20 8l-7 8" />
        </svg>
      )
    case 'MongoDB':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round">
          <path d="M12 2c3.3 3.6 5 6.9 5 10.2 0 3.6-2.2 6.3-5 7.3-2.8-1-5-3.7-5-7.3C7 8.9 8.7 5.6 12 2Z" />
          <path d="M12 6v16" />
        </svg>
      )
    case 'JavaScript':
    case 'TypeScript': {
      const label = name === 'JavaScript' ? 'JS' : 'TS'
      return (
        <svg {...common} fill="none">
          <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="3" stroke="currentColor" strokeWidth={1.5} />
          <text x="19" y="18.5" textAnchor="end" fontSize="9" fontWeight="700" fontFamily="Geist, sans-serif" fill="currentColor">
            {label}
          </text>
        </svg>
      )
    }
    case 'HTML5':
    case 'CSS3': {
      const label = name === 'HTML5' ? '5' : '3'
      return (
        <svg {...common} fill="none">
          <path d="M4 2.5h16l-1.5 16.5L12 21.5 5.5 19 4 2.5Z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily="Geist, sans-serif" fill="currentColor">
            {label}
          </text>
        </svg>
      )
    }
    case 'Tailwind CSS':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round">
          <path d="M3 10c1.5-3 3.5-4 6-3 2 .8 2.8 3 5 3 1.8 0 3.3-1 4.5-3M5.5 17c1.5-3 3.5-4 6-3 2 .8 2.8 3 5 3 1.8 0 3.3-1 4.5-3" />
        </svg>
      )
    case 'AWS':
    case 'Amazon S3':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
          {name === 'AWS' ? (
            <>
              <text x="12" y="13" textAnchor="middle" fontSize="8.5" fontWeight="700" fontFamily="Geist, sans-serif" fill="currentColor" stroke="none">
                aws
              </text>
              <path d="M4.5 16.5c4.5 2.7 10.5 2.7 15 0M17.5 15.2l2 1.3-.8 2.1" />
            </>
          ) : (
            <>
              <ellipse cx="12" cy="5.5" rx="7.5" ry="2.5" />
              <path d="M4.5 5.5 6.5 19c.3 1.3 2.6 2 5.5 2s5.2-.7 5.5-2l2-13.5" />
            </>
          )}
        </svg>
      )
    case 'Git':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.5 21.5 12 12 21.5 2.5 12 12 2.5Z" />
          <circle cx="10" cy="9" r="1.2" />
          <circle cx="10" cy="15" r="1.2" />
          <circle cx="14.5" cy="12.5" r="1.2" />
          <path d="M10 10.2v3.6M10.9 9.9l2.8 1.8" />
        </svg>
      )
    case 'GitHub':
      return <GitHubIcon size={size} />
    case 'REST APIs':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 6 3 12l5 6M16 6l5 6-5 6M13.5 4l-3 16" />
        </svg>
      )
    case 'Production Deployment':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3c3 2 4.5 5 4.5 9l-2 3h-5l-2-3c0-4 1.5-7 4.5-9Z" />
          <circle cx="12" cy="9.5" r="1.5" />
          <path d="M9.5 15 7 18l2.5-.5M14.5 15l2.5 3-2.5-.5M12 17v4" />
        </svg>
      )
    default:
      return <Sparkle size={size} />
  }
}
