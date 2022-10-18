import React from 'react'
import deleteIcon from './deleteIcon.svg'

function Input() {
    function buttonHandler () {
        console.log("deleting rows, commander");
    }
  return (
    <div className = "input-container">
      <input type = "number" className = "TestNumber"/> 
      <input type = "date" className = "Date"/>
      <input type = "number" className = "TestValue"/>
      <p className = "validity">
        Valid
      </p>




    <button onClick ={buttonHandler}> 
    <img src={deleteIcon}/>

    </button>


    </div>
  )
}

export default Input