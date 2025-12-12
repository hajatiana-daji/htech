import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'HTech - Développement Mobile & Web à Madagascar',
  description: 'HTech, entreprise individuelle spécialisée dans le développement d\'applications mobiles Android et web sur mesure à Madagascar.',
  keywords: 'développement mobile, android, web, Madagascar, Antananarivo, HTech',
  authors: [{ name: 'HTech' }],
  openGraph: {
    title: 'HTech - Développement Mobile & Web',
    description: 'Entreprise individuelle spécialisée dans le développement d\'applications mobiles et web à Madagascar',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}