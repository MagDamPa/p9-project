
import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import './Style/Add.css'
import Menu from './Components/Menu';
import Help from './Components/Help';
import Input from './Components/Input';
import Chart2 from './Components/Chart2';
import {answers, convertNgMg} from './Utils/Model'; 
import Result from './Components/Result';
import AddIcon from './Components/Icons/AddIcon.svg'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [datapoints, setDatapoints] = useState([]);
  const testDateRef = useRef()
  const testValueRef = useRef()

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  function beregn(){
    convertNgMg({datapoints})
  }

  useEffect(() => {
    if (datapoints.length != 0) {
      beregn()
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
        <Input 
          datapoints={datapoints} 
          setDatapoints={setDatapoints}
          testDateRef={testDateRef}
          testValueRef={testValueRef}
          />
        <div className='addblock'>    
          <button className='Add' onClick={buttonHandlerAdd}>
              <img className='IconAdd' 
                  src={AddIcon}
              />
          </button>
        </div>
      </div>
      <div className = "Append">
        <Chart2 datapoints={datapoints}/>
        <Result answersTitle={answers.Title} answersText={answers.Text}/>
      </div>
    </div>
    
  );
}

export default App
