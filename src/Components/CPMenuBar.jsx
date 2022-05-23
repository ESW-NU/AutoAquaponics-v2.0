import React from "react";
import { NavLink } from "react-router-dom";
import ResponsiveMenu from "react-responsive-navbar";
import Grid from "@mui/material/Grid";
// import Item from "@mui/material/Item";
import "../CSS/CPMenuBar.css";

export const CPMenuBar = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="flex-start"
    >
      <Grid>
        <NavLink
          to="/Pages/ControlPages/Backwashing"
          className={({ isActive }) =>
            (isActive ? "header__nav-is-active" : "header__nav")
          }
        >
          Backwashing
        </NavLink>
      </Grid>

      <Grid>
        <NavLink
          to="/Pages/ControlPages/FishFeeder"
          className={({ isActive }) =>
            (isActive ? "header__nav-is-active" : "header__nav")
          }
        >
          Fish Feeder
        </NavLink>
      </Grid>

      <Grid>
        <NavLink
          to="/Pages/ControlPages/Lights"
          className={({ isActive }) =>
            (isActive ? "header__nav-is-active" : "header__nav")
          }
        >
          Lights
        </NavLink>
      </Grid>

      <Grid>
        <NavLink
          to="/Pages/ControlPages/Tolerances"
          className={({ isActive }) =>
            (isActive ? "header__nav-is-active" : "header__nav")
          }
        >
          Tolerances
        </NavLink>
      </Grid>

      <Grid>
        <NavLink
          to="/Pages/ControlPages/WaterPump"
          className={({ isActive }) =>
            (isActive ? "header__nav-is-active" : "header__nav")
          }
        >
          Water Pump
        </NavLink>
      </Grid>


    </Grid>
  );
};

export default CPMenuBar;
