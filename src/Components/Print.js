import React from 'react';
import '../Style/Render.css';

function Render(){
// The Print.js function is a quite simple function, which originates from standard javascript. It essentially calls this function, asks the system print to print the entirity of the page,
// and finally, it is returned to our app.js.
      
 function print()
 {
    window.print()
 }


return (
   <button className='Render' onClick={print}>
      Udskriv eller gem som PDF
   </button>
)
}
export default Render