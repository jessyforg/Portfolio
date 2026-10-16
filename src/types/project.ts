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

/**
 * How complete a feature is, based on inspecting the source code.
 * - implemented: built and reachable from the app's interface
 * - partial: code exists but is not fully connected to the interface
 */
export type FeatureStatus = 'implemented' | 'partial'

export interface ProjectFeature {
  name: string
  description: string
  status: FeatureStatus
}

export interface ProjectScreenshot {
  /** Path inside /public without the size suffix, e.g. "assets/projects/kapital/kapital-landing". */
  basePath: string
  /** Intrinsic size of the largest file, used to reserve space and prevent layout shift. */
  width: number
  height: number
  alt: string
  caption: string
}

export interface TechnologyGroup {
  label: string
  items: string[]
}

export interface ImplementationNote {
  title: string
  body: string
}

/** Full case-study content. Combined with the matching ProjectSummary by slug. */
export interface CaseStudy {
  slug: string
  /** Short paragraph under the page title. */
  overview: string
  /** Why the project exists / the problem it addresses. */
  purpose: string[]
  /** Context for the role: team, timeframe, setting. */
  roleContext: string
  /** Jester's own contributions (from his resume), not team-wide features. */
  contributions: string[]
  technologyGroups: TechnologyGroup[]
  implementation: ImplementationNote[]
  features: ProjectFeature[]
  screenshots: ProjectScreenshot[]
  challenges: ImplementationNote[]
  statusDetail: string
  limitations: string[]
}
