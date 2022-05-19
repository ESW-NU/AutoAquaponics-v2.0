import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "../CSS/graphCard.css";
import Guage from "./Guage.js";

// const card = (
//     <Card sx={{ minWidth: 100, minHeight: 100 }}>
//         <CardContent>
//             <Typography variant="h3" align="left" gutterBottom>
//                 Dissolved Solids
//             </Typography>
//             <Grid
//                 container
//                 direction="row"
//                 justifyContent="flex-start"
//                 alignItems="center"
//             >
//                 <Grid item>
//                     <Typography variant="h1">
//                         12
//                     </Typography>
//                     <Typography variant="h3">
//                         PPM
//                     </Typography>
//                 </Grid>
//                 <Grid item>
//                     <ResponsiveContainer width="99%" aspect={3}>
//                         <Guage></Guage>
//                     </ResponsiveContainer>
//                 </Grid>

//             </Grid>

//         </CardContent>
//     </Card>
// );

const GuageCard = () => {
  return (
    <Card sx={{ minWidth: 100, minHeight: 100 }}>
      <CardContent>
        <Typography variant="h3" align="left" gutterBottom>
          Dissolved Solids
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={0}
        >
          <Grid item>
            <Typography variant="h1">12</Typography>
            <Typography variant="h3">PPM</Typography>
          </Grid>
          <Grid item>
            <Guage />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default GuageCard;
