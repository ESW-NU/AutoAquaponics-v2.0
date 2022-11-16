import React from "react";
import GaugeCard from "./GaugeCard";
import Grid from "@mui/material/Grid";

const GaugeContainer = () => {

  return (
    <Grid
      container
      spacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
      columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
    >
      {Array.from(Array(5)).map((_, index) => (
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} key={index}>
          <GaugeCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default GaugeContainer;
