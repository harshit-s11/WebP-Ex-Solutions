import React, { Component, useState } from "react";
import "./App.css";

// Q1-i: Without JSX
const HelloReactWithoutJSX = () => {
  return React.createElement('h1', { className: "title" }, "Hello, React!");
};

// Q1-ii: With JSX
const HelloReactWithJSX = () => <h1 className="title">Hello, React!</h1>;

// Q1-iii: Using a variable
const HelloReactWithVariable = () => {
  const message = "Hello, React with Variable!";
  return <h1 className="title">{message}</h1>;
};

// Q2: List of fruits
const FruitList = () => {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <ul className="fruit-list">
      {fruits.map((fruit, index) => (
        <li key={index} className="fruit-item">{fruit}</li>
      ))}
    </ul>
  );
};

// Q3: Styled message
const StyledMessage = () => (
  <p className="styled-message">This is a styled message.</p>
);

// Q4: Sum of squares
const SumOfSquares = ({ num1, num2 }) => (
  <p className="sum-result">Sum of squares: {num1 ** 2 + num2 ** 2}</p>
);

// Q5: Conditional greeting
const Greeting = ({ isMorning }) => (
  <p className="greeting">{isMorning ? "Good Morning" : "Good Evening"}</p>
);

// Q6: Current day
const CurrentDay = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return <p className="current-day">Today is {days[new Date().getDay()]}</p>;
};

// Q7: Prime number check
const PrimeCheck = ({ number }) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  return (
    <p className="prime-check">
      {number} is {isPrime(number) ? "a Prime Number" : "not a Prime Number"}
    </p>
  );
};

// Q8: Temperature converter
class TemperatureConverter extends Component {
  state = { temp: "", scale: "C" };
  
  handleChange = (e) => this.setState({ temp: e.target.value, scale: e.target.name });
  
  convertTemperature = () => {
    const { temp, scale } = this.state;
    if (isNaN(temp) || temp === "") return "Invalid Input";
    
    return scale === "C"
      ? `${((temp * 9) / 5 + 32).toFixed(2)}°F`
      : `${((temp - 32) * 5 / 9).toFixed(2)}°C`;
  };
  
  render() {
    return (
      <div className="temp-converter">
        <input
          type="text"
          name="C"
          placeholder="Celsius"
          onChange={this.handleChange}
          className="input-box"
        />
        <input
          type="text"
          name="F"
          placeholder="Fahrenheit"
          onChange={this.handleChange}
          className="input-box"
        />
        <p className="converted-temp">Converted: {this.convertTemperature()}</p>
      </div>
    );
  }
}

// Q9: Reverse string and check palindrome
const ReverseString = ({ text }) => {
  const reversed = text.split("").reverse().join("");
  
  return (
    <p className="reverse-result">
      {reversed} - {text === reversed ? "Palindrome" : "Not Palindrome"}
    </p>
  );
};

// Q10: Random number generator
const RandomNumber = () => {
  const [number, setNumber] = useState(null);
  
  return (
    <div className="random-number">
      <button 
        onClick={() => setNumber(Math.floor(Math.random() * 100) + 1)}
        className="random-btn"
      >
        Generate Number
      </button>
      <p>{number !== null && `Random Number: ${number}`}</p>
    </div>
  );
};

// Q11: Leap year check
const LeapYearCheck = ({ year }) => {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  
  return (
    <p className="leap-year">
      {year} is {isLeapYear ? "a Leap Year" : "not a Leap Year"}
    </p>
  );
};

// Q12: User greeting class component
class UserGreeting extends Component {
  render() {
    return (
      <h1 className="user-greeting">
        Hello, {this.props.firstName} {this.props.lastName}!
      </h1>
    );
  }
}

// Main App component
const App = () => {
  return (
    <div className="container">
      <HelloReactWithoutJSX />
      <HelloReactWithJSX />
      <HelloReactWithVariable />
      <FruitList />
      <StyledMessage />
      <SumOfSquares num1={3} num2={4} />
      <Greeting isMorning={true} />
      <CurrentDay />
      <PrimeCheck number={7} />
      <TemperatureConverter />
      <ReverseString text="React" />
      <RandomNumber />
      <LeapYearCheck year={2024} />
      <UserGreeting firstName="John" lastName="Doe" />
    </div>
  );
};

export default App;