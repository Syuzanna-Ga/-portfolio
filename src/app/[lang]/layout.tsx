import React from "react";
import { Header } from "@/components/Header";
import { Providers } from "@/app/providers";

import type { Metadata } from "next";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import {Lang, siteConfig, supportedLanguages} from "@/data/siteConfig";

export async function generateStaticParams() {
    return supportedLanguages.map((lang) => ({ lang }))
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const lang = supportedLanguages.includes(resolvedParams.lang as Lang)
        ? (resolvedParams.lang as Lang)
        : siteConfig.defaultLang;

    return {
        title: siteConfig.name[lang],
        description: siteConfig.description[lang],
        openGraph: {
            title: siteConfig.name[lang],
            description: siteConfig.description[lang],
            url: `${siteConfig.baseUrl}/${lang}`,
            siteName: siteConfig.siteName,
            images: [
                {
                    url: `${siteConfig.baseUrl}${siteConfig.imagesOG[lang]}`,
                    width: 1200,
                    height: 630,
                    alt: "Portfolio OG Image",
                },
            ],
            locale: lang,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: siteConfig.name[lang],
            description: siteConfig.description[lang],
            images: [siteConfig.imagesOG[lang]],
        },
        icons: {
            icon: siteConfig.icons.favicon,
            apple: siteConfig.icons.appleTouch,
        },
        keywords: [siteConfig.name[lang], "portfolio", "developer", "CV"],
    };
}

interface LangLayoutProps {
    children: React.ReactNode;
    params: Promise<{ lang: Lang }>;
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang || "en";

    return (
        <Providers lang={lang}>
            <Header />
            <main className="pt-16">{children}</main>
            <ScrollToTopButton />
        </Providers>
    );
}
