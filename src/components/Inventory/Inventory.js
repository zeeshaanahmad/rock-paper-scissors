import React, { Component } from 'react'
import InventoryItem from '../InventoryItem/InventoryItem.js'

class Inventory extends Component {

    handleInventoryItemClick(inventory_item) {
        this.props.inventoryItemClickHandler(inventory_item)
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.inventory_items.map((inventory_item, index) => {
                        return <InventoryItem key={index} inventory_item={inventory_item} inventoryItemClickHandler={this.handleInventoryItemClick.bind(this)}/>
                    })
                }        
            </div>
        )
    }
}

export default Inventory