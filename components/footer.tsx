"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "./language-provider"

export default function Footer() {
  const { t } = useLanguage()
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    let keys: string[] = []
    const targetWord = "nathan"

    const handleKeyPress = (e: KeyboardEvent) => {
      keys.push(e.key.toLowerCase())
      if (keys.length > targetWord.length) {
        keys = keys.slice(1)
      }

      if (keys.join("") === targetWord) {
        setShowEasterEgg(true)
        setTimeout(() => setShowEasterEgg(false), 5000)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  return (
    <footer className="bg-muted/30 py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              {t("footer.copyright")} {currentYear}
            </p>
            <div className="text-xs text-muted-foreground/70 mt-1 font-mono">
              <span className="hidden md:inline">{t("footer.easteregg")}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {showEasterEgg && (
          <div className="mt-6 p-3 bg-black text-green-400 font-mono text-xs rounded overflow-hidden">
            <pre className="whitespace-pre-wrap">
              {`
 _   _       _   _                    _____                                   
| \\ | |     | | | |                  / ____|                                  
|  \\| | __ _| |_| |__   __ _ _ __   | |  __ _   _  _____   ____ _ _ __ __ _  
| . \` |/ _\` | __| '_ \\ / _\` | '_ \\  | | |_ | | | |/ _ \\ \\ / / _\` | '__/ _\` | 
| |\\  | (_| | |_| | | | (_| | | | | | |__| | |_| |  __/\\ V / (_| | | | (_| | 
|_| \\_|\\__,_|\\__|_| |_|\\__,_|_| |_|  \\_____|\\__,_|\\___| \\_/ \\__,_|_|  \\__,_| 
                                                                              
> Hello, world! Thanks for discovering this easter egg!
> System: User authenticated as guest
> Access: Read-only
> Status: Online and operational
              `}
            </pre>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground/60">
            {t("footer.designed")} <span className="text-red-400">♥</span> {t("footer.by")}
          </p>
        </div>
      </div>
    </footer>
  )
}
