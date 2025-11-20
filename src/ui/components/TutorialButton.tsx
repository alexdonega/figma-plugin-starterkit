import { TUTORIAL_URL } from '../../config/i18n.config'

interface TutorialButtonProps {
  label: string
  isDarkMode?: boolean
}

/**
 * Botão de Tutorial que abre vídeo no YouTube
 *
 * URL configurável em: src/config/i18n.config.ts
 */
export function TutorialButton({ label, isDarkMode = true }: TutorialButtonProps) {
  const openTutorial = () => {
    window.open(TUTORIAL_URL, '_blank', 'noopener,noreferrer')
  }

  const buttonStyle = {
    padding: '6px 12px',
    borderRadius: '6px',
    border: isDarkMode ? '1px solid #3e3e3e' : '1px solid #e0e0e0',
    backgroundColor: isDarkMode ? '#1e1e1e' : '#f5f5f5',
    color: isDarkMode ? '#ffffff' : '#000000',
    fontSize: '11px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
  }

  return (
    <button
      onClick={openTutorial}
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = isDarkMode ? '#2a2a2a' : '#ebebeb'
        e.currentTarget.style.borderColor = isDarkMode ? '#0d99ff' : '#0066cc'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = isDarkMode ? '#1e1e1e' : '#f5f5f5'
        e.currentTarget.style.borderColor = isDarkMode ? '#3e3e3e' : '#e0e0e0'
      }}
      title="Abrir tutorial no YouTube"
    >
      <span style={{ fontSize: '13px' }}>▶️</span>
      <span>{label}</span>
    </button>
  )
}
