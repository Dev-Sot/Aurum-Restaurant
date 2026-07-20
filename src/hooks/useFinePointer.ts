import { useEffect, useState } from 'react'

/** True only for devices with a real mouse — never on touch, so custom cursors and magnetic effects stay opt-in. */
export function useFinePointer(): boolean {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setFine(mq.matches)
    const handler = (e: MediaQueryListEvent) => setFine(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return fine
}
