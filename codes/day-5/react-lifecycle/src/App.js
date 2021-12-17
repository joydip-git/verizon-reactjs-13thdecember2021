import './App.css';
import ParentComp from './ParentComp';

function App() {
  console.log('[App] rendered')

  return (
    <div className="App">
      <ParentComp />
    </div>
  );
}

export default App;
