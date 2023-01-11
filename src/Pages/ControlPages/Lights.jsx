import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OnOffTimer from "../../Components/OnOffTimer";
import TimeEntry from "../../Components/TimeEntry";
import ControlCard from "../../Components/ControlCard";
import CustomizedTable from "../../Components/CustomizedTable";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export const Lights = () => {
  

  return (
    <div style={{ padding: 20 }} >
      <Typography variant="body" align="left" padding="10px">
          LIGHTS CONTROL PANEL
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
          spacing={3}
          columns={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}
          style={{
            width: "1300px",
          }}
          height='100%' 
          width='100%'
        >
          <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="Shelf 1" list={[
              <OnOffTimer/>,
              <TimeEntry/>
            ]}/>
          </Grid>
          <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="Shelf 2" list={[
              <OnOffTimer/>,
              <TimeEntry/>
            ]}/>
          </Grid>
          
          <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="Fish Tank" list={[
              <OnOffTimer/>,
              <TimeEntry/>
            ]}/>
          </Grid>
          <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="Basking" list={[
              <OnOffTimer/>,
              <TimeEntry/>
            ]}/>
          </Grid>
          
        </Grid>
        

        <Grid>
            <CustomizedTable/>
        </Grid>
      
        


      </Grid>
     
            
    </div>
  );
};

export default Lights;
