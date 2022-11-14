import React, {useRef} from 'react'
import '../Style/Input.css'
import Datapoints from './Datapoints'
import infoIcon from './Icons/infoIcon.svg'
import { v4 as uuidv4 } from 'uuid'

function Input({datapoints, setDatapoints}) {


  var testDateRef = useRef()
  var testValueRef = useRef()


  //disables the scrolling function on the number input field. 
  //is mostly to ease the use of the field for the user. 
  document.addEventListener("wheel", function(event){
    if(document.activeElement.type === "number" &&
       document.activeElement.classList.contains("noscroll"))
    {
        document.activeElement.blur();
    }
});

  function buttonHandlerAdd(){
    var date = testDateRef.current.value
    var value = testValueRef.current.value

    if(date != '' && value != ''){
      setDatapoints(prevDatapoints => {
        return [...prevDatapoints, { Id: uuidv4(), Number: datapoints.length, Date: date, Value: value, Valid: 'Valid'}]
      })
      testDateRef.current.value = null
      testValueRef.current.value = null
    }
  }

  function buttonHandlerInfo(e){
    e.preventDefault();
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
  
  return (

    <div >
      <form>
        <div>
          <div>
            {/*Creates a element of the component Datapoints, and provides it with the array datapoints, and the function setDatapoints*/}
            <Datapoints datapoints={datapoints} setDatapoints={setDatapoints}/>
          </div>
          <hr className='line'/>
          <div className='Input'>
            {/*adds the number of the next element we will add to the array*/}
            <p className = "flex-item main testnumber" id="testnumber">
              {datapoints.length + 1}
            </p> 
            {/*Creates an input field for the user to enter a date based on a dropdown calender, it acceses the values using the useRef from react*/}
            <input type = "date"  className = "flex-item main date" id='date' ref={testDateRef} required/>
            {/*Creates an input field for the user to enter a testvalue, again using useRef to acces it later*/}
            <input type = 'number' className = "flex-item noscroll main testvalue Small" ref={testValueRef} required placeholder='Resultat'/>
            <span className="flex-item Unit main"> 
              mg/mol
            </span>
            {/*Unit display*/}
            <button className = "flex-item info main" onClick={buttonHandlerInfo}>
                <img className = "IconInput" 
                  src={infoIcon}
                />
                <span className="popuptext" id="myPopup">A Simple Popup!</span>
            </button>
          </div>
          <div>
            <button className='Add' onClick={buttonHandlerAdd}>
                Tilføj testresult
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Input