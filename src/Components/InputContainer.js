import React from 'react'
import Input from './Input'

function InputContainer({datapoints, setDatapoints, answers}) {
  return (
    <div className='w-full px-4'>
        <div className=''>  
              <h2 className='text-2xl font-bold text-center'>Indtast test værdier her:</h2>
                <Input 
                  datapoints={datapoints} 
                  setDatapoints={setDatapoints}
                  answers={answers}
                />
          </div>
    </div>
  )
}

export default InputContainer