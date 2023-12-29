import React from 'react'
import '../Style/Result.css'
import Badge from './common/Badge'

function Result({answersTitle, answersText, answersColor, answersCalculation, answersOutside, borderStyling}) {

  const bagdes = [{
    label: "Intet svar",
    bgColor: "#f1f1ef",
    textColor: "#787774"
  },
  {
    label: "Ny prøve påkrævet",
    bgColor: "#f8ecdf",
    textColor: "#cc772f"
  },
  {
    label: "Tegn på nyt indtag",
    bgColor: "#faecee",
    textColor: "#c4554d"
  },
  {
    label: "Intet tegn på nyt indtag",
    bgColor: "#f1f1ef",
    textColor: "#eef3ed"
  },
]


  return (
    <div>
      <div style={{border: answersColor}} className='text-center p-4 mt-8'>
        <h3 className='text-xl font-bold' defaultValue='Resultat titel'>
            {answersTitle}            
        </h3>
        <p className='mt-4' defaultValue='Tekst forklaring'>
            {answersText}
        </p>
      </div>
      <div style={{border: borderStyling}} className='mt-4 text-center rounded-lg p-4 '>
        <p>
          {answersCalculation}
          <br></br>
          <br></br>
          {answersOutside}
        </p>
      </div>
      <div className='flex justify-center mt-4 gap-2'>
        {bagdes.map((item) => (
          <Badge key={item.label} item={item}>{item.label}</Badge>
        ))}
      </div>
    </div>
  )
}

export default Result