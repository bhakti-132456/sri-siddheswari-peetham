"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { type Language, type Translations } from "./translations-types"
import { en } from "./translations/en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isLoaded: boolean
}

// Cache for loaded translations
const translationsCache: Partial<Record<Language, Translations>> = { en }

// Lazy load translations
const loadTranslation = async (lang: Language): Promise<Translations> => {
  if (translationsCache[lang]) {
    return translationsCache[lang]!
  }

  let module: { [key: string]: Translations }
  switch (lang) {
    case "te":
      module = await import("./translations/te")
      translationsCache.te = module.te
      return module.te
    case "hi":
      module = await import("./translations/hi")
      translationsCache.hi = module.hi
      return module.hi
    case "ta":
      module = await import("./translations/ta")
      translationsCache.ta = module.ta
      return module.ta
    default:
      return en
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [currentTranslations, setCurrentTranslations] = useState<Translations>(en)
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Load translation when language changes
  const loadLanguage = useCallback(async (lang: Language) => {
    if (lang === "en") {
      setCurrentTranslations(en)
      return
    }

    setIsLoading(true)
    try {
      const translations = await loadTranslation(lang)
      setCurrentTranslations(translations)
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error)
      setCurrentTranslations(en)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && ["en", "te", "hi", "ta"].includes(saved)) {
      setLanguageState(saved)
      document.documentElement.lang = saved
      loadLanguage(saved)
    } else {
      document.documentElement.lang = "en"
    }
    setMounted(true)
  }, [loadLanguage])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
    loadLanguage(lang)
  }

  const t = (key: string): string => {
    // Use English for server-side rendering and initial hydration to prevent mismatches
    const translations = mounted ? currentTranslations : en
    const translation = translations?.[key] || en[key] || key

    // Replace {year} with current year
    return translation.replace("{year}", new Date().getFullYear().toString())
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoaded: mounted && !isLoading }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}

export type { Language }

