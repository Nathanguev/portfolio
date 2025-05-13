"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { useLanguage } from "./language-provider"
import { sendEmail, type FormData } from "@/app/actions/send-email"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Contact() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const result = await sendEmail(formData)

      if (result.success) {
        setSubmitResult({
          success: true,
          message: t("contact.form.success"),
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitResult({
          success: false,
          message: t("contact.form.error"),
        })
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: t("contact.form.error"),
      })
    } finally {
      setIsSubmitting(false)
    }
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
    <section id="contact" className="pt-16 pb-12">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight font-mono border-b border-primary/20 pb-2 inline-block">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground">{t("contact.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{t("contact.form.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t("contact.form.name")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="font-mono"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t("contact.form.email")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="font-mono"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t("contact.form.message")}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[120px] font-mono resize-none"
                      disabled={isSubmitting}
                    />
                  </div>

                  {submitResult && (
                    <Alert variant={submitResult.success ? "default" : "destructive"}>
                      {submitResult.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                      <AlertDescription>{submitResult.message}</AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full font-mono" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t("contact.form.sending")}
                      </>
                    ) : (
                      t("contact.form.send")
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{t("contact.connect.title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-sm font-mono">
                      {/* Email hidden with JavaScript protection */}
                      <span className="select-all">nathan.guevara.pro@gmail.com</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a href="https://www.linkedin.com/in/nathan-guevara-84b7002a4/" className="text-sm font-mono hover:text-primary transition-colors" target="_blank">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a href="https://github.com/Nathanguev" className="text-sm font-mono hover:text-primary transition-colors" target="_blank">
                      Github
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="text-sm font-medium mb-3">{t("contact.response.title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("contact.response.text")}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
