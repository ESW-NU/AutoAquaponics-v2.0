import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AreaGraph from './AreaGraph.js';
import GraphSelection from './GraphSelection.js';
import "../CSS/graphCard.css";
import {
  ResponsiveContainer
} from "recharts";

const GraphCard = () => {
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
            Dissolved Solids
          </Typography>
        </Grid>

        <Grid item>
            <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Typography variant="h1">
              12
            </Typography>
            <Typography variant="h3">
              PPM
            </Typography>
          
          {/* <Typography variant="h3"> PPM </Typography> */}
          </Grid>
        </Grid>
      </Grid>
      <CardActions>
        <GraphSelection></GraphSelection>
      </CardActions>
      <AreaGraph></AreaGraph>
    </CardContent>
  </Card>
  </>
  );
}

export default GraphCard;