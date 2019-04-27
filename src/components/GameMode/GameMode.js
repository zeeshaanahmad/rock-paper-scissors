import React, { Component } from 'react'

class GameMode extends Component {
    handleClick() {
        this.props.modeSelectionHandler(this.props.game_mode)
    }
    render() {
        return (
            <li><button onClick={this.handleClick.bind(this)}>{this.props.game_mode.player1 + " vs " + this.props.game_mode.player2}</button></li>
        )
    }
}

export default GameMode