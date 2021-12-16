import React from 'react'
import { Introduction } from '../Introduction/Introdcution'
import { Welcome } from '../Welcome/Welcome'

export function App() {

    /*
    const welcomeReactElement = Welcome()
    const introReactElement = Introduction()

    //design
    const appDesign = (
        <div>
            {welcomeReactElement}
            <br />
            {introReactElement}
        </div>
    )
    */

    const appDesign = (
        <div>
            <Welcome />
            <br />
            <Introduction />
        </div>
    )

    return appDesign
}