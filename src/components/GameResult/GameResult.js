import React, { Component } from 'react'

class GameResult extends Component {
    render() {
        return(
            <h1>{this.props.game_result.status + " because " + this.props.game_result.reason}</h1>
        )
    }
}

export default GameResult