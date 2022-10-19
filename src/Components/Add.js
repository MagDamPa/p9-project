import React from 'react'
import '../Style/Add.css'
import AddIcon from './Icons/AddIcon.svg'


function Add() {

  function buttonHandler(){
    return(
      console.log('Add me <3')
    )
  }
  return (
    <div className='addblock'>
        <button className='Add' onClick={buttonHandler}>
            <img className='IconAdd' 
                src={AddIcon}
            />
        </button>
    </div>
  )
}

export default Add