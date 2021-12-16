import React, { Component } from 'react'

export class Calculation extends Component {

    constructor() {
        super()
        // this.updateXHandler = this.updateXHandler.bind(this)
        //always assign an object to the state property, NOTHING ELSE
        this.state = {
            x: 0
        }
        console.log('calc created')
    }

    updateXHandler = (e) => {
        //it will update the state
        //next it will call render method of the class component
        this.setState({
            x: (e.target.value)
        })
    }
    render() {
        console.log('calc rendered')
        return (
            <div>
                <span>X Value:{this.state.x}</span>
                <br />
                <br />
                <input type='number' value={this.state.x} onChange={this.updateXHandler} />
                {/* <button type='button' onClick={this.updateXHandler}>ChangeValue</button> */}
            </div>
        )
    }
}