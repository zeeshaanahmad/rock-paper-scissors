import React, { Component } from 'react'
import Inventory from '../Inventory/Inventory.js'
import Timer from '../Timer/Timer.js'
import Battle from '../Battle/Battle.js'

class BattleField extends Component {

    constructor(props) {
        super(props)
        this.state = {
            seconds: 0,
            selected_item_p1: undefined,
            selected_item_p2: undefined
        }
    }

    componentDidMount() {
        if (!this.props.game_mode.requires_inventory) {
            this.handleInventoryItemClick(this.pickRandomInventoryItem())
        }
    }

    handleInventoryItemClick(p1_inv) {
        let p2_inv = this.pickRandomInventoryItem()
        this.setState({
            seconds: 3,
            selected_item_p1: p1_inv,
            selected_item_p2: p2_inv
        })
        
        this.beginCountdown(p1_inv, p2_inv)
    }

    beginCountdown(inventory_item_p1, inventory_item_p2) {
        let intervalHandle = setInterval(()=>{
            if (this.state.seconds > -1) {
                this.setState({
                    seconds: this.state.seconds-1
                })
            }
            else {
                clearInterval(intervalHandle)
                this.props.gameResultHandler(this.compareMoves(inventory_item_p1, inventory_item_p2))
            }
        }, 1000);
    }

    pickRandomInventoryItem() {
        return this.props.inventory_items[Math.floor(Math.random()*this.props.inventory_items.length)]
    }

    compareMoves(player1Item, player2Item) {
        this.setState({selected_item_p2: player2Item})
        if (player1Item.item_name.toLowerCase() === player2Item.item_name.toLowerCase()) {
            return  {
                "status": "It's a Tie",
                "reason": "Both chose the same.  Try again!"
            }
        }
        
        return (player2Item.item_name.toLowerCase() in this.props.game_rules[player1Item.item_name.toLowerCase()]
            ? {
                "status": this.props.game_mode.player1 + " won",
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
                <Battle 
                    game_mode={this.props.game_mode} 
                    selected_item_p1={this.state.selected_item_p1 ? this.state.selected_item_p1 : undefined} 
                    selected_item_p2={this.state.selected_item_p2 ? this.state.selected_item_p2 : undefined}/>
                {
                    this.props.game_mode.requires_inventory 
                        ? <Inventory 
                            inventory_items={this.props.inventory_items} 
                            inventoryItemClickHandler={this.handleInventoryItemClick.bind(this)}/> 
                        : null
                }
            </div>
        )
    }
}

export default BattleField