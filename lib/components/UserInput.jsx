import React, { Component } from 'react';
import { render } from 'react-dom';

export default class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userGuess: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.userGuess);
    this.setState({ userGuess: '' });
    console.log('Submit');
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({ userGuess: '' });
    console.log('Clear');
  }

  handleReset(e) {
    e.preventDefault();
    this.props.handleReset();
    console.log('Reset');
  }

  render() {
    return (
      <div className='user-input'>

        <input
          className='guess-input'
          type='number'
          placeholder='Make a guess'
          min={this.props.min}
          max={this.props.max}
          value={this.state.userGuess}
          onChange={(e) => this.setState({ userGuess: e.target.value })}
        />

        <button
          className='guess-button'
          onClick={this.handleSubmit.bind(this)}
        >
        Guess
        </button>

        <button
          className='clear-button'
          onClick={this.handleClear.bind(this)}
        >
        Clear
        </button>

        <button
          className='reset-button'
          onClick={this.handleReset.bind(this)}
        >
        Reset Game
        </button>

      </div>
    );
  }
}
