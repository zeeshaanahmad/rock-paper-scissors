import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';

describe('Timer', () => {
    let mountedTimer
    let props

    beforeEach(()=>{
        props = {
            seconds: "3"
        }

        mountedTimer = shallow(<Timer {...props} />)
    })

    it('should render correctly', () => {
        let mountedTimer = shallow(<Timer {...props}/>)
    });
    
    it('should show the countdown', ()=>{
        let timer = mountedTimer.find('h2').text()
        expect(timer).toBe(props.seconds);
    })
    
})

describe('Timer no props', () => {
    let mountedTimer
    let props

    beforeEach(()=>{
        props = {
            seconds: undefined
        }

        mountedTimer = shallow(<Timer {...props} />)
    })

    it('should not show the countdown', ()=>{
        let timer = mountedTimer.find('h2').text()
        expect(timer).toBe("");
    })

});