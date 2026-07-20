import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

const tags = {
  div: motion.div,
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  blockquote: motion.blockquote,
} as const

interface RevealProps {
  visible: boolean
  delay?: number
  distance?: number
  as?: keyof typeof tags
  className?: string
  children: ReactNode
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export function Reveal({ visible, delay = 0, distance = 30, as = 'div', className, children, onMouseEnter, onMouseLeave }: RevealProps) {
  const Tag = tags[as]
  return (
    <Tag
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: distance }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    >
      {children}
    </Tag>
  )
}
