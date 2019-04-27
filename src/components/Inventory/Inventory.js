import React, { Component } from 'react'
import InventoryItem from '../InventoryItem/InventoryItem.js'

class Inventory extends Component {
    render() {
        return (
            <div>
                {
                    this.props.inventory_items.map((inventory_item, index) => {
                        return <InventoryItem key={index} inventory_item={inventory_item} />
                    })
                }        
            </div>
        )
    }
}

export default Inventory