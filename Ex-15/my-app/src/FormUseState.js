import { useState } from 'react'

export default function FormUseState() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault()
    alert(`Name: ${name}, Email: ${email}`)
  }
  
  return (
    <>
      <h2>Form with useState</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>Typed Name: {name}</p>
      <p>Typed Email: {email}</p>
    </>
  )
}