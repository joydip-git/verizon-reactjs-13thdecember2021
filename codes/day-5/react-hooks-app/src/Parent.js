import React, { useState } from 'react'
import Name from './Name'
import Value from './Value'

const Parent = () => {
    const [valState, setValState] = useState(0)
    const [nameState, setNameState] = useState('')

    const updateNameHandler = (newName) => {
        setNameState(newName)
    }
    const updateValueHandler = () => {
        setValState(
            (oldVal) => {
                return oldVal + 1
            }
        )
    }
    return (
        <div>
            <Name nameData={nameState} nameHandler={updateNameHandler} />
            <br />
            <br />
            <Value valueData={valState} valueHandler={updateValueHandler} />
        </div>
    )
}

export default Parent
