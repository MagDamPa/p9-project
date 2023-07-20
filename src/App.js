
import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './Components/Input';
//import Chart from './Components/Chart';
import {answers, convertNgMg} from './Utils/Model'; 
import Result from './Components/Result';
import Navbar from './Components/Navbar';
import Print from './Components/Print';
import InputContainer from './Components/InputContainer';

function App() {

  //STATES: 

  const [datapoints, setDatapoints] = useState([]);

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  //State to control language selection - true = dansk & false =
  const [language, setLanguage] = useState(true);


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
      <Navbar setLanguage={setLanguage} language={language} />
      <InputContainer datapoints={datapoints} setDatapoints={setDatapoints}/>
      <div className='content-wrapper'> 
        <div className ="input-container">
          <div className='ResultBlock'>
            <Result 
              answersTitle={answers.Title} 
              answersText={answers.Text}
              answersColor={answers.borderColor}
              answersCalculation={answers.Calculation}
              answersOutside={answers.Outside}
            />
          </div>
        </div>
        <div className = "result-and-chart-wrapper">
        </div>
      </div>
      <div className = "print-button">
        <Print/>
      </div>      
  </div>
  );
}

export default App
