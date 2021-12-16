import { Calculation } from '../components/calculation/Calculation';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       Welcome to React
//     </div>
//   );
// }

const App = () => {

  // const calcComponentObj = new Calculation()
  // const calcElement = calcComponentObj.render()

  //data
  const message = 'Welcome to React'
  //functionality
  const clickHandler = () => {
    alert('hello...')
  }

  const appElement = (
    <div>
      {/** binding message (dyanmic data) with the span react element */}
      <span className='spanStyle'>{message}</span>
      <br />
      {/** eevent binding: binding Click event of button with a function (handler) in the component */}
      <button onClick={clickHandler}>Click</button>
      <br />
      <br />
      {/** child (nested) component of App component */}
      {/* <Calculation /> */}
      {/* {calcElement} */}

      <Calculation />
    </div>
  )
  return appElement
}

export default App;
