// DeforestationPieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';

const DeforestationPieChart = ({ country, deforestationData }) => {
  const worldData = deforestationData.find(item => item["Country and Area"] === "WORLD");
  const countryData = deforestationData.find(item => item.CountryID == country.CountryID);
  

  const data = {
    labels: ["World", country["Country and Area"]],
    datasets: [
      {
        data: [
          parseFloat(worldData["Deforestation 2015-2020"]),
          parseFloat(countryData["Deforestation 2015-2020"]) || 0
        ],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"]
      }
    ]
  };

  const options = {
    maintainAspectRatio: false
  };

  return (
    <div style={{ height: '400px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default DeforestationPieChart;
