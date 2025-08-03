"use client"

import { siteConfig, type Lang } from "@/data/siteConfig"
import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function Hero() {
    const { language } = useLanguage()
    const lang = language as Lang
    const t = siteConfig.hero
    const hasPhoto = !!t.photoUrl

    return (
        <motion.section
            className="py-20 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto"
            variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.2 } },
            }}
            initial="hidden"
            animate="show"
        >
            <div
                className={`flex flex-col items-center text-center ${
                    hasPhoto
                        ? "md:flex-row md:items-center md:text-left md:gap-12"
                        : ""
                }`}
            >
                {hasPhoto && (
                    <motion.div
                        className="mb-8 md:mb-0 md:flex-shrink-0"
                        variants={{
                            hidden: { opacity: 0, x: -30 },
                            show: {
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.6, ease: "easeOut" },
                            },
                        }}
                    >
                        <Image
                            src={t.avatar}
                            alt="Personal photo"
                            width={160}
                            height={160}
                            className="w-40 h-40 rounded-full object-cover shadow-lg"
                            priority
                        />
                    </motion.div>
                )}

                <motion.div className="flex flex-col text-center items-center max-w-xl">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`greeting-${language}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-gray-900 dark:text-white"
                            aria-label={t.greeting[lang]}
                        >
                            {t.greeting[lang]}
                        </motion.h1>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.p
                            key={`profession-${language}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
                        >
                            {t.profession[lang]}
                        </motion.p>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`buttons-${language}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="flex justify-center md:justify-start gap-4 mb-8 flex-wrap"
                        >
                            {t.buttons.map((btn, index) => {
                                const Icon = btn.icon
                                const bg = btn.color || "transparent"
                                const hoverBg = btn.hoverColor || "rgba(0,0,0,0.05)"
                                const textColor = btn.textColor || "currentColor"

                                return (
                                    <Button
                                        key={`${btn.label[lang]}-${index}`}
                                        asChild
                                        aria-label={btn.label[lang]}
                                        className="min-w-[120px] flex items-center justify-center gap-2"
                                        style={{
                                            backgroundColor: bg,
                                            color: textColor,
                                        }}
                                        onMouseOver={(e) => {
                                            if (btn.hoverColor)
                                                (e.currentTarget as HTMLButtonElement).style.backgroundColor = hoverBg
                                        }}
                                        onMouseOut={(e) => {
                                            if (btn.hoverColor)
                                                (e.currentTarget as HTMLButtonElement).style.backgroundColor = bg
                                        }}
                                        variant={btn.color ? "default" : "outline"}
                                    >
                                        <a
                                            href={btn.href}
                                            download={btn.download}
                                            target={btn.download ? undefined : "_blank"}
                                            rel={btn.download ? undefined : "noopener noreferrer"}
                                        >
                                            {Icon && <Icon className="w-6 h-6" aria-hidden="true" />}
                                            {btn.label[lang]}
                                        </a>
                                    </Button>
                                )
                            })}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.section>
    )
}
