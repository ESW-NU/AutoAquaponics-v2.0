import React from "react";
import GraphCard from "./GraphCard";
import Grid from "@mui/material/Grid";
import { officialNameDict, unitDict, dashboardKeys } from "../Lib/naming";
import { useFetchStats } from "../Hooks/useFetchStats";

const GraphContainer = ({timescale}) => {
  const { data } = useFetchStats(timescale);
  const UNIX_Timestamp = 1653092117
  let dbKeys = dashboardKeys(officialNameDict);
  // need to convert unix_time to date timescale
  // let testing = "pH"
  // var date = new Date(UNIX_Timestamp * 1000);
  // const pHdata = data.map((pt) => ({
  //   x: new Date(pt.unix_time * 1000),
  //   y: pt.pH
  // }
  // ))
  // console.log('pHdata', pHdata)

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
              y: pt[dbKeys[index]]
            }
            ))}
            timescale={timescale}
          />
        </Grid>
      ))}

      </Grid>

      

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
};

export default GraphContainer;

{/* <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <GraphCard
            title={officialNameDict["TDS"]}
            unit={unitDict["TDS"]}
            data={data.map((pt) => ({
              x: pt.unix_time,
              y: pt.TDS,
            }))}
          />
        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <GraphCard
            title={officialNameDict["air_temp"]}
            unit={unitDict["air_temp"]}
            data={data.map((pt) => ({
              x: pt.unix_time,
              y: pt.air_temp,
            }))}
          />
        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <GraphCard
            title={officialNameDict["distance"]}
            unit={unitDict["distance"]}
            data={data.map((pt) => ({
              x: pt.unix_time,
              y: pt.distance,
            }))}
          />
        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
          <GraphCard
            title={officialNameDict["humidity"]}
            unit={unitDict["humidity"]}
            data={data.map((pt) => ({
              x: pt.unix_time,
              y: pt.humidity,
            }))}
          />
        </Grid> */}