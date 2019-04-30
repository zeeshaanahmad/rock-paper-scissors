import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHandRock, faHandPaper, faHandScissors } from "@fortawesome/free-solid-svg-icons";

library.add(faHandRock, faHandPaper, faHandScissors);

class InventoryItem extends Component {

    handleClick() {
        this.props.inventoryItemClickHandler(this.props.inventory_item)
    }

    render() {
        return (
            <div className="col">
                <button className="btn btn-default btn-lg" onClick={this.handleClick.bind(this)}>
                    <FontAwesomeIcon icon={this.props.inventory_item.icon} size="3x"/>
                </button>
            </div>
        )
    }
}

export default InventoryItem