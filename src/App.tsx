import { MotionConfig } from 'framer-motion'
import { LanguageProvider } from '@/i18n/LanguageContext'
import { Link } from '@/router/Link'
import { RouterProvider, useRouter } from '@/router/Router'
import { Footer } from '@/sections/Footer'
import { Navigation } from '@/sections/Navigation'
import { CaseStudy } from '@/pages/CaseStudy'
import { Home } from '@/pages/Home'

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="font-serif text-[15px] text-aurum-gray">404</span>
      <Link to="/" className="font-sans text-[11px] tracking-[0.2em] text-aurum-champagne uppercase no-underline">
        Volver al inicio
      </Link>
    </div>
  )
}

function Pages() {
  const { path } = useRouter()

  if (path === '/case-study') return <CaseStudy />
  if (path === '/') return <Home />
  return <NotFound />
}

export default function App() {
  return (
    <RouterProvider>
      <LanguageProvider>
        <MotionConfig reducedMotion="user">
          <div className="min-h-screen bg-aurum-black">
            <Navigation />
            <main id="main">
              <Pages />
            </main>
            <Footer />
          </div>
        </MotionConfig>
      </LanguageProvider>
    </RouterProvider>
  )
}
