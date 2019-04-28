import React from 'react';
import { shallow } from 'enzyme';
import BattleGround from './BattleGround';

describe('BattleGround before game end', () => {

  let mountedBattleGround;
  let props; 

  beforeEach(()=>{    
    props = {
        game_mode:{
            player1: "You",
            player2: "Robot",
            requires_inventory: true
          },
        inventory_items:[{
            item_name: "Rock",
            icon: "hand-rock"
        },
        {
            item_name: "Paper",
            icon: "hand-paper"
        },
        {
            item_name: "Scissors",
            icon: "hand-scissors"
        }],
        game_rules:{
            rock: {
                scissors: "Rock crushes scissors"
            },
            paper: {
                rock: "Paper covers rock"
            },
            scissors: {
                paper: "Scissors cuts paper"
            }
        }
    }
    mountedBattleGround = shallow(<BattleGround {...props}/>)
    mountedBattleGround.setState({
        is_game_ended: false,
        game_result: undefined
    })
  })

  // Shallow / unit tests begin here
  it('should render correctly', () => {
    let mountedBattleGround = shallow(<BattleGround {...props}/>)
  });

  it('should have BattleField', () => {
    let bf = mountedBattleGround.find('BattleField')
    expect(bf.length).toBe(1)
  })

  it('should not display GameResult', ()=>{
    let gr = mountedBattleGround.find('GameResult')
    expect(gr.length).toBe(0)
  })

});

describe('BattleGround after game end', ()=>{
    let props
  let mountedBattleGround

  beforeEach(() => {

    props = {
        game_mode:{
            player1: "You",
            player2: "Robot",
            requires_inventory: true
          },
        inventory_items:[{
            item_name: "Rock",
            icon: "hand-rock"
        },
        {
            item_name: "Paper",
            icon: "hand-paper"
        },
        {
            item_name: "Scissors",
            icon: "hand-scissors"
        }],
        game_rules:{
            rock: {
                scissors: "Rock crushes scissors"
            },
            paper: {
                rock: "Paper covers rock"
            },
            scissors: {
                paper: "Scissors cuts paper"
            }
        }
    }
    
    mountedBattleGround = shallow(<BattleGround />)
    mountedBattleGround.setState({
        is_game_ended: true,
        game_result: {
            status: "You WON",
            reason: "Scissor cuts paper"
        }
    })
  })

  it('should display GameResult', ()=>{
    let gr = mountedBattleGround.find('GameResult')
    expect(gr.length).toBe(1)
  })

  it('should not display BattleField', () => {
    let bf = mountedBattleGround.find('BattleField')
    expect(bf.length).toBe(0)
  })
})
