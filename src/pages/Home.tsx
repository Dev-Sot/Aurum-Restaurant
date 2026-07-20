import { useTranslation } from '@/i18n/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Awards } from '@/sections/Awards'
import { Chef } from '@/sections/Chef'
import { Experience } from '@/sections/Experience'
import { Gallery } from '@/sections/Gallery'
import { Hero } from '@/sections/Hero'
import { IdentityStrip } from '@/sections/IdentityStrip'
import { Ingredients } from '@/sections/Ingredients'
import { Manifesto } from '@/sections/Manifesto'
import { Menu } from '@/sections/Menu'
import { Reservation } from '@/sections/Reservation'
import { Testimonials } from '@/sections/Testimonials'

export function Home() {
  const { t } = useTranslation()
  usePageMeta(t.meta.title, t.meta.description)

  return (
    <>
      <Hero />
      <Manifesto id="historia" />
      <IdentityStrip />
      <Experience />
      <Ingredients />
      <Chef id="chef" />
      <Menu id="menu" />
      <Awards />
      <Gallery id="galeria" />
      <Testimonials />
      <Reservation id="contacto" />
    </>
  )
}
