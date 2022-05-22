import GraphCard from "./GraphCard";
import Grid from "@mui/material/Grid";
import { officialNameDict, unitDict, dashboardKeys } from "../Lib/naming";
import { useFetchStats } from "../Hooks/useFetchStats";

const GraphContainer = () => {
  const { data } = useFetchStats();
  const UNIX_Timestamp = 1653092117
  let dbKeys = dashboardKeys(officialNameDict);
  let testing = "pH"
  var date = new Date(UNIX_Timestamp * 1000);
  console.log('datEE', date);
  {Array.from(dbKeys).map((_, index) => (
 
        console.log('key test', dbKeys[index], unitDict[dbKeys[index]])
  ))}

  console.log('HERe', data.map((pt) => ({
    x: pt.unix_time,
    y: pt.pH,
  })))

  return (
    <>
      <Grid
        container
        spacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
        columns={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
      >
        {/* {dbKeys.forEach(function (item, index) {
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1} key={index}>
            <GraphCard
              title={officialNameDict[item]}
              unit={unitDict[item]}
              data={data.map((pt) => ({
                x: pt.unix_time,
                y: pt.pH,
              }))}
            />
          </Grid>
        })} */}
        {Array.from(dbKeys).map((_, index) => (
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} key={index}>
          <GraphCard
            title={officialNameDict[dbKeys[index]]}
            unit={unitDict[dbKeys[index]]}
            data={data.map((pt) => ({
              x: pt.unix_time,
              y: pt.pH,
            }))}
          />
        </Grid>
      ))}

      </Grid>

      

      <pre>{JSON.stringify(data, null, 2)}</pre>
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