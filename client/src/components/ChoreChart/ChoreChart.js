import React from 'react';
import { Chart } from 'primereact/chart';
import './ChoreChart.css';

export const ChoreChart = () => {
  const chartData = {
    labels: ['Jimmy', 'Mary', 'Jane'],
    datasets: [
      {
        data: [5, 50, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const lightOptions = {
    legend: {
      labels: {
        fontColor: '#495057',
      },
    },
  };

  return (
    <div className='card'>
      <h4 className='header'>Weekly Progress</h4>
      <Chart
        className='Chart'
        type='doughnut'
        data={chartData}
        options={lightOptions}
      />
    </div>
  );
};
