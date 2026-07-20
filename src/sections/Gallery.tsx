import { useState } from 'react'
import type { GalleryItem } from '@/types/content'
import { sectionPadding } from '@/constants/layout'
import { useFinePointer } from '@/hooks/useFinePointer'
import { useTranslation } from '@/i18n/LanguageContext'
import { Eyebrow } from '@/components/Eyebrow'
import { GalleryCursor } from '@/components/GalleryCursor'
import { Heading } from '@/components/Heading'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { cn } from '@/lib/cn'
import { useSectionInView } from '@/hooks/useSectionInView'

function GalleryImg({
  id,
  caption,
  delay,
  visible,
  className,
  onHoverStart,
  onHoverEnd,
}: GalleryItem & { delay: number; visible: boolean; className?: string; onHoverStart: () => void; onHoverEnd: () => void }) {
  return (
    <Reveal
      visible={visible}
      delay={delay}
      className={cn('group relative overflow-hidden bg-[#202018] [@media(hover:hover)_and_(pointer:fine)]:cursor-none', className)}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <img
        src={`https://images.unsplash.com/${id}?w=900&h=700&fit=crop&auto=format`}
        alt={caption}
        className="h-full w-full object-cover opacity-70 [filter:saturate(0.72)] [transition:opacity_0.65s_ease,transform_0.9s_cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] group-hover:opacity-[0.88]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#0C0A0888_0%,transparent_55%)] transition-opacity duration-500 ease-[ease] lg:opacity-0 lg:group-hover:opacity-100" />
      <Heading
        as="span"
        italic
        className="absolute bottom-4 left-4 text-[13px] tracking-[-0.005em] text-aurum-ivory [transition:transform_0.5s_cubic-bezier(0.16,1,0.3,1),opacity_0.4s_ease] sm:bottom-5 sm:left-6 sm:text-[14px] lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
      >
        {caption}
      </Heading>
    </Reveal>
  )
}

export function Gallery({ id }: { id?: string }) {
  const { ref, inView } = useSectionInView(0.04)
  const { t } = useTranslation()
  const items = t.gallery.items
  const finePointer = useFinePointer()
  const [hovering, setHovering] = useState(false)

  return (
    <Section id={id} bg="black-2" className={sectionPadding}>
      {finePointer && <GalleryCursor active={hovering} label={t.gallery.viewLabel} />}
      <div ref={ref}>
        <Reveal visible={inView} className="mb-10 flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between lg:mb-16">
          <Heading className="text-[clamp(36px,9vw,70px)] leading-none text-aurum-ivory lg:text-[clamp(40px,5vw,70px)]">
            {t.gallery.headingPrefix} <span className="italic">{t.gallery.headingItalic}</span>
          </Heading>
          <Eyebrow className="text-[10px] tracking-[0.2em] text-aurum-gray">{t.gallery.seasonLabel}</Eyebrow>
        </Reveal>

        <div className="mb-2 grid grid-cols-1 gap-2 lg:mb-1 lg:grid-cols-[3fr_2fr] lg:gap-1">
          <GalleryImg {...items[0]} delay={0.1} visible={inView} className="h-[300px] sm:h-[420px] lg:h-[640px]" onHoverStart={() => setHovering(true)} onHoverEnd={() => setHovering(false)} />
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 lg:gap-1">
            <GalleryImg {...items[1]} delay={0.2} visible={inView} className="h-[220px] lg:h-[316px]" onHoverStart={() => setHovering(true)} onHoverEnd={() => setHovering(false)} />
            <GalleryImg {...items[2]} delay={0.3} visible={inView} className="h-[220px] lg:h-[316px]" onHoverStart={() => setHovering(true)} onHoverEnd={() => setHovering(false)} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-[2fr_3fr] lg:gap-1">
          <GalleryImg {...items[3]} delay={0.36} visible={inView} className="h-[240px] lg:h-[420px]" onHoverStart={() => setHovering(true)} onHoverEnd={() => setHovering(false)} />
          <GalleryImg {...items[4]} delay={0.44} visible={inView} className="h-[240px] lg:h-[420px]" onHoverStart={() => setHovering(true)} onHoverEnd={() => setHovering(false)} />
        </div>
      </div>
    </Section>
  )
}
