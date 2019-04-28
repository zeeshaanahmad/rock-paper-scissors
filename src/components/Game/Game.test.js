import React from 'react';
import { shallow } from 'enzyme';
import Game from './Game';

describe('Game before selecting mode', () => {

  let mountedGame;

  beforeEach(()=>{
    mountedGame = shallow(<Game />)
  })

  // Shallow / unit tests begin here
  it('should render correctly', () => {
    let mountedGame = shallow(<Game />)
  });

  it('should have a title', () => {
    const titleHeading = mountedGame.find('h1')
    expect(titleHeading.length).toBeGreaterThan(0);
  });

  it('should not display BattleGround', () => {
    let bg = mountedGame.find('BattleGround')
    expect(bg.length).toBe(0)
  })

});

describe('Game after selecting the mode', ()=>{
  let mountedGame

  beforeEach(() => {
    mountedGame = shallow(<Game />)
    mountedGame.setState({
      game_mode:{
        player1: "You",
        player2: "Robot",
        requires_inventory: true
      }
    })
  })

  it('should display BattleGround', ()=>{
    let bg = mountedGame.find('BattleGround')
    expect(bg.length).toBe(1)
  })
})
