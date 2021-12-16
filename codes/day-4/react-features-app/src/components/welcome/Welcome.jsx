import React from 'react'

/**
 * x={ message: welcomeMessage, handler: clickHandler }
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

// function Frag(props) {
//     return props.children
// }

export default Welcome
