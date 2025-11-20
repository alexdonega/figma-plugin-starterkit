import { Language, languageOptions } from '../../config/i18n.config'
import { VERSION_INFO } from '../../config/version.config'
import packageJson from '../../../package.json'

interface SettingsScreenProps {
  isDarkMode: boolean
  currentLanguage: Language
  onLanguageChange: (lang: Language) => void
  onThemeToggle: () => void
  isLoggedIn: boolean
  user: { name: string; email: string } | null
  onLoginClick: () => void
  onRegisterClick: () => void
  onLogout: () => void
}

export function SettingsScreen({
  isDarkMode,
  currentLanguage,
  onLanguageChange,
  onThemeToggle,
  isLoggedIn,
  user,
  onLoginClick,
  onRegisterClick,
  onLogout,
}: SettingsScreenProps) {
  const bg = isDarkMode ? '#2c2c2c' : '#ffffff'
  const text = isDarkMode ? '#ffffff' : '#000000'
  const cardBg = isDarkMode ? '#1e1e1e' : '#f5f5f5'
  const cardBorder = isDarkMode ? '#3e3e3e' : '#e0e0e0'
  const labelText = isDarkMode ? '#b0b0b0' : '#666666'

  const getTitle = () => {
    switch (currentLanguage) {
      case 'es': return 'Configuraciones'
      case 'en': return 'Settings'
      default: return 'Configurações'
    }
  }

  const getLabels = () => {
    switch (currentLanguage) {
      case 'es':
        return {
          appearance: 'Apariencia',
          theme: 'Tema',
          language: 'Idioma',
          account: 'Cuenta',
          loggedInAs: 'Conectado como',
          notLoggedIn: 'No has iniciado sesión',
          login: 'Iniciar sesión',
          register: 'Crear cuenta gratis',
          logout: 'Cerrar sesión',
          about: 'Acerca de',
          version: 'Versión',
          lastUpdate: 'Última actualización',
        }
      case 'en':
        return {
          appearance: 'Appearance',
          theme: 'Theme',
          language: 'Language',
          account: 'Account',
          loggedInAs: 'Logged in as',
          notLoggedIn: 'Not logged in',
          login: 'Login',
          register: 'Create free account',
          logout: 'Logout',
          about: 'About',
          version: 'Version',
          lastUpdate: 'Last update',
        }
      default:
        return {
          appearance: 'Aparência',
          theme: 'Tema',
          language: 'Idioma',
          account: 'Conta',
          loggedInAs: 'Logado como',
          notLoggedIn: 'Você não está logado',
          login: 'Entrar',
          register: 'Criar conta grátis',
          logout: 'Sair',
          about: 'Sobre',
          version: 'Versão',
          lastUpdate: 'Última atualização',
        }
    }
  }

  const labels = getLabels()

  return (
    <div style={{ padding: '16px', backgroundColor: bg, color: text, minHeight: '700px' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: text }}>
          ⚙️ {getTitle()}
        </h2>
      </div>

      {/* Aparência */}
      <div style={{
        marginBottom: '20px',
        padding: '16px',
        backgroundColor: cardBg,
        borderRadius: '8px',
        border: `1px solid ${cardBorder}`,
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '13px', fontWeight: '600', color: text }}>
          {labels.appearance}
        </h3>

        {/* Tema */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '11px', fontWeight: '500', color: labelText }}>
            {labels.theme}
          </label>
          <button
            onClick={onThemeToggle}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '6px',
              border: `1px solid ${cardBorder}`,
              backgroundColor: bg,
              color: text,
              fontSize: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = isDarkMode ? '#3a3a3a' : '#e8e8e8'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = bg
            }}
          >
            <span>{isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}</span>
            <span style={{ fontSize: '10px', color: labelText }}>→</span>
          </button>
        </div>

        {/* Idioma */}
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '11px', fontWeight: '500', color: labelText }}>
            {labels.language}
          </label>
          <select
            value={currentLanguage}
            onChange={(e) => onLanguageChange(e.target.value as Language)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '6px',
              border: `1px solid ${cardBorder}`,
              backgroundColor: bg,
              color: text,
              fontSize: '12px',
              cursor: 'pointer',
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${isDarkMode ? 'white' : 'black'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 10px center',
              backgroundSize: '16px',
              paddingRight: '36px',
            }}
          >
            {languageOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.flag} {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Conta */}
      <div style={{
        marginBottom: '20px',
        padding: '16px',
        backgroundColor: cardBg,
        borderRadius: '8px',
        border: `1px solid ${cardBorder}`,
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '13px', fontWeight: '600', color: text }}>
          {labels.account}
        </h3>

        {isLoggedIn && user ? (
          <>
            <div style={{
              padding: '12px',
              backgroundColor: bg,
              borderRadius: '6px',
              marginBottom: '12px',
            }}>
              <div style={{ fontSize: '10px', color: labelText, marginBottom: '4px' }}>
                {labels.loggedInAs}
              </div>
              <div style={{ fontSize: '12px', fontWeight: '600', color: text, marginBottom: '2px' }}>
                {user.name}
              </div>
              <div style={{ fontSize: '11px', color: labelText }}>
                {user.email}
              </div>
            </div>
            <button
              onClick={onLogout}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '6px',
                border: `1px solid ${cardBorder}`,
                backgroundColor: bg,
                color: '#ff4444',
                fontSize: '12px',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDarkMode ? '#3a2020' : '#fff0f0'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = bg
              }}
            >
              {labels.logout}
            </button>
          </>
        ) : (
          <>
            <div style={{
              padding: '12px',
              backgroundColor: bg,
              borderRadius: '6px',
              marginBottom: '12px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '11px', color: labelText }}>
                {labels.notLoggedIn}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={onLoginClick}
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  borderRadius: '6px',
                  border: `1px solid ${cardBorder}`,
                  backgroundColor: bg,
                  color: text,
                  fontSize: '12px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = isDarkMode ? '#3a3a3a' : '#e8e8e8'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = bg
                }}
              >
                {labels.login}
              </button>
              <button
                onClick={onRegisterClick}
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  borderRadius: '6px',
                  border: '1px solid #667eea',
                  backgroundColor: '#667eea',
                  color: '#ffffff',
                  fontSize: '12px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#5568d3'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#667eea'
                }}
              >
                {labels.register}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Sobre / Versão */}
      <div style={{
        padding: '16px',
        backgroundColor: cardBg,
        borderRadius: '8px',
        border: `1px solid ${cardBorder}`,
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '13px', fontWeight: '600', color: text }}>
          {labels.about}
        </h3>

        {/* Versão */}
        <div style={{
          padding: '12px',
          backgroundColor: bg,
          borderRadius: '6px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px',
        }}>
          <div style={{ fontSize: '11px', color: labelText }}>
            {labels.version}
          </div>
          <div style={{
            fontSize: '12px',
            fontWeight: '600',
            color: text,
            fontFamily: 'monospace',
          }}>
            v{packageJson.version}
          </div>
        </div>

        {/* Data de Atualização */}
        <div style={{
          padding: '12px',
          backgroundColor: bg,
          borderRadius: '6px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ fontSize: '11px', color: labelText }}>
            {labels.lastUpdate}
          </div>
          <div style={{
            fontSize: '11px',
            fontWeight: '500',
            color: labelText,
            fontFamily: 'monospace',
          }}>
            {VERSION_INFO.lastUpdate}
          </div>
        </div>
      </div>
    </div>
  )
}
