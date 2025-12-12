import Link from 'next/link'
import { Smartphone, Monitor, Code2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Texte à gauche */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Transformons vos idées en{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              solutions digitales
            </span>{' '}
            performantes
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Expert en développement mobile Android et web moderne à Madagascar. 
            Des applications sur mesure qui répondent à vos besoins réels.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              <Code2 size={20} />
              Démarrer un projet
            </Link>
            <Link 
              href="/portfolio" 
              className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-all flex items-center gap-2"
            >
              Voir mes réalisations
            </Link>
          </div>
          
          {/* Mini stats */}
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-gray-600 font-medium">3+ ans d'expérience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse" />
              <span className="text-gray-600 font-medium">15+ projets livrés</span>
            </div>
          </div>
        </div>
        
        {/* Illustration mockups à droite */}
        <div className="relative">
          <div className="relative z-10 flex items-center justify-center gap-6 h-[500px]">
            {/* Smartphone Mockup - Android */}
            <div className="relative group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Phone body */}
              <div className="w-36 h-72 bg-gray-900 rounded-[2.5rem] shadow-2xl border-[6px] border-gray-800 overflow-hidden relative transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-b-3xl z-20" />
                
                {/* Screen content */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-cyan-600 to-emerald-600 m-1 rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="h-8 bg-black/20 flex items-center justify-between px-4 text-white text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white/80 rounded-sm" />
                      <div className="w-4 h-2 bg-white/80 rounded-sm" />
                      <div className="w-4 h-2 bg-white/60 rounded-sm" />
                    </div>
                  </div>
                  
                  {/* App content mockup */}
                  <div className="p-4 space-y-3">
                    <div className="h-8 bg-white/90 rounded-lg" />
                    <div className="h-24 bg-white/80 rounded-xl" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 bg-white/70 rounded-lg" />
                      <div className="h-16 bg-white/70 rounded-lg" />
                    </div>
                    <div className="h-12 bg-white/60 rounded-lg" />
                  </div>
                  
                  {/* Bottom nav */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/20 backdrop-blur-sm flex justify-around items-center">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 bg-white/80 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Phone shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 blur-2xl transform translate-y-8 -z-10" />
              
              {/* Android icon badge */}
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full p-3 shadow-xl">
                <Smartphone className="text-white" size={20} />
              </div>
            </div>
            
            {/* Laptop Mockup - Web */}
            <div className="relative group animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {/* Laptop screen */}
              <div className="w-72 h-44 bg-gray-900 rounded-t-2xl border-[8px] border-gray-800 shadow-2xl overflow-hidden transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                {/* Screen content */}
                <div className="w-full h-full bg-gradient-to-br from-emerald-500 via-cyan-600 to-cyan-700 overflow-hidden">
                  {/* Browser bar */}
                  <div className="h-6 bg-gray-800 flex items-center px-2 gap-1">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                    </div>
                    <div className="flex-1 h-3 bg-gray-700 rounded ml-2" />
                  </div>
                  
                  {/* Web content mockup */}
                  <div className="p-3 space-y-2">
                    <div className="h-6 bg-white/90 rounded-lg w-3/4" />
                    <div className="h-16 bg-white/80 rounded-xl" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 bg-white/70 rounded-lg" />
                      <div className="h-12 bg-white/70 rounded-lg" />
                      <div className="h-12 bg-white/70 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Laptop base */}
              <div className="w-80 h-2 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl shadow-xl" />
              <div className="w-64 h-1 bg-gray-600 rounded-b-lg mx-auto" />
              
              {/* Laptop shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 blur-2xl transform translate-y-8 -z-10" />
              
              {/* Web icon badge */}
              <div className="absolute -bottom-3 -left-3 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full p-3 shadow-xl">
                <Monitor className="text-white" size={20} />
              </div>
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl -z-20" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl -z-20" />
          
          {/* Floating code elements */}
          <div className="absolute top-10 left-10 text-cyan-500 opacity-20 font-mono text-sm animate-pulse">
            {"</>"}
          </div>
          <div className="absolute bottom-20 right-10 text-emerald-500 opacity-20 font-mono text-sm animate-pulse" style={{ animationDelay: '1s' }}>
            {"{ }"}
          </div>
          <div className="absolute top-1/2 left-5 text-cyan-600 opacity-20 font-mono text-sm animate-pulse" style={{ animationDelay: '0.5s' }}>
            {"fn()"}
          </div>
        </div>
      </div>
    </section>
  )
}