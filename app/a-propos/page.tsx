import type { Metadata } from 'next'
import { Target, Award, Users, Briefcase, GraduationCap, Rocket, Code, Heart, Zap, TrendingUp, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'À Propos - HTech | Entreprise Individuelle de Développement',
  description: 'HTech est une entreprise individuelle fondée par un ingénieur en informatique diplômé de l\'ENI en 2022. Découvrez mon parcours et ma vision de l\'innovation mobile.',
  keywords: 'à propos, HTech, ingénieur informatique, ENI, développeur, chef de projet, Madagascar',
}

export default function APropos() {
  const values = [
    { 
      icon: Target, 
      title: 'Excellence Technique', 
      desc: 'Maîtrise des technologies modernes et application rigoureuse des meilleures pratiques de développement pour des solutions fiables et performantes.',
      gradient: 'from-cyan-500 to-blue-500'
    },
    { 
      icon: Award, 
      title: 'Qualité & Innovation', 
      desc: 'Code propre et bien documenté, veille technologique constante et adoption des innovations qui apportent une vraie valeur ajoutée.',
      gradient: 'from-emerald-500 to-teal-500'
    },
    { 
      icon: Users, 
      title: 'Relation Client', 
      desc: 'Écoute attentive, communication transparente, respect des engagements et accompagnement personnalisé tout au long du projet.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  const journey = [
    {
      year: '2022',
      title: 'Diplôme d\'Ingénieur',
      desc: 'Obtention du diplôme d\'ingénieur en informatique à l\'École Nationale d\'Informatique (ENI), avec une spécialisation en développement logiciel.',
      icon: GraduationCap,
      highlight: 'Formation d\'excellence'
    },
    {
      year: '2022',
      title: 'Premier Poste',
      desc: 'Recrutement immédiat après le stage de fin d\'études dans une entreprise spécialisée en développement d\'applications. Début en tant que développeur Android.',
      icon: Code,
      highlight: 'Démarrage rapide'
    },
    {
      year: '2023-2024',
      title: 'Évolution & Leadership',
      desc: 'Promotion au poste de chef de projet, gestion d\'équipes de développement, coordination de projets complexes et renforcement des compétences managériales.',
      icon: Briefcase,
      highlight: 'Progression fulgurante'
    },
    {
      year: '2025',
      title: 'Fondation de HTech',
      desc: 'Création de HTech, entreprise individuelle, pour proposer des solutions modernes et innovantes adaptées aux besoins réels des entreprises malgaches.',
      icon: Rocket,
      highlight: 'Vision entrepreneuriale'
    }
  ]

  const skills = {
    technical: [
      { name: 'Développement Mobile', level: 95, icon: '📱' },
      { name: 'React / Next.js', level: 90, icon: '⚛️' },
      { name: 'Architecture Logicielle', level: 88, icon: '🏗️' },
      { name: 'Base de Données', level: 85, icon: '🗄️' },
    ],
    soft: [
      { name: 'Gestion de Projet', level: 92, icon: '📊' },
      { name: 'Leadership', level: 90, icon: '👥' },
      { name: 'Communication', level: 88, icon: '💬' },
      { name: 'Résolution de Problèmes', level: 95, icon: '🎯' },
    ]
  }

  const achievements = [
    { number: '3+', label: 'Années d\'expérience' },
    { number: '15+', label: 'Projets réalisés' },
    { number: '100%', label: 'Clients satisfaits' },
    { number: '24/7', label: 'Support disponible' }
  ]

  const differentiators = [
    {
      icon: Zap,
      title: 'Rapidité d\'exécution',
      desc: 'Livraison dans les délais grâce à une méthodologie agile éprouvée'
    },
    {
      icon: TrendingUp,
      title: 'Vision stratégique',
      desc: 'Solutions pensées pour évoluer avec votre entreprise'
    },
    {
      icon: CheckCircle,
      title: 'Engagement qualité',
      desc: 'Tests rigoureux et documentation complète pour chaque projet'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-emerald-100 rounded-full mb-6 border border-cyan-200">
              <Heart className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700">Entrepreneur · Ingénieur · Innovateur</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transformez vos idées en 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600"> solutions digitales</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              HTech combine expertise technique, expérience en gestion de projet et passion pour l'innovation au service de votre croissance digitale
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {achievements.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Founder Story - Premium Design */}
          <div className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl p-8 lg:p-12 shadow-2xl mb-20 border border-cyan-100">
            <div className="flex flex-col lg:flex-row items-start gap-8 mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 via-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl transform hover:rotate-3 transition-transform">
                <Heart className="text-white" size={48} />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">L'histoire HTech</h2>
                <p className="text-cyan-600 font-semibold text-lg mb-4">Ingénieur en Informatique - ENI 2022 • Chef de Projet • Entrepreneur</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Android Expert</span>
                  <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">React/Next.js</span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Leadership</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-medium text-gray-900 border-l-4 border-cyan-500 pl-6">
                HTech n'est pas qu'une entreprise, c'est l'aboutissement d'un parcours marqué par l'excellence académique, l'expérience terrain et une vision claire de l'innovation digitale à Madagascar.
              </p>
              
              <p>
                Diplômé de l'<strong className="text-gray-900">École Nationale d'Informatique (ENI) en 2022</strong>, j'ai rapidement intégré le monde professionnel avec une soif d'apprendre et d'innover. Recruté immédiatement après mon stage de fin d'études, j'ai débuté comme <strong className="text-gray-900">développeur Android</strong> dans une entreprise spécialisée en développement d'applications.
              </p>
              
              <p>
                Ma progression a été rapide : en moins de deux ans, je suis passé de développeur à <strong className="text-gray-900">chef de projet</strong>, où j'ai coordonné des équipes techniques, géré des projets d'envergure et développé une expertise complète du cycle de développement logiciel. Cette expérience m'a permis de comprendre non seulement les aspects techniques, mais aussi les enjeux business et les défis de gestion de projet.
              </p>
              
              <div className="bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-emerald-500">
                <p className="text-gray-900 font-medium mb-2">💡 La vision HTech</p>
                <p>
                  En <strong className="text-gray-900">2025</strong>, fort de cette expérience et animé par mon esprit entrepreneurial, j'ai fondé <strong className="text-gray-900">HTech</strong> avec une mission claire : <em className="text-cyan-700">proposer des solutions digitales de qualité supérieure, parfaitement adaptées aux besoins spécifiques des entreprises malgaches</em>, en combinant expertise technique, méthodologie éprouvée et accompagnement personnalisé.
                </p>
              </div>
              
              <p>
                Aujourd'hui, HTech c'est la garantie de travailler avec un professionnel qui maîtrise à la fois le code, la gestion de projet et la vision business. Chaque projet est une opportunité de créer quelque chose d'exceptionnel et de contribuer à la transformation digitale de Madagascar.
              </p>
            </div>
          </div>

          {/* Why Choose HTech */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir HTech ?</h2>
              <p className="text-xl text-gray-600">Des différenciateurs qui font la différence</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {differentiators.map((item, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-cyan-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Journey Timeline - Enhanced */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Mon Parcours</h2>
              <p className="text-xl text-gray-600">De l'ENI à l'entrepreneuriat</p>
            </div>
            <div className="space-y-6">
              {journey.map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 via-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all">
                        <item.icon size={36} />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                        {item.highlight.split(' ')[0]}
                      </div>
                    </div>
                    {idx !== journey.length - 1 && (
                      <div className="w-1 h-full bg-gradient-to-b from-cyan-400 via-emerald-400 to-teal-400 mt-4 rounded-full" />
                    )}
                  </div>
                  <div className="bg-white rounded-2xl p-8 flex-1 group-hover:shadow-2xl transition-all border-2 border-gray-100 group-hover:border-cyan-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-cyan-600 font-bold text-2xl">{item.year}</div>
                      <div className="h-6 w-1 bg-gradient-to-b from-cyan-500 to-emerald-500 rounded-full" />
                      <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                        {item.highlight}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values - Premium */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
              <p className="text-xl text-gray-600">Les piliers de chaque collaboration</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="group relative bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-cyan-200 overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${value.gradient}`} />
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                    <value.icon className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills - Modern Design */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-12 shadow-2xl mb-20 border border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nos Compétences</h2>
              <p className="text-xl text-gray-600">Un mix équilibré entre technique et leadership</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Technical Skills */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-cyan-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Code className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Compétences Techniques</h3>
                </div>
                <div className="space-y-6">
                  {skills.technical.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-800 font-semibold flex items-center gap-2">
                          <span className="text-2xl">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-cyan-600 font-bold text-lg">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-1000 shadow-lg"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Soft Skills</h3>
                </div>
                <div className="space-y-6">
                  {skills.soft.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-800 font-semibold flex items-center gap-2">
                          <span className="text-2xl">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-emerald-600 font-bold text-lg">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-1000 shadow-lg"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-cyan-600 via-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10">
              <MessageCircle className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
              <p className="text-xl lg:text-2xl mb-8 text-cyan-50 max-w-2xl mx-auto">
                Discutons de vos besoins et créons ensemble la solution digitale qui propulsera votre entreprise
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-white text-cyan-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Contactez-nous maintenant
                <ArrowRight size={24} />
              </Link>
              <p className="mt-6 text-cyan-100">Réponse sous 24h · Première consultation gratuite</p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center text-gray-500 py-12 border-t border-gray-200">
        © {new Date().getFullYear()} HTech — Innovation digitale made in Madagascar
      </div>
    </div>
  )
}