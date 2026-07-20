import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionProps {
  id?: string
  bg?: 'black' | 'black-2' | 'black-3'
  className?: string
  children: ReactNode
}

const bgClass = {
  black: 'bg-aurum-black',
  'black-2': 'bg-aurum-black-2',
  'black-3': 'bg-aurum-black-3',
}

export function Section({ id, bg = 'black', className, children }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-20', bgClass[bg], className)}>
      {children}
    </section>
  )
}
