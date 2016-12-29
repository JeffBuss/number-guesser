import React from 'react';

const Response = ({ lastGuess, gameResponse }) => {
  return (
    <div className='response-field'>
      <p>Your last guess was</p>
      <span>{lastGuess}</span>
      <p>{gameResponse}</p>
    </div>
  );
};

export default Response;
