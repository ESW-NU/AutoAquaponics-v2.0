import GraphCard from "./GraphCard";
import AreaGraph from "./AreaGraph";
import Grid from "@mui/material/Grid";
import { officialNameDict, unitDict } from "../Lib/naming";

const GraphContainer = () => {
  return (
    <Grid
      container
      spacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
      columns={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
    >
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
        <GraphCard
          title={officialNameDict["TDS"]}
          unit={unitDict["TDS"]}
          data={[]}
        />
      </Grid>
    </Grid>
  );
};

export default GraphContainer;
