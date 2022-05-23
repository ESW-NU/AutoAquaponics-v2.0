import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Lib/styling";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CPMenuBar from "../Components/CPMenuBar.jsx";

import { Backwashing } from "./ControlPages/Backwashing";
import { FishFeeder } from "./ControlPages/FishFeeder";
import { Lights } from "./ControlPages/Lights";

import { NavLink } from "react-router-dom";

export const ControlPanel = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <CPMenuBar />
        </div>
        <Routes>
          <Route path="/ControlPanel/Backwashing" element={<Backwashing />} />
          <Route path="/ControlPanel/FishFeeder" element={<FishFeeder />} />
          <Route path="/ControlPanel/Lights" element={<Lights />} />
        </Routes>
      </ThemeProvider>
    </>
    // <Backwashing />
  );
};

// export default ControlPanel;
