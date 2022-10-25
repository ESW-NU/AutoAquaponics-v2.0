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
          columns={6}
          direction='row-reverse'
          spacing={5}
          justifyContent='center'
        >
          <Grid item lg={3}>
            <Typography variant="h1">NORTHWESTERN ESW AUTOAQUAPONICS</Typography>
            <Typography variant="h3">
              A fully automated aquaponic system in that can grow both fish and
              plants unattended for one month and be monitored and controlled
              remotely
            </Typography>
          </Grid>
          <Grid item lg={3}>
            <img src={systemCAD} />
          </Grid>
        </Grid>
      </div>
     </div>
  );
};
// yes