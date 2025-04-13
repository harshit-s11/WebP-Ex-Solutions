import React from 'react'

export default class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    console.log('Constructor')
  }
  
  componentDidMount() {
    console.log('Component Did Mount')
  }
  
  componentDidUpdate() {
    console.log('Component Did Update')
  }
  
  componentWillUnmount() {
    console.log('Component Will Unmount')
  }
  
  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }
  
  render() {
    return (
      <>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </>
    )
  }
}