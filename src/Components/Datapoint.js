import { UpdateModeEnum } from 'chart.js'
import React from 'react'
import '../Style/Input.css'
import TrashIcon from './Icons/TrashIcon.svg'

function Datapoint({datapoint}) {

  function buttonHandler(){
    console.log("Trash me :D")
  }

  function updateDate(){
    console.log("update me")
  }
  
  return (
    <div className='Input'>
        <p className = "flex-item" id="testnumber">
            {datapoint.Id} 
        </p> 
        <input type = "datetime-local" className = "flex-item" id='date' defaultValue={datapoint.Date} onChange={updateDate}/>
        <input type = 'number' className = "flex-item noscroll testvalue" defaultValue={datapoint.Value}/>
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

export default Datapoint