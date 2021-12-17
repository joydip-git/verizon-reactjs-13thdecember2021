import React from 'react'
import withValue from './withValue'
//import PropTypes from 'prop-types'

const Hover = (props) => {
    // const { hoverValue, valueHoverHandler } = props
    const { value, valueHandler, y } = props
    return (
        <div onMouseEnter={valueHandler}>
            Value:&nbsp;{value}
            <br />
            Y:{y}
        </div>
    )
}
// Hover.propTypes = {
//     hoverValue: PropTypes.number.isRequired,
//     valueHoverHandler: PropTypes.func.isRequired
// }
// const WithValueHoverHOC = withValue(Hover)
// export default WithValueHoverHOC
export default withValue(Hover)
