import type { Metadata } from 'next'
import { advantages } from '@/data/htech-data'
import { mainServicesData } from '@/data/ServicesData'
import { technicalStackData } from '@/data/StackData'
import { processData } from '@/data/ProcessData'
import ServicesSection from '@/components/ServicesSection'
import ProcessSection from '@/components/ProcessSection'
import AdvantagesSection from '@/components/AdvantagesSection'
import StackSection from '@/components/StackSection'

export const metadata: Metadata = {
  title: 'Services - HTech | Développement, Conseil & Formation',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
          <ServicesSection mainServices={mainServicesData} />
          <ProcessSection process={processData} />
          <StackSection technicalStack={technicalStackData} />
          <AdvantagesSection advantages={advantages} />
        </div>

  )
}
