import React from "react";
import GraphContainer from "../Components/GraphContainer";
// import GaugeContainer from "../Components/GaugeContainer";
import GraphSelection from "../Components/GraphSelection";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { theme } from "../Lib/styling";

export const Dashboard = () => {
  const [timescale, setTimescale] = React.useState(60*60*1000);

  const handleChange = (event) => {
    setTimescale(event.target.value);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Typography variant="body" align="left" padding="10px">
          SYSTEM SENSORS
        </Typography>
        
        {/* <GaugeContainer /> */}

        <GraphSelection
          timescale={timescale}
          handleChange={handleChange.bind(this)}
        />
        
        <GraphContainer timescale={timescale} />
      </ThemeProvider>
    </div>
  );
};
