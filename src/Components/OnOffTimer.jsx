// on/off/timer buttons for lights and water pump pages

import { useState } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { db } from '../firebase';
import { doc, updateDoc } from "firebase/firestore";

const OnOffTimer = ({ status, onChangeStatus}) => {
    return (
        <FormControl>
            <FormLabel>Status</FormLabel>
            <RadioGroup
                row
                name="status"
                value={status}
                onChange={e => onChangeStatus(e.target.value)}
            >
                <FormControlLabel value="on" control={<Radio/>} label="On" />
                <FormControlLabel value="off" control={<Radio/>} label="Off" />
                <FormControlLabel value="timer" control={<Radio/>} label="Timer" />
            </RadioGroup>
        </FormControl>
    );
}

export default OnOffTimer