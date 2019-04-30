import React from 'react';
import { shallow, mount } from 'enzyme';
import GameModes from './GameModes';

describe('GameModes', () => {

  let mountedGameModes;
  let props;

  beforeEach(()=>{
    
    props = {
        game_modes:[{
                player1: "You",
                player2: "Robot",
                requires_inventory: true
        },{
            player1: "Robot",
            player2: "Robot",
            requires_inventory: false
    }]
    }
    mountedGameModes = shallow(<GameModes {...props}/>)
  })

  // Shallow / unit tests begin here
  it('should render correctly', () => {
    let mountedGameModes = shallow(<GameModes {...props}/>)
  });

  it('should have number of GameMode based on configuration', () => {
    const gameModes = mountedGameModes.find('GameMode')
    expect(gameModes.length).toBe(2);
  });

  it('can recieve data from child',  ()=>{
    const mockCallBackForGameModes = jest.fn()
    const gameModes = mount(<GameModes {...props} modeSelectionHandler={mockCallBackForGameModes} />)
    gameModes.find('GameMode').at(0).prop('modeSelectionHandler')({'test':'test'})
    expect(mockCallBackForGameModes).toHaveBeenCalledWith({'test':'test'});
  })

});
