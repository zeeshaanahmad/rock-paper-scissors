import React from 'react';
import { shallow } from 'enzyme';
import InventoryItem from './InventoryItem';

describe('InventoryItem', () => {
    let mountedInventoryItem
    let props

    beforeEach(()=>{
        props = {
            inventory_item: {
                item_name: "Rock",
                icon: "hand-rock"
            }
        }

        mountedInventoryItem = shallow(<InventoryItem {...props} />)
    })

    it('should render correctly', () => {
        let mountedInventoryItem = shallow(<InventoryItem {...props}/>)
    });
    
    it('should have a button', ()=>{
        let inventoryBtn = mountedInventoryItem.find('button')
        expect(inventoryBtn.length).toBe(1);
    })

    it('should have a button with icon based on inventory_item configuration', ()=>{
        let inventoryBtnIcon = mountedInventoryItem.find('button').children().find('[icon="' + props.inventory_item.icon + '"]')
        expect(inventoryBtnIcon.length).toBe(1);
    })
    
})