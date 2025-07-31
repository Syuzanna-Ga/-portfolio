"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/context/LanguageContext"
import { siteConfig } from "@/data/siteConfig"

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage()
    const langs = siteConfig.supportedLangs

    if (langs.length <= 5) {
        return (
            <nav aria-label="Language selector" className="flex flex-wrap gap-0.5 sm:gap-2">
                {langs.map((langCode) => (
                    <Button
                        key={langCode}
                        variant={language === langCode ? "default" : "outline"}
                        size="sm"
                        onClick={() => setLanguage(langCode)}
                        aria-pressed={language === langCode}
                        aria-label={`Switch language to ${langCode.toUpperCase()}`}
                        className="min-w-[40px] px-3"
                    >
                        {langCode.toUpperCase()}
                    </Button>
                ))}
            </nav>
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                    {language.toUpperCase()}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                {langs.map((langCode) => (
                    <DropdownMenuItem
                        key={langCode}
                        onClick={() => setLanguage(langCode)}
                        className={language === langCode ? "font-semibold" : ""}
                    >
                        {langCode.toUpperCase()}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
