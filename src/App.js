
import './App.css';
import Menu from './Components/Menu';
import Help from './Components/Help';

function App() {
  return (
    <div className="App">
      <div className="top-flexbox">
        <Menu/>
        <Help/>
      </div>
    </div>
  );
}

export default App;
