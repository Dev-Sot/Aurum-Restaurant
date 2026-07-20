import type { CourseItem } from '@/types/content'
import { sectionPadding } from '@/constants/layout'
import { useTranslation } from '@/i18n/LanguageContext'
import { cn } from '@/lib/cn'
import { Body } from '@/components/Body'
import { Eyebrow } from '@/components/Eyebrow'
import { Heading } from '@/components/Heading'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { useSectionInView } from '@/hooks/useSectionInView'

function CourseRow({ n, name, desc, index, visible }: CourseItem & { index: number; visible: boolean }) {
  const isInterlude = n === '—'

  return (
    <Reveal
      visible={visible}
      delay={Math.min(index * 0.055, 0.65)}
      className={cn(
        'group border-b border-aurum-border-2 lg:grid lg:grid-cols-[52px_1fr_1fr] lg:gap-8',
        isInterlude ? 'py-6 lg:py-8' : 'py-4 lg:py-[22px]',
      )}
    >
      <div className="flex items-baseline gap-3 lg:contents">
        <Heading
          as="span"
          italic
          className={cn(
            'text-[11px] transition-colors duration-300 ease-[ease] group-hover:text-aurum-champagne lg:pt-[3px] lg:text-[12px]',
            isInterlude ? 'text-aurum-champagne/70' : 'text-aurum-gray',
          )}
        >
          {n}
        </Heading>
        <span
          className={cn(
            'font-serif tracking-[-0.01em] transition-colors duration-[400ms] ease-[ease] group-hover:text-aurum-champagne',
            isInterlude ? 'text-[15px] font-normal text-aurum-champagne/85 italic lg:text-[16px]' : 'text-[16px] font-normal text-aurum-ivory lg:text-[18px]',
          )}
        >
          {name}
        </span>
      </div>
      <Body className="mt-1 pl-[30px] text-[11px] leading-[1.6] lg:mt-0 lg:pt-[3px] lg:pl-0 lg:text-[12px] lg:leading-[1.7]">{desc}</Body>
    </Reveal>
  )
}

export function Menu({ id }: { id?: string }) {
  const { ref, inView } = useSectionInView(0.04)
  const { t } = useTranslation()

  return (
    <Section id={id} bg="black-2" className={sectionPadding}>
      <div ref={ref}>
        <Reveal visible={inView} className="mb-14 grid grid-cols-1 gap-10 border-b border-aurum-border pb-10 lg:mb-24 lg:grid-cols-2 lg:gap-20 lg:pb-16">
          <div>
            <Eyebrow className="mb-4 block text-[9px] text-aurum-champagne lg:mb-6">{t.menu.eyebrow}</Eyebrow>
            <Heading className="text-[clamp(36px,9vw,70px)] leading-[1.02] text-aurum-ivory lg:text-[clamp(40px,5vw,70px)]">
              {t.menu.headingLine1}
              <br />
              <span className="italic">{t.menu.headingLine2Italic}</span>
            </Heading>
          </div>
          <div className="flex flex-col justify-end">
            <Body className="mb-6 max-w-[380px] text-[14px] leading-[1.95] lg:mb-8">{t.menu.body}</Body>
            <div className="flex gap-8 sm:gap-14">
              {t.menu.pricing.map((p) => (
                <div key={p.l}>
                  <Heading weight="semibold" className="mb-[6px] block text-[26px] text-aurum-ivory lg:text-[30px]">{p.v}</Heading>
                  <Eyebrow className="text-[9px] tracking-[0.2em] text-aurum-gray">{p.l}</Eyebrow>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {t.menu.courses.map((c, i) => (
          <CourseRow key={`${c.n}-${c.name}`} {...c} index={i} visible={inView} />
        ))}
      </div>
    </Section>
  )
}
