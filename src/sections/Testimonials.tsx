import { useState } from 'react'
import { sectionPadding } from '@/constants/layout'
import { useTranslation } from '@/i18n/LanguageContext'
import { Eyebrow } from '@/components/Eyebrow'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { cn } from '@/lib/cn'
import { useSectionInView } from '@/hooks/useSectionInView'

export function Testimonials() {
  const { ref, inView } = useSectionInView()
  const [active, setActive] = useState(0)
  const { t } = useTranslation()
  const quotes = t.testimonials.quotes
  const quote = quotes[active]

  return (
    <Section bg="black-3" className={cn('flex min-h-[68vh] flex-col justify-center', sectionPadding)}>
      <div ref={ref} className="mx-auto w-full max-w-[880px] text-center">
        <Reveal as="span" visible={inView} className="mb-10 block text-[8px] uppercase font-sans leading-none tracking-[0.24em] text-aurum-champagne sm:text-[9px] sm:tracking-[0.3em] lg:mb-16">
          {t.testimonials.label}
        </Reveal>
        <Reveal
          as="blockquote"
          visible={inView}
          delay={0.1}
          className="m-0 mb-8 font-serif text-[clamp(19px,5.5vw,36px)] leading-[1.4] italic text-aurum-ivory lg:mb-13 lg:leading-[1.48] lg:text-[clamp(20px,2.8vw,36px)]"
        >
          "{quote.q}"
        </Reveal>
        <Reveal visible={inView} delay={0.2} className="mb-10 flex flex-col items-center gap-[6px] lg:mb-16">
          <span className="font-sans text-[13px] font-normal tracking-[0.08em] text-aurum-ivory">{quote.author}</span>
          <Eyebrow className="text-[10px] tracking-[0.18em] text-aurum-gray">{quote.pub}</Eyebrow>
        </Reveal>
        <Reveal visible={inView} delay={0.28} className="flex justify-center gap-3">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`${t.testimonials.dotLabel} ${i + 1}`}
              aria-current={i === active}
              className={cn(
                'h-[7px] cursor-pointer rounded border-none p-0 outline-none [transition:width_0.45s_cubic-bezier(0.16,1,0.3,1),background-color_0.3s_ease] focus-visible:ring-2 focus-visible:ring-aurum-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-aurum-black-3',
                i === active ? 'w-7 bg-aurum-champagne' : 'w-[7px] bg-aurum-gray-mid',
              )}
            />
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
