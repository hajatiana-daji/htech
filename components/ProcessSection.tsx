// components/ProcessSection.tsx
"use client"

import { getIcon } from '@/lib/iconMap'
import { Zap } from 'lucide-react'
import type { ProcessStepData } from '@/data/ProcessData'

interface Props {
  process: ProcessStepData[]
}

export default function ProcessSection({ process }: Props) {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 shadow-sm">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-gray-700">Notre processus</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Une méthode <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600">éprouvée</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            4 étapes clés pour garantir le succès de votre projet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, idx) => {
            const IconComponent = getIcon(step.iconName)
            return (
              <div key={idx} className="relative group">
                {/* Connector line */}
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-cyan-300 to-transparent -z-10" />
                )}
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 hover:border-cyan-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center font-bold text-white text-lg shadow-lg">
                        {step.step}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white border-2 border-cyan-200 flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-cyan-600" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}