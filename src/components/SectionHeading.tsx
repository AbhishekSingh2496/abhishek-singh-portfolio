import type { ReactNode } from 'react'

type Props = { eyebrow: string; title: ReactNode; intro?: ReactNode; id?: string; align?: 'left' | 'center' }

export function SectionHeading({ eyebrow, title, intro, id, align = 'left' }: Props) {
  const centered = align === 'center'
  return (
    <header className={`reveal mb-12 max-w-2xl sm:mb-16 ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 id={id} className="text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
    </header>
  )
}
