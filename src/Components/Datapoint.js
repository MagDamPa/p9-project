import { UpdateModeEnum } from 'chart.js'
import React from 'react'
import '../Style/Input.css'
import TrashIcon from './Icons/TrashIcon.svg'
import { datapoints } from './Input'
import {convertNgMg} from '../Utils/Model'; 

function Datapoint({datapoint, setDatapoints, datapoints, index}) {

  
  return (
    <div className='Input'>
      {/*Gives the datapoints a number based on the position in the array, using index in a map function*/}
        <p className = "flex-item datapoints" id="testnumber">
            {index + 1} 
        </p> 
      {/*Shows the date for the datapoint*/}
        <p className = "flex-item datapoints date" id="date" >
          {new Date(datapoint.Date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})}
        </p>
      {/*Displays the value for the datapoint*/}
        <p className = "flex-item datapoints Small">
          {datapoint.Value}
        </p>
      {/*Simple unit display*/}
      <span className="flex-item Unit datapoints"> 
          mg/mol
      </span>
    </div>
  )
}

export default Datapoint
