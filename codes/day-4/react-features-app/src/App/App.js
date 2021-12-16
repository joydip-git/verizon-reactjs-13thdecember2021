import { Calculation } from '../components/calculation/Calculation';
import Welcome from '../components/welcome/Welcome';
import './App.css';

const App = () => {

  const welcomeMessage = 'Welcome to React'
  const clickHandler = () => {
    alert('hello...')
  }

  const appElement = (
    <div>
      <Welcome message={welcomeMessage} handler={clickHandler} />
      <br />
      <br />
      <Calculation data={welcomeMessage} />
    </div>
  )
  return appElement
}

export default App;
/**
 * { data:'Welcome to React'}
 */
