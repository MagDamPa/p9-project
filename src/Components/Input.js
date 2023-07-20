import React, {useRef} from 'react'
import '../Style/Input.css'
import Datapoints from './Datapoints'
import infoIcon from './Icons/infoIcon.svg'
import { v4 as uuidv4 } from 'uuid'
import { Info, Plus } from 'lucide-react'

function Input({datapoints, setDatapoints}) {

  var testDateRef = useRef()
  var testValueRef = useRef()

  //disables the scrolling function on the number input field. 
  //is mostly to ease the use of the field for the user. 
  document.addEventListener("wheel", function(event){
    if(document.activeElement.type === "number" &&
       document.activeElement.classList.contains("noscroll"))
    {
        document.activeElement.blur();
    }
  });

  //initiate a variable called date_last
  var date_last;

  //the function that runs when pressing the add button. 
  //it checks whether the inputfields are empty before adding it
  //it also checks whether the date is before the other dates input and if so it does not add it.
  function buttonHandlerAdd(e){
    var date = new Date(testDateRef.current.value)
    var value = testValueRef.current.value

    if (datapoints.length === 0){
      date_last = ''
    }
    else(
      date_last = new Date(datapoints[datapoints.length-1].Date)
    )

    let warn = ''

    if(date != '' && value != ''){
      if (date_last < date || date_last === ''){
        setDatapoints(prevDatapoints => {
          return [...prevDatapoints, { Id: uuidv4(), Date: date, Value: value,}]
        })
        e.preventDefault()
        testDateRef.current.value = null
        testValueRef.current.value = null
        warn = ''
        document.getElementById("output-box").innerHTML = warn;
      }
      else{
        warn = "Datoen du har indtastet ligger før tidligere indtastet datoer<br>";
        document.getElementById("output-box").innerHTML = warn;
      }
    }
  }

  //reload page as to delete all elements in the statearray. 
  function buttonHandlerDelete(){
      window.location.reload(false);
  }
  
  return (
    <div className='flex justify-center' >
      <form onSubmit={e => { e.preventDefault(); }}>
        <div className='flex justify-center flex-col align-middle max-w-6xl mt-8' >
          <div>
            {/*Creates a element of the component Datapoints, and provides it with the array datapoints, and the function setDatapoints*/}
            <Datapoints datapoints={datapoints} setDatapoints={setDatapoints}/>
          </div>
          <div className='flex justify-between text-center align-middle border rounded-lg p-2 gap-4'>
            {/*adds the number of the next element we will add to the array*/}
            <p className = "px-6 rounded-lg text-center bg-base-200 flex justify-center items-center" id="testnumber" >
              {datapoints.length + 1}
            </p>
            {/*Creates an input field for the user to enter a date based on a dropdown calender, it acceses the values using the useRef from react*/}
            <input type = "date"  className = "border zborder-base-200 rounded-lg pl-2" id='date' ref={testDateRef} required />
            {/*Creates an input field for the user to enter a testvalue, again using useRef to acces it later*/}
            <div className = "border rounded-lg border-base-200 flex pl-2">
              <input type = 'number' className = " " ref={testValueRef} required placeholder='Resultat'/>
              <select className="select w-full max-w-xs bg-base-200 " >
                <option value={true} selected >mg/mol</option>
                <option value={false}>usa</option>
            </select>   
            </div>
            <input className='border rounded-lg pl-2' placeholder='Kommentar' />
            {/*Unit display*/}      
            <div className="tooltip" data-tip="hello">
              <button className="btn"><Info /></button>
            </div>        
            <button className='btn' onClick={buttonHandlerAdd}>
                <Plus />
                Tilføj testresult
            </button>
          </div>
          <div className='text' id="output-box"></div>
          <div className='buttons'>
           
            <button className='deleteAll' onClick={buttonHandlerDelete}>
                Slet alle testresultater
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Input