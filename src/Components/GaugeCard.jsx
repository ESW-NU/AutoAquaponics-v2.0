import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "../CSS/graphCard.css";
import Gauge from "./Gauge.js";

const GaugeCard = () => {
  return (
    <Card sx={{ minWidth: 100, minHeight: 100 }}>
      <CardContent>
        <Typography variant="h3" align="left" gutterBottom>
          Dissolved Solids
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={0}
        >
          <Grid item>
            <Typography variant="h1">12</Typography>
            <Typography variant="h3">PPM</Typography>
          </Grid>
          <Grid item>
            <Gauge />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default GaugeCard;
