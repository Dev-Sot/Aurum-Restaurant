import type { ExperienceItem } from '@/types/content'
import { sectionPadding } from '@/constants/layout'
import { useTranslation } from '@/i18n/LanguageContext'
import { Body } from '@/components/Body'
import { Eyebrow } from '@/components/Eyebrow'
import { Heading } from '@/components/Heading'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { useSectionInView } from '@/hooks/useSectionInView'

function ExperienceCard({ n, title, desc, img, delay, visible }: ExperienceItem & { delay: number; visible: boolean }) {
  return (
    <Reveal visible={visible} delay={delay} className="group">
      <div className="relative h-[320px] overflow-hidden bg-[#252018] sm:h-[400px] lg:h-[480px]">
        <img
          src={`https://images.unsplash.com/${img}?w=620&h=680&fit=crop&auto=format`}
          alt={title}
          className="h-full w-full object-cover opacity-60 [filter:saturate(0.75)] [transition:opacity_0.65s_ease,transform_0.85s_cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-[0.78]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#0C0A08AA_0%,transparent_55%)]" />
        <Heading as="span" italic className="absolute top-6 left-6 text-[12px] tracking-[0.1em] text-aurum-champagne">
          {n}
        </Heading>
      </div>
      <div className="px-0 pt-6 pb-10 lg:pt-8 lg:pb-12">
        <Heading className="mb-[14px] text-[24px] leading-[1.1] tracking-[-0.01em] text-aurum-ivory lg:mb-[18px] lg:text-[28px]">{title}</Heading>
        <Body className="text-[13px] leading-[1.88]">{desc}</Body>
      </div>
    </Reveal>
  )
}

export function Experience() {
  const { ref, inView } = useSectionInView(0.06)
  const { t } = useTranslation()

  return (
    <Section className={sectionPadding}>
      <div ref={ref}>
        <Reveal
          visible={inView}
          className="mb-10 flex flex-col items-start gap-3 border-b border-aurum-border pb-8 sm:flex-row sm:items-end sm:justify-between lg:mb-20 lg:pb-12"
        >
          <Heading className="text-[clamp(36px,9vw,72px)] leading-none text-aurum-ivory lg:text-[clamp(40px,5vw,72px)]">{t.experience.heading}</Heading>
          <Eyebrow className="text-[10px] tracking-[0.2em] text-aurum-gray">{t.experience.label}</Eyebrow>
        </Reveal>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-[3px] lg:grid-cols-3">
          {t.experience.items.map((e, i) => (
            <ExperienceCard key={e.title} {...e} delay={i * 0.14} visible={inView} />
          ))}
        </div>
      </div>
    </Section>
  )
}
