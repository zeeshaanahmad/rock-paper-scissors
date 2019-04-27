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
            // <button>{this.props.inventory_item.item_name}</button>
            <button onClick={this.handleClick.bind(this)}><FontAwesomeIcon size="10x" icon={this.props.inventory_item.icon} /></button>
        )
    }
}

export default InventoryItem