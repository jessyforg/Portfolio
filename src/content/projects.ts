import type { ProjectSummary } from '../types/project'

/*
 * Source: Jester's resume (Projects and Experience sections) and the project brief.
 * Milestone 4 verifies these claims against each repository before the
 * case studies are written; update this file if the code shows otherwise.
 */
export const projects: ProjectSummary[] = [
  {
    slug: 'kapital',
    name: 'Kapital',
    tagline: 'Startup networking platform',
    summary:
      'A web platform that connects entrepreneurs, investors, and job seekers through role-based workflows, with startup discovery, investor preference matching, messaging, and notifications.',
    role: 'Team lead and full-stack developer',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    status: 'Runs locally; not publicly deployed',
  },
  {
    slug: 'taraki',
    name: 'TARAKI',
    tagline: 'Website for an innovation consortium',
    summary:
      'A full-stack web platform for TARAKI-CAR, built under the University of the Cordilleras Innovation and Technology Transfer Office (UC InTTO), later tested and refined with stakeholder feedback.',
    role: 'Team lead and full-stack developer',
    technologies: ['React', 'Node.js', 'MySQL', 'Railway'],
    status: 'Not deployed as a live website',
  },
]

export function projectPath(project: ProjectSummary) {
  return `/projects/${project.slug}`
}

export function getProject(slug: string) {
  const project = projects.find((p) => p.slug === slug)
  if (!project) throw new Error(`Unknown project slug: ${slug}`)
  return project
}
