import { Fragment } from 'react'
import { sectionPaddingLoose } from '@/constants/layout'
import { useTranslation } from '@/i18n/LanguageContext'
import { Body } from '@/components/Body'
import { Divider } from '@/components/Divider'
import { Eyebrow } from '@/components/Eyebrow'
import { Heading } from '@/components/Heading'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { useSectionInView } from '@/hooks/useSectionInView'

export function Manifesto({ id }: { id?: string }) {
  const { ref, inView } = useSectionInView()
  const { t } = useTranslation()

  return (
    <Section id={id} className={sectionPaddingLoose}>
      <div ref={ref} className="grid grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-[1fr_42%] lg:gap-24">
        <Reveal visible={inView}>
          <Eyebrow className="mb-8 block text-[9px] text-aurum-champagne lg:mb-13">{t.manifesto.eyebrow}</Eyebrow>
          <Heading
            as="blockquote"
            italic
            className="mb-8 border-l-2 border-aurum-champagne pl-5 text-[clamp(26px,6vw,48px)] leading-[1.3] text-aurum-ivory md:pl-6 lg:mb-13 lg:pl-8 lg:text-[clamp(28px,3.2vw,48px)]"
          >
            {t.manifesto.quoteLines.map((line, i) => (
              <Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </Heading>
          <Divider width={40} className="mb-6 lg:mb-9" />
          <Body className="max-w-[440px] text-[14px] leading-[1.95]">{t.manifesto.body}</Body>
        </Reveal>

        <Reveal visible={inView} delay={0.22}>
          <div className="relative h-[340px] overflow-hidden bg-[#2A2520] sm:h-[420px] lg:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=780&h=960&fit=crop&auto=format"
              alt={t.manifesto.imageAlt}
              className="h-full w-full object-cover opacity-80 [filter:saturate(0.7)]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,#0C0A0855_0%,transparent_50%)]" />
            <div className="absolute -top-[14px] -right-[14px] h-[72px] w-[72px] border border-aurum-bronze opacity-[0.45]" />
          </div>
          <div className="mt-5 flex items-end justify-between">
            <Heading as="span" italic className="text-[12px] text-aurum-gray">{t.manifesto.imageCaption}</Heading>
            <Eyebrow className="text-[9px] tracking-[0.22em]">{t.manifesto.imageMeta}</Eyebrow>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
