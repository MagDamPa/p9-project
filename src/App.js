
import React, { useState, useRef } from 'react';
import './App.css';
import Menu from './Components/Menu';
import Help from './Components/Help';
import Input from './Components/Input';
import Chart2 from './Components/Chart2';
import Datapoints from './Components/Datapoints';
import {convertNgMg, specimen_1, specimen_2} from '../src/Utils/Model';
import { datapoints } from './Components/Input';

function App() {

  const [datapoints, setDatapoints] = useState([]);

  convertNgMg(specimen_1, specimen_2); 
 
  return (
    <div className="App">
      <div className="top-flexbox">
        <Menu/>
        <Help/>
      </div>
      <div className ="input-container">
        <Input datapoints={datapoints} setDatapoints={setDatapoints}/>
      </div>
      <Chart2 datapoints={datapoints}/>
    </div>
  );
}

export default App
