"use client"

import { useLanguage } from "@/context/LanguageContext"
import { motion } from "framer-motion"
import { siteConfig, type Lang } from "@/data/siteConfig"
import Image from "next/image"

export function Projects() {
    const { language } = useLanguage()
    const lang = language as Lang

    const title = siteConfig.projects.title[lang] ?? siteConfig.projects.title.en
    const items = siteConfig.projects.items

    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2
                    id="projects-heading"
                    className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                >
                    {title}
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                    {items.map(({ name, description, image }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="block rounded-xl border border-muted bg-white dark:bg-neutral-900/70 p-6 shadow-sm transition-all hover:shadow-lg"
                        >
                            {image && (
                                <div className="mb-4 relative w-full h-40 rounded-lg overflow-hidden">
                                    <Image
                                        src={image}
                                        alt={name[lang] ?? name.en}
                                        width={480}
                                        height={480}
                                        className="h-[150px] object-cover"
                                    />
                                </div>
                            )}
                            <div className="mb-2">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {name[lang] ?? name.en}
                                </h3>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {description[lang] ?? description.en}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
