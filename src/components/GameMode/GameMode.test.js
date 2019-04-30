import React from 'react';
import { shallow } from 'enzyme';
import GameMode from './GameMode';

describe('GameMode', () => {

  let mountedGameMode;
  let props;

  beforeEach(()=>{
    
    props = {
        key: 1,
        game_mode:{
                player1: "You",
                player2: "Robot",
                requires_inventory: true
        }
    }
    mountedGameMode = shallow(<GameMode {...props}/>)
  })

  // Shallow / unit tests begin here
  it('should render correctly', () => {
    let mountedGameMode = shallow(<GameMode {...props}/>)
  });

  it('should have a button for mode selection', () => {
    const gameModeButton = mountedGameMode.find('button')
    expect(gameModeButton.length).toBe(1);
  });

  it('should have button with player names in the text e.g. player vs robot', ()=>{
    const gameModeButtonText = mountedGameMode.find('button').text()
    expect(gameModeButtonText).toBe(props.game_mode.player1 + " vs " + props.game_mode.player2);
  })

});
