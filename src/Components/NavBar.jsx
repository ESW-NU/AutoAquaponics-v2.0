

import React from "react";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "../CSS/NavBar.css";
import DrawerComp from "./DrawerComp";
import { useMediaQuery } from "@mui/material";

export const NavBar = () => {
  const isMatch = useMediaQuery('(max-aspect-ratio: 3/4)');

  return (
    <Grid
      className="header__bar" 
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid order={1}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header__title-is-active" : "header__title"
          }
style={{fontSize: isMatch ? 33: 24}}
        >
          AutoAquaponics
        </NavLink>
      </Grid>

      { !isMatch &&
        <Grid
        item
        order={{xs: 3, sm: 3, md: 2}}
        md={6.5}
        lg={8}
        container
        direction="row"
        justifyContent="space-evenly"
      >
        <NavLink
          to="/video-stream"
          className={({ isActive }) =>
            isActive ? "header__nav-is-active" : "header__nav"
          }
        >
          Video Stream
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "header__nav-is-active" : "header__nav"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/control-panel/tolerances"
          className={({ isActive }) =>
            isActive ? "header__nav-is-active" : "header__nav"
          }
        >
          Control Panel
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "header__nav-is-active" : "header__nav"
          }
        >
          Settings
        </NavLink>
      </Grid> }

      <Grid order={{xs: 2, lg: 3}}>
        <button className="button-18">
          Login
        </button>
      </Grid>

      { isMatch &&
      <Grid order={{xs: 0}} style={{margin: 0}}>
        <DrawerComp />

      </Grid> }
    </Grid>
  );
};
export default NavBar;
