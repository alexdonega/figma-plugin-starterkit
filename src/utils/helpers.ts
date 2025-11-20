/**
 * Helpers de comunicação entre UI e Main (Figma API)
 * Simplifica o envio de mensagens tipadas
 */

// Tipos para as mensagens (Discriminated Union para type safety)
export type CreateRectanglesMessage = {
  type: 'create-rectangles'
  count: number
  color: 'orange' | 'blue' | 'red' | 'green'
}

// Adicione novos tipos de mensagem aqui
// export type DeleteSelectionMessage = { type: 'delete-selection' }

export type PluginMessage = CreateRectanglesMessage

export type MessageHandler<T extends PluginMessage = PluginMessage> = (msg: T) => void

/**
 * Envia mensagem da UI para o Main (Figma API) - Type Safe
 * @param message - Mensagem tipada
 *
 * @example
 * sendToPlugin({ type: 'create-rectangles', count: 5, color: 'blue' })
 */
export const sendToPlugin = (message: PluginMessage): void => {
  parent.postMessage(
    {
      pluginMessage: message,
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
