import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useScrollY } from '@/hooks/useScrollY'
import { useTranslation } from '@/i18n/LanguageContext'
import { cn } from '@/lib/cn'
import { Link } from '@/router/Link'
import { useRouter } from '@/router/Router'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Eyebrow } from '@/components/Eyebrow'
import { LanguageSwitch } from '@/components/LanguageSwitch'

const EASE = [0.16, 1, 0.3, 1] as const

function NavLink({ label, href, onClick, large = false }: { label: string; href: string; onClick?: () => void; large?: boolean }) {
  const { navigate } = useRouter()
  const isRoute = href.startsWith('/')

  return (
    <a
      href={href}
      onClick={(e) => {
        if (isRoute) {
          e.preventDefault()
          navigate(href)
        }
        onClick?.()
      }}
      className={cn(
        'group relative pb-1 font-sans font-normal tracking-[0.14em] uppercase text-aurum-gray no-underline outline-none transition-colors duration-300 ease-[ease] hover:text-aurum-ivory focus-visible:text-aurum-ivory',
        large ? 'text-[28px] tracking-[0.02em] normal-case font-serif' : 'text-[11px]',
      )}
    >
      {label}
      <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-aurum-champagne transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100" />
    </a>
  )
}

export function Navigation() {
  const scrollY = useScrollY()
  const scrolled = scrollY > 56
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const { path } = useRouter()
  const onCaseStudy = path === '/case-study'

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="fixed top-2 left-2 z-[300] -translate-y-20 bg-aurum-ivory px-4 py-2 font-sans text-[12px] font-medium text-aurum-black transition-transform focus:translate-y-0"
      >
        {t.nav.skipToContent}
      </a>

      <nav
        className={cn(
          'fixed inset-x-0 top-0 z-[200] flex h-[76px] items-center justify-between px-6 transition-[background-color,backdrop-filter,border-color] duration-700 ease-[ease] md:px-12 lg:px-20',
          scrolled || onCaseStudy ? 'border-b border-aurum-border bg-aurum-black/96 backdrop-blur-[16px]' : 'border-b border-transparent bg-transparent',
        )}
      >
        <Link to="/" className="no-underline outline-none">
          <Heading as="div" className="text-[17px] leading-none tracking-[0.18em] text-aurum-ivory md:text-[20px]">AURUM</Heading>
          <Eyebrow as="div" className="mt-[3px] text-[7px] tracking-[0.24em] text-aurum-gray-mid md:text-[8px] md:tracking-[0.28em]">
            {t.nav.tagline}
          </Eyebrow>
        </Link>

        <div className="hidden items-center gap-10 xl:flex">
          {!onCaseStudy && (
            <div className="flex gap-10">
              {t.nav.links.map((l) => (
                <NavLink key={l.href} label={l.label} href={l.href} />
              ))}
            </div>
          )}
          <NavLink label={t.nav.caseStudyLink} href="/case-study" />
          <LanguageSwitch />
        </div>

        <div className="hidden items-center gap-6 xl:flex">
          <Button size="sm">{t.nav.cta}</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t.nav.openMenu}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="text-aurum-ivory outline-none focus-visible:text-aurum-champagne xl:hidden"
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-[300] flex flex-col bg-aurum-black xl:hidden"
          >
            <div className="flex h-[76px] items-center justify-between px-6">
              <Heading as="div" className="text-[17px] leading-none tracking-[0.18em] text-aurum-ivory">AURUM</Heading>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.nav.closeMenu}
                className="text-aurum-ivory outline-none focus-visible:text-aurum-champagne"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-8 px-8">
              {!onCaseStudy &&
                t.nav.links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: EASE }}
                  >
                    <NavLink label={l.label} href={l.href} onClick={() => setOpen(false)} large />
                  </motion.div>
                ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + (onCaseStudy ? 0 : t.nav.links.length) * 0.06, ease: EASE }}
              >
                <NavLink label={t.nav.caseStudyLink} href="/case-study" onClick={() => setOpen(false)} large />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 + (onCaseStudy ? 0 : t.nav.links.length) * 0.06, ease: EASE }}
                className="flex items-center gap-6 pt-2"
              >
                <LanguageSwitch />
                <Button size="sm" onClick={() => setOpen(false)}>
                  {t.nav.cta}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
