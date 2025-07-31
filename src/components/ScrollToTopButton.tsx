"use client"

import React, { useState, useEffect } from "react"

export function ScrollToTopButton() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        function onScroll() {
            setVisible(window.scrollY > 300) // показываем кнопку после 300px прокрутки
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-red-600 text-white shadow-lg transition-opacity duration-300 ${
                visible ? "opacity-100" : "opacity-0 pointer-events-none"
            } hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M12 19V5m0 0l-7 7m7-7l7 7" />
            </svg>
        </button>
    )
}
