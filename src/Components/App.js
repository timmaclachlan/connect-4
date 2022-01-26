import React from 'react';

import Header from './Header';
import Footer from './Footer';
import GameBoard from './GameBoard';

function App() {
  return (
    <div className="app-container">
      <Header/>
      <GameBoard />
      <Footer />
    </div>
  );
}

export default App;
