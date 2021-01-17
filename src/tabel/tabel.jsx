import React, { Component } from 'react'
export default class table extends Component {
    render() {
        // props={}
        return (
            <div className = 'table'>
                <h3 onClick={this.props.click} style={this.props.style} >
                    X
                </h3>
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
            </div>
        )
    }
}