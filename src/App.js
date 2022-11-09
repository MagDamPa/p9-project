
import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Menu from './Components/Menu';
import Help from './Components/Help';
import Input from './Components/Input';
import Chart2 from './Components/Chart2';
import {answers, convertNgMg} from './Utils/Model'; 
import Result from './Components/Result';
import AddIcon from './Components/Icons/AddIcon.svg'
import { v4 as uuidv4 } from 'uuid'
import { specimen_base, specimen_last } from './Utils/Model';

function App() {

  const [datapoints, setDatapoints] = useState([]);
  const testDateRef = useRef()
  const testValueRef = useRef()

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
 
  function buttonHandlerAdd(e){
    e.preventDefault();
    const date = testDateRef.current.value
    const value = testValueRef.current.value
    setDatapoints(prevDatapoints => {
      return [...prevDatapoints, { Id: uuidv4(), Number: datapoints.length, Date: date, Value: value, Valid: 'Valid'}]
    })
    testDateRef.current.value = null
    testValueRef.current.value = null
  }


  

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
            testDateRef={testDateRef}
            testValueRef={testValueRef}
          />
          <button type='submit' className='Add' onClick={buttonHandlerAdd}>
          Tilføj testresult
          </button>
        </div>
        <div className='ResultBlock'>
          <Result 
          answersTitle={answers.Title} 
          answersText={answers.Text}
          answersColor={answers.Color}
          />
          <p className='UsedTest'>
            Modellen har beregnet resultatet på baggrund af test nr. {specimen_base + 1} og test nr. {specimen_last + 1}.
          </p>
        </div>
      </div>
      <div className = "result-and-chart-wrapper">
        <Chart2 datapoints={datapoints}/>
      </div>
    </div>
    
  );
}

export default App
