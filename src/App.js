
import './App.css';
import Menu from './Components/Menu';
import Help from './Components/Help';
import Input from './Components/Input'
function App() {
  return (
    <div className="App">
      <div className="top-flexbox">
        <Menu/>
        <Help/>
      </div>
      <div className ="Input">
        <Input/>
 
      </div>
    </div>
  );
}

export default App;
