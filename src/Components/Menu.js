import React from 'react'
import menuIcon from './Icons/menuIcon.svg'



function Menu() {


    function buttonHandler () {
        console.log("Touch me baby");
    }
  return (
    <div>
        <button
            onClick={buttonHandler}
        >
            <img 
                src={menuIcon}
            />
        </button>
    </div>
  )
}

export default Menu