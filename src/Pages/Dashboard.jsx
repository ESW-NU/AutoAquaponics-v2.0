import React, { useState, useEffect } from "react";
// import { collection, doc, onSnapshot } from "firebase/firestore";
import ReactDOM from "react-dom";
// import GraphCard from './Components/GraphCard.js';
// import AreaGraph from './Components/AreaGraph.js';
// import GuageCard from 'src/Components/GuageCard.js';
import GraphContainer from "../Components/GraphContainer";
import GuageContainer from "../Components/GuageContainer";
import GraphSelection from "../Components/GraphSelection";
// import Guage from './Components/Guage.js';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { theme } from "../Lib/styling";

export const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <ResponsiveAppBar></ResponsiveAppBar> */}
        <Typography variant="body" align="left">
          SYSTEM SENSORS
        </Typography>

        <GuageContainer />
        <GraphSelection />
        <GraphContainer />
      </div>
    </ThemeProvider>
  );
};

// export default Dashboard;
