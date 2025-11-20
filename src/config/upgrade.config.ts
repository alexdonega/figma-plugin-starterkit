/**
 * Configuração da tela de Upgrade/Pro
 *
 * Ajuste as URLs e copy conforme necessário para seu plugin
 */

export interface UpgradeConfig {
  badge: {
    text: string
    icon: string
  }
  title: string
  description: string
  waitlist: {
    icon: string
    title: string
    description: string
    features: string[]
    button: {
      text: string
      url: string
    }
  }
  feedback: {
    text: string
    url: string
  }
}

export const upgradeConfig: UpgradeConfig = {
  // Badge "Muito em breve"
  badge: {
    icon: '⚡',
    text: 'Muito em breve'
  },

  // Título principal
  title: 'Meu Plugin Pro',

  // Descrição/subtítulo
  description: 'Desbloqueie recursos de IA poderosos que vão transformar como você cria conteúdo',

  // Card de Waitlist
  waitlist: {
    icon: '🎯',
    title: 'Entre na Waitlist hoje',
    description: 'Seja um dos primeiros a experimentar o futuro da criação com IA',

    // Lista de features com checkmarks
    features: [
      'Acesso Beta antecipado',
      'Geração de conteúdo com IA avançada',
      'Processamento em lote ilimitado',
      'Modelos de IA personalizados',
      'Imagens geradas por IA em alta qualidade',
      'Suporte prioritário',
      'Acesso antecipado a novos recursos'
    ],

    // Botão principal
    button: {
      text: 'Entrar na Waitlist',
      url: 'https://seusite.com/waitlist' // ⚠️ ALTERE ESTA URL
    }
  },

  // Botão de feedback (footer)
  feedback: {
    text: 'Deixe seu feedback aqui',
    url: 'https://seusite.com/feedback' // ⚠️ ALTERE ESTA URL
  }
}
