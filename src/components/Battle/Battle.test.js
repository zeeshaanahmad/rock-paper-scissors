import React from 'react';
import { shallow } from 'enzyme';
import Battle from './Battle';

describe('Battle', () => {

  let mountedBattle
  let props

  beforeEach(()=>{
      props = {
        game_mode:{
            player1: "You",
            player2: "Robot",
            requires_inventory: true
          },
      }
    mountedBattle = shallow(<Battle {...props}/>)
  })

  // Shallow / unit tests begin here
  it('should render correctly', () => {
    let mountedBattle = shallow(<Battle {...props}/>)
  });

  it('should have 2 player', () => {
      let p = mountedBattle.find('Player')
      expect(p.length).toBe(2)      
  })

});
