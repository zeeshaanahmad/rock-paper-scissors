import React, { Component } from 'react'

class Timer extends Component {
    render(){
        return (
            <h2>{this.props.seconds ? this.props.seconds : null}</h2>
        )
    }
}

export default Timer