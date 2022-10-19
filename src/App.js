import React, {useState} from 'react';
import './App.css';
import Menu from './Components/Menu';
import Help from './Components/Help';
import Input from './Components/Input';
import Add from './Components/Add';


function App() {
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
    </div>
  );
}

export default App;
