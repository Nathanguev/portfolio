"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import TerminalText from "./terminal-text"
import { useLanguage } from "./language-provider"

export default function About() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    <section id="about" className="pt-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight font-mono border-b border-primary/20 pb-2 inline-block">
            {t("about.title")}
          </h2>
          <TerminalText text={t("about.intro")} className="text-xl max-w-3xl my-4" />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-sm font-mono">
            {t("about.trait.curious")}
          </Badge>
          <Badge variant="outline" className="text-sm font-mono">
            {t("about.trait.independent")}
          </Badge>
          <Badge variant="outline" className="text-sm font-mono">
            {t("about.trait.rigorous")}
          </Badge>
          <Badge variant="outline" className="text-sm font-mono">
            {t("about.trait.problemsolver")}
          </Badge>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-dashed hover:border-primary/50 transition-colors duration-300 group">
            <CardContent className="p-6">
              <blockquote className="italic text-muted-foreground">
                &ldquo;{t("about.quote")}&rdquo;
                <footer className="mt-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  — {t("about.quote.author")}
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
