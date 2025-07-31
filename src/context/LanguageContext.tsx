"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { useRouter } from "next/navigation"
import { siteConfig, type Lang } from "@/data/siteConfig"

interface LanguageContextType {
    language: Lang
    setLanguage: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType>({
    language: siteConfig.defaultLang,
    setLanguage: () => {},
})

interface LanguageProviderProps {
    children: ReactNode
    initialLanguage: Lang
}

export function LanguageProvider({ children, initialLanguage }: LanguageProviderProps) {
    const router = useRouter()
    const [language, setLanguageState] = useState<Lang>(initialLanguage)

    const setLanguage = (lang: Lang) => {
        if (lang === language) return
        setLanguageState(lang)
        router.push(`/${lang}`)
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)
