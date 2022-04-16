import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
// import { collection, doc, onSnapshot } from "firebase/firestore";
import ReactDOM from 'react-dom';
import * as V from 'victory';
import { VictoryLine } from 'victory';
import { VictoryChart } from 'victory';
import { VictoryTheme } from 'victory';


function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => { 
  //   const unsub = db.collection('stats').onSnapshot(() => {
  //   });

  //   //remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
  //   return () => unsub()
  // }, []);

  return (
    <div className="App">
      <VictoryChart
        theme={VictoryTheme.material}
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
      <pre>
        
      </pre>
    </div>
  );
}

export default App;
