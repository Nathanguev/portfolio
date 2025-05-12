"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Wrench, Network, Users } from "lucide-react"
import { useLanguage } from "./language-provider"

export default function Skills() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: t("skills.technical"),
      icon: <Code className="h-5 w-5" />,
      skills: ["Python", "Java", "C", "C++", "C#", "JavaScript", "PHP"],
    },
    {
      title: t("skills.databases"),
      icon: <Database className="h-5 w-5" />,
      skills: ["SQL", "PL/SQL", "Oracle", "MongoDB"],
    },
    {
      title: t("skills.tools"),
      icon: <Wrench className="h-5 w-5" />,
      skills: ["VS Code", "Office", "Figma", "Canva", "Fusion 360"],
    },
    {
      title: t("skills.systems"),
      icon: <Network className="h-5 w-5" />,
      skills: ["Linux", "Windows", "Cisco", "Aruba"],
    },
    {
      title: t("skills.soft"),
      icon: <Users className="h-5 w-5" />,
      skills: [t("skills.soft.teamwork"), t("skills.soft.communication"), t("skills.soft.adaptability"), t("skills.soft.autonomy")],
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
    <section id="skills" className="pt-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight font-mono border-b border-primary/20 pb-2 inline-block">
            {t("skills.title")}
          </h2>
          <p className="text-muted-foreground">{t("skills.subtitle")}</p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-md transition-all duration-300 group">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    <span className="text-primary">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-sm bg-muted px-2 py-1 rounded font-mono group-hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
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
