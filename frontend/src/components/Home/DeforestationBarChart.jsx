// DeforestationBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const DeforestationBarChart = ({ country, forestAreaData }) => {
  
  const countryData = forestAreaData.find(item => item.CountryID === country.CountryID);

  const data = {
    labels: ["1990", "2000", "2010", "2015", "2020"],
    datasets: [
      {
        label: 'Forest Area (1000 ha)',
        data: [
          parseFloat(countryData["Forest Area, 1990"]),
          parseFloat(countryData["Forest Area, 2000"]),
          parseFloat(countryData["Forest Area, 2010"]),
          parseFloat(countryData["Forest Area, 2015"]),
          parseFloat(countryData["Forest Area, 2020"])
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    maintainAspectRatio: false
  };

  return (
    <div style={{ height: '400px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default DeforestationBarChart;
