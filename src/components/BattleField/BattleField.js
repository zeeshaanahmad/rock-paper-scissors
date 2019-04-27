import React, { Component } from 'react'
import Inventory from '../Inventory/Inventory.js'

class BattleField extends Component {
    render() {
        return (
            <div>
                <div>BattleField</div>
                {
                    this.props.game_mode.requires_inventory 
                        ? <Inventory inventory_items={this.props.inventory_items}/> 
                        : null
                }
            </div>
        )
    }
}

export default BattleField