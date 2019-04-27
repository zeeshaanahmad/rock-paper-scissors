import React from 'react';
import Game from './components/Game/Game.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(faStroopwafel)



function App() {
  return (
    <Game />
  );
}

export default App;
