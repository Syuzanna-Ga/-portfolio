"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-muted-foreground hover:text-foreground transition"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
    )
}
