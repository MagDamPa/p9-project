
import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './Components/Menu';
import Help from './Components/Help';
import Input from './Components/Input';
import Chart2 from './Components/Chart2';
import {answers, convertNgMg} from './Utils/Model'; 
import Result from './Components/Result';
import AddIcon from './Components/Icons/AddIcon.svg'
import { specimen_base, specimen_last } from './Utils/Model';

function App() {

  const [datapoints, setDatapoints] = useState([]);

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    if (datapoints.length != 0) {
      convertNgMg({datapoints})
      forceUpdate()
    } 
    else {
    }
  }, [datapoints.length]);  

  return (
    <div className="App">
      <div className="top-flexbox">
        <Menu/>
        <Help/>
      </div>
      <div className ="input-container">
        <div className='addInput'>    
          <Input 
            datapoints={datapoints} 
            setDatapoints={setDatapoints}
          />
        </div>
        <div className='ResultBlock'>
          <Result 
          answersTitle={answers.Title} 
          answersText={answers.Text}
          answersColor={answers.Color}
          answersCalculation={answers.Calculation}
          />
        </div>
      </div>
      <div className = "result-and-chart-wrapper">
        <Chart2 datapoints={datapoints}/>
      </div>
    </div>
  );
}

export default App
