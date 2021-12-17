import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

// class NameComp extends Component {
class NameComp extends PureComponent {
    constructor() {
        super()
        console.log('[Name] created')
    }

    static propTypes = {
        nameData: PropTypes.string.isRequired,
        nameHandler: PropTypes.func.isRequired
    }

    // shouldComponentUpdate(newProps, newState) {
    //     console.log('[Name] SCU')
    //     if (newProps.nameData === this.props.nameData)
    //         return false

    //     return true
    // }
    render() {
        console.log('[Name] rendered')
        return (
            <div>
                <input type='text' value={this.props.nameData} onChange={
                    (e) => this.props.nameHandler(e.target.value)
                } />
            </div>
        )
    }
    componentDidMount() {
        console.log('[Name] mounted')
    }
    componentDidUpdate(oldProps, oldState) {
        console.log('[Name] updated')
    }
}
// NameComp.propTypes = {
//     nameData: PropTypes.string.isRequired,
//     nameHandler: PropTypes.func.isRequired
// }
export default NameComp

