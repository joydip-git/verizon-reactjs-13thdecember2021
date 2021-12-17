import React from 'react'
import useValue from './useValue'

const Click = () => {

    const [value, setValue] = useValue()
    return (
        <div>
            <span>{value}</span>
            <br />
            <button onClick={setValue}>Click</button>
        </div>
    )
}

export default Click
