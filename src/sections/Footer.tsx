import { useTranslation } from '@/i18n/LanguageContext'
import { Body } from '@/components/Body'
import { Eyebrow } from '@/components/Eyebrow'
import { Heading } from '@/components/Heading'

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <Eyebrow className="mb-5 block text-[8px] text-aurum-gray lg:mb-[26px]">{title}</Eyebrow>
      <div className="flex flex-col gap-3 lg:gap-[14px]">
        {links.map((l) => (
          <a
            key={l}
            href="#"
            className="font-sans text-[13px] font-light text-aurum-gray no-underline outline-none transition-colors duration-300 ease-[ease] hover:text-aurum-ivory focus-visible:text-aurum-ivory"
          >
            {l}
          </a>
        ))}
      </div>
    </div>
  )
}

export function Footer() {
  const { t } = useTranslation()
  const { credit } = t.footer

  return (
    <footer className="border-t border-aurum-border bg-aurum-black-3 px-6 pt-16 pb-8 md:px-12 lg:px-20 lg:pt-22 lg:pb-13">
      <div className="mb-12 grid grid-cols-1 gap-10 border-b border-aurum-border pb-10 sm:grid-cols-2 lg:mb-20 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-20 lg:pb-16">
        <div>
          <div className="mb-8">
            <Heading className="mb-[6px] text-[24px] leading-none tracking-[0.16em] text-aurum-ivory lg:text-[26px] lg:tracking-[0.18em]">AURUM</Heading>
            <Eyebrow className="text-[9px] tracking-[0.26em] text-aurum-gray">{t.footer.tagline}</Eyebrow>
          </div>
          <Body className="max-w-[260px] text-[13px] leading-[1.9]">
            {t.footer.address[0]}
            <br />
            {t.footer.address[1]}
            <br />
            {t.footer.address[2]}
          </Body>
        </div>
        <FooterCol title={t.footer.restaurantTitle} links={t.footer.restaurantLinks} />
        <FooterCol title={t.footer.reservationsTitle} links={t.footer.reservationLinks} />
        <div>
          <Eyebrow className="mb-5 block text-[8px] text-aurum-gray lg:mb-[26px]">{t.footer.contactTitle}</Eyebrow>
          {t.footer.contact.map((c) => (
            <div key={c.l} className="mb-5">
              <Eyebrow className="mb-[5px] block text-[8px] text-aurum-gray">{c.l}</Eyebrow>
              <span className="font-sans text-[13px] font-light text-aurum-ivory">{c.v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-sans text-[11px] font-light tracking-[0.08em] text-aurum-gray-mid">{t.footer.copyright}</span>
        <div className="flex gap-6 sm:gap-9">
          {t.footer.social.map((s) => (
            <a
              key={s}
              href="#"
              className="text-[10px] uppercase font-sans leading-none tracking-[0.16em] text-aurum-gray no-underline outline-none transition-colors duration-300 ease-[ease] hover:text-aurum-ivory focus-visible:text-aurum-ivory"
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-aurum-border-2 pt-6 font-sans text-[10px] tracking-[0.04em] text-aurum-gray-mid sm:flex-row sm:items-center sm:justify-between">
        <span>
          {credit.label} — {credit.designedBy}{' '}
          <a
            href="https://github.com/Dev-Sot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-aurum-gray underline-offset-2 outline-none transition-colors duration-300 ease-[ease] hover:text-aurum-ivory hover:underline focus-visible:text-aurum-ivory"
          >
            {credit.devName}
          </a>
          {' · '}
          {credit.brandLabel}: <span className="text-aurum-gray">{credit.brandName}</span>
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Dev-Sot"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-none transition-colors duration-300 ease-[ease] hover:text-aurum-ivory focus-visible:text-aurum-ivory"
          >
            GitHub
          </a>
          <span className="cursor-default opacity-50" aria-disabled="true">
            {credit.linkedin}
          </span>
        </div>
      </div>
    </footer>
  )
}
