import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const GraphSelection = () => {
  const [timescale, setTimescale] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setTimescale(event.target.value);
    console.log('target', timescale);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} size="medium">
      <InputLabel id="demo-select-small">Timescale</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={timescale}
        label="Timescale"
        onChange={handleChange}
      >
        <MenuItem value={30}>
          <em>7 Days</em>
        </MenuItem>
        <MenuItem valume={10}>1 Hour</MenuItem>
        <MenuItem value={20}>1 Day</MenuItem>
        {/* <MenuItem value={30}>7 Days</MenuItem> */}
      </Select>
    </FormControl>
  );
};

export default GraphSelection;
