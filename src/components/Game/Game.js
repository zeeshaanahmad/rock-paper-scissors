import React, { Component } from 'react';
import GameModes from '../GameModes/GameModes.js'
import BattleGround from '../BattleGround/BattleGround.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHandRock, faHandPaper, faHandScissors } from "@fortawesome/free-solid-svg-icons";

library.add(faHandRock, faHandPaper, faHandScissors);

let gameConfig = require('../../game-config.json')

class Game extends Component {

	constructor(props) {
		super(props)
		this.state = {
			game_mode: null
		}
	}

	handleModeSelectionClick(game_mode) {
		this.setState((state) => {
			return {game_mode: game_mode}
		})
	}

	handleGameQuit() {
		this.setState((state) => {
			return {game_mode: null}
		})
	}

	handleGameResult(game_result) {
		this.setState(game_result)
	}

	render() {
		return (
			<div>
                <div className="row text-center">
                    <h1>Rock, Paper, Scissors</h1>
                </div>
                <hr />
                
				{!this.state.game_mode 
					? <GameModes game_modes={gameConfig.game_modes} modeSelectionHandler={this.handleModeSelectionClick.bind(this)}/> 
					: <BattleGround 
						game_mode={this.state.game_mode} 
						gameQuitHandler={this.handleGameQuit.bind(this)}
						inventory_items={gameConfig.inventory}
						game_rules={gameConfig.rules}
						gameResultHandler={this.handleGameResult.bind(this)}
						/>}
            </div>
			// <div>
			// 	<h1>Rock, Paper, Scissors</h1>
			// 	<hr></hr>
			// 	{!this.state.game_mode 
			// 		? <GameModes game_modes={gameConfig.game_modes} modeSelectionHandler={this.handleModeSelectionClick.bind(this)}/> 
			// 		: <BattleGround 
			// 			game_mode={this.state.game_mode} 
			// 			gameQuitHandler={this.handleGameQuit.bind(this)}
			// 			inventory_items={gameConfig.inventory}
			// 			game_rules={gameConfig.rules}
			// 			gameResultHandler={this.handleGameResult.bind(this)}
			// 			/>}
			// </div>
		)
	}
}


export default Game;
