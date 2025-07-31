import {Hero} from "@/components/Hero"
import {Skills} from "@/components/Skills";
import {Projects} from "@/components/Projects";
import {About} from "@/components/About";
import {Contact} from "@/components/Contact";
import {Footer} from "@/components/Footer";

export default function HomePage() {
    return (
        <main className="container mx-auto px-4">
            <Hero/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
        </main>
    )
}
