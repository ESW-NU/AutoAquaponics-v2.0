import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
// import { collection, doc, onSnapshot } from "firebase/firestore";
import ReactDOM from 'react-dom';
import * as V from 'victory';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryLabel } from 'victory';
import GraphCard from './Components/GraphCard.js';
import ResponsiveAppBar from './Components/ResponsiveAppBar.js';

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

function App() {

  return (
    <div className="App">
      {/* <ResponsiveAppBar></ResponsiveAppBar> */}
      <GraphCard></GraphCard>
      <DashboardGraphs title={graph.sensorGraphs}/>
      <LiveGraph title="pH" width={500}></LiveGraph>
      <LiveGraph title="pH2" width={1000}></LiveGraph>
      <pre>
        
      </pre>
    </div>
  );
}

export default App;
