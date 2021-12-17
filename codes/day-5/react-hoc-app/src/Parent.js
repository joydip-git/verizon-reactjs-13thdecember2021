// import Click from './Click'
// import Hover from './Hover'

//import React, { Component } from 'react'

// export default class Parent extends Component {
//     state = {
//         value: 0
//     }
//     increaseValueHandler = () => {
//         this.setState(
//             (cs) => {
//                 return {
//                     value: cs.value + 1
//                 }
//             }
//         )
//     }
//     render() {
//         return (
//             <div>
//                 <Click clickValue={this.state.value} valueClickHandler={this.increaseValueHandler} />
//                 <br />
//                 <br />
//                 <Hover hoverValue={this.state.value} valueHoverHandler={this.increaseValueHandler} />
//             </div>
//         )
//     }
// }

import React from 'react'
import Click from './Click'
import Hover from './Hover'
// import WithValueHoverHOC from './Hover'
//import withValue from './withValue'

//const ClickHOC = withValue(Click)
//const clickHocObj = new ClickHOC()
// const clickCompElement = clickHocObj.render()
const Parent = () => {
    return (
        <div>
            {/* <WithValueClickHOC /> */}
            <Click x={10} />
            {/* {clickHocObj.render()} */}
            {/* <ClickHOC /> */}
            <br />
            <br />
            {/* <WithValueHoverHOC /> */}
            <Hover y={20} />
        </div>
    )
}

export default Parent
