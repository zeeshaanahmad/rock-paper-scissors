import React, { Component } from 'react'
import Player from '../Player/Player.js'

class Battle extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-5"><div className="pull-right"><Player player_name={this.props.game_mode.player1} selected_item={this.props.selected_item_p1} /> </div> </div> 
                <div className="col-md-2"><div className="text-center">vs</div></div> 
                <div className="col-md-5"><div className="pull-left"><Player player_name={this.props.game_mode.player2} selected_item={this.props.selected_item_p2}/> </div> </div> 
            </div>
        )
    }
}

export default Battle