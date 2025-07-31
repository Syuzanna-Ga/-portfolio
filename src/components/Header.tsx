"use client"

import { siteConfig, type Lang } from "@/data/siteConfig"
import { useLanguage } from "@/context/LanguageContext"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { ThemeToggle } from "@/components/ThemeToggle"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
    const { language } = useLanguage()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeId, setActiveId] = useState<string | null>(null)

    const moreLabel = siteConfig.header.moreLabel[language as Lang]
    const navItems = siteConfig.header.navItems
    const hireMeLabel = siteConfig.header.hireMeButton[language]

    const MAX_VISIBLE = 4
    const visibleItems = navItems.slice(0, MAX_VISIBLE)
    const hiddenItems = navItems.slice(MAX_VISIBLE)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActiveId(entry.target.id)
                }
            },
            { threshold: 0.6 }
        )
        navItems.forEach((item) => {
            const el = document.getElementById(item.id)
            if (el) observer.observe(el)
        })
        return () => observer.disconnect()
    }, [navItems])

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-md">
            <div className="max-w-6xl mx-auto px-2 sm:px-4 py-3 flex items-center justify-between">
                <Link href={`/${language}`} className="inline-flex items-center transition-transform">
                    <Image
                        src={siteConfig.header.logo}
                        alt={`${siteConfig.name[language]} Logo`}
                        width={48}
                        height={48}
                        priority
                        className="h-12 w-auto dark:hidden"
                    />
                    <Image
                        src="/logo2.png"
                        alt={`${siteConfig.name[language]} Logo`}
                        width={48}
                        height={48}
                        priority
                        className="h-12 w-auto hidden dark:block"
                    />
                    <span className="hidden lg:inline text-xl font-bold tracking-tight text-gray-900 dark:text-white ml-2 select-none">
                        {siteConfig.name[language]}
                    </span>
                </Link>

                <nav className="hidden lg:flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-300 relative">
                    {visibleItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={cn(
                                "relative hover:text-red-500 dark:hover:text-red-300 transition-colors",
                                activeId === item.id && "text-red-500 dark:text-red-300",
                                "after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-red-500 after:opacity-0 after:transition-opacity",
                                activeId === item.id && "after:opacity-100"
                            )}
                        >
                            {item.label[language as Lang]}
                        </a>
                    ))}

                    {hiddenItems.length > 0 && (
                        <details className="relative group">
                            <summary
                                className={cn(
                                    "cursor-pointer select-none flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-300",
                                    "after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-red-500 after:opacity-0 after:transition-opacity",
                                    activeId && hiddenItems.some(i => i.id === activeId) && "text-red-500 dark:text-red-300 after:opacity-100"
                                )}
                            >
                                {moreLabel} ▼
                            </summary>
                            <div className="absolute top-full mt-1 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-2 w-40 z-50">
                                {hiddenItems.map(item => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white transition-colors"
                                    >
                                        {item.label[language as Lang]}
                                    </a>
                                ))}
                            </div>
                        </details>
                    )}
                </nav>

                <div className="hidden lg:flex items-center gap-4 ml-4">
                    <LanguageSwitcher />
                    <div className="w-10 min-w-10 flex justify-center items-center">
                        <ThemeToggle />
                    </div>
                    <Link
                        href="#contact"
                        className="ml-4 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition select-none"
                    >
                        {hireMeLabel}
                    </Link>
                </div>

                <div className="lg:hidden flex items-center gap-0.5 sm:gap-4">
                    <LanguageSwitcher />
                    <div className=" w-8 sm:w-10 min-w-8 sm:min-w-10 flex justify-center items-center">
                        <ThemeToggle />
                    </div>
                    <button
                        className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-300 transition-colors focus:outline-none"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        aria-label="Toggle Menu"
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 bg-black z-40"
                        />
                        <motion.nav
                            key="mobile-menu"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: { opacity: 0, maxHeight: 0, transition: { duration: 0.3, ease: "easeInOut" } },
                                visible: { opacity: 1, maxHeight: 500, transition: { duration: 0.3, ease: "easeInOut" } },
                            }}
                            className="lg:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 fixed top-[56px] left-0 right-0 z-50"
                        >
                            <div className="px-4 pt-4 pb-6 space-y-4 text-sm font-medium">
                                {navItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={cn(
                                            "block text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-300 transition-colors select-none",
                                            activeId === item.id && "text-red-500 dark:text-red-300"
                                        )}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.label[language as Lang]}
                                    </a>
                                ))}

                                <Link
                                    href="#contact"
                                    className="block mt-4 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition select-none text-center"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {hireMeLabel}
                                </Link>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}
