import { Calculation } from '../components/calculation/Calculation';
import Welcome from '../components/welcome/Welcome';
import './App.css';

const App = () => {

  //data
  const welcomeMessage = 'Welcome to React'
  //functionality
  const clickHandler = () => {
    alert('hello...')
  }

  // const welcomeElement = Welcome({ message: welcomeMessage, handler: clickHandler })
  // console.log(welcomeElement)
  const appElement = (
    <div>
      <Welcome message={welcomeMessage} handler={clickHandler} />
      {/* {welcomeElement} */}
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
