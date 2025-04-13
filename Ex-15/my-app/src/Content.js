import { useState } from 'react'

export default function Content() {
  const [joke, setJoke] = useState('Click the button to get a joke')
  
  const jokes = [
    'Why did the React developer cross the road? To useEffect on the other side!',
    "I would tell you a hook joke, but it's too state-dependent.",
    'I tried to catch some fog... I mist.'
  ]
  
  const getJoke = () => {
    const index = Math.floor(Math.random() * jokes.length)
    setJoke(jokes[index])
  }
  
  return (
    <>
      <p>{joke}</p>
      <button onClick={getJoke}>Get Joke</button>
    </>
  )
}