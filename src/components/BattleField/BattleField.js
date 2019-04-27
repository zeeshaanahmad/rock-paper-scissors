import React, { Component } from 'react'
import Inventory from '../Inventory/Inventory.js'
import Timer from '../Timer/Timer.js'

class BattleField extends Component {

    constructor(props) {
        super(props)
        this.state = {
            seconds: 0
        }
    }

    handleInventoryItemClick(inventory_item) {
        this.setState({
            seconds: 3
        })
        this.beginCountdown()
    }

    beginCountdown() {
        let intervalHandle = setInterval(()=>{
            if (this.state.seconds > 0) {
                this.setState({
                    seconds: this.state.seconds-1
                })
            }
            else {
                clearInterval(intervalHandle)
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.seconds > 0 ? <Timer seconds={this.state.seconds}/> : null}
                <div>BattleField</div>
                {
                    this.props.game_mode.requires_inventory 
                        ? <Inventory inventory_items={this.props.inventory_items} inventoryItemClickHandler={this.handleInventoryItemClick.bind(this)}/> 
                        : null
                }
            </div>
        )
    }
}

export default BattleField