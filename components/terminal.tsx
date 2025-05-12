"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X, TerminalIcon, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

export default function Terminal() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [output, setOutput] = useState<string[]>([t("terminal.welcome")])
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let keys: string[] = []
    const targetWord = "terminal"

    const handleKeyPress = (e: KeyboardEvent) => {
      // Don't trigger if we're in an input field
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      keys.push(e.key.toLowerCase())
      if (keys.length > targetWord.length) {
        keys = keys.slice(1)
      }

      if (keys.join("") === targetWord) {
        setIsOpen(true)
        setTimeout(() => {
          inputRef.current?.focus()
        }, 100)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [output])

  // Update welcome message when language changes
  useEffect(() => {
    setOutput([t("terminal.welcome")])
  }, [t])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const command = input.trim().toLowerCase()
    let response: string[] = []

    switch (command) {
      case "help":
        response = [
          t("terminal.help"),
          t("terminal.help.help"),
          t("terminal.help.about"),
          t("terminal.help.skills"),
          t("terminal.help.contact"),
          t("terminal.help.projects"),
          t("terminal.help.clear"),
          t("terminal.help.exit"),
        ]
        break
      case "about":
        response = [t("terminal.about.line1"), t("terminal.about.line2"), t("terminal.about.line3")]
        break
      case "skills":
        response = [
          t("terminal.skills.title"),
          t("terminal.skills.languages"),
          t("terminal.skills.databases"),
          t("terminal.skills.systems"),
          t("terminal.skills.networking"),
          t("terminal.skills.tools"),
        ]
        break
      case "contact":
        response = [
          t("terminal.contact.title"),
          t("terminal.contact.email"),
          t("terminal.contact.linkedin"),
          t("terminal.contact.github"),
        ]
        break
      case "projects":
        response = [
          t("terminal.projects.title"),
          t("terminal.projects.server"),
          t("terminal.projects.arduino"),
          t("terminal.projects.tryhackme"),
          t("terminal.projects.gamejam"),
        ]
        break
      case "clear":
        setOutput([])
        setInput("")
        return
      case "exit":
        setIsOpen(false)
        return
      default:
        response = [t("terminal.error").replace("{command}", command)]
    }

    setOutput((prev) => [...prev, `> ${input}`, ...response])
    setInput("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black border border-primary/30 rounded-lg w-full max-w-2xl shadow-lg overflow-hidden">
        <div className="flex items-center justify-between bg-muted/20 px-4 py-2">
          <div className="flex items-center gap-2">
            <TerminalIcon className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-primary">nathan@portfolio:~</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-6 w-6 text-muted-foreground hover:text-white"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div ref={outputRef} className="bg-black text-green-400 font-mono text-sm p-4 h-80 overflow-y-auto">
          {output.map((line, i) => (
            <div key={i} className="mb-1">
              {line}
            </div>
          ))}
          <form onSubmit={handleCommand} className="flex items-center mt-2">
            <ChevronRight className="h-4 w-4 mr-2 text-primary" />
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono text-sm"
              autoFocus
            />
          </form>
        </div>
      </div>
    </div>
  )
}
