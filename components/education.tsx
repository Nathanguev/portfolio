"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, MapPin } from "lucide-react"
import { useLanguage } from "./language-provider"

export default function Education() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educationItems = [
    {
      period: "2025–2028",
      institution: "UTC, Compiègne",
      degree: t("education.utc.degree"),
      location: "Compiègne, France",
    },
    {
      period: "2023–2025",
      institution: "IUT Amiens",
      degree: t("education.iut.degree"),
      location: "Amiens, France",
    },
    {
      period: "2019–2022",
      institution: "Lycée Boucher de Perthes",
      degree: t("education.lycee.degree"),
      location: "Abbeville, France",
    },
  ]

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
    <section id="education" className="pt-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight font-mono border-b border-primary/20 pb-2 inline-block">
            {t("education.title")}
          </h2>
          <p className="text-muted-foreground">{t("education.subtitle")}</p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-md transition-all duration-300 group">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-medium">{item.institution}</CardTitle>
                    <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                      {item.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 mb-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span className="text-sm">{item.degree}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
