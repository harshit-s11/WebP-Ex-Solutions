import Child from './Child'

export default function Parent() {
  return (
    <>
      <h2>Parent Component</h2>
      <Child message="Hello from the Parent component!" />
    </>
  )
}