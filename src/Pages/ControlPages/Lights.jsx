import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OnOffTimer from "../../Components/OnOffTimer";
import TimeEntry from "../../Components/TimeEntry";
import ControlCard from "../../Components/ControlCard";

export const Lights = () => {
  return (
    <div>
      <Typography variant="body" align="left" padding="10px">
        LIGHTS CONTROL PANEL
      </Typography>
      <Grid
        container
        spacing={1}
        columns={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}
      >
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <ControlCard title="Shelf 1" list={[
            <OnOffTimer key="timer"/>,
            <TimeEntry key="entry"/>
          ]}/>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <ControlCard title="Shelf 2" list={[
            <OnOffTimer key="timer"/>,
            <TimeEntry key="entry"/>
          ]}/>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <ControlCard title="Fish Tank" list={[
            <OnOffTimer key="timer"/>,
            <TimeEntry key="entry"/>
          ]}/>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <ControlCard title="Basking" list={[
            <OnOffTimer key="timer"/>,
            <TimeEntry key="entry"/>
          ]}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Lights;
