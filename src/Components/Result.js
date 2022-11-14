import { Title } from 'chart.js';
import React, {useEffect, useState} from 'react'
import '../Style/Result.css'
import { answers } from '../Utils/Model';

function Result({answersTitle, answersText, answersColor, answersCalculation}) {


  return (
    <div>
      <div 
      className='result-wrapper'
      style={{
        // Changes the background color depending on the value answers.color is holding.
        backgroundColor: answersColor
      }}
      >
        <p className='result-heading' defaultValue='Resultat titel'>
            {answersTitle}            
        </p>
        <p className='result-text' defaultValue='Tekst forklaring'>
            {answersText}
        </p>
      </div>
      <div>
        <p className='UsedTest'>
          {answersCalculation}
        </p>
      </div>
    </div>
  )
}

//test

export default Result