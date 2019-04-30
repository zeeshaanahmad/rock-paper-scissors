import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHandRock, faHandPaper, faHandScissors, faQuestion } from "@fortawesome/free-solid-svg-icons";

library.add(faHandRock, faHandPaper, faHandScissors, faQuestion);

class Player extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-title">{this.props.player_name}</div>
                    <div className="card-subtitle">{this.props.selected_item ? this.props.selected_item.item_name : ""}</div>
                    <div className="card-text text-center">
                        {this.props.selected_item 
                            ? <FontAwesomeIcon icon={this.props.selected_item.icon} size="3x" /> 
                            : <FontAwesomeIcon icon="question" size="3x" />}
                    </div>
                </div>
            </div>
            )
        }
    }
    
    export default Player