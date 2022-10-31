import { Title } from 'chart.js';
import React, {useEffect} from 'react'

function Result({answersTitle, answersText}) {

  return (
    <div>
        <h1 className='Title' defaultValue='Resultat titel'>
            {answersTitle}            
        </h1>
        <p className='Text' defaultValue='tekst forklaring'>
            {answersText}
        </p>
    </div>
  )
}

export default Result