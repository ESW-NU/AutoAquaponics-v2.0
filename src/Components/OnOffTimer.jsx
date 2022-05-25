// on/off/timer buttons for lights and water pump pages

import * as React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

const OnOffTimer = () => {
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
            >
                <FormControlLabel value="on" control={<Radio />} label="On" />
                <FormControlLabel value="off" control={<Radio />} label="Off" />
                <FormControlLabel value="timer" control={<Radio />} label="Timer" />
            </RadioGroup>
        </FormControl>
    );
}

export default OnOffTimer