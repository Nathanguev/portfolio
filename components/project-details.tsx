"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "./language-provider"

interface ProjectDetailsProps {
  project: {
    title: string
    description: string
    icon: React.ReactNode
    tags: string[]
    link?: string
    details?: {
      fullDescription: string
      challenges?: string[]
      technologies?: { name: string; icon: React.ReactNode }[]
      githubLink?: string
      liveLink?: string
    }
  }
  trigger?: React.ReactNode
}

export default function ProjectDetails({ project, trigger }: ProjectDetailsProps) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="ghost" size="sm" className="text-xs font-mono">
            {t("projects.viewdetails")}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <span className="text-primary">{project.icon}</span>
            {project.title}
          </DialogTitle>
          <DialogDescription className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="font-mono text-xs">
                {tag}
              </Badge>
            ))}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {project.details?.fullDescription ? (
            <p className="text-muted-foreground">{project.details.fullDescription}</p>
          ) : (
            <p className="text-muted-foreground">{project.description}</p>
          )}

          {project.details?.challenges && (
            <div className="space-y-2">
              <h3 className="text-lg font-medium">{t("projects.challenges")}</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {project.details.challenges.map((challenge, idx) => (
                  <li key={idx}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {project.details?.technologies && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">{t("projects.technologies")}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {project.details.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-3 bg-muted/30 rounded-md hover:bg-muted/50 transition-colors"
                  >
                    {tech.icon}
                    <span className="mt-2 text-xs font-medium text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-4">
            {project.details?.githubLink && (
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href={project.details.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  {t("projects.viewcode")}
                </a>
              </Button>
            )}
            {project.details?.liveLink && (
              <Button variant="default" size="sm" className="gap-2" asChild>
                <a href={project.details.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  {t("projects.livedemo")}
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
