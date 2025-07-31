"use client"

import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import { siteConfig, type Lang } from "@/data/siteConfig"

export function About() {
    const { language } = useLanguage()
    const lang = language as Lang

    const title = siteConfig.about.title[lang] ?? siteConfig.about.title.en
    const content = siteConfig.about.content[lang] ?? siteConfig.about.content.en

    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto"
        >
            <div className="text-center">
                <motion.h2
                    id="about-heading"
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white"
                >
                    {title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                    {content}
                </motion.p>
            </div>
        </section>
    )
}