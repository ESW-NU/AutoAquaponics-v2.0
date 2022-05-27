// import OnOffTimer from '.src/Components/OnOffTimer';
// import FlowEntry from '.../Components/FlowEntry';
//import ControlEntry from './Users/nataliebrewster/Desktop/autoAquaponics/AutoAquaponics-v2.0/src/Components/ControlEntry';
import CustomizedTable from "../../Components/CustomizedTable";
import OnOffTimer from "../../Components/OnOffTimer";
import ControlEntry from "../../Components/ControlEntry";
import FlowEntry from "../../Components/FlowEntry";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const SaveControls = () => {
  const [status, setStatus] = useState("on");

  return (
    <Card sx={{ minWidth: 150, minHeight: 100 }}>
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
          disabled
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
      Backwashing Page
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
    // <FormControl>
    //     <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
    //     <RadioGroup
    //         aria-labelledby="demo-radio-buttons-group-label"
    //         defaultValue="female"
    //         name="radio-buttons-group"
    //     >
    //         <FormControlLabel value="female" control={<Radio />} label="Female" />
    //         <FormControlLabel value="male" control={<Radio />} label="Male" />
    //         <FormControlLabel value="other" control={<Radio />} label="Other" />
    //     </RadioGroup>
    // </FormControl>
  );
};

export default Backwashing;
