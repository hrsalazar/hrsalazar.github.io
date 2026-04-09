import React, { createContext, useState, useContext } from 'react'

export const translations = {
  es: {
    // Hero Section
    heroSubtitle: 'Director de Desarrollo e Integración | Arquitecto de Soluciones | Explorador de Desarrollo Asistido por IA | Entusiasta de Blockchain',
    exploreMy: '✨ Explorar Mi Trabajo',
    scrollToAbout: 'Desplácese a la sección Acerca de',

    // Navigation
    headerHome: 'Héctor Salazar',

    // Timeline
    professionalExperience: 'Experiencia Profesional',
    viewDetails: 'Ver Detalles →',
    present: 'Presente',
    closeModal: 'Cerrar',

    // About Section
    aboutTitle: 'Acerca de',
    readMore: '▼ Leer más',
    showLess: '▲ Mostrar menos',

    // Skills Section
    skillsTitle: 'Habilidades',

    // Repositories
    repositoriesTitle: 'Últimos repositorios en Github',
    updated: 'Actualizado:',
    noDescription: 'Sin descripción',

    // Loader
    loading: 'Cargando...',
  },
  en: {
    // Hero Section
    heroSubtitle: 'Development & Integration Lead | Solution Architect | AI-Assisted Development Explorer | Blockchain Enthusiast',
    exploreMy: '✨ Explore My Work',
    scrollToAbout: 'Scroll to About section',

    // Navigation
    headerHome: 'Héctor Salazar',

    // Timeline
    professionalExperience: 'Professional Experience',
    viewDetails: 'View Details →',
    present: 'Present',
    closeModal: 'Close',

    // About Section
    aboutTitle: 'About',
    readMore: '▼ Read more',
    showLess: '▲ Show less',

    // Skills Section
    skillsTitle: 'Skills',

    // Repositories
    repositoriesTitle: 'Latest repositories on Github',
    updated: 'Updated:',
    noDescription: 'No description',

    // Loader
    loading: 'Loading...',
  }
}

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es')

  const toggleLanguage = () => {
    setLanguage(lang => lang === 'es' ? 'en' : 'es')
  }

  const t = (key) => {
    return translations[language]?.[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

export const useTranslation = (defaultLang = 'es') => {
  const context = useContext(LanguageContext)
  if (context) {
    return context.t
  }
  // Fallback if not using context
  return (key) => translations[defaultLang]?.[key] || key
}
