import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player';

describe('Player', () => {
    let mountedPlayer
    let props

    beforeEach(()=>{
        props = {
            player_name: "You"
        }

        mountedPlayer = shallow(<Player {...props} />)
    })

    it('should render correctly', () => {
        let mountedPlayer = shallow(<Player {...props}/>)
    });
    
    it('should show player name', ()=>{
        let player = mountedPlayer.find('div').text()
        expect(player).toBe(props.player_name);
    })
    
})