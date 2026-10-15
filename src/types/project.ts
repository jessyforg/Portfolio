/** Short project metadata shared by the home-page cards and the case-study pages. */
export interface ProjectSummary {
  /** URL segment, e.g. "kapital" → /projects/kapital */
  slug: string
  name: string
  /** One line describing what the project is. */
  tagline: string
  summary: string
  /** Jester's role on the project. */
  role: string
  technologies: string[]
  /** Plain-language deployment status. Shown as text, never by color alone. */
  status: string
}
