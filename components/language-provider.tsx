"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "fr"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    "nav.about": "About",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.more": "More",
    "nav.contact": "Contact",

    // About
    "about.title": "About",
    "about.intro":
      "I'm Nathan Guevara, a French computer science student focused on networks, cybersecurity, and systems administration.",
    "about.trait.curious": "Curious",
    "about.trait.independent": "Independent",
    "about.trait.rigorous": "Rigorous",
    "about.trait.problemsolver": "Problem-solver",
    "about.quote": "The best way to predict the future is to invent it.",
    "about.quote.author": "Alan Kay",

    // Education
    "education.title": "Education",
    "education.subtitle": "My academic journey and qualifications",
    "education.utc.degree": "Computer Engineering (apprenticeship)",
    "education.iut.degree": "BUT in Computer Science (Networks)",
    "education.lycee.degree": "General Baccalaureate (Maths, Physics)",
    "education.linguistic.degree": "Workaway Program",
    "education.linguistic.institution": "Linguistic stay",

    // Skills
    "skills.title": "Skills",
    "skills.subtitle": "Technologies and competencies I've developed",
    "skills.technical": "Technical",
    "skills.databases": "Databases",
    "skills.tools": "Tools",
    "skills.systems": "Systems & Networking",
    "skills.soft": "Soft Skills",
    "skills.soft.teamwork" : "Teamwork",
    "skills.soft.communication" : "Communication",
    "skills.soft.adaptability" : "Adaptability",
    "skills.soft.autonomy" : "Autonomy",
    

    // Experience
    "experience.title": "Experience",
    "experience.subtitle": "Professional experiences and internships",
    "experience.aftral.title": "Internship at AFTRAL",
    "experience.aftral.description":
      "IT infrastructure and network management internship focused on classroom modernization and technical support.",
    "experience.aftral.tasks": "Tasks & Responsibilities",
    "experience.aftral.task1": "Classroom renovation and modernization",
    "experience.aftral.task2": "Network installation and configuration",
    "experience.aftral.task3": "Computer maintenance and troubleshooting",
    "experience.aftral.task4": "Development of small automation scripts",
    "experience.aftral.reflection":
      "This internship taught me the importance of documentation and planning when implementing network solutions. I also gained valuable experience in troubleshooting real-world IT issues and communicating technical concepts to non-technical staff.",
    "experience.toronto.title": "Language & Cultural Immersion Trip",
    "experience.toronto.description":
      "A 3-month language and cultural immersion trip through Workaway to improve English skills and experience Canadian culture.",
    "experience.toronto.task1": "Gardening and outdoor maintenance",
    "experience.toronto.task2": "Cooking and participating in daily household tasks",
    "experience.toronto.task3": "Cultural exchange with a local host family",
    "experience.toronto.task4": "Practiced English in real-life situations",
    "experience.toronto.reflection":
      "This immersion experience significantly improved my English fluency and provided valuable cultural insights. Living with a host family taught me adaptability and cross-cultural communication skills that are invaluable in today's global tech environment.",
    "experience.process.planning": "Planning & Research",
    "experience.process.implementation": "Implementation",
    "experience.process.testing": "Testing & Feedback",
    "experience.process.documentation": "Documentation",
    "experience.reflection": "Reflection",

    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "A selection of my personal and academic projects",
    "projects.viewdetails": "View Details",
    "projects.challenges": "Challenges",
    "projects.technologies": "Technologies",
    "projects.viewcode": "View Code",
    "projects.livedemo": "Live Demo",
    "projects.server.title": "Personal Ubuntu Server",
    "projects.server.description":
      "Set up and configured a personal Ubuntu server from scratch, hosting web and file services with a strong focus on security best practices.",
    "projects.server.challenges.1": "Initial installation and setup of the Linux server environment",
    "projects.server.challenges.2": "Deployed a web server using Nginx",
    "projects.server.challenges.3": "Applied UFW rules and hardened the system with Fail2Ban",
    "projects.server.challenges.4": "Secured SSH access using key-based authentication, disabling password login",
    "projects.server.challenges.5": "Automated security updates and system monitoring",
    "projects.server.challenges.6": "Developed Bash scripts for maintenance and system tasks",
    "projects.arduino.title": "Arduino Projects",
    "projects.arduino.description":
      "Designed and built multiple interactive Arduino-based projects combining embedded programming, 3D-printed components, and circuit design.",
    "projects.arduino.challenges.1": "Built custom circuits with sensors, LCD displays, and buttons",
    "projects.arduino.challenges.2": "Programmed microcontrollers to control LEDs, motors, and sensors",
    "projects.arduino.challenges.3": "Designed and printed functional enclosures using 3D printers",
    "projects.arduino.challenges.4": "Experimented with basic embedded systems and analog input/output",
    "projects.minigames.title": "Mini-Games",
    "projects.minigames.description":
      "Developed several classic terminal-based games to practice programming logic, data structures, and modular design.",
    "projects.minigames.challenges.1": "Built games such as Hangman, Mastermind (Motus), Tic Tac Toe, and Connect Four",
    "projects.minigames.challenges.2": "Implemented user input handling, win conditions, and game flow",
    "projects.minigames.challenges.3": "Applied loops, conditionals, and functions to create clean and reusable code",
    "projects.minigames.challenges.4": "Explored event-driven basics in C",
    "projects.sniffer.title": "Network Sniffer",
    "projects.sniffer.description":
      "Created a custom network packet sniffer in C that analyzes traffic in real-time using raw socket access under Linux.",
    "projects.sniffer.challenges.1": "Built a packet capturing tool with raw socket programming",
    "projects.sniffer.challenges.2": "Parsed IP, TCP, and UDP headers",
    "projects.sniffer.challenges.3": "Displayed traffic in both hexadecimal and ASCII formats",
    "projects.sniffer.challenges.4": "Applied networking protocol knowledge and buffer management techniques",
    "projects.gamejam.title": "Code Game Jam 2024",
    "projects.gamejam.description":
      "Participated in the 2024 Code Game Jam, building a complete game in a 6-person team within a 30-hour time limit.",
    "projects.gamejam.challenges.1": "Designed and implemented core gameplay mechanics under tight constraints",
    "projects.gamejam.challenges.2": "Collaborated using Git and GitHub for version control",
    "projects.gamejam.challenges.3": "Balanced game difficulty and player progression",
    "projects.gamejam.challenges.4": "Delivered and presented a polished prototype within the given theme",
    "projects.tryhackme.title": "TryHackMe Cybersecurity Training",
    "projects.tryhackme.description":
      "Completed hands-on cybersecurity training on TryHackMe, focusing on ethical hacking, vulnerability assessment, and network analysis.",
    "projects.tryhackme.challenges.1": "Performed reconnaissance and scanning with Nmap and custom scripts",
    "projects.tryhackme.challenges.2": "Captured and analyzed traffic with Wireshark",
    "projects.tryhackme.challenges.3": "Cracked passwords using Hydra and John the Ripper",
    "projects.tryhackme.challenges.4": "Gained root access through privilege escalation on Linux and Windows VMs",
    "projects.tryhackme.challenges.5": "Solved web-based vulnerabilities (XSS, SQLi, CSRF, etc.)",
    "projects.tryhackme.challenges.6": "Simulated real-world attacks in sandbox environments",
    "projects.pacman.title": "PacMan-Inspired Game",
    "projects.pacman.description":
      "Developed a 2D game inspired by Pac-Man using Windows Forms for GUI and event handling.",
    "projects.pacman.challenges.1": "Programmed player and enemy movement logic with basic AI",
    "projects.pacman.challenges.2": "Managed collision detection, scoring, and win conditions",
    "projects.pacman.challenges.3": "Built a graphical interface with menus and HUD elements",
    "projects.pacman.challenges.4": "Applied object-oriented programming principles in a playful context",

    // More
    "more.title": "More About Me",
    "more.subtitle": "Hobbies, interests, and other aspects of my life",
    "more.hobbies": "Hobbies & Interests",
    "more.hobby.3dmodeling": "3D Modeling",
    "more.hobby.3dmodeling.desc": "Creating 3D models for both practical applications and artistic expression.",
    "more.hobby.electronics": "Electronics (Arduino)",
    "more.hobby.electronics.desc": "Building small electronic projects and experimenting with Arduino-based systems.",
    "more.hobby.cooking": "Cooking",
    "more.hobby.cooking.desc": "Exploring different cuisines and perfecting techniques for various dishes.",
    "more.hobby.travel": "Travel",
    "more.hobby.travel.desc": "Discovering new places, cultures, and experiences around the world.",
    "more.hobby.photography": "Photography",
    "more.hobby.photography.desc": "Capturing moments and scenes with a focus on urban and landscape photography.",
    "more.quote": "Random Quote",
    "more.newquote": "New Quote",
    "more.viewphoto": "View Photo",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Get in touch with me for collaborations or inquiries",
    "contact.form.title": "Send a Message",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.connect.title": "Connect With Me",
    "contact.response.title": "Response Time",
    "contact.response.text":
      "I typically respond to messages within 24-48 hours. For urgent matters, please indicate so in your message.",

    // Contact form
    "contact.form.sending": "Sending...",
    "contact.form.success": "Message sent successfully! I'll get back to you soon.",
    "contact.form.error": "There was an error sending your message. Please try again later.",

    // Footer
    "footer.copyright": "© Nathan Guevara",
    "footer.easteregg": 'Type "nathan" anywhere for a surprise',
    "footer.designed": "Designed and built with",
    "footer.by": "by Nathan Guevara",

    // Terminal
    "terminal.welcome": "Welcome to Nathan's terminal. Type 'help' for available commands.",
    "terminal.help": "Available commands:",
    "terminal.help.help": "- help: Show this help message",
    "terminal.help.about": "- about: Learn about Nathan",
    "terminal.help.skills": "- skills: List my technical skills",
    "terminal.help.contact": "- contact: How to reach me",
    "terminal.help.projects": "- projects: View my projects",
    "terminal.help.clear": "- clear: Clear the terminal",
    "terminal.help.exit": "- exit: Close the terminal",
    "terminal.about.line1": "Nathan Guevara",
    "terminal.about.line2":
      "French computer science student focused on networks, cybersecurity, and systems administration.",
    "terminal.about.line3":
      "Currently studying at IUT Amiens, pursuing a BUT in Computer Science with a specialization in Networks.",
    "terminal.skills.title": "Technical Skills:",
    "terminal.skills.languages": "- Languages: Python, Java, C, C++, C#, JavaScript, PHP",
    "terminal.skills.databases": "- Databases: SQL, PL/SQL",
    "terminal.skills.systems": "- Systems: Linux, Windows",
    "terminal.skills.networking": "- Networking: Cisco, Aruba",
    "terminal.skills.tools": "- Tools: VS Code, Office, Figma, Canva, Fusion 360",
    "terminal.contact.title": "Contact Information:",
    "terminal.contact.email": "- Email: contact[at]nathanguevara.com",
    "terminal.contact.linkedin": "- LinkedIn: linkedin.com/in/nathan-guevara",
    "terminal.contact.github": "- GitHub: github.com/nathanguevara",
    "terminal.projects.title": "Notable Projects:",
    "terminal.projects.server": "- Personal Ubuntu Server (Security-focused)",
    "terminal.projects.arduino": "- Arduino Mini-Games (C++)",
    "terminal.projects.tryhackme": "- TryHackMe Training (Cybersecurity)",
    "terminal.projects.gamejam": "- Game Jam 2024 (Team Project)",
    "terminal.error": "Command not found: {command}. Type 'help' for available commands.",
  },
  fr: {
    // Header
    "nav.about": "À propos",
    "nav.education": "Formation",
    "nav.skills": "Compétences",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.more": "Plus",
    "nav.contact": "Contact",

    // About
    "about.title": "À propos",
    "about.intro":
      "Je m'appelle Nathan Guevara, étudiant en informatique, spécialisé en réseaux, cybersécurité et administration système.",
    "about.trait.curious": "Curieux",
    "about.trait.independent": "Autonome",
    "about.trait.rigorous": "Rigoureux",
    "about.trait.problemsolver": "Esprit analytique",
    "about.quote": "La meilleure façon de prédire l'avenir est de l'inventer.",
    "about.quote.author": "Alan Kay",

    // Education
    "education.title": "Formation",
    "education.subtitle": "Mon parcours académique et mes qualifications",
    "education.utc.degree": "Ingénierie Informatique (apprentissage)",
    "education.iut.degree": "BUT Informatique (Réseaux)",
    "education.lycee.degree": "Baccalauréat Général (Maths, Physique)",
    "education.linguistic.degree": "Programme Workaway",
    "education.linguistic.institution": "Séjour linguistique",

    // Skills
    "skills.title": "Compétences",
    "skills.subtitle": "Technologies et compétences que j'ai développées",
    "skills.technical": "Compétences techniques",
    "skills.databases": "Bases de données",
    "skills.tools": "Outils",
    "skills.systems": "Systèmes & Réseaux",
    "skills.soft": "Savoir-être",
    "skills.soft.teamwork" : "Travail d'équipe",
    "skills.soft.communication" : "Communication",
    "skills.soft.adaptability" : "Capacité d'adaptation",
    "skills.soft.autonomy" : "Autonomie",

    // Experience
    "experience.title": "Expérience",
    "experience.subtitle": "Expériences professionnelles et stages",
    "experience.aftral.title": "Stage chez AFTRAL",
    "experience.aftral.description":
      "Stage en infrastructure informatique et gestion réseau, axé sur la modernisation des salles de classe et le support technique.",
    "experience.aftral.tasks": "Tâches & Responsabilités",
    "experience.aftral.task1": "Rénovation et modernisation des salles de classe",
    "experience.aftral.task2": "Installation et configuration réseau",
    "experience.aftral.task3": "Maintenance informatique et dépannage",
    "experience.aftral.task4": "Développement de petits scripts d'automatisation",
    "experience.aftral.reflection":
      "Ce stage m'a appris l'importance de la documentation et de la planification dans la mise en place de solutions réseau. J'ai également acquis une expérience précieuse dans la résolution de problèmes informatiques réels et la communication de concepts techniques à un personnel non technique.",
    "experience.toronto.title": "Séjour linguistique et culturel",
    "experience.toronto.description":
      "Un séjour de 3 mois en immersion linguistique et culturelle via Workaway pour améliorer mes compétences en anglais et découvrir la culture canadienne.",
    "experience.toronto.task1": "Jardinage et entretien extérieur",
    "experience.toronto.task2": "Cuisine et participation aux tâches ménagères quotidiennes",
    "experience.toronto.task3": "Échange culturel avec une famille d'accueil locale",
    "experience.toronto.task4": "Pratique de l'anglais en situations réelles",
    "experience.toronto.reflection":
      "Cette immersion a considérablement amélioré ma maîtrise de l'anglais et m'a fourni de précieuses connaissances culturelles. Vivre avec une famille d'accueil m'a enseigné l'adaptabilité et les compétences en communication interculturelle qui sont inestimables dans l'environnement technologique mondial d'aujourd'hui.",
    "experience.process.planning": "Planification & Recherche",
    "experience.process.implementation": "Implémentation",
    "experience.process.testing": "Tests & Retours",
    "experience.process.documentation": "Documentation",
    "experience.reflection": "Réflexion",

    // Projects
    "projects.title": "Projets",
    "projects.subtitle": "Une sélection de mes projets personnels et académiques",
    "projects.viewdetails": "Voir les détails",
    "projects.challenges": "Défis",
    "projects.technologies": "Technologies",
    "projects.viewcode": "Voir le code",
    "projects.livedemo": "Démo en direct",
    "projects.server.title": "Serveur Ubuntu Personnel",
    "projects.server.description":
      "Configuration d'un serveur Ubuntu personnel à partir de zéro, hébergeant un service web et un cloud avec un accent fort sur les meilleures pratiques de sécurité.",
    "projects.server.challenges.1": "Installation et configuration initiale du serveur Linux",
    "projects.server.challenges.2": "Mise en place d'un serveur web avec Nginx",
    "projects.server.challenges.3": "Application des règles UFW et renforcement de la sécurité avec Fail2Ban",
    "projects.server.challenges.4": 
      "Protection de l'accès SSH avec une authentification par clé, désactivation de la connexion par mot de passe",
    "projects.server.challenges.5": "Automatisation des mises à jour de sécurité",
    "projects.server.challenges.6": "Développement de scripts Bash pour la maintenance et les tâches système",
    "projects.arduino.title": "Projets Arduino",
    "projects.arduino.description":
      "Conception et construction de plusieurs projets interactifs basés sur Arduino combinant programmation embarquée, composants imprimés en 3D et conception de circuits.",
    "projects.arduino.challenges.1": "Conception de circuits sur mesure avec des capteurs, des écrans LCD et des boutons",
    "projects.arduino.challenges.2": "Programmation de microcontrôleurs pour contrôler des LED, des moteurs et des capteurs",
    "projects.arduino.challenges.3": "Conception et impression de boîtiers fonctionnelles à l'imprimante 3D",
    "projects.arduino.challenges.4": "Expérimentation avec des systèmes embarqués de base et des entrées/sorties analogiques",
    "projects.minigames.title": "Mini-Jeux",
    "projects.minigames.description":
      "Développement de plusieurs jeux classiques en ligne de commande pour pratiquer la logique de programmation, les structures de données et la conception modulaire.",
    "projects.minigames.challenges.1": "Création de jeux comme le Pendu, Mastermind (Motus), Tic-Tac-Toe et Puissance 4",
    "projects.minigames.challenges.2": 
      "Mise en place de la gestion des entrées utilisateur, des conditions de victoire et du déroulement du jeu",
    "projects.minigames.challenges.3": 
      "Utilisation de boucles, de conditions et de fonctions pour créer un code propre et réutilisable",
    "projects.minigames.challenges.4": "Exploration des bases de la programmation événementielle en C",
    "projects.sniffer.title": "Sniffer Réseau",
    "projects.sniffer.description":
      "Création d'un sniffer de paquets réseau personnalisé en C analysant le trafic en temps réel en utilisant l'accès aux sockets bruts sous Linux.",
    "projects.sniffer.challenges.1": "Création d'un outil de capture de paquets avec la programmation de sockets bruts",
    "projects.sniffer.challenges.2": "Analyse des en-têtes IP, TCP et UDP",
    "projects.sniffer.challenges.3": "Affichage du trafic en formats hexadécimal et ASCII",
    "projects.sniffer.challenges.4": 
      "Application des connaissances en protocoles réseau et des techniques de gestion des tampons",
    "projects.gamejam.title": "Code Game Jam 2024",
    "projects.gamejam.description":
      "Participation à la Code Game Jam 2024, construction d'un jeu complet en équipe de 6 personnes dans un délai de 30 heures.",
    "projects.gamejam.challenges.1": 
    "Conception et mise en œuvre des mécaniques de jeu principales sous des contraintes strictes",
    "projects.gamejam.challenges.2": "Collaboration avec Git et GitHub pour le contrôle de version",
    "projects.gamejam.challenges.3": "Équilibrage de la difficulté du jeu et de la progression du joueur",
    "projects.gamejam.challenges.4": "Livraison et présentation d'un prototype soigné dans le cadre du thème donné",
    "projects.tryhackme.title": "Formation Cybersécurité TryHackMe",
    "projects.tryhackme.description":
      "Formation pratique en cybersécurité sur TryHackMe, axée sur le piratage éthique, l'évaluation des vulnérabilités et l'analyse de réseau.",
    "projects.tryhackme.challenges.1": "Effectuer de la reconnaissance et des scans avec Nmap et des scripts personnalisés",
    "projects.tryhackme.challenges.2": "Capturer et analysé du trafic avec Wireshark",
    "projects.tryhackme.challenges.3": "Cracker des mots de passe avec Hydra et John the Ripper",
    "projects.tryhackme.challenges.4": 
      "Obtenir  un accès root via une escalade de privilèges sur des machines virtuelles Linux et Windows",
    "projects.tryhackme.challenges.5": "Résoudre des vulnérabilités web (XSS, SQLi, CSRF, etc.)",
    "projects.tryhackme.challenges.6": "Simuler des attaques réelles dans des environnements sandbox",
    "projects.pacman.title": "Jeu inspiré de PacMan",
    "projects.pacman.description": 
      "Développement d'un jeu 2D inspiré de Pac-Man utilisant Windows Forms pour l'interface graphique et la gestion des événements.",
    "projects.pacman.challenges.1": "Programmer la logique de mouvement du joueur et de l'ennemi avec une IA de base",
    "projects.pacman.challenges.2": "Gérer la détection de collisions, les scores et les conditions de victoire",
    "projects.pacman.challenges.3": "Créer une interface graphique avec des menus et des éléments HUD",
    "projects.pacman.challenges.4": "Appliquer les principes de la programmation orientée objet dans un contexte ludique",

    // More
    "more.title": "Plus sur moi",
    "more.subtitle": "Loisirs, intérêts et autres aspects de ma vie",
    "more.hobbies": "Loisirs & Intérêts",
    "more.hobby.3dmodeling": "Modélisation 3D",
    "more.hobby.3dmodeling.desc": "Création de modèles 3D pour des applications pratiques et l'expression artistique.",
    "more.hobby.electronics": "Électronique (Arduino)",
    "more.hobby.electronics.desc":
      "Construction de petits projets électroniques et expérimentation avec des systèmes basés sur Arduino.",
    "more.hobby.cooking": "Cuisine",
    "more.hobby.cooking.desc":
      "Exploration de différentes cuisines et perfectionnement des techniques pour divers plats.",
    "more.hobby.travel": "Voyage",
    "more.hobby.travel.desc": "Découverte de nouveaux lieux, cultures et expériences à travers le monde.",
    "more.hobby.photography": "Photographie",
    "more.hobby.photography.desc":
      "Capture de moments et de scènes avec un accent sur la photographie urbaine et paysagère.",
    "more.quote": "Citation aléatoire",
    "more.newquote": "Nouvelle citation",
    "more.viewphoto": "Voir la photo",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Contactez-moi pour des collaborations ou des demandes",
    "contact.form.title": "Envoyer un message",
    "contact.form.name": "Nom",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Envoyer le message",
    "contact.connect.title": "Me contacter",
    "contact.response.title": "Délai de réponse",
    "contact.response.text":
      "Je réponds généralement aux messages dans un délai de 24 à 48 heures. Pour les questions urgentes, veuillez l'indiquer dans votre message.",

    // Contact form
    "contact.form.sending": "Envoi en cours...",
    "contact.form.success": "Message envoyé avec succès ! Je vous recontacterai bientôt.",
    "contact.form.error": "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.",

    // Footer
    "footer.copyright": "© Nathan Guevara",
    "footer.easteregg": 'Tapez "nathan" n\'importe où pour une surprise',
    "footer.designed": "Conçu et développé avec",
    "footer.by": "par Nathan Guevara",

    // Terminal
    "terminal.welcome": "Bienvenue dans le terminal de Nathan. Tapez 'help' pour les commandes disponibles.",
    "terminal.help": "Commandes disponibles :",
    "terminal.help.help": "- help: Afficher ce message d'aide",
    "terminal.help.about": "- about: En savoir plus sur Nathan",
    "terminal.help.skills": "- skills: Lister mes compétences techniques",
    "terminal.help.contact": "- contact: Comment me contacter",
    "terminal.help.projects": "- projects: Voir mes projets",
    "terminal.help.clear": "- clear: Effacer le terminal",
    "terminal.help.exit": "- exit: Fermer le terminal",
    "terminal.about.line1": "Nathan Guevara",
    "terminal.about.line2":
      "Étudiant français en informatique spécialisé dans les réseaux, la cybersécurité et l'administration système.",
    "terminal.about.line3":
      "Actuellement étudiant à l'IUT d'Amiens, poursuivant un BUT en Informatique avec une spécialisation en Réseaux.",
    "terminal.skills.title": "Compétences techniques :",
    "terminal.skills.languages": "- Langages : Python, Java, C, C++, C#, JavaScript, PHP",
    "terminal.skills.databases": "- Bases de données : SQL, PL/SQL",
    "terminal.skills.systems": "- Systèmes : Linux, Windows",
    "terminal.skills.networking": "- Réseaux : Cisco, Aruba",
    "terminal.skills.tools": "- Outils : VS Code, Office, Figma, Canva, Fusion 360",
    "terminal.contact.title": "Informations de contact :",
    "terminal.contact.email": "- Email : contact[at]nathanguevara.com",
    "terminal.contact.linkedin": "- LinkedIn : linkedin.com/in/nathan-guevara",
    "terminal.contact.github": "- GitHub : github.com/nathanguevara",
    "terminal.projects.title": "Projets notables :",
    "terminal.projects.server": "- Serveur Ubuntu Personnel (Axé sur la sécurité)",
    "terminal.projects.arduino": "- Mini-Jeux Arduino (C++)",
    "terminal.projects.tryhackme": "- Formation TryHackMe (Cybersécurité)",
    "terminal.projects.gamejam": "- Game Jam 2024 (Projet d'équipe)",
    "terminal.error": "Commande non trouvée : {command}. Tapez 'help' pour les commandes disponibles.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
  defaultLanguage = "en",
}: {
  children: React.ReactNode
  defaultLanguage?: Language
}) {
  const [language, setLanguage] = useState<Language>(defaultLanguage)

  // Function to translate text
  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  // Set the HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
