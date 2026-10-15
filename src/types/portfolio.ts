export interface ContactLink {
  /** Visible link text, e.g. "LinkedIn". */
  label: string
  href: string
  /** The address or handle shown alongside the label, e.g. the email address. */
  display: string
}

export interface NavItem {
  label: string
  /** Section id on the home page that this item scrolls to. */
  sectionId: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface DateLabel {
  /** Human-readable, e.g. "May 2025". */
  label: string
  /** Machine-readable (YYYY-MM) for the <time> element. */
  date: string
}

export interface ExperienceEntry {
  role: string
  organization: string
  location: string
  start: DateLabel
  end: DateLabel
  highlights: string[]
}

export interface EducationEntry {
  degree: string
  school: string
  location: string
  completed: DateLabel
}

export interface ApproachItem {
  title: string
  description: string
}
