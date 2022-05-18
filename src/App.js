import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
// import { collection, doc, onSnapshot } from "firebase/firestore";
import GraphContainer from './Components/GraphContainer.js';
import GuageContainer from './Components/GuageContainer.js';
import ControlPanel from './Pages/ControlPanel.js';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import { Typography } from '@mui/material';
import OnOffTimer from './Components/OnOffTimer.js';
import ControlEntry from './Components/ControlEntry.js';
import FlowEntry from './Components/FlowEntry.js';

const graph = ["pH", "Total Dissolved Solids (TDS)", "Air Temperature", "Humidity", "Water Level", "Water Temperature"]

// const graph = {
//   "sensorGraphs": {
//     "title": "pH",
//     "title": "Total Dissolved Solids (TDS)",
//     "title": "Air Temperature",
//     "title": "Humidity",
//     "title": "Water Level",
//     "title": "Water Temperature"
//   }}

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Space Grotesk',
      textTransform: 'none',
      fontSize: 56,
    },
    h2: {
      fontFamily: 'Space Grotesk',
      textTransform: 'none',
      fontSize: 32,
    },
    h3: {
      fontFamily: 'Inter',
      textTransform: 'none',
      fontSize: 24,
    },
    body: {
      fontFamily: 'Inter',
      textTransform: 'none',
      fontSize: 16,
    },
  },
});

function App() {
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <ResponsiveAppBar></ResponsiveAppBar> */}
        <Typography variant='body' align='left'>SYSTEM SENSORS</Typography>
        <GuageContainer />
        <GraphContainer />
        {/* <GuageCard></GuageCard> */}
        {/* <AreaGraph></AreaGraph> */}
        {/* <DashboardGraphs title={graph.sensorGraphs}/> */}
      </div>
    </ThemeProvider>
    <OnOffTimer/>
    <FlowEntry/>
    <ControlEntry title="Backwash When Flow Rate Less Than (GPH)"/>
    </>
  );
}

export default App;
