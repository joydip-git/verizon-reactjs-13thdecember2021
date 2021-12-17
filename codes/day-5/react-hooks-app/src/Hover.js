import React from 'react'
import useValue from './useValue'

const Hover = () => {
    const [val, setVal] = useValue()
    return (
        <div onMouseEnter={setVal}>
            Value:{val}
        </div>
    )
}

export default Hover
