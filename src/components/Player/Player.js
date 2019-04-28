import React, { Component } from 'react'

class Player extends Component {
    render() {
        return (
            <div>{this.props.player_name}</div>
        )
    }
}

export default Player