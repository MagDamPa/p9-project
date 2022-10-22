
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

  convertNgMg(specimen_1, specimen_2); 
 
  return (
    <div className="App">
      <div className="top-flexbox">
        <Menu/>
        <Help/>
      </div>
      <div className ="input-container">
        <Input/>
      </div>
      <Chart2/>
    </div>
  );
}

export default App
