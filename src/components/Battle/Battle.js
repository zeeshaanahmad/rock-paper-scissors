import React, { Component } from 'react'
import Player from '../Player/Player.js'

class Battle extends Component {
    render() {
        return (
            <div>
                <Player player_name={this.props.game_mode.player1} /> vs <Player player_name={this.props.game_mode.player2} />
            </div>
        )
    }
}

export default Battle