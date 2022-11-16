import React from "react";
import GraphCard from "./GraphCard";
import Grid from "@mui/material/Grid";
import { officialNameDict, unitDict, dashboardKeys } from "../Lib/naming";
import { useFetchStats } from "../Hooks/useFetchStats";

const GraphContainer = ({timescale}) => {

  const { data, tolerances } = useFetchStats(timescale);
  let dbKeys = dashboardKeys(officialNameDict);

  return (
    <>
      <Grid
        container
        spacing={1}
        columns={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
      >
        {Array.from(dbKeys).map((_, index) => (
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1} key={index}>
            <GraphCard
              title={officialNameDict[dbKeys[index]]}
              unit={unitDict[dbKeys[index]]}
              data={data.map((pt) => ({
                x: new Date(pt.unix_time * 1000),
                y: pt[dbKeys[index]],
                t: tolerances.find((e) => e.id === dbKeys[index])
              }
              ))}
              timescale={timescale}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GraphContainer;