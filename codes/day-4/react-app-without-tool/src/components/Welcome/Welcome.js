import React from 'react'

export function Welcome() {
    //data
    const welcomeMessage = 'Welcome to React'

    //design
    const welcomeDesign = <div>{welcomeMessage}</div>

    return welcomeDesign
}

// @Component({
//     selector:'app-welcome',
//     template: '<div>{{welcomeMessage}}</div>'
// })
// export class Welcome {
//     welcomeMessage = 'Welcome to React'
// }