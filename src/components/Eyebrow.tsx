import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface EyebrowProps {
  as?: ElementType
  className?: string
  children: ReactNode
}

/** Uppercase Inter micro-label. Size, tracking and color are always passed via className — they vary per call site. */
export function Eyebrow({ as: Tag = 'span', className, children }: EyebrowProps) {
  return <Tag className={cn('uppercase font-sans font-normal leading-none', className)}>{children}</Tag>
}
