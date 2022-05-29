// base card for all control panel components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const ControlCard = ({list}) => {
    console.log(list);
    return (
        <Card sx={{ minWidth: 150, minHeight: 100 }}>
          <CardContent>
            <Grid
              container
              columns={1}>
              <h3>Title</h3>
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
