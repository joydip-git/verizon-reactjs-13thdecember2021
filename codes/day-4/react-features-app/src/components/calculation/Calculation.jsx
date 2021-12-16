import React, { Component } from 'react'

export class Calculation extends Component {
    //{ data:'Welcome to React'}
    constructor(props) { 
        super(props)
        //always assign an object to the state property, NOTHING ELSE
        this.state = {
            first: 0,
            second: 0,
            result: 0
        }
        console.log('calc created')
    }
    updateFirstValueHandler = (e) => {
        this.setState({
            first: parseInt(e.target.value)
        })
    }
    updateSecondValueHandler = (e) => {
        this.setState({
            second: parseInt(e.target.value)
        })
    }

    calculationHandler = () => {
        this.setState(
            (oldState) => {
                const newState = {
                    result: oldState.first + oldState.second
                }
                return newState
            }
        )
    }
    render() {
        console.log('calc rendered')
        console.log(this)
        return (
            <table>
                <tr>
                    <td>
                        1st Value:&nbsp;
                    </td>
                    <td>
                        <input type='number' name='txtfirst' value={this.state.first} onChange={this.updateFirstValueHandler} />
                    </td>
                </tr>
                <tr>
                    <td>
                        2nd Value:&nbsp;
                    </td>
                    <td>
                        <input type='number' name='txtsecond' value={this.state.second} onChange={this.updateSecondValueHandler} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type="button" onClick={this.calculationHandler}>Add</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        Result:&nbsp;{this.state.result}
                    </td>
                </tr>
            </table>
        )
    }

    // componentDidMount(){

    // }
    // componentDidUpdate(oldProps, oldState) {
    //     console.log('previous State')
    //     console.log(oldState)
    //     console.log('current state')
    //     console.log(this.state)
    //     console.log(this.props)
    // }
    // componentWillUnmount(){
    //     console.log('destroyed')
    // }
}