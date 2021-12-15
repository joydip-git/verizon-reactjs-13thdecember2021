import React from "react"

//functional component
export function Welcome() {
    const data = 'Welcome to React'
    
    const divReactElement = (
        <div id='welcomeDiv'>
            {data}
        </div>
    )
    return divReactElement
}