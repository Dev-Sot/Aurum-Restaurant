import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

interface RouterContextValue {
  path: string
  navigate: (path: string) => void
}

const RouterContext = createContext<RouterContextValue | null>(null)

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (to: string) => {
    if (to !== window.location.pathname) {
      window.history.pushState({}, '', to)
      setPath(to)
    }
    window.scrollTo(0, 0)
  }

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components -- hook intentionally colocated with its provider
export function useRouter(): RouterContextValue {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('useRouter must be used within a RouterProvider')
  return ctx
}
