import React from 'react'
import 'chartjs-adapter-date-fns';
import '../Style/Chart.css'
import {da} from 'date-fns/locale';
import { Line } from 'react-chartjs-2';
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


// The code above is boilerplate, meant to import Chart.js elements - our chart library, in addition;
// Chart.css is the associated .css fil, and import {da} imports danish standards for date-marking from date-fns, an api for adding time to the chart.

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
// This activates the specifications, and associates them with ChartJS,

function Chart({datapoints}) {
//Chart is the main function, and specifies the attributes the chart must have, as well as the data to be plugged into it.
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
        text: 'Graf over testresultater',
        position: 'top',
        font: {
          size: 30,
          family: "Times New Roman"
        }
        //This specifies the chart title, its location, size and position.
      },
      scales: {
        x: {
          reverse: false,
          beginAtZero: true,
          max: 150,
          stepSize: 3,
        },
        // Scales is the "scales", how the elements are measured. Max states that 50 steps at most can appear, while beginatZero sets the x-axis to start at zero.
      },
    // Adapters ensure that the dates are read in danish as format...
      adapters: {
        date: {
          locale: da
        }
      }
    },
    y: {
      reverse: false,
      beginAtZero: true,
      min: 0,
      max: 160,
    },
  }; 
/// Labels are how these times are to be represnted: In a danish format, in this case.
  const labels = datapoints.map(datapoint => 
    new Date(datapoint.Date).toLocaleDateString('dk-DK', {year: 'numeric', month: 'long', day: 'numeric'})); 
  const data = {
    labels, ///Specifices what is to be written on the x-axis
    datasets: [
      {
        // Here the variable data is mapped as an array to the data input from datapoints.  
        label: 'THC-COOH/CREA concentration',
        data: datapoints.map(datapoint => 
          datapoint.Value),
        borderColor: '#8AABCE',
        backgroundColor: '#8AABCE',
      },
    ],
  };
return (
  //Finally, Return returns the entirity of the function as a component to our app.js.
  <div className='chart-wrapper'>
    <Line 
      height = {"600px"}
      width = {"1500px"}
      data = {data}
      options = {options}
    />
  </div> )
}

export default Chart