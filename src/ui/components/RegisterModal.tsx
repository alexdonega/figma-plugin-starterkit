import { useState } from 'react'
import { register, type User } from '../../services/auth.service'

interface RegisterModalProps {
  onClose: () => void
  onRegisterSuccess: (user: User) => void
  onBackToLogin: () => void
  isDarkMode?: boolean
}

/**
 * Modal de Registro (Criar Conta)
 *
 * Permite criar nova conta diretamente no plugin
 */
export function RegisterModal({ onClose, onRegisterSuccess, onBackToLogin, isDarkMode = true }: RegisterModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
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

  const validateForm = (): string | null => {
    if (!name.trim()) {
      return 'Nome é obrigatório'
    }
    if (!email.trim()) {
      return 'Email é obrigatório'
    }
    if (!validateEmail(email)) {
      return 'Email inválido. Use o formato: usuario@exemplo.com'
    }
    if (password.length < 6) {
      return 'Senha deve ter no mínimo 6 caracteres'
    }
    if (!acceptTerms) {
      return 'Você precisa aceitar os termos de uso'
    }
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validar formulário
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setIsLoading(true)

    try {
      const response = await register(name, email, password)

      if (response.success && response.user) {
        onRegisterSuccess(response.user)
      } else {
        setError(response.error || 'Erro ao criar conta')
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
          aria-labelledby="register-title"
          style={{
            position: 'relative',
            backgroundColor: bg,
            borderRadius: '12px',
            padding: '24px',
            width: '90%',
            maxWidth: '380px',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: isDarkMode ? '1px solid #3e3e3e' : '1px solid #e0e0e0',
          }}
          onClick={(e) => e.stopPropagation()}
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

          {/* Prova Social */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '20px',
            paddingBottom: '16px',
            borderBottom: `1px solid ${inputBorder}`
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#667eea',
                marginLeft: '-8px',
                border: `2px solid ${bg}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px'
              }}>👤</div>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#764ba2',
                marginLeft: '-8px',
                border: `2px solid ${bg}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px'
              }}>👤</div>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#f093fb',
                marginLeft: '-8px',
                border: `2px solid ${bg}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px'
              }}>👤</div>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#4facfe',
                marginLeft: '-8px',
                border: `2px solid ${bg}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px',
                fontWeight: '600',
                color: '#ffffff'
              }}>1.3k+</div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: '2px', marginBottom: '2px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} style={{ color: '#ffd700', fontSize: '12px' }}>★</span>
                ))}
              </div>
              <div style={{ fontSize: '10px', color: labelText, lineHeight: '1.3' }}>
                +1.300 pessoas já estão<br />usando o Meu Plugin
              </div>
            </div>
          </div>

          {/* Header */}
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <h2 id="register-title" style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: text, lineHeight: '1.3' }}>
              Comece Grátis Agora:<br />
              <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Desbloqueie Recursos Premium do Plugin
              </span>
            </h2>
            <p style={{ margin: '12px 0 0 0', fontSize: '12px', color: labelText, lineHeight: '1.4' }}>
              Preencha seus dados e libere todas as funcionalidades do plugin
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit}>
            {/* Nome */}
            <div style={{ marginBottom: '12px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '6px',
                  fontSize: '11px',
                  fontWeight: '500',
                  color: labelText,
                }}
              >
                Nome Completo *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite o seu nome completo"
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

            {/* Email */}
            <div style={{ marginBottom: '12px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '6px',
                  fontSize: '11px',
                  fontWeight: '500',
                  color: labelText,
                }}
              >
                Email *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Campo para informar seu melhor email"
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
            <div style={{ marginBottom: '14px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '6px',
                  fontSize: '11px',
                  fontWeight: '500',
                  color: labelText,
                }}
              >
                Senha *
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha (mínimo 6 caracteres)"
                  required
                  disabled={isLoading}
                  minLength={6}
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
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
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
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Checkbox Termos */}
            <div style={{ marginBottom: '16px' }}>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  cursor: 'pointer',
                  fontSize: '11px',
                  color: labelText,
                }}
              >
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  disabled={isLoading}
                  style={{ marginTop: '2px', cursor: 'pointer' }}
                />
                <span>
                  Aceito os{' '}
                  <a
                    href="https://seusite.com/termos"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: isDarkMode ? '#0d99ff' : '#0066cc', textDecoration: 'none' }}
                  >
                    termos de uso
                  </a>{' '}
                  e{' '}
                  <a
                    href="https://seusite.com/privacidade"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: isDarkMode ? '#0d99ff' : '#0066cc', textDecoration: 'none' }}
                  >
                    política de privacidade
                  </a>
                </span>
              </label>
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

            {/* Botão */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '6px',
                border: 'none',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                fontSize: '13px',
                fontWeight: '700',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.7 : 1,
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              {isLoading ? 'CRIANDO CONTA...' : 'CRIAR MINHA CONTA GRÁTIS AGORA »'}
            </button>

            {/* Footer info */}
            <div style={{
              textAlign: 'center',
              fontSize: '10px',
              color: labelText,
              lineHeight: '1.5',
              marginBottom: '16px'
            }}>
              Ative em 60 segundos • Sem cartão de crédito • Suporte Premium incluso
            </div>
          </form>

          {/* Link Voltar para Login */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={onBackToLogin}
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
              Já tem conta? Fazer login
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
