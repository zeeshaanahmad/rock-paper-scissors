import React, { Component } from 'react'

class Timer extends Component {
    render(){
        return (
            <h2>{this.props.seconds}</h2>
        )
    }
}

export default Timer