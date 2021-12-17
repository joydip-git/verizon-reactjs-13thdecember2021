import React from 'react'

const Value = (props) => {
    console.log('value rendered')
    return (
        <div>
            Value:&nbsp;{props.valueData}
            <br />
            <button onClick={props.valueHandler}>Increase</button>
        </div>
    )
}

export default Value
