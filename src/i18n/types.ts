import type { ContactItem, CourseItem, ExperienceItem, GalleryItem, IngredientItem, Quote, StatItem } from '@/types/content'

export type Language = 'es' | 'en'

export interface Translation {
  meta: {
    htmlLang: string
    title: string
    description: string
  }
  nav: {
    tagline: string
    links: { label: string; href: string }[]
    cta: string
    openMenu: string
    closeMenu: string
    skipToContent: string
    caseStudyLink: string
    backHome: string
  }
  hero: {
    eyebrow: string
    titleLine1: string
    titleLine2Italic: string
    titleLine3: string
    subtitle: string
    cta: string
    scroll: string
    est: string
  }
  manifesto: {
    eyebrow: string
    quoteLines: [string, string, string]
    body: string
    imageAlt: string
    imageCaption: string
    imageMeta: string
  }
  identityStrip: StatItem[]
  experience: {
    heading: string
    label: string
    items: ExperienceItem[]
  }
  ingredients: {
    label: string
    seasonLabel: string
    headingLine1: string
    headingLine2Italic: string
    originLabel: string
    seasonFieldLabel: string
    items: IngredientItem[]
  }
  chef: {
    eyebrow: string
    firstName: string
    lastName: string
    imageAlt: string
    bio: [string, string]
    stats: StatItem[]
    quoteLines: [string, string]
  }
  menu: {
    eyebrow: string
    headingLine1: string
    headingLine2Italic: string
    body: string
    pricing: { v: string; l: string }[]
    courses: CourseItem[]
  }
  awards: {
    michelinLabel: string
    press: string[]
  }
  gallery: {
    headingPrefix: string
    headingItalic: string
    seasonLabel: string
    viewLabel: string
    items: GalleryItem[]
  }
  testimonials: {
    label: string
    dotLabel: string
    quotes: Quote[]
  }
  reservation: {
    eyebrow: string
    headingLine1: string
    headingLine2Italic: string
    body: string
    info: ContactItem[]
    form: {
      nameLabel: string
      namePlaceholder: string
      emailLabel: string
      dateLabel: string
      guestsLabel: string
      guestSingular: string
      guestPlural: string
      notesLabel: string
      notesPlaceholder: string
      submit: string
      successTitle: string
      successBody: string
      successReset: string
    }
  }
  footer: {
    tagline: string
    address: [string, string, string]
    restaurantTitle: string
    restaurantLinks: string[]
    reservationsTitle: string
    reservationLinks: string[]
    contactTitle: string
    contact: ContactItem[]
    copyright: string
    social: string[]
    credit: {
      label: string
      designedBy: string
      devName: string
      brandLabel: string
      brandName: string
      linkedin: string
    }
  }
  caseStudy: {
    metaTitle: string
    eyebrow: string
    title: string
    subtitle: string
    sections: { heading: string; body: string[] }[]
    factsHeading: string
    facts: { label: string; value: string }[]
  }
}
