import React from 'react'
import { useTheme } from './NightMode'

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}

export default ThemeToggleButton
