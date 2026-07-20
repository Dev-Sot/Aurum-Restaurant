import { cn } from '@/lib/cn'

interface DividerProps {
  width?: number
  className?: string
}

/** 1px champagne accent line used before section labels and under quotes. */
export function Divider({ width = 40, className }: DividerProps) {
  return <div className={cn('h-px bg-aurum-champagne', className)} style={{ width }} />
}
