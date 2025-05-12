"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  MapPin,
  Lightbulb,
  Network,
  Wrench,
  Terminal,
  FileCode,
  Utensils,
  Flower2,
  Languages,
  Users,
} from "lucide-react"
import { useLanguage } from "./language-provider"

export default function Experience() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: t("experience.aftral.title"),
      period: "Jan–Mar 2025",
      location: "France",
      description: t("experience.aftral.description"),
      responsibilities: [
        { text: t("experience.aftral.task1"), icon: <Network className="h-4 w-4 text-primary" /> },
        { text: t("experience.aftral.task2"), icon: <Terminal className="h-4 w-4 text-primary" /> },
        { text: t("experience.aftral.task3"), icon: <Wrench className="h-4 w-4 text-primary" /> },
        { text: t("experience.aftral.task4"), icon: <FileCode className="h-4 w-4 text-primary" /> },
      ],
      reflection: t("experience.aftral.reflection"),
    },
    {
      title: t("experience.toronto.title"),
      period: "Apr–Jun 2023",
      location: "Toronto, Canada",
      description: t("experience.toronto.description"),
      responsibilities: [
        { text: t("experience.toronto.task1"), icon: <Flower2 className="h-4 w-4 text-primary" /> },
        {
          text: t("experience.toronto.task2"),
          icon: <Utensils className="h-4 w-4 text-primary" />,
        },
        { text: t("experience.toronto.task3"), icon: <Users className="h-4 w-4 text-primary" /> },
        { text: t("experience.toronto.task4"), icon: <Languages className="h-4 w-4 text-primary" /> },
      ],
      reflection: t("experience.toronto.reflection"),
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
    <section id="experience" className="pt-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight font-mono border-b border-primary/20 pb-2 inline-block">
            {t("experience.title")}
          </h2>
          <p className="text-muted-foreground">{t("experience.subtitle")}</p>
        </motion.div>

        {experiences.map((experience, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="overflow-hidden border-primary/20 hover:border-primary/50 transition-all duration-300 mb-6">
              <CardHeader className="bg-muted/50">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <CardTitle className="text-xl font-medium">{experience.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                    <MapPin className="h-4 w-4 ml-2" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <p className="text-muted-foreground">{experience.description}</p>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">{t("experience.aftral.tasks")}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <div className="mt-0.5">{responsibility.icon}</div>
                        <span className="text-sm">{responsibility.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conditional diagram based on experience type */}
                <div className="py-4">
                  {index === 0 ? (
                    // AFTRAL Internship - Technical workflow diagram
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-center">
                      <div className="bg-primary/10 p-3 rounded-md w-full md:w-1/4">
                        <div className="bg-primary/20 rounded-full p-2 mx-auto w-10 h-10 flex items-center justify-center mb-2">
                          <span className="font-bold">1</span>
                        </div>
                        <span>{t("experience.aftral.process.analysis")}</span>
                      </div>
                      <div className="hidden md:block text-primary">→</div>
                      <div className="bg-primary/10 p-3 rounded-md w-full md:w-1/4">
                        <div className="bg-primary/20 rounded-full p-2 mx-auto w-10 h-10 flex items-center justify-center mb-2">
                          <span className="font-bold">2</span>
                        </div>
                        <span>{t("experience.aftral.process.implementation")}</span>
                      </div>
                      <div className="hidden md:block text-primary">→</div>
                      <div className="bg-primary/10 p-3 rounded-md w-full md:w-1/4">
                        <div className="bg-primary/20 rounded-full p-2 mx-auto w-10 h-10 flex items-center justify-center mb-2">
                          <span className="font-bold">3</span>
                        </div>
                        <span>{t("experience.aftral.process.testing")}</span>
                      </div>
                      <div className="hidden md:block text-primary">→</div>
                      <div className="bg-primary/10 p-3 rounded-md w-full md:w-1/4">
                        <div className="bg-primary/20 rounded-full p-2 mx-auto w-10 h-10 flex items-center justify-center mb-2">
                          <span className="font-bold">4</span>
                        </div>
                        <span>{t("experience.aftral.process.documentation")}</span>
                      </div>
                    </div>
                  ) : (
                    // Toronto Language Trip - Language immersion process diagram
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-center">
                      <div className="bg-primary/10 p-3 rounded-md w-full md:w-1/4">
                        <div className="bg-primary/20 rounded-full p-2 mx-auto w-10 h-10 flex items-center justify-center mb-2">
                          <span className="font-bold">1</span>
                        </div>
                        <span>{t("experience.toronto.process.arrival")}</span>
                      </div>
                      <div className="hidden md:block text-primary">→</div>
                      <div className="bg-primary/10 p-3 rounded-md w-full md:w-1/4">
                        <div className="bg-primary/20 rounded-full p-2 mx-auto w-10 h-10 flex items-center justify-center mb-2">
                          <span className="font-bold">2</span>
                        </div>
                        <span>{t("experience.toronto.process.adaptation")}</span>
                      </div>
                      <div className="hidden md:block text-primary">→</div>
                      <div className="bg-primary/10 p-3 rounded-md w-full md:w-1/4">
                        <div className="bg-primary/20 rounded-full p-2 mx-auto w-10 h-10 flex items-center justify-center mb-2">
                          <span className="font-bold">3</span>
                        </div>
                        <span>{t("experience.toronto.process.immersion")}</span>
                      </div>
                      <div className="hidden md:block text-primary">→</div>
                      <div className="bg-primary/10 p-3 rounded-md w-full md:w-1/4">
                        <div className="bg-primary/20 rounded-full p-2 mx-auto w-10 h-10 flex items-center justify-center mb-2">
                          <span className="font-bold">4</span>
                        </div>
                        <span>{t("experience.toronto.process.return")}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-muted/30 p-4 rounded-md border border-dashed border-primary/20">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">{t("experience.reflection")}</h4>
                      <p className="text-sm text-muted-foreground">{experience.reflection}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
