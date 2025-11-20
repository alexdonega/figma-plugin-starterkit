import { useState, useEffect } from 'react'
import { sendToPlugin } from '../utils/helpers'
import { UpgradeScreen } from './screens/UpgradeScreen'
import { TutorialScreen } from './screens/TutorialScreen'
import { SettingsScreen } from './screens/SettingsScreen'
import { RegisterScreen } from './screens/RegisterScreen'
import { LoginModal } from './components/LoginModal'
import { RegisterModal } from './components/RegisterModal'
import { Language, translations } from '../config/i18n.config'
import { isAuthenticated, getCurrentUser, logout, type User } from '../services/auth.service'

// Tipo de tela/tab ativa
type Screen = 'main' | 'tutorial' | 'settings' | 'register' | 'upgrade'

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('main')
  const [count, setCount] = useState(5)
  const [color, setColor] = useState('orange')
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('figmaPluginLanguage')
      return (saved as Language) || 'pt-BR'
    } catch {
      return 'pt-BR'
    }
  })
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('figmaPluginTheme')
      return saved === 'light' ? false : true
    } catch {
      return true
    }
  })

  // Estado de autenticação
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  // Traduções ativas
  const t = translations[language]

  // Verificar se usuário está logado ao abrir o plugin
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authenticated = await isAuthenticated()

        if (!authenticated) {
          setIsLoggedIn(false)
          setUser(null)
          return
        }

        const currentUser = await getCurrentUser()

        if (!currentUser) {
          // Token existe mas usuário inválido - limpar
          await logout()
          setIsLoggedIn(false)
          setUser(null)
          return
        }

        setIsLoggedIn(true)
        setUser(currentUser)
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error)
        // Fallback seguro: deslogar usuário
        await logout()
        setIsLoggedIn(false)
        setUser(null)
      }
    }

    checkAuth()
  }, [])

  // Salvar idioma
  useEffect(() => {
    try {
      localStorage.setItem('figmaPluginLanguage', language)
    } catch (e) {
      console.error('Erro ao salvar idioma:', e)
    }
  }, [language])

  // Salvar tema
  useEffect(() => {
    try {
      document.body.style.backgroundColor = isDarkMode ? '#2c2c2c' : '#ffffff'
      document.body.style.color = isDarkMode ? '#ffffff' : '#000000'
      localStorage.setItem('figmaPluginTheme', isDarkMode ? 'dark' : 'light')
    } catch (e) {
      console.error('Erro ao aplicar tema:', e)
    }
  }, [isDarkMode])

  const handleCreate = () => {
    sendToPlugin({
      type: 'create-rectangles',
      count,
      color: color as 'orange' | 'blue' | 'red' | 'green',
    })
  }

  // Funções de autenticação
  const handleLoginSuccess = (loggedInUser: User) => {
    setIsLoggedIn(true)
    setUser(loggedInUser)
    setShowLoginModal(false)
    setShowRegisterModal(false)
  }

  const handleRegisterSuccess = (registeredUser: User) => {
    setIsLoggedIn(true)
    setUser(registeredUser)
    setShowLoginModal(false)
    setShowRegisterModal(false)
    setCurrentScreen('settings')
  }

  const handleSwitchToRegister = () => {
    setShowLoginModal(false)
    setCurrentScreen('register')
  }

  const handleSwitchToLogin = () => {
    setShowRegisterModal(false)
    setShowLoginModal(true)
  }

  const handleLogout = async () => {
    await logout()
    setIsLoggedIn(false)
    setUser(null)
  }

  const bg = isDarkMode ? '#2c2c2c' : '#ffffff'
  const text = isDarkMode ? '#ffffff' : '#000000'
  const inputBg = isDarkMode ? '#1e1e1e' : '#f5f5f5'
  const inputBorder = isDarkMode ? '#3e3e3e' : '#e0e0e0'
  const labelText = isDarkMode ? '#b0b0b0' : '#666666'

  // Renderizar tela de Upgrade
  if (currentScreen === 'upgrade') {
    return <UpgradeScreen onBack={() => setCurrentScreen('main')} isDarkMode={isDarkMode} />
  }

  // Renderizar tela de Registro
  if (currentScreen === 'register') {
    return (
      <RegisterScreen
        isDarkMode={isDarkMode}
        onRegisterSuccess={handleRegisterSuccess}
        onBackToSettings={() => setCurrentScreen('settings')}
      />
    )
  }

  // Renderizar tela de Settings
  if (currentScreen === 'settings') {
    return (
      <div style={{ backgroundColor: bg, minHeight: '700px' }}>
        {/* Header com Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 12px 12px 12px',
          borderBottom: `1px solid ${inputBorder}`,
          backgroundColor: bg,
        }}>
          <div style={{ display: 'flex', gap: '4px', flex: 1 }}>
            <button
              onClick={() => setCurrentScreen('main')}
              style={{
                padding: '8px 16px',
                border: 'none',
                backgroundColor: 'transparent',
                color: labelText,
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'pointer',
                borderBottom: '2px solid transparent',
              }}
            >
              🏠 Principal
            </button>
            <button
              onClick={() => setCurrentScreen('tutorial')}
              style={{
                padding: '8px 16px',
                border: 'none',
                backgroundColor: 'transparent',
                color: labelText,
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'pointer',
                borderBottom: '2px solid transparent',
              }}
            >
              📚 Tutorial
            </button>
            <button
              onClick={() => setCurrentScreen('settings')}
              style={{
                padding: '8px 16px',
                border: 'none',
                backgroundColor: 'transparent',
                color: text,
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                borderBottom: '2px solid #667eea',
              }}
            >
              ⚙️ Configurações
            </button>
          </div>
          <button
            onClick={() => setCurrentScreen('upgrade')}
            style={{
              padding: '8px 16px',
              border: 'none',
              backgroundColor: '#18cd5e',
              color: '#003d1a',
              fontSize: '12px',
              fontWeight: '700',
              cursor: 'pointer',
              borderRadius: '6px',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#15b854'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#18cd5e'
            }}
          >
            ⭐ Upgrade
          </button>
        </div>
        <SettingsScreen
          isDarkMode={isDarkMode}
          currentLanguage={language}
          onLanguageChange={setLanguage}
          onThemeToggle={() => setIsDarkMode(!isDarkMode)}
          isLoggedIn={isLoggedIn}
          user={user}
          onLoginClick={() => setShowLoginModal(true)}
          onRegisterClick={() => setCurrentScreen('register')}
          onLogout={handleLogout}
        />

        {/* Modal de Login */}
        {showLoginModal && (
          <LoginModal
            onClose={() => setShowLoginModal(false)}
            onLoginSuccess={handleLoginSuccess}
            onSwitchToRegister={handleSwitchToRegister}
            isDarkMode={isDarkMode}
          />
        )}

        {/* Modal de Registro */}
        {showRegisterModal && (
          <RegisterModal
            onClose={() => setShowRegisterModal(false)}
            onRegisterSuccess={handleRegisterSuccess}
            onBackToLogin={handleSwitchToLogin}
            isDarkMode={isDarkMode}
          />
        )}
      </div>
    )
  }

  // Renderizar tela de Tutorial
  if (currentScreen === 'tutorial') {
    return (
      <div style={{ backgroundColor: bg, minHeight: '700px' }}>
        {/* Header com Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 12px 12px 12px',
          borderBottom: `1px solid ${inputBorder}`,
          backgroundColor: bg,
        }}>
          <div style={{ display: 'flex', gap: '4px', flex: 1 }}>
            <button
              onClick={() => setCurrentScreen('main')}
              style={{
                padding: '8px 16px',
                border: 'none',
                backgroundColor: 'transparent',
                color: labelText,
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'pointer',
                borderBottom: '2px solid transparent',
              }}
            >
              🏠 Principal
            </button>
            <button
              onClick={() => setCurrentScreen('tutorial')}
              style={{
                padding: '8px 16px',
                border: 'none',
                backgroundColor: 'transparent',
                color: text,
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                borderBottom: '2px solid #667eea',
              }}
            >
              📚 Tutorial
            </button>
            <button
              onClick={() => setCurrentScreen('settings')}
              style={{
                padding: '8px 16px',
                border: 'none',
                backgroundColor: 'transparent',
                color: labelText,
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'pointer',
                borderBottom: '2px solid transparent',
              }}
            >
              ⚙️ Configurações
            </button>
          </div>
          <button
            onClick={() => setCurrentScreen('upgrade')}
            style={{
              padding: '8px 16px',
              border: 'none',
              backgroundColor: '#18cd5e',
              color: '#003d1a',
              fontSize: '12px',
              fontWeight: '700',
              cursor: 'pointer',
              borderRadius: '6px',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#15b854'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#18cd5e'
            }}
          >
            ⭐ Upgrade
          </button>
        </div>
        <TutorialScreen isDarkMode={isDarkMode} language={language} />

        {/* Modal de Login */}
        {showLoginModal && (
          <LoginModal
            onClose={() => setShowLoginModal(false)}
            onLoginSuccess={handleLoginSuccess}
            onSwitchToRegister={handleSwitchToRegister}
            isDarkMode={isDarkMode}
          />
        )}

        {/* Modal de Registro */}
        {showRegisterModal && (
          <RegisterModal
            onClose={() => setShowRegisterModal(false)}
            onRegisterSuccess={handleRegisterSuccess}
            onBackToLogin={handleSwitchToLogin}
            isDarkMode={isDarkMode}
          />
        )}
      </div>
    )
  }

  // Renderizar tela principal
  return (
    <div style={{ backgroundColor: bg, minHeight: '700px' }}>
      {/* Header com Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 12px 12px 12px',
        borderBottom: `1px solid ${inputBorder}`,
        backgroundColor: bg,
      }}>
        <div style={{ display: 'flex', gap: '4px', flex: 1 }}>
          <button
            onClick={() => setCurrentScreen('main')}
            style={{
              padding: '8px 16px',
              border: 'none',
              backgroundColor: 'transparent',
              color: text,
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              borderBottom: '2px solid #667eea',
            }}
          >
            🏠 Principal
          </button>
          <button
            onClick={() => setCurrentScreen('tutorial')}
            style={{
              padding: '8px 16px',
              border: 'none',
              backgroundColor: 'transparent',
              color: labelText,
              fontSize: '12px',
              fontWeight: '500',
              cursor: 'pointer',
              borderBottom: '2px solid transparent',
            }}
          >
            📚 Tutorial
          </button>
          <button
            onClick={() => setCurrentScreen('settings')}
            style={{
              padding: '8px 16px',
              border: 'none',
              backgroundColor: 'transparent',
              color: labelText,
              fontSize: '12px',
              fontWeight: '500',
              cursor: 'pointer',
              borderBottom: '2px solid transparent',
            }}
          >
            ⚙️ Configurações
          </button>
        </div>
        <button
          onClick={() => setCurrentScreen('upgrade')}
          style={{
            padding: '8px 16px',
            border: 'none',
            backgroundColor: '#18cd5e',
            color: '#003d1a',
            fontSize: '12px',
            fontWeight: '700',
            cursor: 'pointer',
            borderRadius: '6px',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#15b854'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#18cd5e'
          }}
        >
          ⭐ Upgrade
        </button>
      </div>

      <div style={{ padding: '16px' }}>
        {/* Header com título e descrição */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{
            margin: '0 0 6px 0',
            fontSize: '18px',
            fontWeight: '700',
            color: text,
            lineHeight: '1.2'
          }}>
            {t.createRectangles}
          </h2>
          <p style={{
            margin: 0,
            fontSize: '12px',
            color: labelText,
            lineHeight: '1.4'
          }}>
            {t.createRectanglesDescription}
          </p>
        </div>

        {/* Inputs em Grid lado a lado */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            {/* Quantidade */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '6px',
                fontSize: '11px',
                fontWeight: '500',
                color: labelText
              }}>
                {t.quantity}
              </label>
              <input
                type="number"
                value={count}
                min="1"
                max="100"
                onChange={(e) => setCount(parseInt(e.target.value) || 1)}
                style={{
                  width: '100%',
                  padding: '8px 10px',
                  borderRadius: '4px',
                  border: `1px solid ${inputBorder}`,
                  backgroundColor: inputBg,
                  color: text,
                  fontSize: '12px',
                  fontWeight: '600',
                  boxSizing: 'border-box',
                  textAlign: 'center',
                  outline: 'none',
                }}
              />
            </div>

            {/* Cor */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '6px',
                fontSize: '11px',
                fontWeight: '500',
                color: labelText
              }}>
                {t.rectangleColor}
              </label>
              <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 10px',
                  borderRadius: '4px',
                  border: `1px solid ${inputBorder}`,
                  backgroundColor: inputBg,
                  color: text,
                  fontSize: '11px',
                  cursor: 'pointer',
                  boxSizing: 'border-box',
                  outline: 'none',
                }}
              >
                <option value="orange">{t.orange}</option>
                <option value="blue">{t.blue}</option>
                <option value="red">{t.red}</option>
                <option value="green">{t.green}</option>
              </select>
            </div>
          </div>

        {/* Botão de Ação */}
        <button
          onClick={handleCreate}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: '#667eea',
            color: '#ffffff',
            fontSize: '12px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(102, 126, 234, 0.25)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#5568d3'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.35)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#667eea'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.25)'
          }}
        >
          {t.createButton}
        </button>

        {/* Modal de Login */}
        {showLoginModal && (
          <LoginModal
            onClose={() => setShowLoginModal(false)}
            onLoginSuccess={handleLoginSuccess}
            onSwitchToRegister={handleSwitchToRegister}
            isDarkMode={isDarkMode}
          />
        )}

        {/* Modal de Registro */}
        {showRegisterModal && (
          <RegisterModal
            onClose={() => setShowRegisterModal(false)}
            onRegisterSuccess={handleRegisterSuccess}
            onBackToLogin={handleSwitchToLogin}
            isDarkMode={isDarkMode}
          />
        )}
      </div>
    </div>
  )
}

export default App
