
import React, { useState, useEffect } from 'react';
import '../App.css';
//import Chart from './Components/Chart';
import {answers, convertNgMg} from '../Utils/Model'; 
import Result from '../Components/Result';
import Navbar from '../Components/Navbar';
import InputContainer from '../Components/InputContainer';
import DashboardHero from '../Components/DashboardHero';
import TooSmallScreen from '../Components/TooSmallScreen';

function Homepage() {

  const borderStyling = "solid 1px #E7E2DE"

  //STATES: 

  const [datapoints, setDatapoints] = useState([]);

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  //State to control language selection - true = dansk & false = english
  const [language, setLanguage] = useState(true);

  //State to change the  model - true = cronical & false = occasional 
  const [model, setModel] = useState(true);

  //State to check wether a user is logged in or not.
  const [logggedIn, setLoggedIn] = useState(true)


  let screenWidth  = window.innerWidth

  console.log(screenWidth)

  useEffect(() => {
    if (datapoints.length != 0) {
      convertNgMg({datapoints})
      forceUpdate()
    } 
    else {
    }
  }, [datapoints.length]);

  return (
    <div className="App pb-16">{
      screenWidth >= 992 ? 
      <div>
        <DashboardHero model={model} setModel={setModel} logggedIn={logggedIn} setLoggedIn={setLoggedIn} />
        <InputContainer datapoints={datapoints} setDatapoints={setDatapoints} answers={answers}/>
        <div className='flex gap-4 mt-16 md:block lg:flex '>
          <div style={{border: borderStyling}} className='border border-base-300 rounded-lg p-4 '> 
          <h2 className='text-2xl font-bold text-center'>Fortolkning </h2>
              <div className=''>
                <Result 
                  answersTitle={answers.Title} 
                  answersText={answers.Text}
                  answersColor={answers.borderColor}
                  answersCalculation={answers.Calculation}
                  answersOutside={answers.Outside}
                  borderStyling={borderStyling}
                />
              </div>
          </div>
          <div style={{border: borderStyling}} className='border border-base-300 rounded-lg p-4 flex-grow '>
            <h2 className='text-2xl font-bold text-center'>Graf over resultater </h2>
          </div>
        </div>
      </div>
      :
      <TooSmallScreen />
      }
    </div>
  );
}

export default Homepage
