import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Statistics from './Statistics';
import Carousel from './Carousel';
import Features from './Features'
import forestAreaData from "./data/ForestArea_YearWise.json";
import countryData from "./data/countrycode.json";
import deforestationData from "./data/Forest_MainData.json";
import './home.css';

const theme = createTheme();

function Home() {
  return (
    <>
      <Carousel />
      <Features />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Statistics
          countryData={countryData}
          deforestationData={deforestationData}
          forestAreaData={forestAreaData}
        />
      </ThemeProvider>
    </>
  )
}

export default Home