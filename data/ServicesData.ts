import type { IconName } from "@/lib/iconMap"
export interface Service {
  name: string
  desc: string
  examples: string[]
}

export interface PillarData {
  title: string
  description: string
  color: string
  iconName: IconName
  services: Service[]
}

// ============= Services principaux (données avec noms d'icônes en string) =============
export const mainServicesData: PillarData[] = [
  {
    title: 'Développement sur-mesure',
    iconName: 'Code',
    description: 'Solutions digitales personnalisées pour répondre précisément à vos besoins métier',
    color: 'from-cyan-500 to-cyan-600',
    services: [
      {
        name: 'Sites web vitrines',
        desc: 'Sites modernes, responsive et optimisés SEO pour valoriser votre activité en ligne',
        examples: ['Site e-commerce', 'Portfolio professionnel', 'Site institutionnel']
      },
      {
        name: 'Applications Android',
        desc: 'Applications mobiles natives performantes pour smartphones et tablettes',
        examples: ['App de gestion', 'App de livraison', 'App métier']
      },
      {
        name: 'Logiciels métiers',
        desc: 'Solutions de gestion adaptées à votre activité : facturation, stock, CRM, etc.',
        examples: ['Logiciel de facturation', 'Gestion de stock', 'Suivi client']
      },
      {
        name: 'API & intégrations',
        desc: 'Connectez vos outils et automatisez vos processus via des API robustes',
        examples: ['API REST', 'Intégration paiement', 'Synchronisation données']
      },
      {
        name: 'Tableaux de bord & automatisation',
        desc: 'Visualisez vos données et automatisez vos tâches répétitives',
        examples: ['Dashboard analytics', 'Rapports automatiques', 'Alertes métier']
      }
    ]
  },
  {
    title: 'Conseil en digitalisation',
    iconName: 'Lightbulb',
    description: 'Accompagnement stratégique pour réussir votre transformation numérique',
    color: 'from-emerald-500 to-green-600',
    services: [
      {
        name: 'Analyse des processus',
        desc: 'Audit de vos méthodes de travail pour identifier les opportunités d\'amélioration',
        examples: ['Cartographie processus', 'Identification des goulots', 'Priorisation actions']
      },
      {
        name: 'Recommandations techniques',
        desc: 'Conseils d\'experts pour choisir les bonnes technologies et solutions',
        examples: ['Choix stack technique', 'Architecture système', 'Sécurité & conformité']
      },
      {
        name: 'Aide à la transformation numérique',
        desc: 'Accompagnement complet dans votre évolution digitale étape par étape',
        examples: ['Feuille de route', 'Conduite du changement', 'Support terrain']
      },
      {
        name: 'Modernisation d\'outils existants',
        desc: 'Mise à niveau de vos systèmes legacy pour gagner en performance',
        examples: ['Migration cloud', 'Refonte interface', 'Optimisation code']
      }
    ]
  },
  {
    title: 'Formations',
    iconName: 'GraduationCap',
    description: 'Montée en compétences de vos équipes sur les technologies et outils numériques',
    color: 'from-cyan-600 to-emerald-600',
    services: [
      {
        name: 'Développement web/mobile',
        desc: 'Formation pratique du niveau débutant à intermédiaire sur les technologies modernes',
        examples: ['HTML/CSS/JavaScript', 'React & Next.js', 'Android avec Kotlin']
      },
      {
        name: 'Outils bureautiques',
        desc: 'Maîtrise des logiciels essentiels pour booster votre productivité quotidienne',
        examples: ['Suite Microsoft Office', 'Google Workspace', 'Outils collaboratifs']
      },
      {
        name: 'Culture numérique',
        desc: 'Sensibilisation aux enjeux du digital et aux bonnes pratiques',
        examples: ['Cybersécurité', 'Protection données', 'Communication digitale']
      }
    ]
  }
]
