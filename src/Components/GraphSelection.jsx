import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const GraphSelection = ({timescale, handleChange}) => {

  return (
    <FormControl sx={{ m: 1, maxWidth: 200 }} size="medium">
      <InputLabel id="demo-select-small">Timescale</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={timescale}
        label="Timescale"
        onChange={handleChange}
      >
        <MenuItem value={60*60*1000}>1 Hour</MenuItem>
        <MenuItem value={24*60*60*1000}>1 Day</MenuItem>
        <MenuItem value={7*24*60*60*1000}>7 Days</MenuItem>
      </Select>
    </FormControl>
  );
};

export default GraphSelection;
