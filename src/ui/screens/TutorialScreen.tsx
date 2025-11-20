import { useState } from 'react'
import { tutorialCategories, type Tutorial } from '../../config/tutorials.config'
import { type Language } from '../../config/i18n.config'

interface TutorialScreenProps {
  isDarkMode?: boolean
  language?: Language
}

export function TutorialScreen({ isDarkMode = true, language = 'pt-BR' }: TutorialScreenProps) {
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const bg = isDarkMode ? '#2c2c2c' : '#ffffff'
  const text = isDarkMode ? '#ffffff' : '#000000'
  const cardBg = isDarkMode ? '#1e1e1e' : '#f5f5f5'
  const cardBorder = isDarkMode ? '#3e3e3e' : '#e0e0e0'
  const labelText = isDarkMode ? '#b0b0b0' : '#666666'
  const codeBg = isDarkMode ? '#1a1a1a' : '#f8f8f8'

  // Se um tutorial está selecionado, mostrar detalhes
  if (selectedTutorial) {
    return (
      <div style={{ padding: '16px', backgroundColor: bg, color: text, minHeight: '700px' }}>
        {/* Header com botão voltar */}
        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => setSelectedTutorial(null)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '18px',
              cursor: 'pointer',
              color: text,
              padding: '4px 8px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = isDarkMode ? '#3a3a3a' : '#e0e0e0'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            ←
          </button>
          <h2 style={{ margin: 0, fontSize: '16px', fontWeight: '600', flex: 1 }}>
            {selectedTutorial.title[language]}
          </h2>
        </div>

        {/* Descrição */}
        <p style={{ fontSize: '12px', color: labelText, marginBottom: '16px', lineHeight: '1.5' }}>
          {selectedTutorial.description[language]}
        </p>

        {/* Código (se tiver) */}
        {selectedTutorial.code && (
          <div style={{ marginBottom: '20px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px'
            }}>
              <h3 style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: text }}>
                💡 Exemplo de Código
              </h3>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(selectedTutorial.code!)
                  // TODO: Adicionar feedback visual
                }}
                style={{
                  padding: '4px 12px',
                  borderRadius: '4px',
                  border: `1px solid ${cardBorder}`,
                  backgroundColor: cardBg,
                  color: text,
                  fontSize: '10px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                📋 Copiar
              </button>
            </div>
            <pre style={{
              backgroundColor: codeBg,
              padding: '12px',
              borderRadius: '6px',
              fontSize: '10px',
              lineHeight: '1.6',
              overflow: 'auto',
              maxHeight: '300px',
              margin: 0,
              border: `1px solid ${cardBorder}`,
              fontFamily: 'Monaco, Consolas, monospace',
            }}>
              <code style={{ color: text }}>{selectedTutorial.code}</code>
            </pre>
          </div>
        )}

        {/* Explicação */}
        {selectedTutorial.explanation && selectedTutorial.explanation[language] && selectedTutorial.explanation[language].length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: text }}>
              📝 {language === 'pt-BR' ? 'Como funciona:' : language === 'es' ? 'Cómo funciona:' : 'How it works:'}
            </h3>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '11px', lineHeight: '1.8', color: labelText }}>
              {selectedTutorial.explanation[language].map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Links relacionados */}
        {selectedTutorial.relatedLinks && selectedTutorial.relatedLinks.length > 0 && (
          <div>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '12px', fontWeight: '600', color: text }}>
              🔗 {language === 'pt-BR' ? 'Links Úteis:' : language === 'es' ? 'Enlaces Útiles:' : 'Useful Links:'}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {selectedTutorial.relatedLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (link.tutorialId) {
                      // Buscar tutorial relacionado
                      for (const category of tutorialCategories) {
                        const tutorial = category.tutorials.find(t => t.id === link.tutorialId)
                        if (tutorial) {
                          setSelectedTutorial(tutorial)
                          return
                        }
                      }
                    } else if (link.url) {
                      window.open(link.url, '_blank')
                    }
                  }}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: cardBg,
                    color: isDarkMode ? '#0d99ff' : '#0066cc',
                    fontSize: '11px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDarkMode ? '#2a2a2a' : '#e8e8e8'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = cardBg
                  }}
                >
                  → {link.title[language]}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  // Lista de categorias e tutoriais
  return (
    <div style={{ padding: '16px', backgroundColor: bg, color: text, minHeight: '700px' }}>
      {/* Header */}
      <div style={{ marginBottom: '16px', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: text }}>
          📚 {language === 'pt-BR' ? 'Aprenda a Usar o StarterKit' : language === 'es' ? 'Aprende a Usar el StarterKit' : 'Learn to Use the StarterKit'}
        </h2>
        <p style={{ margin: '8px 0 0 0', fontSize: '11px', color: labelText }}>
          {language === 'pt-BR' ? 'Tutoriais interativos para dominar o kit' : language === 'es' ? 'Tutoriales interactivos para dominar el kit' : 'Interactive tutorials to master the kit'}
        </p>
      </div>

      {/* Categorias */}
      {tutorialCategories.map((category) => {
        const isExpanded = selectedCategory === category.id

        return (
          <div
            key={category.id}
            style={{
              marginBottom: '12px',
              backgroundColor: cardBg,
              borderRadius: '8px',
              border: `1px solid ${cardBorder}`,
              overflow: 'hidden',
            }}
          >
            {/* Header da categoria */}
            <button
              onClick={() => setSelectedCategory(isExpanded ? null : category.id)}
              style={{
                width: '100%',
                padding: '12px',
                border: 'none',
                backgroundColor: 'transparent',
                color: text,
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '18px' }}>{category.icon}</span>
              <span style={{ flex: 1 }}>{category.title[language]}</span>
              <span style={{ fontSize: '12px', color: labelText }}>
                {isExpanded ? '▼' : '▶'}
              </span>
            </button>

            {/* Lista de tutoriais */}
            {isExpanded && (
              <div style={{ padding: '0 12px 12px 12px' }}>
                {category.tutorials.map((tutorial) => (
                  <button
                    key={tutorial.id}
                    onClick={() => setSelectedTutorial(tutorial)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      marginBottom: '6px',
                      border: 'none',
                      borderRadius: '6px',
                      backgroundColor: bg,
                      color: text,
                      fontSize: '11px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = isDarkMode ? '#3a3a3a' : '#e8e8e8'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = bg
                    }}
                  >
                    <span style={{ fontSize: '14px' }}>📄</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: '500', marginBottom: '2px' }}>
                        {tutorial.title[language]}
                      </div>
                      <div style={{ fontSize: '10px', color: labelText, lineHeight: '1.4' }}>
                        {tutorial.description[language]}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
