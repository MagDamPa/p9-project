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
        <span style={{backgroundColor: "#E8F5FC"}} className="badge">Intet svar</span>
        <span style={{backgroundColor: "#ffa202"}} className="badge">Ny prøve påkrævet</span>
        <span style={{backgroundColor: "#e2271d"}} className="badge">Tegn på nyt indtag</span>
        <span style={{backgroundColor: "#3be21d"}} className="badge">Intet tegn på nyt indtag</span>
      </div>
    </div>
  )
}

export default Result