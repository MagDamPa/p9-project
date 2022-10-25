import React from 'react'
import {answers} from '../Utils/Model'

function Description({inputObject}) {


  return (
    <div style={{width:"50%"}}>
       <h2>Beskrivelse</h2> 
       <div>
        <p style={{fontSize: "30px"}}> {inputObject.specimen1.value}  {inputObject.specimen1.date}  {answers.first}</p>
       </div>
    </div>
  )
}

export default Description