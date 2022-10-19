
import React, {useState} from 'react';
import './App.css';
import Menu from './Components/Menu';
import Help from './Components/Help';
import Input from './Components/Input';
import Add from './Components/Add';
import Chart2 from './Components/Chart2';
import {convertNgMg, specimen_1, specimen_2} from '../src/Utils/Model'; 


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
        <Add/>
      </div>
      <Chart2/>
    </div>
  );
}

export default App;
