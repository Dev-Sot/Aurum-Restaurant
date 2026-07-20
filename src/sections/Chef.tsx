import { motion } from 'framer-motion'
import { Fragment } from 'react'
import { useTranslation } from '@/i18n/LanguageContext'
import { Body } from '@/components/Body'
import { Divider } from '@/components/Divider'
import { Eyebrow } from '@/components/Eyebrow'
import { Heading } from '@/components/Heading'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { useSectionInView } from '@/hooks/useSectionInView'

const EASE = [0.16, 1, 0.3, 1] as const

export function Chef({ id }: { id?: string }) {
  const { ref, inView } = useSectionInView()
  const { t } = useTranslation()

  return (
    <Section id={id} className="grid min-h-0 grid-cols-1 lg:min-h-[92vh] lg:grid-cols-[44%_56%]">
      <div ref={ref} className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-[120px]">
        <Reveal visible={inView}>
          <Eyebrow className="mb-8 block text-[9px] text-aurum-champagne lg:mb-13">{t.chef.eyebrow}</Eyebrow>
          <Heading className="mb-[6px] text-[clamp(34px,9vw,58px)] leading-[1.1] text-aurum-ivory lg:text-[clamp(36px,3.8vw,58px)]">{t.chef.firstName}</Heading>
          <Heading italic className="mb-8 text-[clamp(34px,9vw,58px)] leading-[1.1] text-aurum-ivory lg:mb-13 lg:text-[clamp(36px,3.8vw,58px)]">{t.chef.lastName}</Heading>
          <Divider width={40} className="mb-6 lg:mb-10" />
          <Body className="mb-5 max-w-[390px] text-[14px] leading-[1.95] lg:mb-7">{t.chef.bio[0]}</Body>
          <Body className="mb-8 max-w-[390px] text-[14px] leading-[1.95] lg:mb-14">{t.chef.bio[1]}</Body>
          <div className="flex gap-6 border-t border-aurum-border pt-6 sm:gap-11 lg:pt-9">
            {t.chef.stats.map((s) => (
              <div key={s.l}>
                <Heading weight="semibold" className="mb-[6px] block text-[20px] text-aurum-ivory sm:text-[22px]">{s.n}</Heading>
                <Eyebrow className="text-[8px] tracking-[0.14em] text-aurum-gray sm:text-[9px] sm:tracking-[0.18em]">{s.l}</Eyebrow>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px] lg:min-h-[700px]">
        <motion.img
          src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&h=1100&fit=crop&auto=format"
          alt={t.chef.imageAlt}
          className="h-full w-full object-cover object-top opacity-[0.82] [filter:saturate(0.5)_contrast(1.08)]"
          initial={{ y: 30 }}
          animate={{ y: inView ? 0 : 30 }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0C0A0845_0%,transparent_30%)]" />
        <div className="absolute right-6 bottom-6 left-6 sm:right-14 sm:bottom-14 sm:left-11">
          <Heading as="blockquote" italic className="m-0 border-l-2 border-aurum-champagne pl-4 text-[15px] leading-[1.5] text-aurum-ivory sm:pl-6 sm:text-[18px] sm:leading-[1.55]">
            {t.chef.quoteLines.map((line, i) => (
              <Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </Heading>
        </div>
      </div>
    </Section>
  )
}
