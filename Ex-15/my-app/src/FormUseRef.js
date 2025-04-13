import { useRef, useState } from 'react'

export default function FormUseRef() {
  const nameRef = useRef()
  const emailRef = useRef()
  const [output, setOutput] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault()
    const name = nameRef.current.value
    const email = emailRef.current.value
    setOutput(`Name: ${name}, Email: ${email}`)
  }
  
  return (
    <>
      <h2>Form with useRef</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" ref={nameRef} />
        <input type="email" placeholder="Enter Email" ref={emailRef} />
        <button type="submit">Submit</button>
      </form>
      <p>{output}</p>
    </>
  )
}