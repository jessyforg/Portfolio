import type {
  ApproachItem,
  ContactLink,
  EducationEntry,
  ExperienceEntry,
  SkillGroup,
} from '../types/portfolio'
import { assetUrl } from '../utils/assetPaths'

/*
 * Source for everything in this file: Jester's resume (Jester-Perez-IT-Resume.pdf)
 * and the project brief. Do not add claims that neither source supports.
 * Phone number and home address are intentionally NOT published.
 */

export const profile = {
  name: 'Jester Perez',
  role: 'Full-Stack Developer',
  headline:
    'Entry-level full-stack developer building web applications with React, Node.js, PHP, and MySQL.',
  education: 'BS Information Technology (Web Development), University of the Cordilleras, 2026.',
  availability: 'Open to full-stack developer roles in the Philippines and remote.',
  portrait: {
    small: assetUrl('assets/profile/profile-portrait-480.webp'),
    large: assetUrl('assets/profile/profile-portrait-960.webp'),
    alt: 'Portrait of Jester Perez',
  },
} as const

export const contactLinks = {
  email: {
    label: 'Email',
    href: 'mailto:jes.ayson.perez@gmail.com',
    display: 'jes.ayson.perez@gmail.com',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jes-perez/',
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
 * TODO(asset): the public version of the resume (without phone number and home address)
 * has not been added yet, so this link is currently broken.
 */
export const resumeUrl = assetUrl('assets/resume/jester-perez-resume.pdf')

export const about: string[] = [
  'I’m a recent Information Technology graduate from the University of the Cordilleras in Baguio City, where I majored in Web Development.',
  'During my internship at the university’s Innovation and Technology Transfer Office (UC InTTO), I was team lead for the development of two full-stack web applications, Kapital and TARAKI, working on the frontend, the backend, and the database. I later returned to TARAKI in a project-based role to test the website, consolidate stakeholder feedback, and refine it in preparation for public launch.',
  'I’m looking for an entry-level full-stack developer role, in the Philippines or remote, where I can keep growing toward software engineering.',
]

export const skillGroups: SkillGroup[] = [
  { label: 'Languages', items: ['Java', 'Python', 'JavaScript', 'PHP', 'SQL'] },
  { label: 'Frameworks and runtimes', items: ['React', 'Node.js'] },
  { label: 'Databases', items: ['MySQL'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Visual Studio Code'] },
  { label: 'Operating system', items: ['Windows'] },
  { label: 'Also used in projects', items: ['HTML', 'CSS', 'Railway'] },
]

export const experience: ExperienceEntry[] = [
  {
    role: 'Web Developer (Project-Based), TARAKI-CAR 10x Project',
    organization:
      'University of the Cordilleras – Innovation and Technology Transfer Office (UC InTTO)',
    location: 'Baguio City, Philippines',
    start: { label: 'October 2025', date: '2025-10' },
    end: { label: 'December 2025', date: '2025-12' },
    highlights: [
      'Tested the website for usability, navigation, responsiveness, and user experience.',
      'Gathered and consolidated stakeholder feedback to identify issues and recommend improvements.',
      'Refined website functionality and content based on validated feedback to prepare the platform for public launch.',
      'Prepared feedback reports and coordinated with project staff on technical requirements and final website turnover.',
    ],
  },
  {
    role: 'Web Developer Intern (Team Lead)',
    organization:
      'University of the Cordilleras – Innovation and Technology Transfer Office (UC InTTO)',
    location: 'Baguio City, Philippines',
    start: { label: 'May 2025', date: '2025-05' },
    end: { label: 'August 2025', date: '2025-08' },
    highlights: [
      'Led the development of TARAKI and Kapital, building full-stack web applications across frontend and backend components.',
      'Developed frontend interfaces and backend functionality to support project requirements and core features.',
      'Deployed web applications and configured hosting environments for accessibility and testing.',
      'Diagnosed and resolved bugs through debugging and iterative testing.',
      'Coordinated development tasks and collaborated with team members to implement features and address technical challenges.',
    ],
  },
]

export const education: EducationEntry = {
  degree: 'Bachelor of Science in Information Technology, major in Web Development',
  school: 'University of the Cordilleras',
  location: 'Baguio City, Philippines',
  completed: { label: 'April 2026', date: '2026-04' },
}

export const approach: ApproachItem[] = [
  {
    title: 'Work across the whole stack',
    description:
      'I build the interface, the server logic, and the database together so a feature works end to end. On Kapital, that included designing the relational MySQL schema behind user profiles, startups, investor preferences, messaging, and notifications.',
  },
  {
    title: 'Improve through feedback',
    description:
      'On TARAKI, I tested usability, navigation, and responsiveness, consolidated stakeholder feedback, and refined the site’s functionality and content based on what was validated.',
  },
  {
    title: 'Debug and test iteratively',
    description:
      'While building Kapital and TARAKI, I diagnosed and resolved bugs through debugging and repeated rounds of testing.',
  },
  {
    title: 'Keep the team in the loop',
    description:
      'As team lead, I coordinated development tasks, took part in technical planning meetings, and wrote feedback reports for project staff.',
  },
]
