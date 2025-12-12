// components/HomeClient.tsx
"use client"

import Hero from "./Hero"
// import ServicesSection from "./ServicesSection"
// import ProcessSection from "./ProcessSection"
// import StackSection from "./StackSection"
// import AdvantagesSection from "./AdvantagesSection"
import { Advantage } from "@/data/htech-data"
import { PillarData } from "@/data/ServicesData"
import { ProcessStepData } from "@/data/ProcessData"
import { TechnicalStackData } from "@/data/StackData"
import ProcessSection from "./ProcessSection"
import ServicesSection from "./ServicesSection"
import StackSection from "./StackSection"
import AdvantagesSection from "./AdvantagesSection"

interface Props {
  mainServices: PillarData[]
  process: ProcessStepData[]
  technicalStack: TechnicalStackData
  advantages: Advantage[]
}

export default function HomeClient({ mainServices, process, technicalStack, advantages }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ServicesSection mainServices={mainServices} />
      <ProcessSection process={process} />
      <StackSection technicalStack={technicalStack} />
      <AdvantagesSection advantages={advantages} />
    </div>
  )
}