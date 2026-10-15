import { useEffect, useState } from 'react'
import { contactLinks, resumeUrl } from '../../content/portfolio'
import { Section } from '../layout/Section'
import { Button, ButtonLink } from '../ui/Button'
import styles from './ContactSection.module.css'

type CopyStatus = 'idle' | 'copied' | 'failed'

const statusMessages: Record<CopyStatus, string> = {
  idle: '',
  copied: 'Email address copied.',
  failed: 'Couldn’t copy automatically. Select the address above to copy it.',
}

export function ContactSection() {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle')

  // Clear the "copied" message after a few seconds.
  useEffect(() => {
    if (copyStatus !== 'copied') return
    const timer = window.setTimeout(() => setCopyStatus('idle'), 4000)
    return () => window.clearTimeout(timer)
  }, [copyStatus])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactLinks.email.display)
      setCopyStatus('copied')
    } catch {
      setCopyStatus('failed')
    }
  }

  return (
    <Section
      id="contact"
      title="Contact"
      intro="I’m open to entry-level full-stack developer roles. Email me or connect on LinkedIn."
    >
      <a href={contactLinks.email.href} className={styles.email}>
        {contactLinks.email.display}
      </a>

      <div className={styles.actions}>
        <Button variant="secondary" onClick={copyEmail}>
          Copy email
        </Button>
        <ButtonLink href={contactLinks.linkedin.href} variant="secondary">
          LinkedIn
        </ButtonLink>
        <ButtonLink href={contactLinks.github.href} variant="secondary">
          GitHub
        </ButtonLink>
        <ButtonLink href={resumeUrl} download variant="secondary">
          Download resume
        </ButtonLink>
      </div>

      <p className={styles.status} role="status">
        {statusMessages[copyStatus]}
      </p>
    </Section>
  )
}
