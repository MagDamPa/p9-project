
import '../Style/Input.css'
import TrashIcon from './Icons/TrashIcon.svg'
import {convertNgMg, specimen_2, answers} from '../Utils/Model'

function Input({inputObject, setInputObject, inputValue, setInputValue, inputDate, setInputDate}) {





  function onChangeValueHandler (valueEvent) {
    setInputValue(valueEvent.target.value); 
    console.log("valueEvent: ", valueEvent.target.value)
    
  }

  function onChangeDateHandler (dateEvent) {
    setInputDate(dateEvent.target.value); 
    
    
  }

  function submitHandler (e) {
      e.preventDefault();
      setInputObject({
        specimen1: {
          value: inputValue,
          date: inputDate
        }
      } );
      console.log("After ", inputObject.specimen1.value)
      
      convertNgMg(inputObject.specimen1.value, 7); 
      console.log("inputObjetct: ", inputObject); 
  }

  
  //console.log("valueArray: ", valueArray);


  function buttonHandler(){
    
  }

  //disables the scrolling function on the number input field. 
  document.addEventListener("wheel", function(event){
    if(document.activeElement.type === "number" &&
       document.activeElement.classList.contains("noscroll"))
    {
        document.activeElement.blur();
    }
});

  return (
    <div className='Input'>
      <form className='input-form'>  
        <p className = "flex-item" id="testnumber">
          1  
        </p> 
        <input 
        type = "datetime-local" 
        className = "flex-item" 
        id='date'
        handleChange={onChangeDateHandler}
        />
        <input type = 'number'
        className = "flex-item noscroll testvalue"
        placeholder='testresult' 
        onChange={onChangeValueHandler}
        value={inputValue}
        />
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
        <button onClick={submitHandler} type="submit">
          Submit
        </button>
        <p>{inputValue}</p>
      </form>
    </div>
  )
}

//var time = document.getElementById('date').value;

export default Input