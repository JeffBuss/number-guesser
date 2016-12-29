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
    };
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
