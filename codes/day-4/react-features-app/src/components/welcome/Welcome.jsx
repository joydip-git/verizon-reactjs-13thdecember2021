import React from 'react'

/**
 * pros={ message: welcomeMessage, handler: clickHandler }
 */
const Welcome = (props) => {
    const welcomeElement = (
        <div>
            <span className='spanStyle'> {props.message}</span>
            <br />
            <button onClick={props.handler}>Click</button>
        </div>
    )

    return welcomeElement
}
export default Welcome
