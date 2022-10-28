
import React, { useState, useRef } from 'react';
import './App.css';
import Menu from './Components/Menu';
import Help from './Components/Help';
import Input from './Components/Input';
import Chart2 from './Components/Chart2';
import {convertNgMg} from './Utils/Model'; 
import Description from './Components/Description';
import Datapoints from './Components/Datapoints';
import { addDatapoint } from './Components/Input';
import { date, value } from './Components/Input';



function App() {

  const [datapoints, setDatapoints] = useState([]);
 
  function beregn(){
    convertNgMg({datapoints});
  }
   
  return (
    <div className="App">
      <div className="top-flexbox">
        <Menu/>
        <Help/>
      </div>
      <div className ="input-container">
      <Input 
        datapoints={datapoints} 
        setDatapoints={setDatapoints}
        />
      <button className='beregn' onClick={beregn}>
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
