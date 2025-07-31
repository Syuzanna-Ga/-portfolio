"use client"

import { useLanguage } from "@/context/LanguageContext"
import { Mail, Check } from "lucide-react"
import { motion, Variants } from "framer-motion"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { siteConfig, type Lang } from "@/data/siteConfig"

type FormValues = {
    name: string
    email: string
    message: string
}

type FormResponse = {
    ok?: boolean
    [key: string]: unknown
}

const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function Contact() {
    const { language } = useLanguage()
    const lang = language as Lang

    const t = siteConfig.contact

    const [copied, setCopied] = useState(false)
    const [status, setStatus] = useState<null | "success" | "error">(null)

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting, touchedFields },
        reset,
    } = useForm<FormValues>({
        mode: "all",
        reValidateMode: "onChange",
        defaultValues: { name: "", email: "", message: "" },
    })

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(t.email)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Copy failed:", err)
        }
    }

    const onSubmit = async (data: FormValues) => {
        setStatus(null)

        try {
            const formData = new FormData()
            formData.append("name", data.name)
            formData.append("email", data.email)
            formData.append("message", data.message)

            const response = await fetch(siteConfig.contact.form.endpoint, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            })

            let resData = {} as FormResponse

            try {
                resData = await response.json()
            } catch (jsonError) {
                console.warn("Response is not valid JSON", jsonError)
            }

            if (response.ok && resData?.ok !== false) {
                setStatus("success")
                reset()
            } else {
                console.warn("Form warning (submission failed):", resData)
                setStatus("error")
            }
        } catch (err) {
            console.error("Network error:", err)
            setStatus("error")
        }
    }

    const showError = (field: keyof FormValues) =>
        errors[field] && touchedFields[field]

    return (
        <motion.section
            id="contact"
            className="py-20 px-4 max-w-3xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <motion.h2
                className="text-3xl md:text-4xl font-bold mb-10 text-foreground"
                variants={fadeInUpVariants}
            >
                {t.title[lang] ?? t.title.en}
            </motion.h2>

            <motion.div
                className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8"
                variants={fadeInUpVariants}
            >
                <button
                    type="button"
                    onClick={handleCopy}
                    title={t.email}
                    className="min-w-[220px] flex items-center justify-center gap-2 px-4 py-2 text-lg font-medium rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all shadow-sm"
                >
                    {copied ? (
                        <>
                            <Check className="w-5 h-5 text-green-500" />
                            {t.copySuccess[lang] ?? t.copySuccess.en}
                        </>
                    ) : (
                        <>
                            <Mail className="w-5 h-5" />
                            {t.email}
                        </>
                    )}
                </button>
            </motion.div>

            {t.form.enabled && <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-xl mx-auto text-left space-y-6"
                noValidate
                variants={fadeInUpVariants}
            >
                <input
                    type="text"
                    placeholder={t.formName[lang] ?? t.formName.en}
                    {...register("name", {
                        required: t.errorNameRequired[lang] ?? t.errorNameRequired.en,
                        validate: (v) =>
                            v.trim().length > 0 ||
                            (t.errorNameRequired[lang] ?? t.errorNameRequired.en),
                    })}
                    disabled={isSubmitting}
                    className={`w-full rounded-md border px-4 py-2 transition focus:outline-none focus:ring-2 ${
                        showError("name")
                            ? "border-red-500 focus:ring-red-400"
                            : "border-gray-300 focus:ring-accent"
                    }`}
                    aria-invalid={showError("name") ? "true" : "false"}
                    aria-describedby={showError("name") ? "name-error" : undefined}
                />
                {showError("name") && (
                    <p id="name-error" className="text-red-500 text-sm">
                        {errors.name?.message}
                    </p>
                )}

                <input
                    type="email"
                    placeholder={t.formEmail[lang] ?? t.formEmail.en}
                    {...register("email", {
                        required: t.errorEmailRequired[lang] ?? t.errorEmailRequired.en,
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: t.errorEmailInvalid[lang] ?? t.errorEmailInvalid.en,
                        },
                    })}
                    disabled={isSubmitting}
                    className={`w-full rounded-md border px-4 py-2 transition focus:outline-none focus:ring-2 ${
                        showError("email")
                            ? "border-red-500 focus:ring-red-400"
                            : "border-gray-300 focus:ring-accent"
                    }`}
                    aria-invalid={showError("email") ? "true" : "false"}
                    aria-describedby={showError("email") ? "email-error" : undefined}
                />
                {showError("email") && (
                    <p id="email-error" className="text-red-500 text-sm">
                        {errors.email?.message}
                    </p>
                )}

                <textarea
                    placeholder={t.formMessage[lang] ?? t.formMessage.en}
                    rows={5}
                    {...register("message", {
                        required: t.errorMessageRequired[lang] ?? t.errorMessageRequired.en,
                        minLength: {
                            value: 10,
                            message: t.errorMessageRequired[lang] ?? t.errorMessageRequired.en,
                        },
                    })}
                    disabled={isSubmitting}
                    className={`w-full rounded-md border px-4 py-2 transition resize-y focus:outline-none focus:ring-2 ${
                        showError("message")
                            ? "border-red-500 focus:ring-red-400"
                            : "border-gray-300 focus:ring-accent"
                    }`}
                    aria-invalid={showError("message") ? "true" : "false"}
                    aria-describedby={showError("message") ? "message-error" : undefined}
                />
                {showError("message") && (
                    <p id="message-error" className="text-red-500 text-sm">
                        {errors.message?.message}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className="w-full bg-accent text-accent-foreground font-semibold py-3 rounded-md hover:bg-accent-hover transition disabled:opacity-60"
                >
                    {isSubmitting ? "..." : t.formSubmit[lang] ?? t.formSubmit.en}
                </button>

                {status === "success" && (
                    <p className="text-green-600 mt-2">{t.formSuccess[lang] ?? t.formSuccess.en}</p>
                )}
                {status === "error" && (
                    <p className="text-red-600 mt-2">{t.formError[lang] ?? t.formError.en}</p>
                )}
            </motion.form>}
        </motion.section>
    )
}
