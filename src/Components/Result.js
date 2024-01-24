import React from 'react'
import '../Style/Result.css'

function Result({answersTitle, answersText, answersColor, answersCalculation, answersOutside, borderStyling}) {


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
        <span style={{backgroundColor: "#f1f1ef", color: "#787774"}} className="badge">Intet svar</span>
        <span style={{backgroundColor: "#f8ecdf", color: "#cc772f"}} className="badge">Ny prøve påkrævet</span>
        <span style={{backgroundColor: "#faecee", color: "#c4554d"}} className="badge">Tegn på nyt indtag</span>
        <span style={{backgroundColor: "#eef3ed", color: "#548064"}} className="badge">Intet tegn på nyt indtag</span>
      </div>
    </div>
  )
}

export default Result