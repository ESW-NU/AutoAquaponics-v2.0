import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter,Routes, Route}from "react-router-dom";
// import { collection, doc, onSnapshot } from "firebase/firestore";
import GraphContainer from './Components/GraphContainer.js';
import GuageContainer from './Components/GuageContainer.js';
import NavBar from './Components/NavBar.js';
// import ControlPanel from './Pages/ControlPanel.js';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import { Typography } from '@mui/material';
import OnOffTimer from './Components/OnOffTimer.js';
import ControlEntry from './Components/ControlEntry.js';
import FlowEntry from './Components/FlowEntry.js';
import { VideoFeed } from './Pages/VideoFeed';
import { Dashboard } from './Pages/Dashboard';
import { ControlPanel } from './Pages/ControlPanel';
import { Settings } from './Pages/Settings';
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
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar/>
        {/* <ResponsiveAppBar></ResponsiveAppBar> */}
        {/* <Typography variant='body' align='left'>SYSTEM SENSORS</Typography>
        <GuageContainer />
        <GraphContainer /> */}
        {/* <GuageCard></GuageCard> */}
        {/* <AreaGraph></AreaGraph> */}
        {/* <DashboardGraphs title={graph.sensorGraphs}/> */}
      </div>
      <div>
        <Routes>
          <Route path="/"/>
          <Route path="/Pages/VideoFeed" element={<VideoFeed/>}/>
          <Route path="/Pages/Dashboard" element={<Dashboard/>}/>
          <Route path="/Pages/ControlPanel" element={<ControlPanel/>}/>
          <Route path="/Pages/Settings" element={<Settings/>}/>
        </Routes>
      </div>
    </ThemeProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
