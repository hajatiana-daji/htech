import { IconName } from "@/lib/iconMap"

export interface ProcessStepData {
  step: string
  title: string
  desc: string
  iconName: IconName
}

// ============= Processus (données avec noms d'icônes en string) =============
export const processData: ProcessStepData[] = [
  {
    step: '1',
    title: 'Analyse & Cadrage',
    desc: 'Étude approfondie de vos besoins, de votre cible et définition du cahier des charges',
    iconName: 'Users'
  },
  {
    step: '2',
    title: 'Conception & Design',
    desc: 'Maquettes, architecture technique et validation avec vous avant développement',
    iconName: 'Code'
  },
  {
    step: '3',
    title: 'Développement Agile',
    desc: 'Réalisation itérative avec des points réguliers et des démos fonctionnelles',
    iconName: 'Zap'
  },
  {
    step: '4',
    title: 'Déploiement & Support',
    desc: 'Mise en ligne, formation utilisateurs et accompagnement post-lancement',
    iconName: 'Shield'
  }
]
