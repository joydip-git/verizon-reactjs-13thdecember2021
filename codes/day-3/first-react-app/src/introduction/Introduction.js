import React from 'react'

export function Introduction() {
    const data = 'React is JS library, NOT a framework'
    const paraReactElement = (
        <p id='introPara'>
            {data}
        </p>
    )
    return paraReactElement
}