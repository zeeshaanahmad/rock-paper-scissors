import React from 'react';
import { shallow } from 'enzyme';
import Inventory from './Inventory';

describe('Inventory', () => {
    let mountedInventory
    let props

    beforeEach(()=>{
        props = {
            inventory_items: [{
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
            }]
        }

        mountedInventory = shallow(<Inventory {...props} />)
    })

    it('should render correctly', () => {
        let mountedInventory = shallow(<Inventory {...props}/>)
    });
    
    it('should  have the number of InventoryItems equal to the inventory_items supplied from configuration', ()=>{
        let invItems = mountedInventory.find('InventoryItem')
        expect(invItems.length).toBe(props.inventory_items.length);
    })
})