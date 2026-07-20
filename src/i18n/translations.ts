import { en } from './en'
import { es } from './es'
import type { Language, Translation } from './types'

export const translations: Record<Language, Translation> = { es, en }
export type { Language, Translation }
