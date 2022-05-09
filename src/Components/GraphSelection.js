import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const GraphSelection = () => {
    
  const [timescale, setTimescale] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Timescale</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={timescale}
        label="Timescale"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>30 Min</MenuItem>
        <MenuItem value={20}>1 Day</MenuItem>
        <MenuItem value={30}>7 Days</MenuItem>
      </Select>
    </FormControl>
  );
}

export default GraphSelection;