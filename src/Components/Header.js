import React from 'react';

const GAME_STATE_IDLE = 0;
const GAME_STATE_PLAYING = 1;
const GAME_STATE_WIN = 2;
const GAME_STATE_DRAW = 3;

const Header = ({ gameState, player }) => {

  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return renderPlayerTurn();
      default:
    }
  }

  const renderPlayerTurn = () => {
    return <div>Player {player} Turn</div>
  }
  
  return (
    <div className="panel header">
      <div className="header-text">
        {renderLabel()}
      </div>
    </div>
  );
};

export default Header;
