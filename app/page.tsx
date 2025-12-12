import { advantages } from '@/data/htech-data'
import HomeClient from '@/components/HomeClient'
import { mainServicesData } from '@/data/ServicesData'
import { technicalStackData } from '@/data/StackData'
import { processData } from '@/data/ProcessData'

export default function Home() {
  return (
    <HomeClient
      mainServices={mainServicesData}
      process={processData}
      technicalStack={technicalStackData}
      advantages={advantages}
    />
  )
}
