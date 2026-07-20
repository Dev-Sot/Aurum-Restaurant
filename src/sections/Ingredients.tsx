import type { IngredientItem } from '@/types/content'
import { sectionPadding } from '@/constants/layout'
import { useTranslation } from '@/i18n/LanguageContext'
import { Body } from '@/components/Body'
import { Eyebrow } from '@/components/Eyebrow'
import { Heading } from '@/components/Heading'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { useSectionInView } from '@/hooks/useSectionInView'

function IngredientRow({
  name,
  desc,
  origin,
  season,
  img,
  index,
  visible,
  originLabel,
  seasonFieldLabel,
}: IngredientItem & { index: number; visible: boolean; originLabel: string; seasonFieldLabel: string }) {
  return (
    <Reveal
      visible={visible}
      delay={index * 0.18}
      className="group grid grid-cols-1 items-start gap-6 border-t border-aurum-border py-10 lg:grid-cols-[1fr_38%_200px] lg:items-center lg:gap-0 lg:py-18"
    >
      <div className="lg:pr-15">
        <Heading as="span" italic className="mb-3 block text-[11px] tracking-[0.08em] text-aurum-champagne lg:mb-5">
          0{index + 1}
        </Heading>
        <Heading className="mb-3 text-[clamp(22px,6vw,34px)] leading-[1.15] tracking-[-0.01em] text-aurum-ivory lg:mb-5 lg:text-[clamp(22px,2.4vw,34px)]">{name}</Heading>
        <Body className="max-w-[360px] text-[13px] leading-[1.88]">{desc}</Body>
      </div>

      <div className="relative h-[240px] overflow-hidden bg-[#252018] sm:h-[320px] lg:h-[380px]">
        <img
          src={`https://images.unsplash.com/${img}?w=640&h=520&fit=crop&auto=format`}
          alt={name}
          className="h-full w-full object-cover opacity-65 [filter:saturate(0.72)] [transition:opacity_0.65s_ease,transform_0.85s_cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-hover:opacity-[0.82]"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 lg:flex lg:flex-col lg:gap-9 lg:pl-14">
        <div>
          <Eyebrow className="mb-[10px] block text-[8px] text-aurum-gray">{originLabel}</Eyebrow>
          <Heading as="span" italic className="text-[15px] tracking-[-0.005em] text-aurum-ivory lg:text-[16px]">{origin}</Heading>
        </div>
        <div>
          <Eyebrow className="mb-[10px] block text-[8px] text-aurum-gray">{seasonFieldLabel}</Eyebrow>
          <Heading as="span" italic className="text-[15px] tracking-[-0.005em] text-aurum-ivory lg:text-[16px]">{season}</Heading>
        </div>
      </div>
    </Reveal>
  )
}

export function Ingredients() {
  const { ref, inView } = useSectionInView(0.05)
  const { t } = useTranslation()

  return (
    <Section bg="black-2" className={sectionPadding}>
      <div ref={ref}>
        <div className="mb-14 lg:mb-24">
          <div className="mb-4 flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between lg:mb-5">
            <Reveal as="span" visible={inView} className="block text-[9px] uppercase font-sans leading-none tracking-[0.32em] text-aurum-champagne">
              {t.ingredients.label}
            </Reveal>
            <Reveal as="span" visible={inView} delay={0.08} className="text-[10px] uppercase font-sans leading-none tracking-[0.18em] text-aurum-gray">
              {t.ingredients.seasonLabel}
            </Reveal>
          </div>
          <Reveal visible={inView} delay={0.14}>
            <Heading className="text-[clamp(38px,10vw,82px)] leading-[1.02] text-aurum-ivory lg:text-[clamp(44px,5.5vw,82px)]">
              {t.ingredients.headingLine1}
              <br />
              <span className="italic">{t.ingredients.headingLine2Italic}</span>
            </Heading>
          </Reveal>
        </div>
        {t.ingredients.items.map((ing, i) => (
          <IngredientRow
            key={ing.name}
            {...ing}
            index={i}
            visible={inView}
            originLabel={t.ingredients.originLabel}
            seasonFieldLabel={t.ingredients.seasonFieldLabel}
          />
        ))}
      </div>
    </Section>
  )
}
