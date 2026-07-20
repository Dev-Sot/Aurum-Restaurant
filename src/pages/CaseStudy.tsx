import { sectionPadding } from '@/constants/layout'
import { useTranslation } from '@/i18n/LanguageContext'
import { usePageMeta } from '@/hooks/usePageMeta'
import { Link } from '@/router/Link'
import { Body } from '@/components/Body'
import { Eyebrow } from '@/components/Eyebrow'
import { Heading } from '@/components/Heading'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { useSectionInView } from '@/hooks/useSectionInView'

function CaseStudySection({ index, heading, body, visible }: { index: number; heading: string; body: string[]; visible: boolean }) {
  return (
    <Reveal
      visible={visible}
      delay={Math.min(index * 0.06, 0.4)}
      className="grid grid-cols-1 gap-4 border-t border-aurum-border py-10 lg:grid-cols-[200px_1fr] lg:gap-16 lg:py-14"
    >
      <div className="flex items-baseline gap-4 lg:block">
        <Heading as="span" italic className="text-[13px] tracking-[0.05em] text-aurum-champagne">
          {String(index + 1).padStart(2, '0')}
        </Heading>
        <Heading className="text-[22px] leading-[1.15] text-aurum-ivory lg:mt-2 lg:text-[26px]">{heading}</Heading>
      </div>
      <div className="flex max-w-[640px] flex-col gap-4">
        {body.map((p, i) => (
          <Body key={i} className="text-[14px] leading-[1.9]">
            {p}
          </Body>
        ))}
      </div>
    </Reveal>
  )
}

export function CaseStudy() {
  const { t } = useTranslation()
  const { ref, inView } = useSectionInView(0.02)
  usePageMeta(t.caseStudy.metaTitle)

  return (
    <Section className={sectionPadding}>
      <div ref={ref}>
        <Reveal visible={inView} className="mb-14 max-w-[720px] lg:mb-24">
          <Eyebrow className="mb-6 block text-[9px] text-aurum-champagne lg:mb-8">{t.caseStudy.eyebrow}</Eyebrow>
          <Heading className="mb-6 text-[clamp(38px,9vw,64px)] leading-[1.05] text-aurum-ivory lg:mb-8 lg:text-[clamp(44px,5vw,64px)]">
            {t.caseStudy.title}
          </Heading>
          <Body className="text-[16px] leading-[1.9] lg:text-[18px]">{t.caseStudy.subtitle}</Body>
        </Reveal>

        <div>
          {t.caseStudy.sections.map((s, i) => (
            <CaseStudySection key={s.heading} index={i} heading={s.heading} body={s.body} visible={inView} />
          ))}
        </div>

        <Reveal visible={inView} delay={0.3} className="mt-14 border-t border-aurum-border pt-10 lg:mt-20 lg:pt-14">
          <Eyebrow className="mb-8 block text-[9px] text-aurum-champagne lg:mb-10">{t.caseStudy.factsHeading}</Eyebrow>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {t.caseStudy.facts.map((f) => (
              <div key={f.label}>
                <Eyebrow className="mb-2 block text-[8px] text-aurum-gray">{f.label}</Eyebrow>
                <Heading as="span" italic className="text-[15px] leading-[1.3] text-aurum-ivory">
                  {f.value}
                </Heading>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal visible={inView} delay={0.36} className="mt-16 lg:mt-24">
          <Link
            to="/"
            className="group relative inline-block pb-1 font-sans text-[11px] font-medium tracking-[0.2em] text-aurum-champagne uppercase no-underline outline-none focus-visible:text-aurum-ivory"
          >
            {t.nav.backHome}
            <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-100 bg-aurum-champagne transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-0" />
          </Link>
        </Reveal>
      </div>
    </Section>
  )
}
