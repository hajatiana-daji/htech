'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Facebook, Github } from 'lucide-react'

type ContactFormData = {
  nom: string
  email: string
  telephone: string
  sujet: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi (à remplacer par votre API)
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' })
      
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@htech.mg',
      link: 'mailto:contact@htech.mg',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+261 34 00 000 00',
      link: 'tel:+261340000000',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Antananarivo, Madagascar',
      link: null,
      color: 'from-cyan-600 to-emerald-600'
    }
  ]

  const workingHours = [
    { day: 'Lundi - Vendredi', hours: '8h00 - 17h00' },
    { day: 'Samedi', hours: '9h00 - 13h00' },
    { day: 'Dimanche', hours: 'Fermé' }
  ]

  const projectTypes = [
    'Application Mobile Android',
    'Site Web / Application Web',
    'Consultation IT',
    'Maintenance et Support',
    'Autre'
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Contactez-moi</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Un projet en tête ? Une question ? N'hésitez pas à me contacter. Je vous réponds sous 24h maximum.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
        {/* Contact Info Cards */}
        {contactInfo.map((info, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4`}>
              <info.icon className="text-white" size={32} />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">{info.title}</h3>
            {info.link ? (
              <a 
                href={info.link}
                className="text-gray-600 hover:text-cyan-600 transition-colors text-lg"
              >
                {info.value}
              </a>
            ) : (
              <p className="text-gray-600 text-lg">{info.value}</p>
            )}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
        {/* Left Column - Additional Info */}
        <div className="lg:col-span-2 space-y-8">
          {/* Working Hours */}
          <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Horaires de Disponibilité</h3>
            <div className="space-y-3">
              {workingHours.map((schedule, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-cyan-100 last:border-0">
                  <span className="font-semibold text-gray-700">{schedule.day}</span>
                  <span className="text-gray-600">{schedule.hours}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">
              * Disponible également pour des rendez-vous en dehors de ces horaires sur demande préalable
            </p>
          </div>

          {/* Quick Response */}
          <div className="bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle size={32} />
              <h3 className="text-2xl font-bold">Réponse Garantie</h3>
            </div>
            <p className="opacity-90 leading-relaxed">
              Je m'engage à répondre à toutes les demandes dans un délai de <strong>24 heures maximum</strong> (jours ouvrables). Votre projet mérite une attention immédiate.
            </p>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Suivez-moi</h3>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all">
                <Linkedin size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all">
                <Github size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
            <h3 className="text-3xl font-bold mb-2 text-gray-900">Envoyez-moi un message</h3>
            <p className="text-gray-600 mb-8">
              Remplissez le formulaire ci-dessous et je reviendrai vers vous dans les plus brefs délais
            </p>
            
            {submitStatus === 'success' && (
              <div className="mb-6 bg-green-50 border-l-4 border-green-500 text-green-700 px-6 py-4 rounded-lg flex items-start gap-3">
                <CheckCircle className="flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold">Message envoyé avec succès !</p>
                  <p className="text-sm">Je vous recontacterai très bientôt.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition"
                    placeholder="Jean Dupont"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition"
                    placeholder="jean.dupont@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition"
                    placeholder="+261 34 00 000 00"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Type de projet <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition"
                    required
                  >
                    <option value="">Sélectionnez un type</option>
                    {projectTypes.map((type, idx) => (
                      <option key={idx} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Votre message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition resize-none"
                  placeholder="Décrivez votre projet, vos besoins, vos objectifs..."
                  required
                ></textarea>
                <p className="text-sm text-gray-500 mt-2">
                  Plus vous êtes précis, mieux je pourrai vous répondre
                </p>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-600 to-emerald-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Envoyer le message
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                En soumettant ce formulaire, vous acceptez d'être contacté par HTech concernant votre demande.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section (Optional) */}
      <div className="mt-16 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-100 to-cyan-100 rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Basé à Antananarivo</h3>
          <p className="text-gray-600 mb-6">
            Interventions possibles dans toute la région d'Analamanga et consultations à distance pour le reste de Madagascar
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium shadow">Rendez-vous en personne</span>
            <span className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium shadow">Visioconférence</span>
            <span className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium shadow">Appel téléphonique</span>
          </div>
        </div>
      </div>
    </div>
  )
}