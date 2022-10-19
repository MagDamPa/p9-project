import React from 'react'
import { Chart } from "react-google-charts";


export const data = [
  ["Test Data", "mg/ml"],
  ["09-09-2022", 100],
  ["13-09-2022", 70],
  ["20-09-2022", 20],
];


export const options = {
  title: "Test Results",
  curveType: "function",
  legend: { position: "bottom" },
};

function Chart2() {
  return (
    <Chart
    chartType="ScatterChart"
    width="80%"
    height="400px"
    data={data}
    options={options}
  />
   
  )
}

export default Chart2