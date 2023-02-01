import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Lib/styling";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Home } from "./Pages/Home";
import { ControlPanel } from "./Pages/ControlPanel";
import { Dashboard } from "./Pages/Dashboard";
import { Settings } from "./Pages/Settings";
import { VideoFeed } from "./Pages/VideoFeed";
import { Backwashing } from "./Pages/ControlPages/Backwashing";
import { FishFeeder } from "./Pages/ControlPages/FishFeeder";
import { Lights } from "./Pages/ControlPages/Lights"
import { Tolerances } from "./Pages/ControlPages/Tolerances";
import { WaterPump } from "./Pages/ControlPages/WaterPump";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className="App">
            <NavBar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/video-stream" element={<VideoFeed />} />
              
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/control-panel" element={<ControlPanel />} >
                <Route path="tolerances"  element={<Tolerances />} />
                <Route path="backwashing" element={<Backwashing />} />
                <Route path="fishFeeder" element={<FishFeeder />} />
                <Route path="lights" element={<Lights />} />
                <Route path="waterPump" element={<WaterPump />} />  
              </Route>

              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
// hi
