import React, {useState} from 'react'
import '../Style/Input.css'
import TrashIcon from './Icons/TrashIcon.svg'

function Input() {

  function buttonHandler(){
    //console.log(time)
    console.log("Trash me :D")
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
    <div className='Input'>
      <p className = "flex-item" id="testnumber">
        1  
      </p> 
      <input type = "datetime-local" className = "flex-item" id='date'/>
      <input type = 'number' className = "flex-item noscroll testvalue" placeholder='testresult'/>
      <p className = "flex-item" id="unit">
        ng/ml
      </p>
      <p className = "flex-item" id='valid'>
        Valid
      </p>
      <button className = "flex-item Delete" onClick={buttonHandler}>
        <img className = "IconInput" 
          src={TrashIcon}
        />
      </button>
    </div>
  )
}

//var time = document.getElementById('date').value;

export default Input