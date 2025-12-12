import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    'Applications Android',
    'Applications Web',
    'Consultation IT',
    'Maintenance'
  ]

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-2xl font-bold">HTech</span>
            </Link>
            <p className="text-gray-400">
              Entreprise individuelle de développement mobile et web à Madagascar.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              {navigationLinks.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="block text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-gray-400">
              {services.map((service) => (
                <div key={service}>{service}</div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <a 
                href="mailto:contact@htech.com"
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
              >
                <Mail size={16} />
                <span>contact@htech.com</span>
              </a>
              <a 
                href="tel:+261346551171"
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
              >
                <Phone size={16} />
                <span>+261 34 65 511 71</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Fianarantsoa, Madagascar</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com/hajatiana.andrianjaka.2025" aria-label="Facebook" className="hover:text-cyan-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-cyan-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} HTech - Entreprise Individuelle. Tous droits réservés.</p>
          <p className="mt-2">NIF: 0000000000 | STAT: 00000000000000 | RCS: 2024B00000</p>
        </div>
      </div>
    </footer>
  )
}