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
      gameResponse: '',
    };
  }

  componentDidMount() {
    this.newRandomNumber();
  }

  newRandomNumber() {
    this.setState({
      randomNumber: Math.floor(Math.random() *
      (this.state.max - this.state.min + 1)) +
      this.state.min
    });
  }

  checkGuess(guess) {
    this.setState({ lastGuess: guess });
    if (guess > this.state.randomNumber) {
      this.setState({ gameResponse: 'too high' });
    } else if (guess < this.state.randomNumber) {
      this.setState({ gameResponse: 'too low' });
    } else {
      this.setState({ gameResponse: 'you won!' });
    }
  }

  resetGame() {
    this.setState({ lastGuess: '', gameResponse: '' });
    this.newRandomNumber();
  }

  render() {
    return (
      <div className = 'main-app'>
        <header className='title'>Number Guesser</header>
        <UserInput
          handleSubmit={this.checkGuess.bind(this)}
          handleReset={this.resetGame.bind(this)}
        />
        <Response
          lastGuess={this.state.lastGuess}
          gameResponse={this.state.gameResponse}
        />
      </div>
    );
  }
}
