import React from 'react';

const Footer = ({ onSuggestClick, disabled }) => {
  return (
    <div className="panel footer">
      <button>New Game</button>
      <button onClick={onSuggestClick}>Suggest</button>
    </div>
  );
};

export default Footer;