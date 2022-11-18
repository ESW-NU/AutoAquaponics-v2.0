import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../CSS/pages.css"

const systemCAD = require("../Lib/PlumbingCADclear.png");


export const Home = () => {
  return (
    <div className="App">
      <div className="Pages">
        <Grid
          container
          columns={12}
          direction='row-reverse'
          spacing={0}
          justifyContent='center'
          alignItems='center'
        >
          <Grid item xs={10} lg={5}>
              <Typography variant="h1">NORTHWESTERN ESW AUTOAQUAPONICS</Typography>
              <Typography variant="h3">
                A fully automated aquaponic system in that can grow both fish and
                plants unattended for one month and be
                <NavLink to="/dashboard">monitored</NavLink> and
                <NavLink to="/control-panel/tolerances">controlled</NavLink>
                remotely
              </Typography>
          </Grid>
          <Grid item xs={10} lg={6}>
            <div>
              <img src={systemCAD} className="autoscaling-image" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
