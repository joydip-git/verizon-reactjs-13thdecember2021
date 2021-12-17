import React, { memo } from 'react'
import PropTypes from 'prop-types'

const ValueComp = (props) => {
    console.log('[Value] renderd')
    return (
        <div>
            <span>{props.valData}</span>
            <br />
            <button onClick={props.valHandler}>Increase</button>
        </div>
    )
}
ValueComp.propTypes = {
    valData: PropTypes.number.isRequired,
    valHandler: PropTypes.func.isRequired
}
//HOC--> Higher Order Component function
export default memo(ValueComp)
