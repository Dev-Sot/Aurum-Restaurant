import { sectionPaddingTight } from '@/constants/layout'
import { useTranslation } from '@/i18n/LanguageContext'
import { Eyebrow } from '@/components/Eyebrow'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { cn } from '@/lib/cn'
import { useSectionInView } from '@/hooks/useSectionInView'

export function Awards() {
  const { ref, inView } = useSectionInView()
  const { t } = useTranslation()

  return (
    <Section className={cn(sectionPaddingTight, 'text-center')}>
      <div ref={ref}>
        <Reveal visible={inView} className="mb-5 flex justify-center gap-2 sm:gap-3 lg:mb-7">
          {['★', '★', '★'].map((s, i) => (
            <span key={i} className="font-serif text-[28px] tracking-[4px] text-aurum-champagne sm:text-[36px] sm:tracking-[6px]">
              {s}
            </span>
          ))}
        </Reveal>
        <Reveal
          as="span"
          visible={inView}
          delay={0.1}
          className="mb-12 block text-[8px] uppercase font-sans leading-none tracking-[0.24em] text-aurum-gray sm:text-[9px] sm:tracking-[0.3em] lg:mb-22"
        >
          {t.awards.michelinLabel}
        </Reveal>
        <Reveal visible={inView} delay={0.2} className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-aurum-border pt-10 sm:gap-x-14 lg:pt-16">
          {t.awards.press.map((a) => (
            <Eyebrow key={a} className="text-[9px] tracking-[0.12em] text-aurum-gray sm:text-[10px] sm:tracking-[0.14em]">
              {a}
            </Eyebrow>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
