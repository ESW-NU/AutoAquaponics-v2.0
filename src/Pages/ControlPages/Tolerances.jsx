import React from 'react'
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ControlCard from "../../Components/ControlCard";
import MaxMin from "../../Components/MaxMin";
import CustomizedTable from "../../Components/CustomizedTable";

export const Tolerances = () => {
  return (
    
    <div>
      
      <Typography variant="body" align="left" padding="10px">
        TOLERANCES CONTROL PANEL
      </Typography>
      

      <Grid
        container
        spacing = {0}
        style={{
          width: "2000px"
        }}
        
        >
          

       
        <Grid 
          container
          spacing={1}
          style={{
            width: "1300px",
          }}
          columns={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 3 }}
          >
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <ControlCard title="pH" list={[
                <MaxMin/>
              ]}/>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <ControlCard title="TDS (ppm)" list={[
                <MaxMin/>
              ]}/>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <ControlCard title="Relative Humidity (%)" list={[
                <MaxMin/>
              ]}/>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <ControlCard title="Air Temperature (ºC)" list={[
                <MaxMin/>
              ]}/>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <ControlCard title="Water Temperature (ºC)" list={[
                <MaxMin/>
              ]}/>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <ControlCard title="Water Level (cm)" list={[
                <MaxMin/>
              ]}/>
            </Grid>
            
        </Grid>
        <Grid>
          <CustomizedTable/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Tolerances;
