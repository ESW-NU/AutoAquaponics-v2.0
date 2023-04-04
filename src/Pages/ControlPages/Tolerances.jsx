import React from 'react'
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ControlCard from "../../Components/ControlCard";
import MaxMin from "../../Components/MaxMin";
//import MakeChanges from "../../Components/MakeChanges";
//import { collection, addDoc } from "firebase/firestore";
//import db from "../../firebase";

export const Tolerances = () => {
  
  // Push Function to be used by Save button "onClick"
  // const Push = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const docRef = await addDoc(collection(db, "tolerances"), {
  //       pH_min: pH_min,
  //       pH_max: pH_max,
  //       TDS_min: TDS_min,
  //       TDS_max: TDS_max,
  //       humidity_min: humidity_min,
  //       humidity_max: humidity_max,
  //       air_temp_min: air_temp_min,
  //       air_temp_max: air_temp_max,
  //       water_temp_min: water_temp_min,
  //       water_temp_max: water_temp_max,
  //       water_level_min: water_level_min,
  //       water_level_max: water_level_max,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }

  return (
    <div>
      <Typography variant="body" align="left" padding="10px">
        TOLERANCES CONTROL PANEL
      </Typography>
      <Grid
        container
        spacing={1}
        columns={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 3 }}
        >
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="pH" list={[
              <MaxMin sensor={"pH"} />
            ]}/>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="TDS (ppm)" list={[
              <MaxMin sensor={"TDS"} />
            ]}/>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="Relative Humidity (%)" list={[
              <MaxMin sensor={"humidity"} />
            ]}/>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="Air Temperature (ºC)" list={[
              <MaxMin sensor={"air_temp"} />
            ]}/>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="Water Temperature (ºC)" list={[
              <MaxMin sensor={"water_temp"} />
            ]}/>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <ControlCard title="Water Level (cm)" list={[
              <MaxMin sensor={"distance"} />
            ]}/>
          </Grid>
      </Grid>
    </div>
  )
}

export default Tolerances;
