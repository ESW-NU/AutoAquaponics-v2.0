import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
// import { collection, doc, onSnapshot } from "firebase/firestore";
import ReactDOM from 'react-dom';
import * as V from 'victory';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryLabel } from 'victory';
import GraphCard from './Components/GraphCard.js';
import ResponsiveAppBar from './Components/ResponsiveAppBar.js';
import AreaGraph from './Components/AreaGraph.js';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 

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

const DashboardGraphs = ({graphData}) => {

  return (
    <>
      <div>
        { graph.map(title => <LiveGraph title={title} width={500}/>)}
      </div>
    </>
  );
}

const LiveGraph = ({title}) => {

  return(
    <div>
      <VictoryLabel text={title} x={225} y={30} textAnchor="middle"/>
      <VictoryChart
        theme={VictoryTheme.material}
        // width={width}
      >
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc"}
          }}
          
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ]}

        />
      </VictoryChart>
    </div>
    
  );
}



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
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <ResponsiveAppBar></ResponsiveAppBar> */}
        <GraphCard></GraphCard>
        {/* <AreaGraph></AreaGraph> */}
        {/* <DashboardGraphs title={graph.sensorGraphs}/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
