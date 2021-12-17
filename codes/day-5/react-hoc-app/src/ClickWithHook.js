import React, { useState } from 'react'

const Sample = (props) => {

    //state function    
    const [val, setVal] = useState(0)

    const [xState, setXState] = useState({ x: 0, y: 0 })
    const [status, setStatus] = useState(false)

    const changeValue = () => {
        //setVal(10)
        setVal(
            (prevNumber) => {
                return prevNumber + 1
            }
        )
        setXState(
            (prevObj) => {
                return {
                    ...prevObj,
                    x: prevObj.x + 1
                }
            }
        )
        setStatus(
            (prevStatus) => {
                return !prevStatus
            }
        )
    }
    return (
        <div>
            {status ? 'Hi' : 'hello'}
            <br />
            X:{xState.x} and Y:{xState.y}

            <br />
            Value:&nbsp;<span>{val}</span>
            <br />
            <button onClick={changeValue}>Click</button>
        </div>
    )
}

export default Sample
