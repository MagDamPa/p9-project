import React from 'react'
import '../Style/Input.css'
import Datapoints from './Datapoints'

function Input({datapoints, setDatapoints, testDateRef, testValueRef}) {

  //disables the scrolling function on the number input field. 
  //is mostly to ease the use of the field for the user. 
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
        {/*Creates a element of the component Datapoints, and provides it with the array datapoints, and the function setDatapoints*/}
        <Datapoints datapoints={datapoints} setDatapoints={setDatapoints}/>
      </div>
      <div className='Input inputMain'>
        {/*adds the number of the next element we will add to the array*/}
        <p className = "flex-item" id="testnumber">
          {datapoints.length + 1}
        </p> 
        {/*Creates an input field for the user to enter a date based on a dropdown calender, it acceses the values using the useRef from react*/}
        <input type = "date" className = "flex-item" id='date' ref={testDateRef}/>
        {/*Creates an input field for the user to enter a testvalue, again using useRef to acces it later*/}
        <input type = 'number' className = "flex-item noscroll testvalue" placeholder='testresult' ref={testValueRef}/>
        {/*Unit display*/}
        <p className = "flex-item unitlarge" >
          mg/mol
        </p>
      </div>
    </div>
  )
}

export default Input