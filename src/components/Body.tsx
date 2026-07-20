import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface BodyProps {
  as?: ElementType
  className?: string
  children: ReactNode
}

/** Inter light body copy. Size and line-height are always passed via className — they vary per call site. */
export function Body({ as: Tag = 'p', className, children }: BodyProps) {
  return <Tag className={cn('font-sans font-light text-aurum-gray m-0', className)}>{children}</Tag>
}
