type BlogArticle = {
  title: string
  date: string
  category: string
  excerpt: string
}

export const featuredArticle: BlogArticle = {
    title: 'Guide complet : Créer une application Android moderne avec Jetpack Compose',
    date: '5 Décembre 2024',
    category: 'Mobile',
    excerpt: 'Découvrez comment créer une application Android performante et moderne en utilisant Jetpack Compose, la nouvelle façon déclarative de construire des interfaces utilisateur. Ce guide couvre l\'architecture MVVM, la gestion d\'état, et les bonnes pratiques essentielles.',
  }

export const articles: BlogArticle[] = [
    { 
      title: 'Les tendances du développement mobile en 2025', 
      date: '2 Décembre 2024', 
      category: 'Mobile',
      excerpt: 'Analyse des principales tendances qui façonnent le développement mobile : IA intégrée, Kotlin Multiplatform, Flutter 4.0, et l\'évolution des Progressive Web Apps.'
    },
    { 
      title: 'Next.js 15 : Les nouveautés à connaître absolument', 
      date: '28 Novembre 2024', 
      category: 'Web',
      excerpt: 'Exploration approfondie des nouvelles fonctionnalités de Next.js 15 : Turbopack stable, Server Actions améliorés, et optimisations de performance.'
    },
    { 
      title: 'Optimisation des performances Android : Guide pratique', 
      date: '25 Novembre 2024', 
      category: 'Mobile',
      excerpt: 'Techniques avancées pour optimiser vos applications Android : profiling avec Android Studio, lazy loading, gestion mémoire et réduction de la taille APK.'
    },
    { 
      title: 'Material Design 3 : Implémenter le thème dynamique', 
      date: '20 Novembre 2024', 
      category: 'Design',
      excerpt: 'Guide complet pour implémenter Material You dans vos applications Android avec les couleurs dynamiques, les nouvelles animations et les composants Material 3.'
    },
    { 
      title: 'GraphQL vs REST API : Quel choix pour votre projet ?', 
      date: '15 Novembre 2024', 
      category: 'Backend',
      excerpt: 'Comparaison détaillée entre GraphQL et REST pour vous aider à choisir la meilleure architecture API selon vos besoins : performance, flexibilité, complexité.'
    },
    { 
      title: 'Sécuriser vos applications mobiles : Les essentiels', 
      date: '10 Novembre 2024', 
      category: 'Sécurité',
      excerpt: 'Bonnes pratiques indispensables : chiffrement des données, authentification biométrique, protection contre le reverse engineering, et stockage sécurisé.'
    },
    { 
      title: 'TypeScript pour les développeurs Android/Kotlin', 
      date: '5 Novembre 2024', 
      category: 'Web',
      excerpt: 'Transition en douceur de Kotlin vers TypeScript : similitudes, différences, et comment tirer parti de votre expérience Android dans le développement web.'
    },
    { 
      title: 'CI/CD pour applications Android avec GitHub Actions', 
      date: '1 Novembre 2024', 
      category: 'DevOps',
      excerpt: 'Mise en place d\'un pipeline CI/CD complet pour Android : tests automatisés, génération d\'APK, déploiement sur Play Store et notifications Slack.'
    },
    { 
      title: 'Architecture Clean en pratique : Exemple Android', 
      date: '28 Octobre 2024', 
      category: 'Architecture',
      excerpt: 'Implémentation concrète de la Clean Architecture dans une application Android : séparation des couches, injection de dépendances avec Hilt, et testabilité.'
    }
  ]
