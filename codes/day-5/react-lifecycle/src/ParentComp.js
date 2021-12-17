import React, { Component } from 'react'
import NameComp from './NameComp'
import ValueComp from './ValueComp'

export default class ParentComp extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            val: 0
        }
        console.log('[Parent] created')
    }
    updateNameHandler = (newName) => {
        this.setState({
            name: newName
        })
    }
    updateValHandler = () => {
        this.setState(
            (cs) => {
                return {
                    val: cs.val + 1
                }
            }
        )
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('[Parent] SCU')
        return true;
    }
    render() {
        console.log('[Parent] rendered')
        return (
            <div>
                <NameComp nameData={this.state.name} nameHandler={this.updateNameHandler} />
                <br />
                <br />
                <ValueComp valData={this.state.val} valHandler={this.updateValHandler} />
            </div>
        )
    }
    componentDidMount() {
        console.log('[Parent] mounted')
    }
    componentDidUpdate() {
        console.log('[Parent] updated')
    }
}
