import { useRef } from 'react'

export default function FocusInput() {
  const inputRef = useRef()
  
  function handleClick() {
    inputRef.current.focus()
  }
  
  return (
    <>
      <h2>Focus Input with useRef</h2>
      <input ref={inputRef} type="text" placeholder="Enter text here" />
      <button onClick={handleClick}>Focus the Input</button>
    </>
  )
}