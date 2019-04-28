import React, { Component } from 'react'
import BattleField from '../BattleField/BattleField.js'
import GameResult from '../GameResult/GameResult.js'

class BattleGround extends Component {

    constructor(props) {
        super(props)
        this.state = {
            is_game_ended: false
        }
    }

    handleQuitGameClick() {
        this.props.gameQuitHandler()
    }

    handleGameStart() {
        this.setState({is_game_ended: false})
    }

    handleGameResult(game_result) {
        this.setState({is_game_ended: true})
        this.setState({game_result})
    }

    render() {
        return (
            <div>
                {
                    this.state.is_game_ended && this.state.game_result
                        ? <GameResult 
                            game_result={this.state.game_result}/>
                        : <BattleField 
                                game_mode={this.props.game_mode}
                                inventory_items={this.props.inventory_items}
                                game_rules={this.props.game_rules}
                                gameResultHandler={this.handleGameResult.bind(this)}
                        />
                }
                
                <button onClick={this.handleQuitGameClick.bind(this)}>Restart Game</button>
            </div>
        )
    }
}

export default BattleGround