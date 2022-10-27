
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
 
  function buttonHandlerAdd(){
    console.log(datapoints[0].Value)
    convertNgMg(datapoints[0].Value, 7);
  }
   

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
      <button className='beregn' onClick={buttonHandlerAdd}>
          Beregn resultat
      </button>
      </div>
      <div className = "Append">
      <Chart2 datapoints={datapoints}/>
      </div>
    </div>
    
  );
}

export default App
