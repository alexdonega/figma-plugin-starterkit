import { CSSProperties } from 'react'

interface UpgradeButtonProps {
  onClick: () => void
  isDarkMode?: boolean
  style?: CSSProperties
}

/**
 * Botão de Upgrade reutilizável
 *
 * Pode ser posicionado no header, sidebar ou qualquer lugar da UI
 */
export function UpgradeButton({ onClick, style }: UpgradeButtonProps) {
  const buttonStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '6px',
    border: 'none',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontSize: '11px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
    ...style
  }

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)'
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)'
      }}
    >
      <span style={{ fontSize: '13px' }}>⭐</span>
      <span>Upgrade</span>
    </button>
  )
}
