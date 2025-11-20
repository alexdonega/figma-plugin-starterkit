import { upgradeConfig } from '../../config/upgrade.config'

interface UpgradeScreenProps {
  onBack: () => void
  isDarkMode?: boolean
}

/**
 * Tela de Upgrade/Pro com copy focada em IA
 *
 * Exibe waitlist e opções de feedback com links externos
 */
export function UpgradeScreen({ onBack, isDarkMode = true }: UpgradeScreenProps) {
  const bg = isDarkMode ? '#2c2c2c' : '#ffffff'
  const text = isDarkMode ? '#ffffff' : '#000000'
  const cardBg = isDarkMode ? '#1e1e1e' : '#f5f5f5'
  const labelText = isDarkMode ? '#b0b0b0' : '#666666'
  const borderColor = isDarkMode ? '#3e3e3e' : '#e0e0e0'

  // Função para abrir URLs externas
  const openExternalUrl = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      style={{
        padding: '16px',
        backgroundColor: bg,
        color: text,
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header com botão de voltar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: text,
            fontSize: '18px',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center'
          }}
          aria-label="Voltar"
        >
          ←
        </button>
        <h2 style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: text }}>
          Gerador de Carrossel
        </h2>
      </div>

      {/* Badge "Muito em breve" */}
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 16px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            fontSize: '12px',
            fontWeight: '600'
          }}
        >
          <span>{upgradeConfig.badge.icon}</span>
          <span>{upgradeConfig.badge.text}</span>
        </div>
      </div>

      {/* Título principal */}
      <h1
        style={{
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: '700',
          margin: '12px 0',
          color: text
        }}
      >
        {upgradeConfig.title}
      </h1>

      {/* Descrição */}
      <p
        style={{
          textAlign: 'center',
          fontSize: '12px',
          color: labelText,
          margin: '0 0 24px 0',
          lineHeight: '1.5',
          maxWidth: '90%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        {upgradeConfig.description}
      </p>

      {/* Card de Waitlist */}
      <div
        style={{
          backgroundColor: cardBg,
          borderRadius: '12px',
          padding: '20px',
          border: `1px solid ${borderColor}`,
          marginBottom: '16px'
        }}
      >
        {/* Ícone + Título do card */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px'
            }}
          >
            {upgradeConfig.waitlist.icon}
          </div>
          <h3 style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: text }}>
            {upgradeConfig.waitlist.title}
          </h3>
        </div>

        {/* Descrição do card */}
        <p style={{ fontSize: '11px', color: labelText, margin: '0 0 16px 0', lineHeight: '1.4' }}>
          {upgradeConfig.waitlist.description}
        </p>

        {/* Lista de features com checkmarks */}
        <div
          style={{
            backgroundColor: isDarkMode ? '#2a2a2a' : '#ebebeb',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '16px'
          }}
        >
          {upgradeConfig.waitlist.features.map((feature, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                marginBottom: index < upgradeConfig.waitlist.features.length - 1 ? '10px' : '0'
              }}
            >
              <span style={{ fontSize: '14px', flexShrink: 0, marginTop: '1px' }}>✓</span>
              <span style={{ fontSize: '11px', color: text, lineHeight: '1.4' }}>{feature}</span>
            </div>
          ))}
        </div>

        {/* Botão principal "Entrar na Waitlist" */}
        <button
          onClick={() => openExternalUrl(upgradeConfig.waitlist.button.url)}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#18cd5e',
            color: 'white',
            fontSize: '12px',
            fontWeight: '700',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 12px rgba(24, 205, 94, 0.3)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.backgroundColor = '#15b854'
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(24, 205, 94, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.backgroundColor = '#18cd5e'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(24, 205, 94, 0.3)'
          }}
        >
          <span>{upgradeConfig.waitlist.button.text}</span>
          <span>→</span>
        </button>
      </div>

      {/* Botão de feedback (footer) */}
      <button
        onClick={() => openExternalUrl(upgradeConfig.feedback.url)}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '8px',
          border: `1px solid ${borderColor}`,
          backgroundColor: 'transparent',
          color: isDarkMode ? '#0d99ff' : '#0066cc',
          fontSize: '11px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = isDarkMode ? '#1e1e1e' : '#f5f5f5'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent'
        }}
      >
        {upgradeConfig.feedback.text}
      </button>
    </div>
  )
}
