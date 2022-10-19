import React from 'react'
import helpIcon from './Icons/helpIcon.svg'

function Help() {

  function buttonHandler(){
    console.log("I need HELP!!")
  }
  return (
    <div>
        <button
          onClick={buttonHandler}
        >
            <img 
                src={helpIcon}
            />
        </button>
    </div>
  )
}

export default Help