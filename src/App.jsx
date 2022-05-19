// import ControlPanel from './Pages/ControlPanel.js';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import { ControlPanel } from "./Pages/ControlPanel";
import { Dashboard } from "./Pages/Dashboard";
import { Settings } from "./Pages/Settings";
import { VideoFeed } from "./Pages/VideoFeed";
const graph = [
  "pH",
  "Total Dissolved Solids (TDS)",
  "Air Temperature",
  "Humidity",
  "Water Level",
  "Water Temperature",
];

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
      fontFamily: "Space Grotesk",
      textTransform: "none",
      fontSize: 56,
    },
    h2: {
      fontFamily: "Space Grotesk",
      textTransform: "none",
      fontSize: 32,
    },
    h3: {
      fontFamily: "Inter",
      textTransform: "none",
      fontSize: 24,
    },
    body: {
      fontFamily: "Inter",
      textTransform: "none",
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
            <NavBar />
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
              <Route path="/" />
              <Route path="/Pages/VideoFeed" element={<VideoFeed />} />
              <Route path="/Pages/Dashboard" element={<Dashboard />} />
              <Route path="/Pages/ControlPanel" element={<ControlPanel />} />
              <Route path="/Pages/Settings" element={<Settings />} />
            </Routes>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
