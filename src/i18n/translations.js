export const translations = {
  es: {
    // Hero Section
    heroSubtitle: 'Director de Desarrollo e Integración | Arquitecto de Soluciones | Explorador de Desarrollo Asistido por IA | Entusiasta de Blockchain',
    exploreMy: '✨ Explorar Mi Trabajo',

    // Navigation
    scrollToAbout: 'Desplácese a la sección Acerca de',

    // Timeline
    professionalExperience: 'Experiencia Profesional',
    viewDetails: 'Ver Detalles →',
    present: 'Presente',

    // Modal
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

    // Job Detail Modal
    jobDescription: 'Descripción del Trabajo',
  },
  en: {
    // Hero Section
    heroSubtitle: 'Development & Integration Lead | Solution Architect | AI-Assisted Development Explorer | Blockchain Enthusiast',
    exploreMy: '✨ Explore My Work',

    // Navigation
    scrollToAbout: 'Scroll to About section',

    // Timeline
    professionalExperience: 'Professional Experience',
    viewDetails: 'View Details →',
    present: 'Present',

    // Modal
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

    // Job Detail Modal
    jobDescription: 'Job Description',
  }
}

export const useTranslation = (lang = 'es') => {
  return translations[lang] || translations.en
}
