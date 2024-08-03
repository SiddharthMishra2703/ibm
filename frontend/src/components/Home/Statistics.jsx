// StatisticsPage.js
import React, { useState } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import CountrySearch from './CountrySearch';
import DeforestationPieChart from './DeforestationPieChart';
import DeforestationBarChart from './DeforestationBarChart';

const Statistics = ({ countryData, deforestationData, forestAreaData }) => {
  const [selectedCountry, setSelectedCountry] = useState({CountryID: 356, "Country and Area": 'India'});

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  

  return (
    <Container >
      <Typography variant="h4" gutterBottom align="center" m={4}>
        Statistics Page
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h6" gutterBottom>
              Selected Country - {selectedCountry['Country and Area']}
            </Typography>
            <CountrySearch countryData={countryData} onSelectCountry={handleSelectCountry} />
          </Paper>
        </Grid>
        {selectedCountry && (
          <>
            <Grid item xs={12} md={6}>
              <Paper>
                <Typography variant="h6" gutterBottom align="center">
                  Deforestation Pie Chart
                </Typography>
                <DeforestationPieChart country={selectedCountry} deforestationData={deforestationData} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper>
                <Typography variant="h6" gutterBottom align="center">
                  Forest Area Bar Chart
                </Typography>
                <DeforestationBarChart country={selectedCountry} forestAreaData={forestAreaData} />
              </Paper>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default Statistics;
