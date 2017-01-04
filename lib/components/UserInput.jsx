import React, { Component } from 'react';
import { render } from 'react-dom';

export default class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userGuess: '',
      min: '',
      max: '',
      randomNumber: '',
    };
  }

  handleChange(e) {
    this.setState({ userGuess: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.userGuess);
    this.setState({ userGuess: '' });
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({ userGuess: '' });
  }

  handleReset(e) {
    e.preventDefault();
    this.setState({ min: 1, max: 100 });
    this.props.handleReset();
    this.props.handleRange(this.state.min, this.state.max);
  }

  handleRange(e) {
    e.preventDefault();
    this.props.handleRange(this.state.min, this.state.max);
    this.setState({ min: '', max: '' });
  }

  enableClearGuessBtn() {
    return this.state.userGuess.length > 0 ? 0 : 1;
  }

  render() {
    const { userGuess, min, max } = this.state;
    return (
      <div className='user-input'>

        <input
          className='guess-input'
          type='number'
          placeholder='Make a guess'
          value={userGuess}
          onChange={this.handleChange.bind(this)}
        />

        <button
          className='guess-button'
          disabled={this.enableClearGuessBtn()}
          onClick={this.handleSubmit.bind(this)}
        >Guess</button>

        <button
          className='clear-button'
          disabled={this.enableClearGuessBtn()}
          onClick={this.handleClear.bind(this)}
        >Clear</button>

        <button
          className='reset-button'
          disabled={this.props.enableResetBtn()}
          onClick={this.handleReset.bind(this)}
        >Reset Game</button>

        <div className='range-section'>
          <p> Range: {this.props.min} - {this.props.max}</p>

          <input
            className='min-input'
            type='number'
            placeholder='Min'
            value={min}
            onChange={(e) => this.setState({ min: e.target.value })}
          />

          <input
            className='max-input'
            type='number'
            placeholder='Max'
            value={max}
            onChange={(e) => this.setState({ max: e.target.value })}
          />

          <button
            className='range-button'
            onClick ={this.handleRange.bind(this)}
          >Set New Range</button>
        </div>
      </div>
    );
  }
}
