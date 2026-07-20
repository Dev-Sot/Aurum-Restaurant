import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'solid'
  size?: 'sm' | 'md' | 'lg'
}

const base = 'font-sans font-medium uppercase cursor-pointer outline-none transition-transform duration-300 ease-[ease] hover:-translate-y-px active:translate-y-0 focus-visible:ring-2 focus-visible:ring-aurum-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-aurum-black'

const variants = {
  outline: 'bg-transparent border border-aurum-champagne text-aurum-ivory transition-colors duration-[350ms] ease-[ease] hover:bg-aurum-champagne hover:text-aurum-black focus-visible:bg-aurum-champagne focus-visible:text-aurum-black',
  solid: 'bg-aurum-ivory text-aurum-black border-none',
}

/** sm = compact nav CTA · md = standard prominent CTA · lg = fully responsive hero CTA. */
const sizes = {
  sm: 'px-[26px] py-[11px] text-[10px] tracking-[0.22em]',
  md: 'px-10 py-[18px] text-[10px] tracking-[0.24em]',
  lg: 'px-8 py-4 text-[10px] tracking-[0.24em] lg:px-[42px] lg:py-[18px] lg:tracking-[0.26em]',
}

export function Button({ variant = 'outline', size = 'md', className, children, ...rest }: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  )
}
