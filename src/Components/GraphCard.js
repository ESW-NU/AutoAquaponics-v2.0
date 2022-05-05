import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AreaGraph from './AreaGraph.js';
import "../CSS/graphCard.css";
import {
  ResponsiveContainer
} from "recharts";

const card = (
    <Card sx={{ minWidth: 100, minHeight: 100 }}>
    <CardContent>
          <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3" gutterBottom>
        Dissolved Solids
      </Typography>
      <Typography variant="h2">
        adjective
        <Typography variant="body"> adjective </Typography>
      </Typography>
      </Grid>
      <ResponsiveContainer width="100%" height="40%">
          <AreaGraph></AreaGraph>
      </ResponsiveContainer>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

const GraphCard = () => {
  return (
      <Box sx={{ width: 1/2 }} className="rc-parent">
        <Card variant="outlined">
          {card}
          
        </Card>
         
        
      </Box>
  );
}

export default GraphCard;