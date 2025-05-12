import type { Metadata } from "next"
import Header from "@/components/header"
import About from "@/components/about"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import More from "@/components/more"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Terminal from "@/components/terminal"
import BackToTop from "@/components/back-to-top"

export const metadata: Metadata = {
  title: "Nathan Guevara | Portfolio",
  description:
    "Personal portfolio of Nathan Guevara, a French computer science student focused on networks, cybersecurity, and systems administration.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 space-y-16">
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <More />
        <Contact />
      </div>
      <Footer />
      <Terminal />
      <BackToTop />
    </main>
  )
}
