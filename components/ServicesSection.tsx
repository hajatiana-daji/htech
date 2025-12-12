// components/ServicesSection.tsx
"use client"

import { useState } from 'react'
import { getIcon } from '@/lib/iconMap'
import { Sparkles, ChevronDown, Check } from 'lucide-react'
import type { PillarData } from '@/data/ServicesData'

interface Props {
  mainServices: PillarData[]
}

export default function ServicesSection({ mainServices }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleService = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-cyan-700">Nos services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Solutions digitales <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600">complètes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            De l'idée à la réalisation, nous vous accompagnons dans tous vos projets digitaux
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {mainServices.map((pillar, idx) => {
            const IconComponent = getIcon(pillar.iconName)
            const isOpen = openIndex === idx
            
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-500 ${
                  hoveredIndex === idx ? 'border-cyan-300 shadow-2xl' : 'border-gray-100'
                } ${isOpen ? '-translate-y-1' : ''}`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative">
                  {/* En-tête (toujours visible) */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 mb-6">{pillar.description}</p>
                  
                  {/* Détails (affichés si ouvert) */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-[1000px] opacity-100 mb-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      {pillar.services.map((service, si) => (
                        <div key={si} className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                          <div className="mt-1">
                            <Check className="w-5 h-5 text-cyan-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 mb-1">{service.name}</div>
                            <div className="text-sm text-gray-600">{service.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bouton toggle */}
                  <button 
                    onClick={() => toggleService(idx)}
                    className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                      isOpen
                        ? `bg-gradient-to-r ${pillar.color} text-white shadow-lg` 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {isOpen ? 'Voir moins' : 'En savoir plus'}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}