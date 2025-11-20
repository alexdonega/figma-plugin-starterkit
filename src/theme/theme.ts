/**
 * Sistema de Theme Centralizado
 *
 * Define todas as cores e espaçamentos do plugin
 */

export interface Theme {
  colors: {
    bg: string
    text: string
    inputBg: string
    inputBorder: string
    labelText: string
    primary: string
    primaryHover: string
    error: string
    success: string
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  borderRadius: {
    sm: string
    md: string
    lg: string
  }
  fontSize: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
}

export function createTheme(isDarkMode: boolean): Theme {
  return {
    colors: {
      bg: isDarkMode ? '#2c2c2c' : '#ffffff',
      text: isDarkMode ? '#ffffff' : '#000000',
      inputBg: isDarkMode ? '#1e1e1e' : '#f5f5f5',
      inputBorder: isDarkMode ? '#3e3e3e' : '#e0e0e0',
      labelText: isDarkMode ? '#b0b0b0' : '#666666',
      primary: isDarkMode ? '#0d99ff' : '#0066cc',
      primaryHover: isDarkMode ? '#2aa5ff' : '#0052a3',
      error: '#ff4444',
      success: '#4caf50',
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
    },
    borderRadius: {
      sm: '4px',
      md: '6px',
      lg: '8px',
    },
    fontSize: {
      xs: '10px',
      sm: '11px',
      md: '12px',
      lg: '14px',
      xl: '18px',
    },
  }
}

/**
 * Hook para usar o theme
 */
export function useTheme(isDarkMode: boolean): Theme {
  return createTheme(isDarkMode)
}
