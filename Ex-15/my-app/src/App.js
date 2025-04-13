import { useState } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import StyledButton from './StyledButton'
import LifecycleDemo from './LifecycleDemo'
import StateReducerDemo from './StateReducerDemo'
import FetchDemo from './FetchDemo'
import FocusInput from './FocusInput'
import ThemeToggler from './ThemeToggler'
import { ThemeProvider } from './ThemeContext'
import Parent from './Parent'
import FormUseState from './FormUseState'
import FormUseRef from './FormUseRef'

export default function App() {
  const [showLifecycle, setShowLifecycle] = useState(true)
  
  return (
    <ThemeProvider>
      <Header title="Welcome to React App" />
      <Content />
      <Footer />
      <div>
        <StyledButton />
      </div>
      <br></br>
      <div>
        <button onClick={() => setShowLifecycle(!showLifecycle)}>
          {showLifecycle ? 'Hide' : 'Show'} Lifecycle Demo
        </button>
      </div>
      {showLifecycle && <LifecycleDemo />}
      <StateReducerDemo />
      <FetchDemo />
      <FocusInput />
      <ThemeToggler />
      <Parent />
      <FormUseState />
      <FormUseRef />
    </ThemeProvider>
  )
}