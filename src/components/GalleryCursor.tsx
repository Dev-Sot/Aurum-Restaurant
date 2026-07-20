import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

export function GalleryCursor({ active, label }: { active: boolean; label: string }) {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { damping: 25, stiffness: 300, mass: 0.5 })
  const springY = useSpring(y, { damping: 25, stiffness: 300, mass: 0.5 })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [x, y])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[250] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-aurum-champagne font-sans text-[10px] font-medium tracking-[0.14em] text-aurum-black uppercase"
      style={{ x: springX, y: springY }}
      initial={false}
      animate={{ scale: active ? 1 : 0, opacity: active ? 1 : 0 }}
      transition={{ duration: 0.35, ease: EASE }}
    >
      {label}
    </motion.div>
  )
}
