import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Lib/styling";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import CPMenuBar from "../Components/CPMenuBar.jsx";

import { Backwashing } from "./ControlPages/Backwashing";
import { FishFeeder } from "./ControlPages/FishFeeder";
import { Lights } from "./ControlPages/Lights";

import { NavLink } from "react-router-dom";
import "../CSS/pages.css"

export const ControlPanel = () => {
  return (
    <div className="Pages">
      <ThemeProvider theme={theme}>
        <div>
          <CPMenuBar />
        </div>

        <Outlet />
      </ThemeProvider>
    </div>
  );
};

export default ControlPanel;
