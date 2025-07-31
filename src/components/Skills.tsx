"use client"

import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import { siteConfig, type Lang } from "@/data/siteConfig"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

export function Skills() {
    const { language } = useLanguage()
    const lang = language as Lang

    const title = siteConfig.skills.title[lang] ?? siteConfig.skills.title.en
    const items = siteConfig.skills.items

    const baseClass =
        "rounded-xl border border-muted bg-muted/50 dark:bg-muted/30 dark:border-gray-700 flex flex-col items-center justify-center gap-2 px-4 py-6 text-lg font-semibold shadow-sm transition duration-200 hover:shadow-md drop-shadow-sm cursor-default select-none"

    return (
        <section
            id="skills"
            role="region"
            aria-labelledby="skills-heading"
            className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={containerVariants}
            >
                <h2
                    id="skills-heading"
                    className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                >
                    {title}
                </h2>

                <motion.ul
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
                    variants={containerVariants}
                >
                    {items.map(({ name, icon: Icon, color }) => (
                        <motion.li
                            key={name}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`${baseClass} ${color}`}
                            aria-label={`Technology: ${name}`}
                            tabIndex={0}
                        >
                            {Icon && <Icon className="w-10 h-10" aria-hidden="true"/>}
                            {name}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </section>
    )
}
