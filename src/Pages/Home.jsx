import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../CSS/pages.css"
import AboutSection from "../Components/AboutSection";

const systemCAD = require("../Lib/PlumbingCADclear.png");


export const Home = () => {
  return (
    <div className="App">
      <div className="Pages">
        <Grid
          container
          columns={12}
          direction='row-reverse'
          spacing={0}
          justifyContent='center'
          alignItems='center'
        >
          <Grid item xs={10} lg={5}>
              <Typography variant="h1">NORTHWESTERN ESW AUTOAQUAPONICS</Typography>
              <Typography variant="h3">
                A fully automated aquaponic system in that can grow both fish and
                plants unattended for one month and be
                <NavLink to="/dashboard">monitored</NavLink> and
                <NavLink to="/control-panel">controlled</NavLink>
                remotely
              </Typography>
          </Grid>
          <Grid item xs={10} lg={6}>
            <div>
              <img src={systemCAD} className="autoscaling-image" />
            </div>
          </Grid>
        </Grid>
      </div>
      <AboutSection 
        image_left={true}
        title={'Title 1'}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus ligula sit amet pharetra blandit. Fusce eu libero eu tellus dapibus aliquam et a massa. Sed condimentum porttitor ipsum nec efficitur. Morbi ullamcorper tincidunt lectus vestibulum lacinia. Suspendisse blandit molestie ex, et scelerisque leo laoreet vitae. Integer pellentesque varius orci quis commodo. Nulla pulvinar felis et rhoncus dapibus. Fusce laoreet vestibulum finibus. Integer non tellus erat. Sed et mauris at nisl vulputate posuere. Suspendisse potenti. Duis vitae interdum neque.'}
      />
      <AboutSection 
        image_left={false}
        title={'Title 2'}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus ligula sit amet pharetra blandit. Fusce eu libero eu tellus dapibus aliquam et a massa. Sed condimentum porttitor ipsum nec efficitur. Morbi ullamcorper tincidunt lectus vestibulum lacinia. Suspendisse blandit molestie ex, et scelerisque leo laoreet vitae. Integer pellentesque varius orci quis commodo. Nulla pulvinar felis et rhoncus dapibus. Fusce laoreet vestibulum finibus. Integer non tellus erat. Sed et mauris at nisl vulputate posuere. Suspendisse potenti. Duis vitae interdum neque.'}
      />
    </div>
  );
};
