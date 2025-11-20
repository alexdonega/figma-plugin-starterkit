/**
 * Serviço de Autenticação
 *
 * Gerencia login, logout e validação de token
 */

import { API_CONFIG } from '../config/api.config'

const TOKEN_KEY = 'authToken'

export interface User {
  id: string
  name: string
  email: string
}

export interface LoginResponse {
  success: boolean
  token?: string
  user?: User
  error?: string
}

interface StoredAuth {
  token: string
  user: User
  expiresAt: number
}

/**
 * Registra novo usuário
 */
export async function register(name: string, email: string, password: string): Promise<LoginResponse> {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.REGISTER}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      return {
        success: false,
        error: errorData.error || 'Erro ao criar conta. Email já pode estar em uso.',
      }
    }

    const data = await response.json()

    // Salva token e dados do usuário no Figma storage (login automático)
    const storedAuth: StoredAuth = {
      token: data.token,
      user: data.user,
      expiresAt: Date.now() + (7 * 24 * 60 * 60 * 1000), // 7 dias
    }
    await figma.clientStorage.setAsync(TOKEN_KEY, JSON.stringify(storedAuth))

    return {
      success: true,
      token: data.token,
      user: data.user,
    }
  } catch (error) {
    console.error('Erro ao criar conta:', error)
    return {
      success: false,
      error: 'Erro ao conectar com servidor. Tente novamente.',
    }
  }
}

/**
 * Faz login do usuário
 */
export async function login(email: string, password: string): Promise<LoginResponse> {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      return {
        success: false,
        error: 'Email ou senha incorretos',
      }
    }

    const data = await response.json()

    // Salva token e dados do usuário no Figma storage
    const storedAuth: StoredAuth = {
      token: data.token,
      user: data.user,
      expiresAt: Date.now() + (7 * 24 * 60 * 60 * 1000), // 7 dias
    }
    await figma.clientStorage.setAsync(TOKEN_KEY, JSON.stringify(storedAuth))

    return {
      success: true,
      token: data.token,
      user: data.user,
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error)
    return {
      success: false,
      error: 'Erro ao conectar com servidor. Tente novamente.',
    }
  }
}

/**
 * Faz logout do usuário
 */
export async function logout(): Promise<void> {
  await figma.clientStorage.deleteAsync(TOKEN_KEY)
}

/**
 * Verifica se o token está válido (não expirado)
 */
async function isTokenValid(): Promise<boolean> {
  const storedAuthJson = await figma.clientStorage.getAsync(TOKEN_KEY)
  if (!storedAuthJson) return false

  try {
    const storedAuth: StoredAuth = JSON.parse(storedAuthJson)

    // Verificar se token expirou
    if (storedAuth.expiresAt < Date.now()) {
      await logout() // Limpar token expirado
      return false
    }

    return true
  } catch {
    await logout() // Limpar dados corrompidos
    return false
  }
}

/**
 * Verifica se o usuário está autenticado
 */
export async function isAuthenticated(): Promise<boolean> {
  return await isTokenValid()
}

/**
 * Retorna o token salvo (se válido)
 */
export async function getToken(): Promise<string | null> {
  const isValid = await isTokenValid()
  if (!isValid) return null

  const storedAuthJson = await figma.clientStorage.getAsync(TOKEN_KEY)
  if (!storedAuthJson) return null

  try {
    const storedAuth: StoredAuth = JSON.parse(storedAuthJson)
    return storedAuth.token
  } catch {
    return null
  }
}

/**
 * Retorna os dados do usuário salvo (se token válido)
 */
export async function getCurrentUser(): Promise<User | null> {
  const isValid = await isTokenValid()
  if (!isValid) return null

  const storedAuthJson = await figma.clientStorage.getAsync(TOKEN_KEY)
  if (!storedAuthJson) return null

  try {
    const storedAuth: StoredAuth = JSON.parse(storedAuthJson)
    return storedAuth.user
  } catch {
    return null
  }
}

/**
 * Valida o token com o servidor (opcional)
 */
export async function validateToken(): Promise<boolean> {
  try {
    const token = await getToken()
    if (!token) return false

    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.VALIDATE}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.ok
  } catch (error) {
    console.error('Erro ao validar token:', error)
    return false
  }
}

/**
 * Faz requisição autenticada para a API
 */
export async function authenticatedFetch(endpoint: string, options: RequestInit = {}) {
  const token = await getToken()

  if (!token) {
    throw new Error('Usuário não autenticado')
  }

  return fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
}
