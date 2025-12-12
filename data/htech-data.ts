export interface ColorMapValue {
  bg: string
  text: string
  border: string
}
export type ColorMap = Record<string, ColorMapValue>

export interface Advantage {
  icon: string
  title: string
  desc: string
}
// ============= Couleurs =============
export const colorMap: ColorMap = {
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  gray: { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' },
  red: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200' }
}

// ============= Avantages =============
export const advantages: Advantage[] = [
  { icon: '⚡', title: 'Réactivité', desc: 'Réponse rapide et suivi personnalisé' },
  { icon: '🎯', title: 'Sur-mesure', desc: 'Solutions adaptées à vos besoins spécifiques' },
  { icon: '💎', title: 'Qualité', desc: 'Code propre, performant et maintenable' },
  { icon: '💰', title: 'Tarifs transparents', desc: 'Devis clairs sans surprise' },
  { icon: '🤝', title: 'Accompagnement', desc: 'Formation et support inclus' },
  { icon: '🚀', title: 'Technologies modernes', desc: 'Stack à jour et évolutive' }
]