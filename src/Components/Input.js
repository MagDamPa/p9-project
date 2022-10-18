import React from 'react'

function Input() {
  return (
    <div className = "input-container">
      <input type = "number" className = "TestNumber"/> 
      <input type = "date" className = "Date"/>
      <input type = "number" className = "TestValue"/>
      <p className = "validity">
        Valid
      </p>



      <input type = "button" value = "Delete">

      </input>

    </div>
  )
}

export default Input