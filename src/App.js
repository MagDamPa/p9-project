
import React, {useState} from 'react';
import './App.css';
import Menu from './Components/Menu';
import Help from './Components/Help';
import Input from './Components/Input';
import Add from './Components/Add';
import Chart2 from './Components/Chart2';
import {convertNgMg} from '../src/Utils/Model'; 
import Description from './Components/Description';


function App() {

  const [inputValue, setInputValue] = useState();
  const [inputDate, setInputDate] = useState();


  const [inputObject, setInputObject] = useState({
    specimen1: {
      value: 0,
      date: ''
    },
    specimen2: {
      value: 0,
      date: ''
    }
  })


  
 
  return (
    <div className="App">
      <div className="top-flexbox">
        <Menu/>
        <Help/>
      </div>
      <div className ="input-container">
        <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        inputDate={inputDate}
        setInputDate={setInputDate}
        inputObject={inputObject}
        setInputObject={setInputObject}
        />
        <Add/>
      </div>
      <div style={{display: "flex",justifyContent: "space-between", alignItems:"center"}}>
        <Chart2 style={{width: "50%"}}/>
        <Description
        inputObject={inputObject}
        />
      </div>
    </div>
  );
}

export default App;
