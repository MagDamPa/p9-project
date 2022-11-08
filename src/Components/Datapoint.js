import { UpdateModeEnum } from 'chart.js'
import React from 'react'
import '../Style/Input.css'
import TrashIcon from './Icons/TrashIcon.svg'
import { datapoints } from './Input'
import {convertNgMg} from '../Utils/Model'; 

function Datapoint({datapoint, setDatapoints, datapoints, index}) {

  //Filters out what datapoints is showed. This makes it possible to visualise a deletion of a datapoint
  function buttonHandler(){
    setDatapoints(datapoints.filter((el) => el.Id !== datapoint.Id))
  }
  
  return (
    <div className='Input'>
      {/*Gives the datapoints a number based on the position in the array, using index in a map function*/}
        <p className = "flex-item" id="testnumber">
            {index + 1} 
        </p> 
      {/*Shows the date for the datapoint*/}
        <p className = "flex-item" id='date' >
          {new Date(datapoint.Date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})}
        </p>
      {/*Displays the value for the datapoint*/}
        <p className = "flex-item noscroll testvalue">
          {datapoint.Value}
        </p>
      {/*Simple unit display*/}
        <p className = "flex-item unitsmall" >
            mg/mol
        </p>
      {/*A deletebutton for every item in array*/}
        <button className = "flex-item Delete" onClick={buttonHandler}>
            <img className = "IconInput" 
            src={TrashIcon}
            />
        </button>
    </div>
  )
}

export default Datapoint
