"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/data/siteConfig"
import { useLanguage } from "@/context/LanguageContext"

export function Footer() {
    const { language } = useLanguage()
    const year = new Date().getFullYear()

    return (
        <motion.footer
            aria-label="Footer"
            className="py-6 px-4 text-center text-xs sm:text-sm text-muted-foreground border-t border-border mt-20 select-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <span className="font-semibold">
                © {year} {siteConfig.name[language]}.
            </span>{" "}
            {siteConfig.footer.copyright[language]}
        </motion.footer>
    )
}
