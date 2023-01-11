import {React, useState} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OnOffTimer from "../../Components/OnOffTimer";
import FlowEntry from "../../Components/FlowEntry";
import ControlCard from "../../Components/ControlCard";
import CustomizedTable from "../../Components/CustomizedTable";

export const WaterPump = () => {
  const [onofftimer, setOnofftimer] = useState("off");
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
  }

  return (
    <div>
      <Typography variant="body" align="left" padding="10px">
        WATER PUMP CONTROL PANEL
      </Typography>
      <Grid
        container
        spacing = {0}
        style={{
          width: "1500px"
        }}
        
        >
        <Grid
          container
          spacing={2}
          style={{
            width: "1000px",
          }}
          height='100%' 
          width='100%'
          columns={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}
        >
          <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="Grow Bed A" list={[
              <OnOffTimer onofftimer={onofftimer} handleOnofftimerChange={handleOnofftimerChange}/>,
              <FlowEntry flow={flow} time={time} handleFlowChange={handleFlowChange} handleTimeChange={handleTimeChange}/>
            ]}/>
          </Grid>
          <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="Grow Bed B" list={[
              <OnOffTimer onofftimer={onofftimer} handleOnofftimerChange={handleOnofftimerChange}/>,
              <FlowEntry flow={flow} time={time} handleFlowChange={handleFlowChange} handleTimeChange={handleTimeChange}/>
            ]}/>
          </Grid>
          
        </Grid>
        <Grid><CustomizedTable/></Grid>
      </Grid>
    </div>
  );
}

export default WaterPump;