"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { useLanguage } from "./language-provider"

export default function Header() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMobile(1000) // Using 1000px as the breakpoint

  const navItems = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.education"), href: "#education" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.more"), href: "#more" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    // Easter egg: Console message
    console.log("%c👋 Hello there, curious developer!", "font-size: 16px; font-weight: bold; color: #10b981;")
    console.log("%cThanks for checking out my portfolio's code. Feel free to explore!", "font-size: 14px;")
    console.log(
      "%cTip: Try typing 'terminal' anywhere on the page...",
      "font-size: 12px; font-style: italic; color: #6366f1;",
    )
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden border-primary transition-transform hover:scale-105 duration-300">
            <img src="https://raw.githubusercontent.com/Nathanguev/portfolio/main/public/portrait.jpg" alt="Nathan Guevara" className="object-cover" />
          </div>
          <h1 className="text-xl font-bold font-mono tracking-tight">Nathan Guevara</h1>
        </div>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        ) : (
          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="ml-4 flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>
        )}

        {/* Mobile menu */}
        {isMobile && mobileMenuOpen && (
          <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40 flex flex-col items-center pt-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-lg font-medium w-full text-center hover:bg-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
