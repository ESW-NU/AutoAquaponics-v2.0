import React from "react";
import Typography from "@mui/material/Typography";
import CustomizedTable from "../../Components/CustomizedTable";
import Grid from "@mui/material/Grid";


export const FishFeeder = () => {
  return (
    <>
      <Typography variant="body" align="left" padding="10px">
        FISH FEEDER CONTROL PANEL
      </Typography>
      <Grid>
        <CustomizedTable/>
      </Grid>
    </>
    
    
  );
};

export default FishFeeder;
