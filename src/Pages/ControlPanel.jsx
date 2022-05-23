import Backwashing from "./ControlPages/Backwashing";
import OnOffTimer from "../Components/OnOffTimer";
import FlowEntry from "../Components/FlowEntry";
import ControlEntry from "../Components/ControlEntry";
import CustomizedTable from "../Components/CustomizedTable";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


export const ControlPanel = () => {
  const SaveControls = () => {
    return (
      <Card sx={{ minWidth: 150, minHeight: 100 }}>
        <CardContent>
          <OnOffTimer />
          <FlowEntry />
          <ControlEntry title="Backwash When Flow Rate Less Than (GPH)" />
        </CardContent>
      </Card>
    );
  };

  const ActivityTables = () => {
    return (
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <CustomizedTable/>
        <CustomizedTable/>

      </Grid>
    );
  };

  return (
    <div>
      Control Panel
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid></Grid>
        <ul>
          <li>Backwashing</li>
          <li>Backwashing</li>
          <li>Backwashing</li>
          <li>Backwashing</li>
        </ul>

        <Grid>
          <SaveControls />
        </Grid>

        <Grid>
          <ActivityTables />
        </Grid>
      </Grid>
    </div>
    // <Backwashing />
  );
};

// export default ControlPanel;
