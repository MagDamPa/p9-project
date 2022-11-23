
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
import Navbar from './Components/Navbar';
import Render from './Components/Render';

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
        <Navbar />
      <div className='content-wrapper'> 
      <div className ="input-container">
        <div className='addInput'>  
            <h2>Indtast test værdier her:</h2>
              <Input 
                datapoints={datapoints} 
                setDatapoints={setDatapoints}
              />
        </div>
        <div className='ResultBlock'>
        <Result 
          answersTitle={answers.Title} 
          answersText={answers.Text}
          answersColor={answers.borderColor}
          answersCalculation={answers.Calculation}
          />
        </div>
      </div>
      <div className = "result-and-chart-wrapper">
        <Chart2 datapoints={datapoints}/>
      </div>
      </div>
      <div className = "print-button">
<Render
/>
</div>      
    </div>
  );
}

export default App
