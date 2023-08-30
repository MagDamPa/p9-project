import React from 'react'
import '../Style/Result.css'

function Result({answersTitle, answersText, answersColor, answersCalculation, answersOutside}) {
/// This function returns the Results corresponding to the evaluated text. The response is stored as an array, each one in five different elements as mentioned above. 

  return (
    <div>
      <div 
      className='result-wrapper'
      style={{
        // Changes the background color depending on the value answers.color is holding.
        border: answersColor
      }}
      >
        <p className='result-heading' defaultValue='Resultat titel'>
            {answersTitle}            
        </p>
        <p className='result-text' defaultValue='Tekst forklaring'>
            {answersText}
        </p>
      </div>
      <div className='result-wrapper'>
        <p>
          {answersCalculation}
          <br></br>
          <br></br>
          {answersOutside}
        </p>
          
      </div>
    </div>
  )
}

export default Result