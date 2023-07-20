import React from 'react'
import Input from './Input'

function InputContainer({datapoints, setDatapoints}) {
  return (
    <div className='w-full px-4'>
        <div className='mt-16 p-8  border rounded border-base-200'>  
              <h2 className='text-2xl font-bold text-center'>Indtast test værdier her:</h2>
                <Input 
                  datapoints={datapoints} 
                  setDatapoints={setDatapoints}
                />
          </div>
    </div>
  )
}

export default InputContainer