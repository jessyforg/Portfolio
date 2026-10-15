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
