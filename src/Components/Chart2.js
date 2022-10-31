import React from 'react'

import '../Style/Chart.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Scale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { datapoints } from './Input';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      align: 'center',
      display: true,
      fullsize: true,
      text: 'THC-COOH concentration by date',
      position: 'bottom',
    },
    scales: {
        y: {
          suggestedmin: 50,
          Max: 100
          }
    },
    }
}; 



function Chart2({datapoints}) {
  const labels = datapoints.map(datapoint => 
    datapoint.Date); 
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: datapoints.map(datapoint => 
          datapoint.Value),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

return (
  <div className='chart-wrpper'>
    <Line 
    height ={"400px"}
    width = {"600px"}
    data={data}
    options ={options}/>
  </div> )
}

export default Chart2