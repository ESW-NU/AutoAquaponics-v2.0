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
              <Route path="/Pages/VideoFeed" element={<VideoFeed />} />
              <Route path="/Pages/Dashboard" element={<Dashboard />} />
              <Route path="/Pages/ControlPanel/*" element={<ControlPanel />} />
              <Route path="/Pages/Settings" element={<Settings />} />
            </Routes>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
