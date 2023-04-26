import React from "react";
import CustomizedTable from "../../Components/CustomizedTable";
// import OnOffTimer from "../../Components/OnOffTimer";
// import ControlEntry from "../../Components/ControlEntry";
// import FlowEntry from "../../Components/FlowEntry";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { FormControl } from "@mui/material";
import {InputLabel} from "@mui/material";
import {FilledInput }from "@mui/material";
import { Switch } from '@mui/material';
import {FormGroup, FormControlLabel } from "@mui/material";
import OnOffTimer from "../../Components/OnOffTimer";

const SaveControls = () => {
  const [status, setStatus] = useState("on");

  return (
    <Card sx={{ minWidth: 600, minHeight: 400 }}>
      <CardContent>
        {/* <OnOffTimer />
        <FlowEntry />
        <ControlEntry title="Backwash When Flow Rate Less Than (GPH)" /> */}
        Backwash When Flow Rate is Less Than (GPH): <br/>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="component-filled"></InputLabel>
                <FilledInput /*ref={minInput}*/ type="number" id="component-filled" min={0}   />
            </FormControl>

<br/>
<FormControl sx={{ m: 1, maxWidth: 1 }} size="xs">

      <FormGroup>
      <OnOffTimer lightORpump={"lights"} shelfbed={"shelf1"}/></FormGroup>
        

    </FormControl>
    <button className="button-18">	       
			Backwash Now
		</button>
    <button className="button-18">	       
		 Save
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
