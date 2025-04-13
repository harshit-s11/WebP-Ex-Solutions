import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false)
  
  const toggleTheme = () => setDark(!dark)
  
  const themeStyles = {
    backgroundColor: dark ? '#222' : '#f9f9f9',
    color: dark ? '#fff' : '#000',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px'
  }
  
  return (
    <ThemeContext.Provider value={{ dark, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  )
}