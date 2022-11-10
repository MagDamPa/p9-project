import { Title } from 'chart.js';
import React, {useEffect, useState} from 'react'
import '../Style/Result.css'
import { answers } from '../Utils/Model';

function Result({answersTitle, answersText, answersColor}) {


  return (
    <div 
    className='result-wrapper'
    style={{
      // Changes the background color depending on the value answers.color is holding.
      backgroundColor: answersColor
    }}
    >
      <p className='result-text' defaultValue='Resultat titel'>
          {answersTitle}            
      </p>
      <p className='result-text' defaultValue='Tekst forklaring'>
          {answersText}
      </p>
    </div>
  )
}

export default Result