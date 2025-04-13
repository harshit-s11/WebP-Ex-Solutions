import { useState, useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

export default function StateReducerDemo() {
  const [countState, setCountState] = useState(0)
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  
  return (
    <>
      <h2>useState Counter</h2>
      <p>Count: {countState}</p>
      <button onClick={() => setCountState(countState + 1)}>+</button>
      <button onClick={() => setCountState(countState - 1)}>-</button>
      
      <h2>useReducer Counter</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  )
}