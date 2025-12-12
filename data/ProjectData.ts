export interface Project {
  title: string;
  category: string;
  desc: string;
  tech: string[]

}

export const projects: Project[] = [
    {
      title: 'EcomShop Mobile',
      category: 'Android',
      desc: 'Application e-commerce complète avec paiement mobile intégré (MVola, Orange Money), gestion du panier, historique des commandes et notifications push.',
      tech: ['Kotlin', 'Firebase', 'Material Design', 'Retrofit', 'Room']
    },
    {
      title: 'GestStock Pro',
      category: 'Web',
      desc: 'Solution de gestion de stock en temps réel pour PME avec génération de rapports, alertes de réapprovisionnement et tableau de bord analytique.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind', 'Recharts']
    },
    {
      title: 'FitTracker',
      category: 'Android',
      desc: 'Application de suivi d\'activité physique avec statistiques détaillées, objectifs personnalisés, graphiques de progression et intégration GPS.',
      tech: ['Kotlin', 'Room Database', 'MPAndroidChart', 'WorkManager']
    },
    {
      title: 'RestauBook',
      category: 'Web',
      desc: 'Plateforme de réservation de restaurants en ligne avec système de paiement sécurisé, gestion des disponibilités et notifications automatiques.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io']
    },
    {
      title: 'SchoolApp',
      category: 'Android',
      desc: 'Application de gestion scolaire pour parents et enseignants avec suivi des notes, absences, emploi du temps et communication instantanée.',
      tech: ['Java', 'Firebase Realtime DB', 'FCM', 'MVVM']
    },
    {
      title: 'PortfolioPro',
      category: 'Web',
      desc: 'Générateur de portfolio professionnel personnalisable avec templates modernes, éditeur drag-and-drop et optimisation SEO automatique.',
      tech: ['Next.js', 'TypeScript', 'Contentful', 'Framer Motion']
    },
    {
      title: 'TaskMaster',
      category: 'Android',
      desc: 'Application de gestion de tâches collaborative avec assignation d\'équipe, deadlines, rappels intelligents et synchronisation cloud.',
      tech: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Coroutines']
    },
    {
      title: 'MedConnect',
      category: 'Web',
      desc: 'Plateforme de télémédecine connectant patients et médecins avec prise de rendez-vous, consultations vidéo et dossiers médicaux sécurisés.',
      tech: ['Next.js', 'WebRTC', 'PostgreSQL', 'AWS S3']
    },
    {
      title: 'BudgetWise',
      category: 'Android',
      desc: 'Application de gestion financière personnelle avec catégorisation automatique, graphiques de dépenses et conseils d\'épargne personnalisés.',
      tech: ['Kotlin', 'Room', 'MPAndroidChart', 'Biometric Auth']
    }
  ]
