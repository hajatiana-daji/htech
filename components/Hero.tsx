import { Code2, Zap, Users } from 'lucide-react'
import Link from 'next/dist/client/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Image de fond principale avec overlay */}
      <div className="absolute inset-0 z-0">
        {/* Image de fond - Remplace par ton URL */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80')`,
          }}
        />
        
        {/* Overlay dégradé sophistiqué */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/75 to-cyan-900/70" />
        
        {/* Overlay avec motif de points */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Badge animé */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 animate-fade-in">
            <Zap className="text-cyan-400" size={18} />
            <span className="text-white/90 font-medium">Expert développement mobile & web</span>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          </div>

          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Transformons vos idées en{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              solutions digitales
            </span>{' '}
            performantes
          </h1>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Expert en développement mobile Android et web moderne à Madagascar. 
            Des applications sur mesure qui répondent à vos besoins réels.
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-wrap gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-900 to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              <Code2 size={20} />
              Démarrer un projet
            </Link>
            <Link 
              href="/portfolio" 
              className="bg-gradient-to-r from-emerald-700 to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-all flex items-center gap-2"
            >
              Voir nos réalisations
            </Link>


          </div>
          
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Stat 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Code2 className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">3+</div>
              <div className="text-gray-300 font-medium">Ans d'expérience</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Zap className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300 font-medium">Projets livrés</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Users className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300 font-medium">Clients satisfaits</div>
            </div>
          </div>

          {/* Floating code elements décoratifs */}
          <div className="absolute top-20 left-10 text-cyan-400/30 font-mono text-2xl animate-pulse hidden md:block">
            {"</>"}
          </div>
          <div className="absolute bottom-32 right-20 text-emerald-400/30 font-mono text-2xl animate-pulse hidden md:block" style={{ animationDelay: '1s' }}>
            {"{ }"}
          </div>
          <div className="absolute top-1/3 right-10 text-cyan-400/30 font-mono text-xl animate-pulse hidden md:block" style={{ animationDelay: '0.5s' }}>
            {"const"}
          </div>
          <div className="absolute bottom-20 left-20 text-emerald-400/30 font-mono text-xl animate-pulse hidden md:block" style={{ animationDelay: '1.5s' }}>
            {"=>"}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2 bg-white/50 rounded-full" />
        </div>
      </div>

      {/* Ajout de styles CSS pour les animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}