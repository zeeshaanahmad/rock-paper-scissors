import React, { Component } from 'react'
import Inventory from '../Inventory/Inventory.js'
import Timer from '../Timer/Timer.js'
import Battle from '../Battle/Battle.js'

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
        this.beginCountdown(inventory_item)
    }

    beginCountdown(inventory_item) {
        let intervalHandle = setInterval(()=>{
            if (this.state.seconds > 0) {
                this.setState({
                    seconds: this.state.seconds-1
                })
            }
            else {
                clearInterval(intervalHandle)
                this.props.gameResultHandler(this.compareMoves(inventory_item, this.pickRandomInventoryItem()))
            }
        }, 1000);
    }

    pickRandomInventoryItem() {
        return this.props.inventory_items[Math.floor(Math.random()*this.props.inventory_items.length)]
    }

    compareMoves(player1Item, player2Item) {
        if (player1Item.item_name.toLowerCase() == player2Item.item_name.toLowerCase()) {
            return  {
                "status": "It's a Tie",
                "reason": "Both chose the same.  Try again!"
            }
        }
        
        return (player2Item.item_name.toLowerCase() in this.props.game_rules[player1Item.item_name.toLowerCase()]
            ? {
                "status": this.props.game_mode.player1 + " wins",
                "reason": this.props.game_rules[player1Item.item_name.toLowerCase()][player2Item.item_name.toLowerCase()]
            }
            : {
                "status": this.props.game_mode.player1 + " lost",
                "reason": this.props.game_rules[player2Item.item_name.toLowerCase()][player1Item.item_name.toLowerCase()]
            }            
        );
    }

    render() {
        return (
            <div>
                {this.state.seconds > 0 ? <Timer seconds={this.state.seconds}/> : null}
                <Battle game_mode={this.props.game_mode}/>
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