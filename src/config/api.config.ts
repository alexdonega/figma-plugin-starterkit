/**
 * Configuração da API
 *
 * ⚠️ IMPORTANTE: Altere a BASE_URL para a URL da sua API
 */

export const API_CONFIG = {
  // URL base da sua API
  // Desenvolvimento: 'http://localhost:3000'
  // Produção: 'https://api.seuapp.com'
  BASE_URL: 'http://localhost:3000',

  // Endpoints da API
  ENDPOINTS: {
    // Autenticação
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    VALIDATE: '/auth/validate',

    // Funcionalidades (exemplos)
    GENERATE_CAROUSEL: '/ai/generate-carousel',
    USER_USAGE: '/user/usage',
    SAVE_TEMPLATE: '/templates/save',
  }
}

/**
 * Formato esperado das respostas da API:
 *
 * LOGIN (POST /auth/login)
 * Request: { email: string, password: string }
 * Response: {
 *   token: string,
 *   user: { id: string, name: string, email: string }
 * }
 *
 * VALIDATE (GET /auth/validate)
 * Headers: { Authorization: "Bearer TOKEN" }
 * Response: {
 *   valid: boolean,
 *   user: { id: string, name: string, email: string }
 * }
 */
