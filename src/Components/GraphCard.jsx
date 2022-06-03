import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AreaGraph from "./AreaGraph";
import GraphSelection from "./GraphSelection";
import "../CSS/graphCard.css";
import { ResponsiveContainer } from "recharts";

const GraphCard = ({ title, unit, data, timescale }) => {

  // const unfiltered = Object.values(data);
  // const testTime = Date.now() - timescale;
  // const dataObj = unfiltered.filter(pt => pt.x.getTime() > testTime);
  const dataObj = Object.values(data);
  
  let last = dataObj.slice(-1)[0]
  let mostRecentDataPoint = (typeof last === 'undefined') ? null : last.y;
  const mostRecentDataPointRounded = Math.round(mostRecentDataPoint);

  return (
    <>
      <Card>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h3" gutterBottom>
                {title}
              </Typography>
            </Grid>

            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Typography variant="h1">{mostRecentDataPointRounded}</Typography>
                <Typography variant="h3">{unit}</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* <CardActions>
            <GraphSelection></GraphSelection>
          </CardActions> */}
          <AreaGraph data={dataObj}></AreaGraph>
        </CardContent>
      </Card>
    </>
  );
};

export default GraphCard;
