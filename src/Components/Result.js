import { Title } from 'chart.js';
import React, {useEffect} from 'react'
import '../Style/Result.css'

function Result({answersTitle, answersText}) {

  return (
    <div className='result-wrapper'>
      <h2 className='result-heading'>Resultat svar</h2>
        <p className='result-text' defaultValue='Resultat titel'>
            {answersTitle}            
        </p>
        <p className='result-text' defaultValue='tekst forklaring'>
            {answersText}
        </p>
    </div>
  )
}

export default Result