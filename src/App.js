import React from 'react';
import Game from './components/Game/Game.js'

import './App.css';

function App() {
  return (
    <div className="rps-container">
      <div className="row">
        <div className="col">
          <Game />
        </div>
      </div>
    </div>
    
  );
}

export default App;
