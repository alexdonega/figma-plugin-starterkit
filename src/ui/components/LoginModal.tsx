import { useState } from 'react'
import { login, type User } from '../../services/auth.service'

interface LoginModalProps {
  onClose: () => void
  onLoginSuccess: (user: User) => void
  onSwitchToRegister: () => void
  isDarkMode?: boolean
}

/**
 * Modal de Login
 *
 * Aparece como overlay sobre a tela principal
 */
export function LoginModal({ onClose, onLoginSuccess, onSwitchToRegister, isDarkMode = true }: LoginModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const bg = isDarkMode ? '#2c2c2c' : '#ffffff'
  const text = isDarkMode ? '#ffffff' : '#000000'
  const inputBg = isDarkMode ? '#1e1e1e' : '#f5f5f5'
  const inputBorder = isDarkMode ? '#3e3e3e' : '#e0e0e0'
  const labelText = isDarkMode ? '#b0b0b0' : '#666666'

  const validateEmail = (email: string): boolean => {
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return EMAIL_REGEX.test(email.trim())
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validar email
    if (!email.trim()) {
      setError('Email é obrigatório')
      return
    }
    if (!validateEmail(email)) {
      setError('Email inválido. Use o formato: usuario@exemplo.com')
      return
    }
    if (!password) {
      setError('Senha é obrigatória')
      return
    }

    setIsLoading(true)

    try {
      const response = await login(email, password)

      if (response.success && response.user) {
        onLoginSuccess(response.user)
      } else {
        setError(response.error || 'Erro ao fazer login')
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Overlay com blur */}
      <div
        role="presentation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}
        onClick={onClose}
      >
        {/* Modal */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="login-title"
          style={{
            position: 'relative',
            backgroundColor: bg,
            borderRadius: '12px',
            padding: '24px',
            width: '90%',
            maxWidth: '340px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: isDarkMode ? '1px solid #3e3e3e' : '1px solid #e0e0e0',
          }}
          onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar no modal
        >
          {/* Botão X para fechar */}
          <button
            onClick={onClose}
            disabled={isLoading}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: 'none',
              border: 'none',
              fontSize: '20px',
              color: labelText,
              cursor: isLoading ? 'not-allowed' : 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              transition: 'all 0.2s ease',
              opacity: isLoading ? 0.3 : 0.6,
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.opacity = '1'
                e.currentTarget.style.backgroundColor = isDarkMode ? '#3e3e3e' : '#e0e0e0'
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.currentTarget.style.opacity = '0.6'
                e.currentTarget.style.backgroundColor = 'transparent'
              }
            }}
            title="Fechar"
          >
            ✕
          </button>

          {/* Header */}
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }} aria-hidden="true">🔐</div>
            <h2 id="login-title" style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: text }}>
              Login
            </h2>
            <p style={{ margin: '8px 0 0 0', fontSize: '11px', color: labelText }}>
              Entre com sua conta para continuar
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div style={{ marginBottom: '16px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '6px',
                  fontSize: '11px',
                  fontWeight: '500',
                  color: labelText,
                }}
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  border: `1px solid ${inputBorder}`,
                  backgroundColor: inputBg,
                  color: text,
                  fontSize: '12px',
                  boxSizing: 'border-box',
                  outline: 'none',
                }}
              />
            </div>

            {/* Senha */}
            <div style={{ marginBottom: '16px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '6px',
                  fontSize: '11px',
                  fontWeight: '500',
                  color: labelText,
                }}
              >
                Senha
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  disabled={isLoading}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    paddingRight: '40px',
                    borderRadius: '6px',
                    border: `1px solid ${inputBorder}`,
                    backgroundColor: inputBg,
                    color: text,
                    fontSize: '12px',
                    boxSizing: 'border-box',
                    outline: 'none',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    opacity: isLoading ? 0.5 : 0.7,
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isLoading) e.currentTarget.style.opacity = '1'
                  }}
                  onMouseLeave={(e) => {
                    if (!isLoading) e.currentTarget.style.opacity = '0.7'
                  }}
                  title={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Mensagem de erro */}
            {error && (
              <div
                style={{
                  padding: '10px 12px',
                  borderRadius: '6px',
                  backgroundColor: '#ff4444',
                  color: '#ffffff',
                  fontSize: '11px',
                  marginBottom: '16px',
                  textAlign: 'center',
                }}
              >
                {error}
              </div>
            )}

            {/* Botões */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={onClose}
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '6px',
                  border: `1px solid ${inputBorder}`,
                  backgroundColor: 'transparent',
                  color: text,
                  fontSize: '12px',
                  fontWeight: '500',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  opacity: isLoading ? 0.5 : 1,
                }}
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '6px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  opacity: isLoading ? 0.7 : 1,
                }}
              >
                {isLoading ? 'Entrando...' : 'Entrar'}
              </button>
            </div>
          </form>

          {/* Link Criar Conta */}
          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <button
              onClick={onSwitchToRegister}
              disabled={isLoading}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '11px',
                color: isDarkMode ? '#0d99ff' : '#0066cc',
                textDecoration: 'none',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.5 : 1,
              }}
            >
              Não tem conta? Criar conta
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
