import ReactDOM from 'react-dom'
import React from 'react'
import { App } from './components/App/App'

// const appElement = App()
// ReactDOM.render(appElement, document.getElementById('root'))

ReactDOM.render(<App />, document.getElementById('root'))

//reconciliation: transalating the VDOM to actual DOM and add that in the DOM tree

// platfromBrwoserDynamic().bootstrapModule(AppModule)