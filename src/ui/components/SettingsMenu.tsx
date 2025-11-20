import { useState, useRef, useEffect } from 'react'
import { Language, languageOptions, translations } from '../../config/i18n.config'
import type { User } from '../../services/auth.service'

interface SettingsMenuProps {
  currentLanguage: Language
  onLanguageChange: (lang: Language) => void
  isDarkMode: boolean
  onThemeToggle: () => void
  isLoggedIn: boolean
  user: User | null
  onLoginClick: () => void
  onRegisterClick: () => void
  onLogout: () => void
}

/**
 * Menu de Configurações (Settings)
 *
 * Agrupa: Seleção de Idioma + Toggle de Tema (Dark/Light)
 */
export function SettingsMenu({
  currentLanguage,
  onLanguageChange,
  isDarkMode,
  onThemeToggle,
  isLoggedIn,
  user,
  onLoginClick,
  onRegisterClick,
  onLogout,
}: SettingsMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const t = translations[currentLanguage]

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const buttonStyle = {
    padding: '6px 10px',
    borderRadius: '6px',
    border: isDarkMode ? '1px solid #3e3e3e' : '1px solid #e0e0e0',
    backgroundColor: isDarkMode ? '#1e1e1e' : '#f5f5f5',
    color: isDarkMode ? '#ffffff' : '#000000',
    fontSize: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    width: '36px',
    height: '32px',
  }

  const dropdownStyle = {
    position: 'absolute' as const,
    top: '100%',
    right: '0',
    marginTop: '4px',
    backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
    border: isDarkMode ? '1px solid #3e3e3e' : '1px solid #e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
    zIndex: 1000,
    minWidth: '240px',
  }

  const sectionStyle = {
    padding: '8px 12px',
    borderBottom: isDarkMode ? '1px solid #3e3e3e' : '1px solid #e0e0e0',
  }

  const sectionTitleStyle = {
    fontSize: '10px',
    fontWeight: '600' as const,
    color: isDarkMode ? '#b0b0b0' : '#666666',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    marginBottom: '8px',
  }

  const optionStyle = (isSelected: boolean) => ({
    padding: '8px 12px',
    fontSize: '11px',
    cursor: 'pointer',
    backgroundColor: isSelected
      ? isDarkMode
        ? '#0d99ff'
        : '#0066cc'
      : 'transparent',
    color: isSelected ? '#ffffff' : isDarkMode ? '#ffffff' : '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '8px',
    fontWeight: isSelected ? '600' : '400',
    transition: 'background-color 0.15s ease',
  })

  const themeToggleStyle = {
    padding: '10px 12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    fontSize: '11px',
    color: isDarkMode ? '#ffffff' : '#000000',
    transition: 'background-color 0.15s ease',
  }

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = isDarkMode ? '#2a2a2a' : '#ebebeb'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = isDarkMode ? '#1e1e1e' : '#f5f5f5'
        }}
        title="Configurações"
        aria-label="Configurações"
      >
        ⚙️
      </button>

      {isOpen && (
        <div style={dropdownStyle}>
          {/* Seção: Idioma */}
          <div style={sectionStyle}>
            <div style={sectionTitleStyle}>{t.language}</div>
            {languageOptions.map((option) => (
              <div
                key={option.code}
                onClick={() => {
                  onLanguageChange(option.code)
                }}
                style={{
                  ...optionStyle(option.code === currentLanguage),
                  padding: '12px 14px',
                  borderRadius: '8px',
                  marginBottom: '4px',
                }}
                onMouseEnter={(e) => {
                  if (option.code !== currentLanguage) {
                    e.currentTarget.style.backgroundColor = isDarkMode ? '#2a2a2a' : '#f5f5f5'
                  }
                }}
                onMouseLeave={(e) => {
                  if (option.code !== currentLanguage) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <span style={{ fontSize: '12px', fontWeight: '500' }}>
                    {option.code === 'pt-BR' ? 'Português (Brasil)' : option.code === 'es' ? 'Español' : 'English'}
                  </span>
                </div>
                {option.code === currentLanguage && (
                  <span style={{ fontSize: '16px', color: option.code === currentLanguage ? '#ffffff' : isDarkMode ? '#0d99ff' : '#0066cc' }}>✓</span>
                )}
              </div>
            ))}
          </div>

          {/* Seção: Tema */}
          <div style={{ borderBottom: isDarkMode ? '1px solid #3e3e3e' : '1px solid #e0e0e0' }}>
            <div style={{ padding: '8px 12px 4px 12px' }}>
              <div style={sectionTitleStyle}>{t.theme}</div>
            </div>
            <div
              style={themeToggleStyle}
              onClick={onThemeToggle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDarkMode ? '#2a2a2a' : '#f5f5f5'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '14px' }}>{isDarkMode ? '🌙' : '☀️'}</span>
                <span>{isDarkMode ? 'Dark' : 'Light'}</span>
              </div>
              <div
                style={{
                  width: '36px',
                  height: '20px',
                  borderRadius: '10px',
                  backgroundColor: isDarkMode ? '#0d99ff' : '#cccccc',
                  position: 'relative' as const,
                  transition: 'background-color 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    position: 'absolute' as const,
                    top: '2px',
                    left: isDarkMode ? '18px' : '2px',
                    transition: 'left 0.2s ease',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Seção: Conta */}
          <div>
            <div style={{ padding: '8px 12px 4px 12px' }}>
              <div style={sectionTitleStyle}>CONTA</div>
            </div>

            {!isLoggedIn ? (
              // Botões "Fazer Login" e "Criar Conta"
              <div>
                <div
                  onClick={() => {
                    onLoginClick()
                    setIsOpen(false)
                  }}
                  style={{
                    padding: '12px 14px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    color: isDarkMode ? '#ffffff' : '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'background-color 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDarkMode ? '#2a2a2a' : '#f5f5f5'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  <span style={{ fontSize: '16px' }}>👤</span>
                  <span>Fazer Login</span>
                </div>
                <div
                  onClick={() => {
                    onRegisterClick()
                    setIsOpen(false)
                  }}
                  style={{
                    padding: '12px 14px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    color: isDarkMode ? '#ffffff' : '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'background-color 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDarkMode ? '#2a2a2a' : '#f5f5f5'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  <span style={{ fontSize: '16px' }}>✨</span>
                  <span>Criar Conta</span>
                </div>
              </div>
            ) : (
              // Informações do usuário + Logout
              <div>
                <div
                  style={{
                    padding: '12px 14px',
                    fontSize: '11px',
                    color: isDarkMode ? '#ffffff' : '#000000',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '14px', color: '#4caf50' }}>✓</span>
                    <span style={{ fontWeight: '600' }}>{user?.name}</span>
                  </div>
                  <div style={{ fontSize: '10px', color: isDarkMode ? '#b0b0b0' : '#666666', marginLeft: '22px' }}>
                    {user?.email}
                  </div>
                </div>
                <button
                  onClick={() => {
                    onLogout()
                    setIsOpen(false)
                  }}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    color: '#ff4444',
                    fontSize: '12px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background-color 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDarkMode ? '#2a2a2a' : '#f5f5f5'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  Sair
                </button>
              </div>
            )}
          </div>

          {/* Seção: Versão */}
          <div
            style={{
              padding: '10px 14px',
              fontSize: '10px',
              color: isDarkMode ? '#666666' : '#999999',
              textAlign: 'center',
              borderTop: isDarkMode ? '1px solid #3e3e3e' : '1px solid #e0e0e0',
            }}
          >
            v2.9.0
          </div>
        </div>
      )}
    </div>
  )
}
