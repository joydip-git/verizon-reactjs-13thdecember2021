import { Component } from "react"

const withValue = (WrappedComponent) => {

    class WithValue extends Component {
        state = {
            value: 0
        }
        increaseValueHandler = () => {
            this.setState(
                (cs) => {
                    return {
                        value: cs.value + 1
                    }
                }
            )
        }
        render() {
            return <WrappedComponent value={this.state.value} valueHandler={this.increaseValueHandler}  {...this.props}/>
        }
    }

    return WithValue
}

export default withValue
/*
const withMemo = (Comp) => {
    class WithMemo extends Component {
        shouldComponentUpdate(newProps, newState) {
            return true
        }
        render() {
            return <Comp />
        }
    }
    return WithMemo
}

function Tet(){
    return <Value val={}/>
}
*/