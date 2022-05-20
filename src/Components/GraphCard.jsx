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

const GraphCard = ({ title, unit, data }) => {
  const mostRecentDataPoint = Math.round(Object.entries(data)[0][1].y * 10) / 10 
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
                <Typography variant="h1">{mostRecentDataPoint}</Typography>
                <Typography variant="h3">{unit}</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* <CardActions>
            <GraphSelection></GraphSelection>
          </CardActions> */}
          <AreaGraph data={data}></AreaGraph>
        </CardContent>
      </Card>
    </>
  );
};

export default GraphCard;
