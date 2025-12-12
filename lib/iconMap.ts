import {
  Code,
  Lightbulb,
  GraduationCap,
  Users,
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart,
  Wrench,
  Server,
  Palette,
  Database,
  GitBranch,
  ClipboardCheck
} from "lucide-react"

const iconMap = {
  Code,
  Lightbulb,
  GraduationCap,
  Users,
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart,
  Wrench,
  Server,          // <--- ajouté
  Palette,         // <--- ajouté
  Database,        // <--- ajouté
  GitBranch,       // <--- ajouté
  ClipboardCheck   // <--- ajouté
} as const

export type IconName = keyof typeof iconMap

export function getIcon(name: IconName) {
  return iconMap[name] ?? Code
}
