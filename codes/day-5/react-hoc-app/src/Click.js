import React from 'react'
//import PropTypes from 'prop-types'
import withValue from './withValue'

const Click = (props) => {

    // const { clickValue, valueClickHandler } = props
    const { value, valueHandler,x } = props
    return (
        <div>
            Value:&nbsp;{value}
            <br/>
            X:{x}
            <br />
            <button type='button' onClick={valueHandler}>
                Increase
            </button>
        </div>
    )
}

// Click.propTypes = {
//     clickValue: PropTypes.number.isRequired,
//     valueClickHandler: PropTypes.func.isRequired
// }
// const WithValueClickHOC = withValue(Click)
// export default WithValueClickHOC

export default withValue(Click)
//export default Click
