/**
 * Helpers de comunicação entre UI e Main (Figma API)
 * Simplifica o envio de mensagens tipadas
 */

// Tipos para as mensagens
export type PluginMessage = {
  type: string
  count?: number
  color?: string
  [key: string]: unknown
}

export type MessageHandler = (msg: PluginMessage) => void

/**
 * Envia mensagem da UI para o Main (Figma API)
 * @param type - Tipo da mensagem
 * @param data - Dados adicionais
 *
 * @example
 * sendToPlugin('create-rectangles', { count: 5, color: 'blue' })
 */
export const sendToPlugin = (type: string, data?: Record<string, unknown>): void => {
  parent.postMessage(
    {
      pluginMessage: {
        type,
        ...data,
      },
    },
    '*'
  )
}

/**
 * Helper para configurar listener de mensagens no Main
 * @param handlers - Objeto com handlers para cada tipo de mensagem
 *
 * @example
 * onMessage({
 *   'create-rectangles': (msg) => {
 *     console.log('Criando', msg.count, 'retângulos')
 *   },
 *   'delete-selection': () => {
 *     figma.currentPage.selection.forEach(node => node.remove())
 *   }
 * })
 */
export const onMessage = (handlers: Record<string, MessageHandler>): void => {
  figma.ui.onmessage = (msg: PluginMessage) => {
    const handler = handlers[msg.type]
    if (handler) {
      handler(msg)
    } else {
      console.warn(`Mensagem não tratada: ${msg.type}`)
    }
  }
}

/**
 * Helper para notificações do Figma
 * @param message - Mensagem a ser exibida
 * @param options - Opções da notificação
 */
export const notify = (message: string, options?: NotificationOptions) => {
  figma.notify(message, options)
}
