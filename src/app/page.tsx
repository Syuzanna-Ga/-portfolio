import { redirect } from "next/navigation"
import { siteConfig } from "@/data/siteConfig"

export default function RootPage() {
    redirect(`/${siteConfig.defaultLang}`)
}
