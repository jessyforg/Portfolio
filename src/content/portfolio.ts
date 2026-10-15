import type { ContactLink } from '../types/portfolio'
import { assetUrl } from '../utils/assetPaths'

export const profile = {
  name: 'Jester Perez',
  role: 'Full-Stack Developer',
} as const

export const contactLinks = {
  email: {
    label: 'Email',
    href: 'mailto:jes.ayson.perez@gmail.com',
    display: 'jes.ayson.perez@gmail.com',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jes-perez',
    display: 'in/jes-perez',
  },
  github: {
    label: 'GitHub',
    href: 'https://github.com/jessyforg',
    display: 'jessyforg',
  },
} satisfies Record<string, ContactLink>

/**
 * URL of the resume PDF (stored in /public/assets/resume/).
 * TODO(asset): the reviewed resume PDF has not been added yet, so this link is currently broken.
 */
export const resumeUrl = assetUrl('assets/resume/jester-perez-resume.pdf')
