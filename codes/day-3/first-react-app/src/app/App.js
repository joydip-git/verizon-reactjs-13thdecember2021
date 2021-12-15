import React from 'react'
import { Welcome } from "../welcome/Welcome";
import { Introduction } from "../introduction/Introduction";

export function App() {
    const mainDivReactElement = (
        <div id='mainDiv'>
            <Welcome />
            <br />
            <Introduction />
        </div>
    )
    return mainDivReactElement
}