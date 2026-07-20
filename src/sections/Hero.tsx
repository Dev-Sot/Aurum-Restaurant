import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslation } from '@/i18n/LanguageContext'
import { Body } from '@/components/Body'
import { Button } from '@/components/Button'
import { Eyebrow } from '@/components/Eyebrow'
import { Heading } from '@/components/Heading'
import { Magnetic } from '@/components/Magnetic'
import { Section } from '@/components/Section'

export function Hero() {
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, (v) => v * 0.38)
  const { t } = useTranslation()

  return (
    <Section className="relative h-screen min-h-[560px] overflow-hidden sm:min-h-[680px]">
      <motion.div
        className="absolute inset-x-0 -top-[8%] -bottom-[8%] bg-cover opacity-[0.52]"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1280&fit=crop&auto=format&q=85)",
          backgroundPosition: 'center 30%',
          y: parallaxY,
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0C0A0855_0%,transparent_35%,#0C0A08CC_78%,#0C0A08_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,#0C0A0870_0%,transparent_55%)]" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-10 lg:px-20 lg:pb-[88px]">
        <div className="mb-6 flex items-center gap-3 lg:mb-11 lg:gap-[18px]">
          <div className="h-px w-9 bg-aurum-champagne" />
          <Eyebrow className="text-[8px] tracking-[0.24em] text-aurum-champagne sm:text-[9px] lg:tracking-[0.30em]">
            {t.hero.eyebrow}
          </Eyebrow>
        </div>

        <Heading as="h1" className="mb-[4px] text-[clamp(46px,16vw,172px)] leading-[0.92] tracking-[-0.02em] text-aurum-ivory lg:mb-[6px] lg:leading-[0.9] lg:tracking-[-0.03em] lg:text-[clamp(64px,11.5vw,172px)]">
          {t.hero.titleLine1}
        </Heading>
        <Heading as="h1" italic className="mb-[4px] text-[clamp(46px,16vw,172px)] leading-[0.92] tracking-[-0.02em] text-aurum-ivory lg:mb-[6px] lg:leading-[0.9] lg:tracking-[-0.03em] lg:text-[clamp(64px,11.5vw,172px)]">
          {t.hero.titleLine2Italic}
        </Heading>
        <Heading as="h1" className="mb-8 text-[clamp(46px,16vw,172px)] leading-[0.92] tracking-[-0.02em] text-aurum-ivory lg:mb-14 lg:leading-[0.9] lg:tracking-[-0.03em] lg:text-[clamp(64px,11.5vw,172px)]">
          {t.hero.titleLine3}
        </Heading>

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center lg:gap-14">
          <Body className="m-0 max-w-[340px] text-[11px] leading-[1.8] tracking-[0.1em] uppercase sm:text-[12px] lg:tracking-[0.12em]">
            {t.hero.subtitle}
          </Body>
          <Magnetic strength={0.2}>
            <Button variant="solid" size="lg">
              {t.hero.cta}
            </Button>
          </Magnetic>
        </div>
      </div>

      <div className="absolute right-6 bottom-16 z-10 hidden flex-col items-center gap-[14px] sm:flex lg:right-20 lg:bottom-[88px]">
        <Eyebrow className="text-[8px] tracking-[0.28em] [writing-mode:vertical-rl]">{t.hero.scroll}</Eyebrow>
        <div className="relative h-16 w-px overflow-hidden bg-aurum-border">
          <div className="absolute inset-x-0 top-0 h-[45%] animate-[scrollLine_2.2s_ease-in-out_infinite] bg-aurum-champagne" />
        </div>
      </div>

      <div className="absolute top-20 right-6 z-10 md:top-24 lg:right-20">
        <Heading as="span" italic className="text-[11px] tracking-[0.08em] text-aurum-gray sm:text-[12px]">
          {t.hero.est}
        </Heading>
      </div>
    </Section>
  )
}
