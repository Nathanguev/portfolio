"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface TerminalTextProps {
  text: string
  className?: string
  typingSpeed?: number
  showPrompt?: boolean
  onComplete?: () => void
}

export default function TerminalText({
  text,
  className,
  typingSpeed = 40,
  showPrompt = true,
  onComplete,
}: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [cursorVisible, setCursorVisible] = useState(true)
  const textRef = useRef<HTMLDivElement>(null)

  // Type out the text
  useEffect(() => {
    let currentIndex = 0
    let typingInterval: NodeJS.Timeout

    if (isTyping) {
      typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1))
          currentIndex++
        } else {
          setIsTyping(false)
          if (onComplete) onComplete()
        }
      }, typingSpeed)
    }

    return () => clearInterval(typingInterval)
  }, [text, typingSpeed, isTyping, onComplete])

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div
      ref={textRef}
      className={cn(
        "font-mono text-primary bg-black/5 dark:bg-white/5 p-3 rounded-md border border-primary/20",
        className,
      )}
    >
      {showPrompt && <span className="text-primary mr-2">$&gt;</span>}
      <span>{displayedText}</span>
      {cursorVisible && <span className="text-primary animate-pulse">▌</span>}
    </div>
  )
}
