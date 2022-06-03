// base card for all control panel components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const ControlCard = ({title, list}) => {
    console.log(list);
    return (
        <Card sx={{ maxWidth: 600, minHeight: 100 }}>
          <CardContent>
            <Grid
              container
              columns={1}>
              <h3>{title}</h3>
              <Grid
                container
                columns={list.length}>
                {list.map(item => item)}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    )
}

export default ControlCard;
