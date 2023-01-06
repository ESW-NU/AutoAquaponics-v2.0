// start time picker component and duration dropdown/entries for lights page

// select field imports
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// textbox import
import FilledInput from '@mui/material/FilledInput';

export default function TimeEntry() {
  const [startHH, setStartHH] = React.useState('');
  const [startMM, setStartMM] = React.useState('');
  const [meridiem, setMeridiem] = React.useState('');
  const [durHH, setDurHH] = React.useState('');
  const [durMM, setDurMM] = React.useState('');

  const handleChangeStartHH = (event) => {
    setStartHH(event.target.value);
  };
  const handleChangeStartMM = (event) => {
    setStartMM(event.target.value);
  };
  const handleChangeMeridiem = (event) => {
    setMeridiem(event.target.value);
  };
  const handleChangeDurHH = (event) => {
    setDurHH(event.target.value);
  };
  const handleChangeDurMM = (event) => {
    setDurMM(event.target.value);
  };

  return (
    <div>
      <div>
        Start Time (HH:MM)
      </div>
      <div>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">HH</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={startHH}
            onChange={handleChangeStartHH}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">MM</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={startMM}
            onChange={handleChangeStartMM}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">AM/PM</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={meridiem}
            onChange={handleChangeMeridiem}
          >
            <MenuItem value="AM">AM</MenuItem>
            <MenuItem value="PM">PM</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        Duration (HH and MM)
      </div>
      <div>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120}}>
          <InputLabel htmlFor="component-filled">Hours</InputLabel>
          <FilledInput type="number" id="component-filled" value={durHH} onChange={handleChangeDurHH} />
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Minutes</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={durMM}
            onChange={handleChangeDurMM}
          >
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}