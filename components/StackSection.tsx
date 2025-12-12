// components/StackSection.tsx
"use client"

import { useState } from 'react'
import { getIcon } from '@/lib/iconMap'
import { Code } from 'lucide-react'
import type { TechnicalStackData } from '@/data/StackData'

interface Props {
  technicalStack: TechnicalStackData
}

// Mapping des couleurs pour chaque catégorie
const colorMap = {
  cyan: {
    bg: 'from-cyan-50 to-cyan-100',
    bgActive: 'from-cyan-500 to-cyan-600',
    border: 'border-cyan-300',
    text: 'text-cyan-600',
    textActive: 'text-white',
    dot: 'bg-cyan-500',
    shadow: 'shadow-cyan-200'
  },
  emerald: {
    bg: 'from-emerald-50 to-emerald-100',
    bgActive: 'from-emerald-500 to-emerald-600',
    border: 'border-emerald-300',
    text: 'text-emerald-600',
    textActive: 'text-white',
    dot: 'bg-emerald-500',
    shadow: 'shadow-emerald-200'
  },
  blue: {
    bg: 'from-blue-50 to-blue-100',
    bgActive: 'from-blue-500 to-blue-600',
    border: 'border-blue-300',
    text: 'text-blue-600',
    textActive: 'text-white',
    dot: 'bg-blue-500',
    shadow: 'shadow-blue-200'
  },
  purple: {
    bg: 'from-purple-50 to-purple-100',
    bgActive: 'from-purple-500 to-purple-600',
    border: 'border-purple-300',
    text: 'text-purple-600',
    textActive: 'text-white',
    dot: 'bg-purple-500',
    shadow: 'shadow-purple-200'
  },
  orange: {
    bg: 'from-orange-50 to-orange-100',
    bgActive: 'from-orange-500 to-orange-600',
    border: 'border-orange-300',
    text: 'text-orange-600',
    textActive: 'text-white',
    dot: 'bg-orange-500',
    shadow: 'shadow-orange-200'
  },
  gray: {
    bg: 'from-gray-50 to-gray-100',
    bgActive: 'from-gray-500 to-gray-600',
    border: 'border-gray-300',
    text: 'text-gray-600',
    textActive: 'text-white',
    dot: 'bg-gray-500',
    shadow: 'shadow-gray-200'
  },
  red: {
    bg: 'from-red-50 to-red-100',
    bgActive: 'from-red-500 to-red-600',
    border: 'border-red-300',
    text: 'text-red-600',
    textActive: 'text-white',
    dot: 'bg-red-500',
    shadow: 'shadow-red-200'
  },
  teal: {
    bg: 'from-teal-50 to-teal-100',
    bgActive: 'from-teal-500 to-teal-600',
    border: 'border-teal-300',
    text: 'text-teal-600',
    textActive: 'text-white',
    dot: 'bg-teal-500',
    shadow: 'shadow-teal-200'
  }
}

export default function StackSection({ technicalStack }: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-full mb-4 border border-cyan-200">
            <Code className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-cyan-700">Technologies & Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Stack technique <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600">moderne</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des technologies éprouvées pour créer des solutions performantes et évolutives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(technicalStack).map(([key, category]) => {
            const IconComponent = getIcon(category.iconName)
            const isActive = activeCategory === key
            const colors = colorMap[category.color as keyof typeof colorMap] || colorMap.cyan
            
            return (
              <div
                key={key}
                onMouseEnter={() => setActiveCategory(key)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`group bg-white rounded-2xl p-6 transition-all duration-500 border-2 cursor-pointer ${
                  isActive 
                    ? `${colors.border} -translate-y-2 shadow-2xl ${colors.shadow}` 
                    : 'border-gray-100 shadow-md hover:shadow-xl'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                  isActive ? colors.bgActive : colors.bg
                } flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <IconComponent className={`w-7 h-7 transition-colors duration-300 ${
                    isActive ? colors.textActive : colors.text
                  }`} />
                </div>
                
                <h3 className={`font-bold mb-3 text-lg transition-colors duration-300 ${
                  isActive ? colors.text : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
                
                <ul className="space-y-2.5">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                      <div className={`${colors.dot} w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 transition-transform duration-300 ${
                        isActive ? 'scale-125' : ''
                      }`} />
                      <span className={`transition-colors duration-300 ${
                        isActive ? 'text-gray-900 font-medium' : ''
                      }`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}