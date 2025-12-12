// data/StackData.ts
import { IconName } from "@/lib/iconMap"

export interface TechnicalStackCategory {
  title: string
  iconName: IconName
  color: 'cyan' | 'emerald' | 'blue' | 'purple' | 'orange' | 'gray' | 'red' | 'teal'
  items: string[]
}

export type TechnicalStackData = Record<string, TechnicalStackCategory>

export const technicalStackData: TechnicalStackData = {
  mobile: {
    title: "Développement Mobile",
    iconName: "Smartphone",
    color: "cyan",
    items: [
      "Flutter & Dart",
      "Applications iOS & Android",
      "Kotlin (lecture)",
      "Architecture MVVM"
    ]
  },

  web: {
    title: "Développement Web",
    iconName: "Globe",
    color: "emerald",
    items: [
      "React & Next.js",
      "Vue.js",
      "TypeScript",
      "TailwindCSS",
      "Applications responsive"
    ]
  },

  backend: {
    title: "Backend & APIs",
    iconName: "Server",
    color: "blue",
    items: [
      "Node.js & Express",
      "PHP (Laravel, Symfony)",
      "Java (Spring Boot)",
      "API REST & GraphQL",
      "Architecture microservices"
    ]
  },

  database: {
    title: "Bases de Données",
    iconName: "Database",
    color: "orange",
    items: [
      "MySQL & PostgreSQL",
      "SQL Server",
      "SQLite",
      "Optimisation de requêtes",
      "Modélisation de données"
    ]
  },

  design: {
    title: "UI/UX & Design",
    iconName: "Palette",
    color: "purple",
    items: [
      "Figma & prototypage",
      "Design systems",
      "Wireframing & maquettes",
      "Design responsive",
      "Expérience utilisateur"
    ]
  },

  devtools: {
    title: "Outils de Développement",
    iconName: "Wrench",
    color: "gray",
    items: [
      "VS Code & extensions",
      "Postman & tests API",
      "Docker & conteneurisation",
      "GitHub Copilot & IA",
      "Chrome DevTools"
    ]
  },

  versioning: {
    title: "Versioning & CI/CD",
    iconName: "GitBranch",
    color: "red",
    items: [
      "Git & GitFlow",
      "GitHub & GitLab",
      "Pull requests & code review",
      "GitHub Actions",
      "Déploiement continu"
    ]
  },

  projectManagement: {
    title: "Gestion de Projet",
    iconName: "ClipboardCheck",
    color: "teal",
    items: [
      "Méthodes Agile (Scrum)",
      "Cycle en V",
      "User stories & backlog",
      "Chiffrage & estimation",
      "Suivi de sprints"
    ]
  }
}