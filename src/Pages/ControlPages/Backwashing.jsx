import React from "react";
import CustomizedTable from "../../Components/CustomizedTable";
// import OnOffTimer from "../../Components/OnOffTimer";
// import ControlEntry from "../../Components/ControlEntry";
// import FlowEntry from "../../Components/FlowEntry";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Typography from "@mui/material/Typography";

const SaveControls = () => {
  const [status, setStatus] = useState("on");

  return (
    <Card sx={{ minWidth: 600, minHeight: 400 }}>
      <CardContent>
        {/* <OnOffTimer />
        <FlowEntry />
        <ControlEntry title="Backwash When Flow Rate Less Than (GPH)" /> */}
        <input
          type="checkbox"
          checked={status === "on"}
          onChange={(e) => {
            setStatus(e.target.checked ? "on" : "off");
          }}
        />

        <button
          onClick={() => {
            console.log(status);
            // call firebase and save
          }}
          
          className="save-button"
          role="button"
        >
          Save Changes
        </button>
      </CardContent>
    </Card>
  );
};

export const Backwashing = () => {
  return (
    <div>
      <Typography variant="body" align="left" padding="10px">
          BACKWASHING CONTROL PANEL
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid>
          <SaveControls />
        </Grid>

        <Grid>
          <CustomizedTable />
        </Grid>
      </Grid>
      {/* <OnOffTimer/>
            <FlowEntry/>
            <ControlEntry title="Backwash When Flow Rate Less Than (GPH)"/> */}
    </div>
  );
};

export default Backwashing;
