import React from 'react'
import { faker } from '@faker-js/faker';
import deleteIcon from './deleteIcon.svg'
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
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      align: 'center',
      display: true,
      fullsize: true,
      text: 'TEST',
      position: 'bottom',
    },
    scale: {
      align: 'center',
      color: 'Red',
      display: true,
      text: 'Hello There',
    }
  },
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
  <div className='Append'>
    <Line data={data} />
  </div> )
}

export default Chart2