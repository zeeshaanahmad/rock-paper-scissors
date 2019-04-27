import React, { Component } from 'react'
import BattleField from '../BattleField/BattleField.js'

class BattleGround extends Component {

    handleQuitGameClick() {
        this.props.gameQuitHandler()
    }

    render() {
        return (
            <div>
                <BattleField 
                    game_mode={this.props.game_mode}
                    inventory_items={this.props.inventory_items}
                />
                <button onClick={this.handleQuitGameClick.bind(this)}>Quit Game</button>
            </div>
        )
    }
}

export default BattleGround