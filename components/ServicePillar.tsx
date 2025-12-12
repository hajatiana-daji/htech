"use client"

import { getIcon } from "@/lib/iconMap"
import type { PillarData } from "@/types"

interface Props {
  pillar: PillarData
  idx: number
}

export default function ServicePillar({ pillar, idx }: Props) {
  const IconComponent = getIcon(pillar.iconName)

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <IconComponent className="h-10 w-10 text-cyan-600" />
      <h3 className="text-xl font-semibold mt-4">{pillar.title}</h3>
      <p className="text-gray-600 mt-2">{pillar.description}</p>
    </div>
  )
}
