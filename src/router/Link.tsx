import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { useRouter } from './Router'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
}

export function Link({ to, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    navigate(to)
    onClick?.(e)
  }

  return <a href={to} onClick={handleClick} {...rest} />
}
