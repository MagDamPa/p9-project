import React from 'react'

import '../Style/Chart.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Scale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);

function Chart2({datapoints}) {

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        align: 'center',
        display: true,
        fullsize: true,
        text: 'THC-COOH/CREA concentration by date',
        position: 'bottom',
      },
      scales: {
        xAxis: [
          {type: 'time',
          time: {
            unit: "day"
          }
          }
        ],
        yAxis: [
          {
          type: 'linear',
          Min: 0,
          suggestedmin: 50,
          Max: 100
          }
        ],
      },
      }
  }; 

  const labels = datapoints.map(datapoint => 
    new Date(datapoint.Date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})); 
  const data = {
    labels,
    datasets: [
      {
        label: 'THC-COOH concentration',
        data: datapoints.map(datapoint => 
          datapoint.Value),
        borderColor: '#8AABCE',
        backgroundColor: '#8AABCE',
      },
    ],
  };

return (
  <div className='chart-wrapper'>
    <Line 
    height = {"600px"}
    width = {"1500px"}
    data = {data}
    options = {options}/>
  </div> )
}

export default Chart2