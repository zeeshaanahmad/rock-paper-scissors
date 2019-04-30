import React, { Component } from 'react'

import './GameMode.css'

class GameMode extends Component {
    handleClick() {
        this.props.modeSelectionHandler(this.props.game_mode)
    }
    render() {
        return (
            <button className="btn btn-info btn-sm btn-block" onClick={this.handleClick.bind(this)}>{this.props.game_mode.player1 + " vs " + this.props.game_mode.player2}</button>
        )
    }
}

export default GameMode