import type { SocialId } from '../data/profile'
import { GitHubIcon, LinkedInIcon, NaukriIcon } from './Icons'

export function SocialIcon({ id, size = 16 }: { id: SocialId; size?: number }) {
  switch (id) {
    case 'linkedin':
      return <LinkedInIcon size={size} />
    case 'github':
      return <GitHubIcon size={size} />
    case 'naukri':
      return <NaukriIcon size={size} />
  }
}
