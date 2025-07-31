"use client"

import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "@/context/LanguageContext"
import { ReactNode } from "react"
import { siteConfig, type Lang } from "@/data/siteConfig"

function isLangSupported(lang: string): lang is Lang {
    return siteConfig.supportedLangs.includes(lang as Lang)
}

export function Providers({ children, lang }: { children: ReactNode; lang: string }) {
    const safeLang: Lang = isLangSupported(lang) ? lang : siteConfig.defaultLang

    return (
        <ThemeProvider attribute="class" defaultTheme={siteConfig.defaultTheme} enableSystem={false}>
            <LanguageProvider initialLanguage={safeLang}>
                {children}
            </LanguageProvider>
        </ThemeProvider>
    )
}
