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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];  

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 300 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

function Chart2() {
  function buttonHandler () {
    console.log("Hello, world")
}
return (
  <div className='Append'>
    <Line data={data} />
  </div> )
}

export default Chart2