import React, { useState, useEffect } from "react";
// import { collection, doc, onSnapshot } from "firebase/firestore";
import ReactDOM from "react-dom";
// import GraphCard from './Components/GraphCard.js';
// import AreaGraph from './Components/AreaGraph.js';
// import GuageCard from 'src/Components/GuageCard.js';
import GraphContainer from "../Components/GraphContainer";
import GaugeContainer from "../Components/GaugeContainer";
import GraphSelection from "../Components/GraphSelection";
// import Guage from './Components/Guage.js';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { theme } from "../Lib/styling";
import { SelectChangeEvent } from "@mui/material/Select";

export const Dashboard = () => {
  const [timescale, setTimescale] = React.useState("");

  const handleChange = (event) => {
    setTimescale(event.target.value);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Typography variant="body" align="left" padding="10px">
          SYSTEM SENSORS
        </Typography>
        
        {/* <GaugeContainer /> */}

        <GraphSelection
          timescale={timescale}
          handleChange={handleChange.bind(this)}
        />
        
        <GraphContainer timescale={timescale} />
      </ThemeProvider>
    </div>
  );
};

// export default Dashboard;
