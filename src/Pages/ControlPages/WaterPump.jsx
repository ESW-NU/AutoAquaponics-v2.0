import {React, useState} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OnOffTimer from "../../Components/OnOffTimer";
import FlowEntry from "../../Components/FlowEntry";
import ControlCard from "../../Components/ControlCard";

export const WaterPump = () => {
  /*const [onofftimer, setOnofftimer] = useState("off");
  const [flow, setFlow] = useState(0);
  const [time, setTime] = useState(0);

  const handleOnofftimerChange = (event) => {
    setOnofftimer(event.target.value);
  }

  const handleFlowChange = (event) => {
    setFlow(event.target.value);
  }

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  }*/

  return (
    <div>
      <Typography variant="body" align="left" padding="10px">
        WATER PUMP CONTROL PANEL
      </Typography>
      <Grid
        container
        spacing={1}
        columns={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}
      >
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <ControlCard title="Grow Bed A" list={[
            <OnOffTimer lightORpump={"water-pump"} shelfbed={"bed-A"} bed={"bed-B"} /*onofftimer={onofftimer} handleOnofftimerChange={handleOnofftimerChange}*//>,
            <FlowEntry bed={"bed-A"} /*flow={flow} time={time} handleFlowChange={handleFlowChange} handleTimeChange={handleTimeChange}*//>
          ]}/>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <ControlCard title="Grow Bed B" list={[
            <OnOffTimer lightORpump={"water-pump"} shelfbed={"bed-B"} bed={"bed-B"} /*onofftimer={onofftimer} handleOnofftimerChange={handleOnofftimerChange}*//>,
            <FlowEntry bed={"bed-B"} /*flow={flow} time={time} handleFlowChange={handleFlowChange} handleTimeChange={handleTimeChange}*//>
          ]}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default WaterPump;