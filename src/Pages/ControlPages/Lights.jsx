import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OnOffTimer from "../../Components/RadioControl";
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
            <OnOffTimer lightORpump={"lights"} shelfbed={"shelf1"}/>,
            <TimeEntry shelf={"shelf1"} />
          ]}/>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <ControlCard title="Shelf 2" list={[
            <OnOffTimer lightORpump={"lights"} shelfbed={"shelf2"} />,
            <TimeEntry shelf={"shelf2"} />
          ]}/>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <ControlCard title="Fish Tank" list={[
            <OnOffTimer lightORpump={"lights"} shelfbed={"fish-tank"} />,
            <TimeEntry shelf={"fish-tank"} />
          ]}/>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <ControlCard title="Basking" list={[
            <OnOffTimer lightORpump={"lights"} shelfbed={"basking"} />,
            <TimeEntry shelf={"basking"} />
          ]}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Lights;
