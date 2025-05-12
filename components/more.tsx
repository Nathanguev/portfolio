"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Cpu, Utensils, Plane, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"

const quotes = [
  "The only way to learn a new programming language is by writing programs in it.",
  "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "First, solve the problem. Then, write the code.",
  "Experience is the name everyone gives to their mistakes.",
]

export default function More() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const hobbies = [
    {
      name: t("more.hobby.3dmodeling"),
      icon: <Palette className="h-5 w-5" />,
      description: t("more.hobby.3dmodeling.desc"),
    },
    {
      name: t("more.hobby.electronics"),
      icon: <Cpu className="h-5 w-5" />,
      description: t("more.hobby.electronics.desc"),
    },
    {
      name: t("more.hobby.cooking"),
      icon: <Utensils className="h-5 w-5" />,
      description: t("more.hobby.cooking.desc"),
    },
    {
      name: t("more.hobby.travel"),
      icon: <Plane className="h-5 w-5" />,
      description: t("more.hobby.travel.desc"),
    },
    {
      name: t("more.hobby.photography"),
      icon: <Camera className="h-5 w-5" />,
      description: t("more.hobby.photography.desc"),
    },
  ]

  const [quote, setQuote] = useState(quotes[0])

  const getRandomQuote = () => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(newQuote)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="more" className="pt-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight font-mono border-b border-primary/20 pb-2 inline-block">
            {t("more.title")}
          </h2>
          <p className="text-muted-foreground">{t("more.subtitle")}</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="mb-8 hover:shadow-md transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg">{t("more.hobbies")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hobbies.map((hobby, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-md hover:bg-muted transition-colors">
                    <div className="text-primary mt-0.5">{hobby.icon}</div>
                    <div>
                      <h3 className="font-medium">{hobby.name}</h3>
                      <p className="text-sm text-muted-foreground">{hobby.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-dashed hover:border-primary/50 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-between">
                <span>{t("more.quote")}</span>
                <Button variant="ghost" size="sm" onClick={getRandomQuote} className="text-xs font-mono">
                  {t("more.newquote")}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="italic text-muted-foreground">&ldquo;{quote}&rdquo;</blockquote>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-square bg-muted rounded-md overflow-hidden relative group">
                <img
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Gallery image ${item}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">{t("more.viewphoto")}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
