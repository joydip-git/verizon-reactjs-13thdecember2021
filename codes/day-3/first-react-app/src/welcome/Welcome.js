import React from "react"

export function Welcome() {
    const data = 'Welcome to React'
    const divReactElement = (
        <div id='welcomeDiv'>
            {data}
        </div>
    )
    return divReactElement
}