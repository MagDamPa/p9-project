
import React, { useState, useEffect, useCallback } from 'react';
import '../App.css';
//import Chart from './Components/Chart';
import {answers, convertNgMg} from '../Utils/Model'; 
import Result from '../Components/Result';
import Navbar from '../Components/Navbar';
import InputContainer from '../Components/InputContainer';
import DashboardHero from '../Components/DashboardHero';
import TooSmallScreen from '../Components/TooSmallScreen';
import ChartView from '../Components/ChartView';

function Homepage() {

  const borderStyling = "solid 1px #E7E2DE"

  const [datapoints, setDatapoints] = useState([]);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  //State to change the  model - true = cronical & false = occasional 
  const [model, setModel] = useState(true);
  const [logggedIn, setLoggedIn] = useState(true)

  let screenWidth  = window.innerWidth

  useEffect(() => {
    if (datapoints.length > 0 && model === 'true') {
      convertNgMg({datapoints, setDatapoints}, "Cronic")
      forceUpdate()
    } 
    else if (datapoints.length > 0 && model === 'false'){
      convertNgMg({datapoints, setDatapoints}, "Occational")
      forceUpdate()
    }
    else {
    }
  }, [datapoints.length]);

  
  
  //const setDatapoints([...datapoints, {Id: datapoint.Id, date: datapoint.date, value: datapoint.value, answerTitle: answers.Title}])

  return (
    <div className="pb-16">{
      screenWidth >= 992 ? 
      <div>
        <DashboardHero model={model} setModel={setModel} logggedIn={logggedIn} setLoggedIn={setLoggedIn} />
        <InputContainer datapoints={datapoints} setDatapoints={setDatapoints} answers={answers}/>
        <div className='flex gap-4 mt-16 md:block lg:flex p-4 w-full '>
          <div style={{border: borderStyling}} className='border border-base-300 rounded-lg p-4 flex-grow '> 
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
          <div style={{border: borderStyling}} className='border border-base-300 rounded-lg p-4 flex-grow max-w-half '>
            <h2 className='text-2xl font-bold text-center'>Graf over resultater </h2>
            <ChartView data={datapoints} />
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
