import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface HeadingProps {
  as?: ElementType
  italic?: boolean
  weight?: 'normal' | 'semibold'
  className?: string
  children: ReactNode
}

const weightClass = {
  normal: 'font-normal',
  semibold: 'font-semibold',
}

/** Bodoni Moda display text. Size, tracking, leading and color are always passed via className — they vary per call site. */
export function Heading({ as: Tag = 'h2', italic = false, weight = 'normal', className, children }: HeadingProps) {
  return <Tag className={cn('font-serif m-0', weightClass[weight], italic && 'italic', className)}>{children}</Tag>
}
