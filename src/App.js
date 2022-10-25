
import React, { useState, useRef } from 'react';
import './App.css';
import Menu from './Components/Menu';
import Help from './Components/Help';
import Input from './Components/Input';
import Chart2 from './Components/Chart2';
import {convertNgMg} from '../src/Utils/Model'; 
import Description from './Components/Description';
import Datapoints from './Components/Datapoints';
import { datapoints } from './Components/Input';


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


  const [datapoints, setDatapoints] = useState([]);
 
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
        datapoints={datapoints} 
        setDatapoints={setDatapoints}
        />
      </div>
      <Chart2 datapoints={datapoints}/>
    </div>
    
  );
}

export default App
