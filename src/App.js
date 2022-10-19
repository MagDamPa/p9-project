
import './App.css';
import Menu from './Components/Menu';
import Help from './Components/Help';
import Input from './Components/Input';
import {convertNgMg, specimen_1, specimen_2} from '../src/Utils/Model'; 


function App() {

  

  convertNgMg(specimen_1, specimen_2); 
 
 
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
