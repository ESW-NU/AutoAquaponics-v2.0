import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../CSS/pages.css"

const systemCAD = require("../Lib/PlumbingCADclear.png");


export const Home = () => {
  return (
    <div className="Pages">
      <Grid
        container
        direction="rows"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item container direction="columns">
          <Typography variant="h1">NORTHWESTERN ESW AUTOAQUAPONICS</Typography>
          <Typography variant="h3">
            A fully automated aquaponic system in that can grow both fish and
            plants unattended for one month and be monitored & controlled
            remotely
          </Typography>
        </Grid>
        <Grid item>
          <img src={systemCAD} />
        </Grid>
      </Grid>
    </div>
  );
};
