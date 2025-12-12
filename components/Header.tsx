'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

interface NavItem {
  name: string
  href: string
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation: NavItem[] = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
                    <img
                        src="logo.svg"
                        alt="HTech Madagascar"
                        className="h-12 w-auto"
                    />
                </Link>
        
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors ${
                pathname === item.href 
                  ? 'text-cyan-600 font-semibold' 
                  : 'text-gray-700 hover:text-cyan-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button 
          className="md:hidden" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 hover:bg-gray-50"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}