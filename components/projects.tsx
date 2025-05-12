"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Server,
  Gamepad2,
  Shield,
  Code,
  Terminal,
  Network,
  Cpu,
  Lock,
  FileCode,
  Layers,
  MonitorSmartphone,
  Workflow,
  Hammer,
  Laptop,
  Wifi,
  Database,
  Bug,
  GitBranch,
  Boxes,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import ProjectDetails from "./project-details"
import { useLanguage } from "./language-provider"

// Custom icon components for technologies that don't have direct Lucide equivalents
const UbuntuIcon = () => (
  <div className="h-10 w-10 flex items-center justify-center text-primary">
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="5.5" r="1.5" />
      <circle cx="17.5" cy="15.5" r="1.5" />
      <circle cx="6.5" cy="15.5" r="1.5" />
      <path d="M12 7v10M6.5 17l10-3M17.5 17L7.5 14" />
    </svg>
  </div>
)

const NginxIcon = () => (
  <div className="h-10 w-10 flex items-center justify-center text-green-500">
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  </div>
)

const ArduinoIcon = () => (
  <div className="h-10 w-10 flex items-center justify-center text-blue-500">
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <circle cx="9" cy="9" r="1" />
      <circle cx="15" cy="9" r="1" />
      <path d="M8 14h8" />
    </svg>
  </div>
)

const GodotIcon = () => (
  <div className="h-10 w-10 flex items-center justify-center text-blue-400">
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  </div>
)

const KaliIcon = () => (
  <div className="h-10 w-10 flex items-center justify-center text-primary">
    <Shield className="h-6 w-6" />
    <Terminal className="h-4 w-4 absolute" />
  </div>
)

const CSharpIcon = () => (
  <div className="h-10 w-10 flex items-center justify-center text-purple-500">
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8l2 2-2 2M18 6l2 2-2 2M14 4l2 2-2 2M16 16l2-2-2-2" />
      <rect x="4" y="4" width="12" height="16" rx="2" />
    </svg>
  </div>
)

const CPlusPlusIcon = () => (
  <div className="h-10 w-10 flex items-center justify-center text-blue-600">
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 4h2M18 8h2M18 12h2M18 16h2M18 20h2M4 12h10" />
      <rect x="4" y="4" width="10" height="16" rx="2" />
    </svg>
  </div>
)

const CIcon = () => (
  <div className="h-10 w-10 flex items-center justify-center text-blue-500">
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h10" />
      <rect x="4" y="4" width="10" height="16" rx="2" />
    </svg>
  </div>
)

export default function Projects() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: t("projects.server.title"),
      description: t("projects.server.description"),
      icon: <Server className="h-5 w-5" />,
      tags: ["Linux", "Security", "Networking", "Bash"],
      details: {
        fullDescription: t("projects.server.description"),
        challenges: [
          t("projects.server.challenges.1"),
          t("projects.server.challenges.2"),
          t("projects.server.challenges.3"),
          t("projects.server.challenges.4"),
          t("projects.server.challenges.5"),
          t("projects.server.challenges.6"),
        ],
        technologies: [
          { name: "Ubuntu Server", icon: <UbuntuIcon /> },
          { name: "Nginx", icon: <NginxIcon /> },
          { name: "UFW", icon: <Shield className="h-10 w-10 text-orange-500" /> },
          { name: "Fail2Ban", icon: <Lock className="h-10 w-10 text-red-500" /> },
          { name: "SSH/SFTP", icon: <Terminal className="h-10 w-10 text-green-600" /> },
          { name: "Bash", icon: <Terminal className="h-10 w-10 text-yellow-500" /> },
          { name: "Port Forwarding", icon: <Network className="h-10 w-10 text-blue-500" /> },
        ],
        githubLink: "#",
      },
    },
    {
      title: t("projects.arduino.title"),
      description: t("projects.arduino.description"),
      icon: <Cpu className="h-5 w-5" />,
      tags: ["C++", "Arduino", "Electronics", "3D Printing"],
      details: {
        fullDescription: t("projects.arduino.description"),
        challenges: [
          t("projects.arduino.challenges.1"),
          t("projects.arduino.challenges.2"),
          t("projects.arduino.challenges.3"),
          t("projects.arduino.challenges.4"),
        ],
        technologies: [
          { name: "C++", icon: <CPlusPlusIcon /> },
          { name: "Arduino IDE", icon: <ArduinoIcon /> },
          { name: "3D Printing", icon: <Boxes className="h-10 w-10 text-teal-500" /> },
          { name: "Electronics", icon: <Cpu className="h-10 w-10 text-red-400" /> },
          { name: "Breadboards", icon: <Layers className="h-10 w-10 text-yellow-600" /> },
          { name: "Sensors", icon: <Wifi className="h-10 w-10 text-blue-400" /> },
          { name: "LCDs", icon: <MonitorSmartphone className="h-10 w-10 text-gray-500" /> },
        ],
        githubLink: "#",
      },
    },
    {
      title: t("projects.minigames.title"),
      description: t("projects.minigames.description"),
      icon: <Gamepad2 className="h-5 w-5" />,
      tags: ["C", "C++", "Terminal", "Game Development"],
      details: {
        fullDescription: t("projects.minigames.description"),
        challenges: [
          t("projects.minigames.challenges.1"),
          t("projects.minigames.challenges.2"),
          t("projects.minigames.challenges.3"),
          t("projects.minigames.challenges.4"),
        ],
        technologies: [
          { name: "C", icon: <CIcon /> },
          { name: "C++", icon: <CPlusPlusIcon /> },
          { name: "Terminal", icon: <Terminal className="h-10 w-10 text-green-500" /> },
          { name: "Data Structures", icon: <Layers className="h-10 w-10 text-blue-500" /> },
        ],
        githubLink: "#",
      },
    },
    {
      title: t("projects.sniffer.title"),
      description: t("projects.sniffer.description"),
      icon: <Network className="h-5 w-5" />,
      tags: ["C", "Networking", "Linux", "Sockets"],
      details: {
        fullDescription: t("projects.sniffer.description"),
        challenges: [
          t("projects.sniffer.challenges.1"),
          t("projects.sniffer.challenges.2"),
          t("projects.sniffer.challenges.3"),
          t("projects.sniffer.challenges.4"),
        ],
        technologies: [
          { name: "C", icon: <CIcon /> },
          { name: "Low-Level Sockets", icon: <Network className="h-10 w-10 text-blue-600" /> },
          { name: "Linux", icon: <Terminal className="h-10 w-10 text-orange-500" /> },
          { name: "Packet Analysis", icon: <FileCode className="h-10 w-10 text-green-500" /> },
        ],
        githubLink: "#",
      },
    },
    {
      title: t("projects.gamejam.title"),
      description: t("projects.gamejam.description"),
      icon: <Gamepad2 className="h-5 w-5" />,
      tags: ["Godot", "GDScript", "Git", "Team Project"],
      details: {
        fullDescription: t("projects.gamejam.description"),
        challenges: [
          t("projects.gamejam.challenges.1"),
          t("projects.gamejam.challenges.2"),
          t("projects.gamejam.challenges.3"),
          t("projects.gamejam.challenges.4"),
        ],
        technologies: [
          { name: "Godot Engine", icon: <GodotIcon /> },
          { name: "GDScript", icon: <FileCode className="h-10 w-10 text-blue-400" /> },
          { name: "Git", icon: <GitBranch className="h-10 w-10 text-orange-600" /> },
          { name: "GitHub", icon: <Code className="h-10 w-10 text-purple-500" /> },
          { name: "Team Collaboration", icon: <Workflow className="h-10 w-10 text-green-500" /> },
        ],
        githubLink: "#",
        liveLink: "#",
      },
    },
    {
      title: t("projects.tryhackme.title"),
      description: t("projects.tryhackme.description"),
      icon: <Shield className="h-5 w-5" />,
      tags: ["Cybersecurity", "Penetration Testing", "Ethical Hacking"],
      details: {
        fullDescription: t("projects.tryhackme.description"),
        challenges: [
          t("projects.tryhackme.challenges.1"),
          t("projects.tryhackme.challenges.2"),
          t("projects.tryhackme.challenges.3"),
          t("projects.tryhackme.challenges.4"),
          t("projects.tryhackme.challenges.5"),
          t("projects.tryhackme.challenges.6"),
        ],
        technologies: [
          { name: "Kali Linux", icon: <KaliIcon /> },
          { name: "Nmap", icon: <Wifi className="h-10 w-10 text-green-500" /> },
          { name: "Wireshark", icon: <Network className="h-10 w-10 text-blue-400" /> },
          { name: "John the Ripper", icon: <Hammer className="h-10 w-10 text-red-500" /> },
          { name: "Hydra", icon: <Database className="h-10 w-10 text-purple-500" /> },
          { name: "Burp Suite", icon: <Bug className="h-10 w-10 text-orange-500" /> },
        ],
        liveLink: "#",
      },
    },
    {
      title: t("projects.pacman.title"),
      description: t("projects.pacman.description"),
      icon: <Gamepad2 className="h-5 w-5" />,
      tags: ["C#", "Windows Forms", "Game Development"],
      details: {
        fullDescription: t("projects.pacman.description"),
        challenges: [
          t("projects.pacman.challenges.1"),
          t("projects.pacman.challenges.2"),
          t("projects.pacman.challenges.3"),
          t("projects.pacman.challenges.4"),
        ],
        technologies: [
          { name: "C#", icon: <CSharpIcon /> },
          { name: "Windows Forms", icon: <Laptop className="h-10 w-10 text-blue-500" /> },
          { name: "OOP", icon: <Layers className="h-10 w-10 text-purple-500" /> },
          { name: "Game Logic", icon: <Workflow className="h-10 w-10 text-green-500" /> },
        ],
        githubLink: "#",
        liveLink: "#",
      },
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
    <section id="projects" className="pt-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight font-mono border-b border-primary/20 pb-2 inline-block">
            {t("projects.title")}
          </h2>
          <p className="text-muted-foreground">{t("projects.subtitle")}</p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="h-full border hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-primary">{project.icon}</span>
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <ProjectDetails project={project} />
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
