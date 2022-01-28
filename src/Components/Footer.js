import React from 'react';

const Footer = ({ onSuggestClick, onNewGameClick, disabled }) => {
  return (
    <div className="panel footer">
      <button onClick={onNewGameClick}>New Game</button>
      <button onClick={onSuggestClick} disabled={disabled}>Suggest</button>
    </div>
  );
};

export default Footer;