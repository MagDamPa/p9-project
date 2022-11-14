import React from 'react'
import '../Style/Input.css'
import Datapoints from './Datapoints'
import infoIcon from './Icons/infoIcon.svg'

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
      <form>
      <div>
        {/*Creates a element of the component Datapoints, and provides it with the array datapoints, and the function setDatapoints*/}
        <Datapoints datapoints={datapoints} setDatapoints={setDatapoints}/>
      </div>
      <div className='line'/>
      <div className='Input'>
        {/*adds the number of the next element we will add to the array*/}
        <p className = "flex-item main testnumber" id="testnumber">
          {datapoints.length + 1}
        </p> 
        {/*Creates an input field for the user to enter a date based on a dropdown calender, it acceses the values using the useRef from react*/}
        <input type = "date"  className = "flex-item main date border" id='date' ref={testDateRef} required/>
        {/*Creates an input field for the user to enter a testvalue, again using useRef to acces it later*/}
        <input type = 'number' className = "flex-item noscroll main testvalue Small" ref={testValueRef} required placeholder='Resultat'/>
        <span className="flex-item Unit main bgBlue"> 
          mg/mol
        </span>
        {/*Unit display*/}
        <button className = "flex-item info main">
            <img className = "IconInput" 
              src={infoIcon}
            />
        </button>
      </div>
      </form>
    </div>
  )
}

export default Input