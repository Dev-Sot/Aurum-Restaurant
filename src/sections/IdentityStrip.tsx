import { useTranslation } from '@/i18n/LanguageContext'
import { Eyebrow } from '@/components/Eyebrow'
import { Heading } from '@/components/Heading'

export function IdentityStrip() {
  const { t } = useTranslation()

  return (
    <div className="grid grid-cols-3 gap-y-8 border-y border-aurum-border bg-aurum-black-2 px-6 py-10 sm:grid-cols-6 sm:gap-y-0 md:px-12 md:py-11 lg:px-20">
      {t.identityStrip.map((item) => (
        <div key={item.l} className="flex flex-col items-center gap-[10px]">
          <Heading weight="semibold" className="text-[20px] text-aurum-ivory sm:text-[26px]">{item.n}</Heading>
          <Eyebrow className="text-center text-[7px] tracking-[0.22em] text-aurum-gray sm:text-[8px] sm:tracking-[0.28em]">{item.l}</Eyebrow>
        </div>
      ))}
    </div>
  )
}
