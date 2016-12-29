import React, { Component } from 'react'
import { render } from 'react-dom';
import UserInput from './UserInput.jsx'
import Response from './Response.jsx'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      min: 0,
      max: 100,
      lastGuess: '',
      randomNumber: null,
    };
  }

  componentDidMount() {
    this.newRandomNumber();
  }

  newRandomNumber() {
    this.setState({
      randomNumber: Math.floor(Math.random() *
      (this.state.max - this.state.min + 1)) + this.state.min });
  }

  render() {
    return (
      <div className = 'main-app'>
        <header className='title'>Number Guesser Main App</header>
        <UserInput

        />
        <Response />
      </div>
    );
  }
}