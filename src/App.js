import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
// import { collection, doc, onSnapshot } from "firebase/firestore";
import ReactDOM from 'react-dom';
import * as V from 'victory';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryLabel } from 'victory';

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

  const [data, setData] = useState([{a:0, b:1, c:2}, {a:1, b:2, c:3}, {a:2, b:4, c:5}, {a:3, b:3, c:7}, {a:4, b:5, c:6}, {a:5, b:7, c:8}]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const d = prevData.slice(-1)[0]
        return [...prevData, {a:d.a+1, b:d.b+1, c:d.c+1}];
      })
    }, 2000);
  
    return () => clearInterval(interval);
  }, []);

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
          
          data={data.map(d => ({x:d.a, y:d.b}))}

        />
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc"}
          }}
          
          data={data.map(d => ({x:d.a, y:d.c}))}

        />
      </VictoryChart>
    </div>
    
  );
}

function App() {

  return (
    <div className="App">
      <DashboardGraphs title={graph.sensorGraphs}/>
      <LiveGraph title="pH" width={500}></LiveGraph>
      <LiveGraph title="pH2" width={1000}></LiveGraph>
      <pre>
        
      </pre>
    </div>
  );
}

export default App;
