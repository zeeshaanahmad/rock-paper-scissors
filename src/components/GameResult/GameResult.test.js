import React from 'react';
import { shallow } from 'enzyme';
import GameResult from './GameResult';

describe('GameResult', () => {
    let mountedGameResult
    let props

    beforeEach(()=>{
        props = {
            game_result: {
                status: "You WON",
                reason: "Rock crushes scissors"
            }
        }

        mountedGameResult = shallow(<GameResult {...props} />)
    })

    it('should render correctly', () => {
        let mountedGameResult = shallow(<GameResult {...props}/>)
    });
    
    it('should have a game result message', ()=>{
        let messageHead = mountedGameResult.find('h1').text()
        expect(messageHead).toBe(props.game_result.status + " because " + props.game_result.reason);
    })

    // it('should have a button with icon based on inventory_item configuration', ()=>{
    //     let inventoryBtnIcon = mountedGameResult.find('button').children().find('[icon="' + props.inventory_item.icon + '"]')
    //     expect(inventoryBtnIcon.length).toBe(1);
    // })
    
})