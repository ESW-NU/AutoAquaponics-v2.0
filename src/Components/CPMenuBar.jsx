import React from "react";
import { NavLink } from "react-router-dom";
import ResponsiveMenu from "react-responsive-navbar";
import Grid from "@mui/material/Grid";
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
          to="backwashing"
          className={({ isActive }) =>
            isActive ? "cp__nav-is-active" : "header__nav"
          }
        >
          Backwashing
        </NavLink>
      </Grid>

      <Grid>
        <NavLink
          to="fishFeeder"
          className={({ isActive }) =>
            isActive ? "cp__nav-is-active" : "header__nav"
          }
        >
          Fish Feeder
        </NavLink>
      </Grid>

      <Grid>
        <NavLink
          to="lights"
          className={({ isActive }) =>
            isActive ? "cp__nav-is-active" : "header__nav"
          }
        >
          Lights
        </NavLink>
      </Grid>

      <Grid>
        <NavLink
          to="tolerances"
          className={({ isActive }) =>
            isActive ? "cp__nav-is-active" : "header__nav"
          }
        >
          Tolerances
        </NavLink>
      </Grid>

      <Grid>
        <NavLink
          to="waterPump"
          className={({ isActive }) =>
            isActive ? "cp__nav-is-active" : "header__nav"
          }
        >
          Water Pump
        </NavLink>
      </Grid>
    </Grid>
  );
};

export default CPMenuBar;
