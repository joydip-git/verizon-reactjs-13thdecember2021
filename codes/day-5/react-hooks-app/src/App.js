import './App.css';
// import { useState } from 'react'

import Click from './Click'
import Hover from './Hover'
import Parent from './Parent';

function App() {

  return (
    <div>
      <Parent />
      {/* <Click />
      <br />
      <br />
      <Hover /> */}
    </div>
  )

  // const [value, setValue] = useState(0)
  // const [status, setStatus] = useState(false)
  // const [objState, setObjState] = useState({ a: 0, b: 0 })

  //state={a:0,b:0}


  // const updateValueHandler = () => {
  //   // setValue(10)
  //   setValue(
  //     (oldNum) => {
  //       return oldNum + 1
  //     }
  //   )

  //setStatus(true)
  // setStatus(
  //   (oldStatus) => {
  //     return !oldStatus
  //   }
  // )

  //setObjState({ a: 10, b: 20 })
  //   setObjState(
  //     (prevObjState) => {
  //       return {
  //         a: prevObjState + 10
  //       }
  //     }
  //   )
  // }
  // return (
  //   <div className="App">
  //     Value:&nbsp;{value}
  //     <br />
  //     <button onClick={updateValueHandler}>Increase</button>
  //   </div>
  // );
}

export default App;


// import React, { Component } from 'react'

// export default class App extends Component {
    //state1=0
    //state2=false

//   state = {
//     a: 10,
//     products: [],
//     status: false,
//     name: '',
//     person: {
//       name: '',
//       id: 0,
//       salary: 0
//     }
//   }
//   update = () => {

//     // const newState = {
//     //   ...this.state,
//     //   ...s
//     // }

//     /**
//      * newState={
//       products: [],
//       status: false,
//       name: '',
//       person: {
//         name: '',
//         id: 0,
//         salary: 0,
//         a:100
//       }
//      * }

//       this.state=newState
//      */

// // const s = {
// //   a: 100
// // }
// //this.setState(s)
// this.setState((cs) => { return { a: cs.a + 90 } })
//   }
// render() {
//   return (
//     <div>

//     </div>
//   )
// }
// }

//

