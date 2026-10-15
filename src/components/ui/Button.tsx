import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router'
import styles from './Button.module.css'

type Variant = 'primary' | 'secondary'
type Size = 'md' | 'sm'

interface StyleProps {
  variant?: Variant
  size?: Size
}

function buttonClassName({ variant = 'primary', size = 'md' }: StyleProps, extra?: string) {
  return [styles.button, styles[variant], styles[size], extra].filter(Boolean).join(' ')
}

type ButtonProps = StyleProps & ButtonHTMLAttributes<HTMLButtonElement>

/** A real <button>, for actions on the current page. */
export function Button({ variant, size, className, type = 'button', ...rest }: ButtonProps) {
  return <button type={type} className={buttonClassName({ variant, size }, className)} {...rest} />
}

type ButtonLinkProps = StyleProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  (
    | { /** Route inside this site, e.g. "/projects/kapital". */ to: string; href?: never }
    | { /** External URL, mailto: link, or file. */ href: string; to?: never }
  )

/** A link styled as a button, for navigation. */
export function ButtonLink({ variant, size, className, to, href, ...rest }: ButtonLinkProps) {
  const classes = buttonClassName({ variant, size }, className)

  if (to !== undefined) {
    return <Link to={to} className={classes} {...rest} />
  }
  return <a href={href} className={classes} {...rest} />
}
