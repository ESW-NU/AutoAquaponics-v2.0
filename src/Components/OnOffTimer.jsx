// on/off/timer buttons for lights and water pump pages

import * as React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

const OnOffTimer = ({onofftimer, handleOnofftimerChange}) => {
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="off"
                name="radio-buttons-group"
                value={onofftimer}
                onChange={handleOnofftimerChange}
            >
                <FormControlLabel value="on" control={<Radio />} label="On" />
                <FormControlLabel value="off" control={<Radio />} label="Off" />
                <FormControlLabel value="timer" control={<Radio />} label="Timer" />
            </RadioGroup>
        </FormControl>
    );
}

export default OnOffTimer