import { useState, useEffect } from 'react'
import { sendToPlugin } from '../utils/helpers'

function App() {
  const [count, setCount] = useState(5)
  const [color, setColor] = useState('orange')
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('figmaPluginTheme')
      return saved === 'light' ? false : true
    } catch {
      return true
    }
  })

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
    sendToPlugin('create-rectangles', { count, color })
  }

  const bg = isDarkMode ? '#2c2c2c' : '#ffffff'
  const text = isDarkMode ? '#ffffff' : '#000000'
  const inputBg = isDarkMode ? '#1e1e1e' : '#f5f5f5'
  const inputBorder = isDarkMode ? '#3e3e3e' : '#e0e0e0'
  const labelText = isDarkMode ? '#b0b0b0' : '#666666'

  return (
    <div style={{ padding: '16px', backgroundColor: bg, color: text, minHeight: '400px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h2 style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: text }}>Criar Retângulos</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', color: labelText }}>
            {isDarkMode ? '🌙 Dark' : '☀️ Light'}
          </span>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{
              padding: '4px 12px',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: isDarkMode ? '#0d99ff' : '#cccccc',
              color: 'white',
              cursor: 'pointer',
              fontSize: '11px'
            }}
          >
            Trocar
          </button>
        </div>
      </div>

      <div style={{ marginTop: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '500', color: labelText }}>
          Quantidade
        </label>
        <input
          type="number"
          value={count}
          min="1"
          max="100"
          onChange={(e) => setCount(parseInt(e.target.value) || 1)}
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '4px',
            border: `1px solid ${inputBorder}`,
            backgroundColor: inputBg,
            color: text,
            fontSize: '11px',
            boxSizing: 'border-box',
          }}
        />
      </div>

      <div style={{ marginTop: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: '500', color: labelText }}>
          Cor dos retângulos
        </label>
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '4px',
            border: `1px solid ${inputBorder}`,
            backgroundColor: inputBg,
            color: text,
            fontSize: '11px',
            cursor: 'pointer',
          }}
        >
          <option value="orange">🟠 Laranja</option>
          <option value="blue">🔵 Azul</option>
          <option value="red">🔴 Vermelho</option>
          <option value="green">🟢 Verde</option>
        </select>
      </div>

      <button
        className="button button--primary"
        onClick={handleCreate}
        style={{ marginTop: '16px', width: '100%' }}
      >
        Criar Retângulos
      </button>

      <div style={{
        marginTop: '16px',
        padding: '12px',
        borderRadius: '6px',
        backgroundColor: isDarkMode ? '#3a3a3a' : '#f0f0f0',
        display: 'flex',
        gap: '8px',
      }}>
        <span>💡</span>
        <div style={{ fontSize: '11px', color: labelText, lineHeight: '1.4' }}>
          Dica: Você pode criar até 100 retângulos de uma vez!
        </div>
      </div>
    </div>
  )
}

export default App
