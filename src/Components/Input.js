import React, {useState, useRef} from 'react'
import '../Style/Input.css'
import '../Style/Add.css'
import TrashIcon from './Icons/TrashIcon.svg'
import {convertNgMg, specimen_2, answers} from '../Utils/Model'
import AddIcon from './Icons/AddIcon.svg'

//import { setDatasets } from 'react-chartjs-2/dist/utils'

import Datapoints from './Datapoints'

import { v4 as uuidv4 } from 'uuid'

function Input({inputObject, setInputObject, inputValue, setInputValue, inputDate, setInputDate, datapoints, setDatapoints}) {





  function onChangeValueHandler (valueEvent) {
    setInputValue(valueEvent.target.value); 
    console.log("valueEvent: ", valueEvent.target.value)
    
  }

  function onChangeDateHandler (dateEvent) {
    setInputDate(dateEvent.target.value); 
    
    
  }

  function submitHandler (e) {
      e.preventDefault();
      setInputObject({
        specimen1: {
          value: inputValue,
          date: inputDate
        }
      } );
      console.log("After ", inputObject.specimen1.value)
      
      convertNgMg(inputObject.specimen1.value, 7); 
      console.log("inputObjetct: ", inputObject); 
  }

  
  //console.log("valueArray: ", valueArray);



    

  const testDateRef = useRef()
  const testValueRef = useRef()

  function buttonHandlerDelete(){
    //console.log(time)
    console.log("Trash me :D")
    console.log(testDateRef.current.value)
    console.log(testValueRef.current.value)
  }

  function buttonHandlerAdd(){
    const date = testDateRef.current.value
    const value = testValueRef.current.value
    setDatapoints(prevDatapoints => {
     return [...prevDatapoints, { Id: uuidv4(), Number: datapoints.length, Date: date, Value: value, Valid: 'Valid' }]
    })
    testDateRef.current.value = null
    testValueRef.current.value = null

  }

  

  //disables the scrolling function on the number input field. 
  document.addEventListener("wheel", function(event){
    if(document.activeElement.type === "number" &&
       document.activeElement.classList.contains("noscroll"))
    {
        document.activeElement.blur();
    }
});
  
  return (

    <div >
      <div>
        <Datapoints datapoints={datapoints}/>
      </div>
      <div className='Input inputMain'>
        <p className = "flex-item" id="testnumber">
          {datapoints.length + 1}
        </p> 
        <input type = "datetime-local" className = "flex-item" id='date' ref={testDateRef} handleChange={onChangeDateHandler}/>
        <input type = 'number' className = "flex-item noscroll testvalue" placeholder='testresult' ref={testValueRef} onChange={onChangeValueHandler}/>
        <p className = "flex-item" id="unit">
          ng/ml
        </p>
        <p className = "flex-item" id='valid'>
          Valid
        </p>
        <button className = "flex-item Delete" onClick={buttonHandlerDelete}>
          <img className = "IconInput" 
            src={TrashIcon}
          />
        </button>
        <button onClick={submitHandler} type="submit">
          Submit
        </button>
      </div>
      <div className='addblock'>
        <button className='Add' onClick={buttonHandlerAdd}>
            <img className='IconAdd' 
                src={AddIcon}
            />
        </button>
      </div>
    </div>
  )
}

export default Input
export var datapoints