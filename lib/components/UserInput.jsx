import React, { Component } from 'react';
import { render } from 'react-dom';

export default class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userGuess: '',
      min: '',
      max: '',
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

  handleRange(e) {
    e.preventDefault();
    this.props.handleRange(this.state.min, this.state.max);
    console.log('Range');
  }

  render() {
    return (
      <div className='user-input'>

        <input
          className='guess-input'
          type='number'
          placeholder='Make a guess'
          value={this.state.userGuess}
          min={this.props.min}
          max={this.props.max}
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

        <div className='range-section'>
          <p> Range: {this.props.min} - {this.props.max}</p>

          <input
            className='min-input'
            type='number'
            placeholder='Min'
            value={this.state.min}
            onChange={(e) => this.setState({ min: e.target.value })}
          />

          <input
            className='max-input'
            type='number'
            placeholder='Max'
            value={this.state.max}
            onChange={(e) => this.setState({ max: e.target.value })}
          />

          <button
            className='range-button'
            onClick ={this.handleRange.bind(this)}
          >Set New Range
          </button>
        </div>

      </div>
    );
  }
}
