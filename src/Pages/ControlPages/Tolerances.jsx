import React from 'react'
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ControlCard from "../../Components/ControlCard";
import MaxMin from "../../Components/MaxMin";

export const Tolerances = () => {
  return (
    <div>
      <Typography variant="body" align="left" padding="10px">
        TOLERANCES CONTROL PANEL
      </Typography>
      <Grid
        container
        spacing={1}
        columns={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 3 }}
        >
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="pH" list={[
              <MaxMin key="ph"/>
            ]}/>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="TDS (ppm)" list={[
              <MaxMin key="tds"/>
            ]}/>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="Relative Humidity (%)" list={[
              <MaxMin key="humidity"/>
            ]}/>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="Air Temperature (ºC)" list={[
              <MaxMin key="airTemp"/>
            ]}/>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="Water Temperature (ºC)" list={[
              <MaxMin key="waterTemp"/>
            ]}/>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="Water Level (cm)" list={[
              <MaxMin key="waterLevel"/>
            ]}/>
          </Grid>
      </Grid>
    </div>
  )
}

export default Tolerances;
