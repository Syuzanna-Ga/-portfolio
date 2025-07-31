import {
    SiGithub,
    SiLinkedin,
    SiReact,
    SiNextdotjs,
    SiRedux,
    SiBootstrap,
    SiJavascript,
    SiJquery,
    SiTailwindcss,
    SiHtml5,
    SiCss3,
    SiGit,
} from "react-icons/si"
import { FiDownload } from "react-icons/fi";

export type Lang = "en" | "hy" | "ru";

export const supportedLanguages: Lang[] = ["en", "hy", "ru"];

export const siteConfig = {
    baseUrl: "https://webfolio-template-demo.vercel.app",

    defaultLang: "en" as Lang,
    supportedLangs: supportedLanguages,
    defaultTheme: "dark" as "light" | "dark",

    name: {
        en: "Suzanna Gasparyan",
        hy: "Սյուզաննա Գասպարյան",
        ru: "Сюзанна Гаспарян",
    },

    description: {
        en: "Personal portfolio and CV",
        hy: "Անձնական պորտֆոլիո և ռեզյումե",
        ru: "Личный сайт и резюме",
    },

    siteName: "Portfolio Template",

    imagesOG: {
        en: "/ogLogo.png",
        ru: "/ogLogo.png",
        es: "/ogLogo.png",
        fr: "/ogLogo.png",
    },

    icons: {
        favicon: [
            { url: "/favicon.ico", sizes: "any", type: "image/x-icon", rel: "shortcut icon" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
            { url: "/favicon.svg", type: "image/svg+xml" },
        ],
        appleTouch: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
    },

    header: {
        logo: "/logo.png",
        moreLabel: {
            en: "More",
            hy: "Ավելին",
            ru: "Еще",
        },
        navItems: [
            { id: "about", label: { en: "About", hy: "Իմ մասին", ru: "Обо мне" } },
            { id: "skills", label: { en: "Technologies", hy: "Տեխնոլոգիաներ", ru: "Технологии" } },
            { id: "projects", label: { en: "Projects", hy: "Նախագծեր", ru: "Проекты" } },
            { id: "contact", label: { en: "Contact", hy: "Կապ", ru: "Контакты" } },
        ],
        hireMeButton: {
            en: "Hire Me",
            hy: "Կապ հաստատել",
            ru: "Связаться",
        },
    },

    hero: {
        greeting: {
            en: `Hi, I'm ${"Suzanna Gasparyan"}`,
            hy: `Բարև, ես ${"Սյուզաննա Գասպարյանն"} եմ`,
            ru: `Привет, я ${"Сюзанна Гаспарян"}`,
        },
        profession: {
            en: "Web Developer — React, Next.js, Tailwind",
            hy: "Վեբ ծրագրավորող — React, Next.js, Tailwind",
            ru: "Веб-разработчик — React, Next.js, Tailwind",
        },
        buttons: [
            {
                label: {
                    en: "LinkedIn",
                    hy: "LinkedIn",
                    ru: "LinkedIn",
                },
                href: "https://www.linkedin.com/in/syuzanna-gasparyan-776577331/",
                download: false,
                icon: SiLinkedin,
                color: "#0A66C2",
                hoverColor: "#004182",
                textColor: "#ffffff"
            },
            {
                label: {
                    en: "Download CV",
                    hy: "Ներբեռնել CV-ն",
                    ru: "Скачать CV",
                },
                href: "/cv.pdf",
                download: true,
                icon: FiDownload,
                color: "#514747",
                hoverColor: "#7B7474",
                textColor: "#ffffff",
            },
        ],
        photoUrl: "/logo.png",
    },

    about: {
        title: {
            en: "About Me",
            hy: "Իմ մասին",
            ru: "Обо мне",
        },
        content: {
            en: "I’m a front-end web developer with 1+ years of hands-on experience building responsive, scalable applications using React, Next.js and Tailwind CSS. I focus on creating clean code and intuitive user interfaces.",
            hy: "Ես front-end վեբ ծրագրավորող եմ՝ ավելի քան մեկ տարվա փորձով։ Ստեղծում եմ հարմարեցվող և մասշտաբվող վեբ հավելվածներ՝ օգտագործելով React, Next.js և Tailwind CSS։ Ուշադրություն եմ դարձնում մաքուր կոդին և հասկանալի ինտերֆեյսներին։",
            ru: "Я front-end веб-разработчик с опытом более 1 года. Создаю масштабируемые и адаптивные веб-приложения с использованием React, Next.js и Tailwind CSS. Сосредотачиваюсь на чистом коде и понятных интерфейсах.",
        },
    },

    skills: {
        title: {
            en: "Technologies",
            hy: "Տեխնոլոգիաներ",
            ru: "Технологии",
        },
        items: [
            { name: "React", icon: SiReact, color: "text-cyan-500" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
            { name: "Redux Toolkit", icon: SiRedux, color: "text-purple-600" },
            { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
            { name: "jQuery", icon: SiJquery, color: "text-blue-600" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
            { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
            { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
            { name: "Bootstrap", icon: SiBootstrap, color: "text-indigo-600" },
            { name: "Git", icon: SiGit, color: "text-orange-500" },
        ]
    },

    projects: {
        title: {
            en: "Project Types",
            hy: "Նախագծերի տեսակներ",
            ru: "Типы проектов",
        },
        items: [
            {
                name: {
                    en: "E-commerce Websites",
                    hy: "Առցանց խանութներ",
                    ru: "Интернет-магазины",
                },
                description: {
                    en: "Online stores with product catalogs, filters, and admin panels.",
                    hy: "Առցանց խանութներ՝ ապրանքների կատալոգով, զտիչներով և ադմին վահանակով։",
                    ru: "Онлайн-витрины с фильтрами, каталогом и админкой.",
                },
                image: "/projects/project1.png",
            },
            {
                name: {
                    en: "Government & Institutional Platforms",
                    hy: "Պետական և ինստիտուցիոնալ հարթակներ",
                    ru: "Государственные и корпоративные сайты",
                },
                description: {
                    en: "Public service portals with secure access and multilingual support.",
                    hy: "Հասարակական ծառայությունների հարթակներ՝ անվտանգ մուտքով և բազմալեզու աջակցությամբ։",
                    ru: "Порталы с многоязычной поддержкой и безопасной авторизацией.",
                },
                image: "/projects/project2.png",
            },
            {
                name: {
                    en: "Admin Dashboards",
                    hy: "Ադմինիստրատիվ վահանակներ",
                    ru: "Админ-панели",
                },
                description: {
                    en: "Role-based internal tools with charts, user management, and data grids.",
                    hy: "Դերերով կառավարվող ներքին գործիքներ՝ գրաֆիկներով, օգտագործողների կառավարմամբ և տվյալների վահանակներով։",
                    ru: "Внутренние системы с правами доступа, графиками и управлением данными.",
                },
                image: "/projects/project3.png",
            },
            {
                name: {
                    en: "Personal Blogs & Portfolios",
                    hy: "Անձնական բլոգեր և պորտֆոլիոներ",
                    ru: "Персональные блоги и портфолио",
                },
                description: {
                    en: "Fast-loading, SEO-optimized websites for individuals and freelancers.",
                    hy: "Արագ և SEO-հարմարեցված կայքեր՝ անհատների և ֆրիլանսերների համար։",
                    ru: "Лёгкие и быстрые сайты для специалистов и креаторов.",
                },
                image: "/projects/project4.png",
            },
        ],
    },

    contact: {
        email: "syu.gasparyan@gmail.com",
        form: {
            enabled: true,
            endpoint: "https://formspree.io/f/xldllgel",
        },
        title: {
            en: "Contact Me",
            hy: "Կապ ինձ հետ",
            ru: "Связаться со мной",
        },
        copySuccess: {
            en: "Email copied!",
            hy: "Էլ. հասցեն պատճենվել է։",
            ru: "Почта скопирована!",
        },
        formName: {
            en: "Your Name",
            hy: "Ձեր անունը",
            ru: "Ваше имя",
        },
        formEmail: {
            en: "Your Email",
            hy: "Ձեր էլ. հասցեն",
            ru: "Ваш Email",
        },
        formMessage: {
            en: "Message",
            hy: "Հաղորդագրություն",
            ru: "Сообщение",
        },
        formSubmit: {
            en: "Send",
            hy: "Ուղարկել",
            ru: "Отправить",
        },
        formSuccess: {
            en: "Message sent successfully!",
            hy: "Հաղորդագրությունն ուղարկված է հաջողությամբ։",
            ru: "Сообщение успешно отправлено!",
        },
        formError: {
            en: "Failed to send message. Please try again later.",
            hy: "Հաղորդագրությունը չհաջողվեց ուղարկել։ Խնդրում ենք փորձել ավելի ուշ։",
            ru: "Ошибка при отправке. Пожалуйста, попробуйте позже.",
        },
        errorNameRequired: {
            en: "Name is required",
            hy: "Անունը պարտադիր է",
            ru: "Имя обязательно",
        },
        errorEmailRequired: {
            en: "Email is required",
            hy: "Էլ. հասցեն պարտադիր է",
            ru: "Email обязателен",
        },
        errorEmailInvalid: {
            en: "Invalid email format",
            hy: "Էլ. հասցեի ձևաչափը սխալ է",
            ru: "Неверный формат email",
        },
        errorMessageRequired: {
            en: "Message must be at least 10 characters",
            hy: "Հաղորդագրությունը պետք է լինի առնվազն 10 նիշ",
            ru: "Сообщение должно быть не менее 10 символов",
        },
    },

    footer: {
        copyright: {
            en: "All rights reserved.",
            hy: "Բոլոր իրավունքները պաշտպանված են։",
            ru: "Все права защищены.",
        }
    }
}