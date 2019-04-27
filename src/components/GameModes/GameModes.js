import React, { Component } from 'react'
import GameMode from '../GameMode/GameMode.js'

class GameModes extends Component {

    handleModeSelectionClick(game_mode) {
        this.props.modeSelectionHandler(game_mode)
    }

    render() {
        return(
            <section>
                <ul>
                    {this.props.game_modes.map((game_mode, index) => {
                        return <GameMode key={index} game_mode={game_mode} modeSelectionHandler={this.handleModeSelectionClick.bind(this)}/>
                    })}
                </ul>
            </section>
        )
    }
}

export default GameModes