// start time picker component and duration dropdown/entries for lights page

import * as React from 'react';
import LocalizationProvider from '@mui/material/LocalizationProvider';
import AdapterDateFns from '@mui/material/AdapterDateFns';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

<LocalizationProvider dateAdapter={AdapterDateFns}>
  <StaticTimePicker
    displayStaticWrapperAs="mobile"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>

export default TimeEntry