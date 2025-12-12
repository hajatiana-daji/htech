// components/ServicesClient.tsx
"use client"

import { getIcon } from "@/lib/iconMap"
import type { PillarData, TechnicalStackData, Advantage } from "@/types"

interface Props {
  mainServices: PillarData[]
  technicalStack: TechnicalStackData
  advantages: Advantage[]
}

export default function ServicesClient({ mainServices, technicalStack, advantages }: Props) {
  return (
    <div className="space-y-16">
      {/* --- Main services (3 piliers) --- */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Nos services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {mainServices.map((pillar, idx) => {
            const IconComponent = getIcon(pillar.iconName)
            return (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-cyan-600 mr-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{pillar.title}</h3>
                </div>
                <p className="text-gray-600">{pillar.description}</p>

                <div className="mt-4 space-y-3">
                  {pillar.services.map((s, si) => (
                    <div key={si} className="text-sm">
                      <div className="text-sm font-semibold">{s.name}</div>
                      <div className="text-gray-500 text-sm">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* --- Technical Stack --- */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Stack technique</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(technicalStack).map(([key, cat], idx) => {
            const IconComponent = getIcon((cat as any).iconName) // cat typed via TechnicalStackData
            return (
              <div key={key} className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg mr-3 bg-gray-50">
                    <IconComponent className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="font-semibold">{cat.title}</h3>
                </div>
                <ul className="text-gray-600 mt-2 space-y-1">
                  {cat.items.map((item, i) => (
                    <li key={i} className="text-sm">• {item}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* --- Advantages / Pourquoi choisir HTech --- */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Pourquoi choisir HTech ?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((a, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-3">{a.icon}</div>
              <h4 className="font-semibold">{a.title}</h4>
              <p className="text-gray-600 text-sm mt-1">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
