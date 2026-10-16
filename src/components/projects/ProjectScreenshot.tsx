import type { ProjectScreenshot as Screenshot } from '../../types/project'
import { assetUrl } from '../../utils/assetPaths'
import styles from './ProjectScreenshot.module.css'

interface ProjectScreenshotProps {
  screenshot: Screenshot
  /** The first, above-the-fold screenshot loads immediately; the rest load as they scroll into view. */
  priority?: boolean
}

export function ProjectScreenshot({ screenshot, priority = false }: ProjectScreenshotProps) {
  const small = assetUrl(`${screenshot.basePath}-960.webp`)
  const large = assetUrl(`${screenshot.basePath}-1600.webp`)

  return (
    <figure className={styles.figure}>
      <img
        className={styles.image}
        src={large}
        srcSet={`${small} 960w, ${large} 1600w`}
        sizes="(min-width: 1260px) 1160px, 92vw"
        width={screenshot.width}
        height={screenshot.height}
        alt={screenshot.alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
      <figcaption className={styles.caption}>{screenshot.caption}</figcaption>
    </figure>
  )
}
