import type { Metadata } from 'next'
import { Smartphone, Globe, ExternalLink, Github } from 'lucide-react'
import { projects } from '@/data/ProjectData';

export const metadata: Metadata = {
  title: 'Portfolio - HTech | Nos Réalisations',
  description: 'Découvrez nos projets de développement mobile Android et web. Applications e-commerce, gestion d\'entreprise, fitness et plus encore.',
  keywords: 'portfolio, projets, réalisations, applications android, sites web, Madagascar',
}

export interface Project {
  title: string;
  category: string;
  desc: string;
  tech: string[]

}

export default function Portfolio() {
  
  const stats = [
    { number: projects.length, label: 'Projets réalisés' },
    { number: '100%', label: 'Clients satisfaits' },
    { number: new Date().getFullYear() - 2022, label: 'Années d\'expérience' },
    { number: '24h', label: 'Temps de réponse' }
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Nos Réalisations</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez une sélection de projets que j'ai conçus et développés pour transformer des idées en solutions digitales performantes
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-4xl mx-auto">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              {stat.number}
            </div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="h-48 bg-gradient-to-br from-cyan-100 to-emerald-100 flex items-center justify-center relative overflow-hidden">
              {project.category === 'Android' ?
                <Smartphone size={60} className="text-cyan-600 group-hover:scale-110 transition-transform" /> :
                <Globe size={60} className="text-emerald-600 group-hover:scale-110 transition-transform" />
              }
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${project.category === 'Android' ? 'bg-cyan-100 text-cyan-700' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                  {project.category}
                </span>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-cyan-600 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                  <button className="text-gray-400 hover:text-cyan-600 transition-colors">
                    <Github size={18} />
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold mt-3 mb-2 text-gray-900 group-hover:text-cyan-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial Section */}
      <div className="bg-gradient-to-br from-slate-50 to-cyan-50 rounded-3xl p-12 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Ce que disent nos clients</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                JD
              </div>
              <div>
                <div className="font-bold text-gray-900">Jean Dupont</div>
                <div className="text-sm text-gray-600">CEO, TechStart MG</div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Travail exceptionnel sur notre application mobile. Respect des délais, communication fluide et résultat au-delà de nos attentes. Je recommande vivement !"
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                MR
              </div>
              <div>
                <div className="font-bold text-gray-900">Marie Rasoanaivo</div>
                <div className="text-sm text-gray-600">Fondatrice, EcomMada</div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Excellent développeur avec une vraie expertise technique. Notre site web est rapide, moderne et parfaitement optimisé. Merci pour votre professionnalisme !"
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-3xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Vous avez un projet en tête ?</h2>
        <p className="text-xl opacity-90 mb-6">
          Discutons ensemble de la réalisation de votre application ou site web
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
        >
          Démarrer un projet
        </a>
      </div>
    </div>
  )
}