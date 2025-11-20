/**
 * Configuração de Internacionalização (i18n)
 *
 * Suporta: Português (PT-BR), Espanhol (ES), Inglês (EN)
 */

export type Language = 'pt-BR' | 'es' | 'en'

export interface Translations {
  // Header
  createRectangles: string
  createRectanglesDescription: string
  tutorial: string
  language: string
  theme: string
  darkMode: string
  lightMode: string
  toggleTheme: string

  // Main Screen
  quantity: string
  rectangleColor: string
  createButton: string
  tip: string
  tipMessage: string

  // Colors
  orange: string
  blue: string
  red: string
  green: string

  // Upgrade Screen
  backButton: string
  carouselGenerator: string
  comingSoon: string
  aiProTitle: string
  aiProDescription: string
  joinWaitlist: string
  joinWaitlistTitle: string
  joinWaitlistDescription: string
  betaAccess: string
  aiContentGeneration: string
  unlimitedBatchProcessing: string
  customAiModels: string
  highQualityAiImages: string
  prioritySupport: string
  earlyAccessFeatures: string
  enterWaitlistButton: string
  feedbackButton: string
}

export const translations: Record<Language, Translations> = {
  'pt-BR': {
    // Header
    createRectangles: 'Criar Retângulos',
    createRectanglesDescription: 'Gere múltiplos retângulos personalizados de forma rápida e fácil',
    tutorial: 'Tutorial',
    language: 'Idioma',
    theme: 'Tema',
    darkMode: '🌙 Dark',
    lightMode: '☀️ Light',
    toggleTheme: 'Trocar',

    // Main Screen
    quantity: 'Quantidade',
    rectangleColor: 'Cor dos retângulos',
    createButton: 'Criar Retângulos',
    tip: '💡',
    tipMessage: 'Dica: Você pode criar até 100 retângulos de uma vez!',

    // Colors
    orange: '🟠 Laranja',
    blue: '🔵 Azul',
    red: '🔴 Vermelho',
    green: '🟢 Verde',

    // Upgrade Screen
    backButton: '←',
    carouselGenerator: 'Meu Plugin',
    comingSoon: 'Muito em breve',
    aiProTitle: 'Meu Plugin Pro',
    aiProDescription: 'Desbloqueie recursos de IA poderosos que vão transformar como você cria conteúdo',
    joinWaitlist: '🎯',
    joinWaitlistTitle: 'Entre na Waitlist hoje',
    joinWaitlistDescription: 'Seja um dos primeiros a experimentar o futuro da criação com IA',
    betaAccess: 'Acesso Beta antecipado',
    aiContentGeneration: 'Geração de conteúdo com IA avançada',
    unlimitedBatchProcessing: 'Processamento em lote ilimitado',
    customAiModels: 'Modelos de IA personalizados',
    highQualityAiImages: 'Imagens geradas por IA em alta qualidade',
    prioritySupport: 'Suporte prioritário',
    earlyAccessFeatures: 'Acesso antecipado a novos recursos',
    enterWaitlistButton: 'Entrar na Waitlist',
    feedbackButton: 'Deixe seu feedback aqui',
  },

  es: {
    // Header
    createRectangles: 'Crear Rectángulos',
    createRectanglesDescription: 'Genera múltiples rectángulos personalizados de forma rápida y fácil',
    tutorial: 'Tutorial',
    language: 'Idioma',
    theme: 'Tema',
    darkMode: '🌙 Oscuro',
    lightMode: '☀️ Claro',
    toggleTheme: 'Cambiar',

    // Main Screen
    quantity: 'Cantidad',
    rectangleColor: 'Color de los rectángulos',
    createButton: 'Crear Rectángulos',
    tip: '💡',
    tipMessage: '¡Consejo: Puedes crear hasta 100 rectángulos a la vez!',

    // Colors
    orange: '🟠 Naranja',
    blue: '🔵 Azul',
    red: '🔴 Rojo',
    green: '🟢 Verde',

    // Upgrade Screen
    backButton: '←',
    carouselGenerator: 'Mi Plugin',
    comingSoon: 'Muy pronto',
    aiProTitle: 'Mi Plugin Pro',
    aiProDescription: 'Desbloquea poderosas funciones de IA que transformarán cómo creas contenido',
    joinWaitlist: '🎯',
    joinWaitlistTitle: 'Únete a la Lista de Espera hoy',
    joinWaitlistDescription: 'Sé uno de los primeros en experimentar el futuro de la creación con IA',
    betaAccess: 'Acceso anticipado a Beta',
    aiContentGeneration: 'Generación de contenido con IA avanzada',
    unlimitedBatchProcessing: 'Procesamiento por lotes ilimitado',
    customAiModels: 'Modelos de IA personalizados',
    highQualityAiImages: 'Imágenes generadas por IA de alta calidad',
    prioritySupport: 'Soporte prioritario',
    earlyAccessFeatures: 'Acceso anticipado a nuevas funciones',
    enterWaitlistButton: 'Unirse a la Lista de Espera',
    feedbackButton: 'Deja tu comentario aquí',
  },

  en: {
    // Header
    createRectangles: 'Create Rectangles',
    createRectanglesDescription: 'Generate multiple custom rectangles quickly and easily',
    tutorial: 'Tutorial',
    language: 'Language',
    theme: 'Theme',
    darkMode: '🌙 Dark',
    lightMode: '☀️ Light',
    toggleTheme: 'Toggle',

    // Main Screen
    quantity: 'Quantity',
    rectangleColor: 'Rectangle color',
    createButton: 'Create Rectangles',
    tip: '💡',
    tipMessage: 'Tip: You can create up to 100 rectangles at once!',

    // Colors
    orange: '🟠 Orange',
    blue: '🔵 Blue',
    red: '🔴 Red',
    green: '🟢 Green',

    // Upgrade Screen
    backButton: '←',
    carouselGenerator: 'My Plugin',
    comingSoon: 'Coming very soon',
    aiProTitle: 'My Plugin Pro',
    aiProDescription: 'Unlock powerful AI features that will transform how you create content',
    joinWaitlist: '🎯',
    joinWaitlistTitle: 'Join the Waitlist today',
    joinWaitlistDescription: 'Be one of the first to experience the future of AI-powered creation',
    betaAccess: 'Early Beta access',
    aiContentGeneration: 'Advanced AI content generation',
    unlimitedBatchProcessing: 'Unlimited batch processing',
    customAiModels: 'Custom AI models',
    highQualityAiImages: 'High-quality AI-generated images',
    prioritySupport: 'Priority support',
    earlyAccessFeatures: 'Early access to new features',
    enterWaitlistButton: 'Join Waitlist',
    feedbackButton: 'Leave your feedback here',
  },
}

export const languageOptions = [
  { code: 'pt-BR' as Language, label: 'Português', flag: '🇧🇷' },
  { code: 'es' as Language, label: 'Español', flag: '🇪🇸' },
  { code: 'en' as Language, label: 'English', flag: '🇺🇸' },
]

// URL do tutorial no YouTube (⚠️ ALTERE ESTA URL)
export const TUTORIAL_URL = 'https://youtube.com/watch?v=SEU_VIDEO_ID'
