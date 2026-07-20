import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useSectionInView(amount = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount })
  return { ref, inView }
}
