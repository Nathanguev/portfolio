"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "./language-provider"

export function LanguageToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const { language, setLanguage } = useLanguage()

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  return (
    <Button
      variant="outline"
      onClick={toggleLanguage}
      className={`relative overflow-hidden rounded-full h-9 w-9 p-0 ${className}`}
      aria-label={`Switch to ${language === "en" ? "French" : "English"} language`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={language}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-xs font-bold">{language === "en" ? "EN" : "FR"}</span>
        </motion.div>
      </AnimatePresence>
    </Button>
  )
}

export function FloatingLanguageToggle() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-6 z-40"
        >
          <LanguageToggle className="shadow-lg border-primary/20 hover:border-primary" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
