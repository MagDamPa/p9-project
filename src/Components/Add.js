import React, {useRef} from 'react'
import '../Style/Add.css'
import AddIcon from './Icons/AddIcon.svg'
import setDatapoints from '../App'



function Add(testDateRef) {

  const [datapoints, setDatapoints] = useState([id: 1, date: '2022-02-02T13:93', value: 342, valid: 'Valid']);

   
  function buttonHandler(){
    console.log(testDateRef)
    //console.log(testValueRef1.current.value)
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