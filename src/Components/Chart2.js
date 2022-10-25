import React from 'react'
import { Chart } from "react-google-charts";
import deleteIcon from './deleteIcon.svg'




export const options = {
  title: "Test Results",
  curveType: "function",
  legend: { position: "bottom" },
};

function Chart2() {
  function buttonHandler () {
    data.push(["22-09-2022", "10"])
    console.log(data);

}

    var data = [
    ["Test Data", "mg/ml"],
    ["09-09-2022", 100],
    ["13-09-2022", 70],
    ["20-09-2022", 20],
  ];

  return (
    <div className='Append' style={{width: "100%"}}>

<button onClick ={buttonHandler}> 
    <img src={deleteIcon}/>

    </button>


    <Chart
    chartType="ScatterChart"
    width="60%"
    height="400px"
    data={data}
    options={options}
  />
  </div> 
  )
}

export default Chart2