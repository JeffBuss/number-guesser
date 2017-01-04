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
      gameResponse: 'pageload',
    };
  }

  componentDidMount() {
    this.newRandomNumber();
  }

  checkGuess(guess) {
    this.setState({ lastGuess: guess });

    if (this.checkValidGuess(guess)) {
      if (guess > this.state.randomNumber) {
        this.setState({ gameResponse: 'lower' });
      } else if (guess < this.state.randomNumber) {
        this.setState({ gameResponse: 'higher' });
      } else {
        this.setState({ gameResponse: 'winner', lastGuess: '' });
        this.increaseDifficulty();
        this.newRandomNumber();
      }
    } else {
      this.setState({ gameResponse: 'invalid' });
    }
  }

  increaseDifficulty() {
    this.setState({ min: +this.state.min-10, max: +this.state.max+10, })
  }

  newRandomNumber() {
    this.setState({
      randomNumber: Math.floor(Math.random() * (+this.state.max - +this.state.min + 1)) + +this.state.min
    });
  }

  checkValidGuess(guess) {
    return (guess < this.state.max && guess > this.state.min);
  }

  handleRange(min, max) {
    this.setState({ min: min, max: max, gameResponse: 'pageload' }, () => {this.resetGame() })
  }

  resetGame() {
    this.newRandomNumber();
    this.setState({ lastGuess: '', gameResponse: 'pageload' });
  }

  render() {
    return (
      <div className = 'main-app'>
        <header className='title'>Number Guesser</header>
        <UserInput
          handleSubmit={this.checkGuess.bind(this)}
          handleReset={this.resetGame.bind(this)}
          handleRange={this.handleRange.bind(this)}
          min={this.state.min}
          max={this.state.max}
        />
        <Response
          lastGuess={this.state.lastGuess}
          gameResponse={this.state.gameResponse}
          min={this.state.min}
          max={this.state.max}
        />
      </div>
    );
  }
}
