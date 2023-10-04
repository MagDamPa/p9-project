import React, {useRef} from 'react'
import '../Style/Input.css'
import Datapoints from './Datapoints'
import infoIcon from './Icons/infoIcon.svg'
import { v4 as uuidv4 } from 'uuid'
import { Info, Plus } from 'lucide-react'
import ResultTable from './ResultTable';

function Input({datapoints, setDatapoints, answers}) {

  const borderStyling = "solid 1px #E7E2DE"

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
          return [...prevDatapoints, { Id: uuidv4(), date: date, value: value,}]
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
    <div style={{border: borderStyling}} className=' w-full flex justify-center items-center flex-col p-8 rounded  mt-16' >
      <form onSubmit={e => { e.preventDefault(); }}>
        <div className='flex justify-center flex-col items-center  mt-8 flex-wrap' >
          <div  style={{border: borderStyling}} className='flex justify-between text-center items center border rounded-lg p-2 gap-4'>
            {/*adds the number of the next element we will add to the array*/}
            <p className = "px-6 rounded-lg text-center bg-base-300 flex justify-center items-center" id="testnumber" >
              {datapoints.length + 1}
            </p>
            {/*Creates an input field for the user to enter a date based on a dropdown calender, it acceses the values using the useRef from react*/}
            <input style={{border: borderStyling}} type = "date"  className = "border border-base-300 rounded-lg pl-2 h-13" id='date' ref={testDateRef} required />
            {/*Creates an input field for the user to enter a testvalue, again using useRef to acces it later*/}
            <div className="join">
            <div>
              <div>
                  <input type="number" className="input input-bordered join-item w-32" placeholder="Testværdi" ref={testValueRef} />
                </div>
              </div>
              <select className="select select-bordered join-item">
                <option selected value={true} >mg/mol</option>
                <option value={false} >USA</option>
              </select>
            </div>
            <textarea style={{border: borderStyling}} type='text' className='textarea textarea-bordered max-h-8' placeholder='Kommentar' ></textarea>
            {/*Unit display*/}      
            <div className="tooltip" data-tip="hello">
              <button className="btn"><Info /></button>
            </div>        
            <button className='btn btn-md' onClick={buttonHandlerAdd}>
                <Plus />
                Tilføj testresult
            </button>
          </div>
          <div className='text' id="output-box"></div>
          <div className='buttons'>
           
            <button className='deleteAll hidden' onClick={buttonHandlerDelete}>
                Slet alle testresultater
            </button>
          </div>
        </div>
      </form>
      <div className='flex justify-center w-full'>
        <ResultTable datapoints={datapoints} setDatapoints={setDatapoints} answers={answers} />
      </div>
    </div>
  )
}

export default Input