import { useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { sectionPaddingLoose } from '@/constants/layout'
import { useTranslation } from '@/i18n/LanguageContext'
import { Body } from '@/components/Body'
import { Button } from '@/components/Button'
import { Eyebrow } from '@/components/Eyebrow'
import { Heading } from '@/components/Heading'
import { Magnetic } from '@/components/Magnetic'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { cn } from '@/lib/cn'
import { useSectionInView } from '@/hooks/useSectionInView'

const EASE = [0.16, 1, 0.3, 1] as const

const inputBase =
  'w-full border-0 border-b border-b-[rgba(240,234,224,0.18)] bg-transparent px-0 py-3 font-sans text-[14px] font-light tracking-[0.04em] text-aurum-ivory outline-none transition-colors duration-300 ease-[ease] focus:border-b-aurum-champagne'

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="mb-[10px] block text-[8px] uppercase font-sans leading-none tracking-[0.32em] text-aurum-gray">{label}</label>
      {children}
    </div>
  )
}

const covers = [2, 3, 4, 5, 6, 7, 8]

export function Reservation({ id }: { id?: string }) {
  const { ref, inView } = useSectionInView()
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', date: '', covers: '2', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <Section id={id} className={sectionPaddingLoose}>
      <div ref={ref} className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-32">
        <Reveal visible={inView}>
          <Eyebrow className="mb-8 block text-[9px] text-aurum-champagne lg:mb-13">{t.reservation.eyebrow}</Eyebrow>
          <Heading className="mb-8 text-[clamp(38px,9vw,66px)] leading-[1.06] text-aurum-ivory lg:mb-13 lg:text-[clamp(40px,4.8vw,66px)]">
            {t.reservation.headingLine1}
            <br />
            <span className="italic">{t.reservation.headingLine2Italic}</span>
          </Heading>
          <Body className="mb-8 max-w-[380px] text-[14px] leading-[1.95] lg:mb-14">{t.reservation.body}</Body>
          <div className="flex flex-col">
            {t.reservation.info.map((item) => (
              <div key={item.l} className="border-b border-aurum-border-2 py-4 lg:py-[22px]">
                <Eyebrow className="mb-2 block text-[8px] text-aurum-gray">{item.l}</Eyebrow>
                <Heading as="span" italic className="text-[15px] tracking-[-0.005em] text-aurum-ivory">{item.v}</Heading>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal visible={inView} delay={0.22}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="border border-aurum-border px-8 py-10"
              >
                <Heading className="mb-3 text-[22px] text-aurum-ivory">{t.reservation.form.successTitle}</Heading>
                <Body className="mb-8 text-[14px] leading-[1.8]">{t.reservation.form.successBody}</Body>
                <Button
                  variant="outline"
                  onClick={() => {
                    setForm({ name: '', email: '', date: '', covers: '2', notes: '' })
                    setSubmitted(false)
                  }}
                >
                  {t.reservation.form.successReset}
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="flex flex-col gap-8 lg:gap-11"
              >
                <Field label={t.reservation.form.nameLabel}>
                  <input
                    type="text"
                    required
                    placeholder={t.reservation.form.namePlaceholder}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputBase}
                  />
                </Field>
                <Field label={t.reservation.form.emailLabel}>
                  <input
                    type="email"
                    required
                    placeholder="su@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputBase}
                  />
                </Field>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-11">
                  <Field label={t.reservation.form.dateLabel}>
                    <input
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className={cn(inputBase, '[color-scheme:dark]')}
                    />
                  </Field>
                  <Field label={t.reservation.form.guestsLabel}>
                    <div className="relative">
                      <select
                        value={form.covers}
                        onChange={(e) => setForm({ ...form, covers: e.target.value })}
                        className={cn(inputBase, 'cursor-pointer appearance-none pr-6')}
                      >
                        {covers.map((n) => (
                          <option key={n} value={n} className="bg-aurum-black">
                            {n} {n === 1 ? t.reservation.form.guestSingular : t.reservation.form.guestPlural}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={14} strokeWidth={1.5} className="pointer-events-none absolute right-0 bottom-3 text-aurum-gray" />
                    </div>
                  </Field>
                </div>
                <Field label={t.reservation.form.notesLabel}>
                  <textarea
                    placeholder={t.reservation.form.notesPlaceholder}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={4}
                    className={cn(inputBase, 'resize-none leading-[1.8]')}
                  />
                </Field>
                <Magnetic strength={0.2} className="self-start">
                  <Button type="submit">{t.reservation.form.submit}</Button>
                </Magnetic>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </Section>
  )
}
