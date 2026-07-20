import { useTranslation } from '@/i18n/LanguageContext'
import { cn } from '@/lib/cn'

const LANGS = ['es', 'en'] as const

export function LanguageSwitch({ className }: { className?: string }) {
  const { language, setLanguage } = useTranslation()

  return (
    <div className={cn('flex items-center gap-2 font-sans text-[10px] tracking-[0.14em] uppercase', className)}>
      {LANGS.map((lang, i) => (
        <span key={lang} className="flex items-center gap-2">
          {i > 0 && <span className="text-aurum-gray-mid select-none">/</span>}
          <button
            type="button"
            onClick={() => setLanguage(lang)}
            aria-current={language === lang}
            aria-label={lang === 'es' ? 'Cambiar idioma a español' : 'Switch language to English'}
            className={cn(
              'outline-none transition-colors duration-300 ease-[ease] focus-visible:text-aurum-champagne',
              language === lang ? 'text-aurum-champagne' : 'text-aurum-gray hover:text-aurum-ivory',
            )}
          >
            {lang.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  )
}
