import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AreaGraph from "./AreaGraph";
import "../CSS/graphCard.css";

const GraphCard = ({ title, unit, data, _ }) => {

  const dataO = Object.values(data);
  const dataObj = dataO.filter(function isPositive(num) {
    return num.y >= 0;
  });
  let last = dataObj.slice(-1)[0]
  let mostRecentDataPoint = (typeof last === 'undefined') ? null : last.y;
  const mostRecentDataPointRounded = Math.round(mostRecentDataPoint);

  return (
    <>
      <Card>
        <CardContent>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
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
                justifyContent="flex-start"
                alignItems="flex-end"
              >
                <Typography variant="h1">{mostRecentDataPointRounded}</Typography>
                <Typography variant="h3">{unit}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <AreaGraph data={dataObj}></AreaGraph>
        </CardContent>
      </Card>
    </>
  );
};

export default GraphCard;
