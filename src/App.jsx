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

//Set up Google Analytics Inside Project
//App.js 
/*
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-251456195-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

//React Router to track pages visited the most
import React, {useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactGA.initialize(TRACKING_ID);

const ContactUs = () => (
  <div>
    <h3>Contact Us</h3>
  </div>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const App = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}*/

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
