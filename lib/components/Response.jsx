import React from 'react';

export const Response = ({ lastGuess, gameResponse, min, max }) => {

  let feedback;

  switch(gameResponse) {

    case 'pageload':
      feedback = 'Guess a number!';
      break;

    case 'lower':
      feedback = 'Sorry, that guess is too high. Try a lower number.';
      break;

    case 'higher':
      feedback = 'Sorry, that guess is too low. Try a higher number.';
      break;

    case 'winner':
      feedback = 'You Won!';
      break;

    case 'invalid':
      feedback = 'Please guess a number between 1 and 100';
      break;

    default:
    feedback = '';
  }

  let lastGuessResponse;

  if (lastGuess) {
    lastGuessResponse = (
      <div>
        <p>Your last guess was</p>
        <span>{lastGuess}</span>
      </div>
    );
  }

  return (
    <div className='response-field'>
      {lastGuessResponse}
      <p>{feedback}</p>
    </div>
  );
};

export default Response;
