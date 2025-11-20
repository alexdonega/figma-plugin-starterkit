import { useState, useRef, useEffect } from 'react'
import { Language, languageOptions } from '../../config/i18n.config'

interface LanguageSelectorProps {
  currentLanguage: Language
  onLanguageChange: (lang: Language) => void
  isDarkMode?: boolean
}

/**
 * Componente de seleção de idioma com dropdown
 *
 * Suporta: PT-BR, Espanhol, Inglês
 */
export function LanguageSelector({ currentLanguage, onLanguageChange, isDarkMode = true }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentOption = languageOptions.find((opt) => opt.code === currentLanguage) || languageOptions[0]

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

  const handleSelect = (lang: Language) => {
    onLanguageChange(lang)
    setIsOpen(false)
  }

  const buttonStyle = {
    padding: '6px 10px',
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
    minWidth: '140px',
  }

  const optionStyle = (isSelected: boolean) => ({
    padding: '10px 12px',
    fontSize: '11px',
    cursor: 'pointer',
    backgroundColor: isSelected
      ? isDarkMode
        ? '#0d99ff'
        : '#0066cc'
      : isDarkMode
        ? '#1e1e1e'
        : '#ffffff',
    color: isSelected ? '#ffffff' : isDarkMode ? '#ffffff' : '#000000',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: isSelected ? '600' : '400',
    transition: 'background-color 0.15s ease',
  })

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
      >
        <span style={{ fontSize: '14px' }}>{currentOption.flag}</span>
        <span style={{ fontSize: '10px' }}>▼</span>
      </button>

      {isOpen && (
        <div style={dropdownStyle}>
          {languageOptions.map((option) => (
            <div
              key={option.code}
              onClick={() => handleSelect(option.code)}
              style={optionStyle(option.code === currentLanguage)}
              onMouseEnter={(e) => {
                if (option.code !== currentLanguage) {
                  e.currentTarget.style.backgroundColor = isDarkMode ? '#2a2a2a' : '#f5f5f5'
                }
              }}
              onMouseLeave={(e) => {
                if (option.code !== currentLanguage) {
                  e.currentTarget.style.backgroundColor = isDarkMode ? '#1e1e1e' : '#ffffff'
                }
              }}
            >
              <span style={{ fontSize: '14px' }}>{option.flag}</span>
              <span>{option.label.replace(/🇧🇷 |🇪🇸 |🇺🇸 /, '')}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
