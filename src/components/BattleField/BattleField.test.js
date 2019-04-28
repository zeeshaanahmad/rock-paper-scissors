import React from 'react';
import { shallow } from 'enzyme';
import BattleField from './BattleField';

describe('BattleField with inventory', () => {
    let mountedBattleField
    let props

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
        mountedBattleField = shallow(<BattleField {...props} />)
        mountedBattleField.setState({
            seconds: 0
        })
    })

    it('should render correctly', () => {
        let mountedBattleField = shallow(<BattleField {...props}/>)
    });

    it('should display Battle', () => {
        let b = mountedBattleField.find('Battle')
        expect(b.length).toBe(1)
    })

    it('should display Inventory', () => {
        let inv = mountedBattleField.find('Inventory')
        expect(inv.length).toBe(1)
    })

    it('should not display Timer', () => {
        let inv = mountedBattleField.find('Timer')
        expect(inv.length).toBe(0)
    })

})

describe('BattleField without inventory', () => {
    let mountedBattleField
    let props

    beforeEach(()=>{
        props = {
            game_mode:{
                player1: "Robot 1",
                player2: "Robot 2",
                requires_inventory: false
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
        mountedBattleField = shallow(<BattleField {...props} />)
        mountedBattleField.setState({
            seconds: 0
        })
    })

    it('should render correctly', () => {
        let mountedBattleField = shallow(<BattleField {...props}/>)
    });

    it('should display Battle', () => {
        let b = mountedBattleField.find('Battle')
        expect(b.length).toBe(1)
    })

    it('should not display Inventory', () => {
        let inv = mountedBattleField.find('Inventory')
        expect(inv.length).toBe(0)
    })

    it('should not display Timer', () => {
        let inv = mountedBattleField.find('Timer')
        expect(inv.length).toBe(0)
    })

})

describe('BattleField with inventory and when state has seconds > 0', () => {
    let mountedBattleField
    let props

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
        mountedBattleField = shallow(<BattleField {...props} />)
        mountedBattleField.setState({
            seconds: 3
        })
    })

    it('should render correctly', () => {
        let mountedBattleField = shallow(<BattleField {...props}/>)
    });

    it('should display Battle', () => {
        let b = mountedBattleField.find('Battle')
        expect(b.length).toBe(1)
    })

    it('should display Timer', () => {
        let b = mountedBattleField.find('Timer')
        expect(b.length).toBe(1)
    })

    it('should display Inventory', () => {
        let inv = mountedBattleField.find('Inventory')
        expect(inv.length).toBe(1)
    })

})

describe('BattleField without inventory when state has seconds > 0', () => {
    let mountedBattleField
    let props

    beforeEach(()=>{
        props = {
            game_mode:{
                player1: "Robot 1",
                player2: "Robot 2",
                requires_inventory: false
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
        mountedBattleField = shallow(<BattleField {...props} />)
        mountedBattleField.setState({
            seconds: 3
        })
    })

    it('should render correctly', () => {
        let mountedBattleField = shallow(<BattleField {...props}/>)
    });

    it('should display Timer', () => {
        let b = mountedBattleField.find('Timer')
        expect(b.length).toBe(1)
    })

    it('should display Battle', () => {
        let b = mountedBattleField.find('Battle')
        expect(b.length).toBe(1)
    })

    it('should not display Inventory', () => {
        let inv = mountedBattleField.find('Inventory')
        expect(inv.length).toBe(0)
    })

})