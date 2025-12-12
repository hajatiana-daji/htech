// components/AdvantagesSection.tsx
"use client"

import Link from 'next/link'
import { Sparkles, ArrowRight } from 'lucide-react'
import type { Advantage } from '@/data/htech-data'

interface Props {
  advantages: Advantage[]
}

export default function AdvantagesSection({ advantages }: Props) {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 via-emerald-50 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-gray-700">Nos atouts</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pourquoi choisir <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600">HTech</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des valeurs qui font la différence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-white/50"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                {adv.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{adv.title}</h4>
              <p className="text-gray-600">{adv.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-xl border-2 border-cyan-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Discutons de vos besoins et trouvons ensemble la meilleure solution pour votre entreprise
            </p>
            <Link 
              href="/contact"
              className="inline-flex bg-gradient-to-r from-cyan-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all transform hover:-translate-y-1 items-center gap-2"
            >
              Contactez-nous
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}