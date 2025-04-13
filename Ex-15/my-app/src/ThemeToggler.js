import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function ThemeToggler() {
  const { dark, toggleTheme, themeStyles } = useContext(ThemeContext)
  
  return (
    <div style={themeStyles}>
      <h2>{dark ? 'Dark' : 'Light'} Theme</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}