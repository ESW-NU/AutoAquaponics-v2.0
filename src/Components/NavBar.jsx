import React from "react";
import { NavLink } from "react-router-dom";
import ResponsiveMenu from "react-responsive-navbar";
import Grid from "@mui/material/Grid";
import "../CSS/NavBar.css";

export const NavBar = () => {
  return (
    // <header className="header">
    //   <div className="content-container">
    //     <div className="header__bar">
    <Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
      <NavLink
        to="/"
        className={(isActive) =>
          isActive ? "header__title is-active" : "header__title"
        }
      >
        AUTOAQUAPONICS
      </NavLink>

    <Grid container direction="row" justifyContent="center" alignItems="center">
      <NavLink
        to="/Pages/VideoFeed"
        className={(isActive) =>
          isActive ? "header__nav is-active" : "header__nav"
        }
      >
        Video Feed
      </NavLink>
      <NavLink
        to="/Pages/Dashboard"
        className={(isActive) =>
          isActive ? "header__nav is-active" : "header__nav"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/Pages/ControlPanel"
        className={(isActive) =>
          isActive ? "header__nav is-active" : "header__nav"
        }
      >
        Control Panel
      </NavLink>
      <NavLink
        to="/Pages/Settings"
        className={(isActive) =>
          isActive ? "header__nav is-active" : "header__nav"
        }
      >
        Settings
      </NavLink>
    </Grid>
    <button>testing</button>
    </Grid>
    //     </div>
    //   </div>
    // </header>
  );
};
export default NavBar;
