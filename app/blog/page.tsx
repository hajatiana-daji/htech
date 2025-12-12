import type { Metadata } from 'next'
import { ChevronRight, Calendar, Clock, Tag } from 'lucide-react'
import { articles, featuredArticle } from '@/data/BlogData'

export const metadata: Metadata = {
  title: 'Blog - HTech | Actualités Tech & Tutoriels',
  description: 'Découvrez nos articles sur le développement mobile Android, les frameworks web, les bonnes pratiques et les tendances technologiques à Madagascar.',
  keywords: 'blog tech, tutoriels, android, react, nextjs, développement, Madagascar',
}

export default function Blog() {
  
  const categories = [
    { name: 'Tous', count: articles.length, active: true },
    { name: 'Mobile', count: 4 },
    { name: 'Web', count: 3 },
    { name: 'Design', count: 1 },
    { name: 'Backend', count: 1 },
    { name: 'Sécurité', count: 1 },
    { name: 'DevOps', count: 1 },
    { name: 'Architecture', count: 1 }
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog HTech</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Actualités, tutoriels et bonnes pratiques en développement mobile et web
        </p>
      </div>

      {/* Featured Article */}
      <article className="bg-gradient-to-br from-cyan-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white mb-16 hover:shadow-2xl transition-all cursor-pointer group">
        <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
          Article à la Une
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:translate-x-2 transition-transform">
          {featuredArticle.title}
        </h2>
        <p className="text-xl opacity-90 mb-6">
          {featuredArticle.excerpt}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm opacity-90 mb-6">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{featuredArticle.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>8 min de lecture</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag size={16} />
            <span>{featuredArticle.category}</span>
          </div>
        </div>
        <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center gap-2 group-hover:gap-3">
          Lire l'article <ChevronRight size={20} />
        </button>
      </article>

      {/* Categories Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                cat.active
                  ? 'bg-gradient-to-r from-cyan-600 to-emerald-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-cyan-300'
              }`}
            >
              {cat.name} {cat.count && <span className="opacity-75">({cat.count})</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {articles.map((article, idx) => (
          <article key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
            <div className="h-48 bg-gradient-to-br from-cyan-100 to-emerald-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {article.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>5 min</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
              <button className="text-cyan-600 font-semibold flex items-center group-hover:gap-2 transition-all">
                Lire la suite <ChevronRight size={20} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-3xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Restez Informé des Dernières Actualités Tech</h2>
        <p className="text-xl opacity-90 mb-6">
          Recevez nos meilleurs articles et tutoriels directement dans votre boîte mail
        </p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            placeholder="Votre adresse email" 
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all whitespace-nowrap">
            S'abonner
          </button>
        </div>
        <p className="text-sm opacity-75 mt-4">
          Pas de spam, désabonnement en un clic. Vos données sont protégées.
        </p>
      </div>
    </div>
  )
}