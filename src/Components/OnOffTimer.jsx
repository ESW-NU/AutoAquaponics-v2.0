// on/off/timer buttons for lights and water pump pages

import { RadioGroup, Radio, FormLabel, FormControl, FormControlLabel } from '@mui/material';
import { useContext } from 'react';
import { ControlValuesContext } from '../Hooks/ControlValuesContext';

const OnOffTimer = ({ document, field }) => {
    const { getValueAndStatus, dispatchLocalValueChange } = useContext(ControlValuesContext);
    const { s, v } = getValueAndStatus(document, field);
    const color = s ? "edited" : undefined;

    return (
        <FormControl>
            <FormLabel focused={s ? true : undefined } color={color}>Status</FormLabel>
            <RadioGroup
                row
                name="status"
                value={v}
                onChange={e => dispatchLocalValueChange({ document, field, newValue: e.target.value })}
            >
                <FormControlLabel value="on" control={<Radio color={color}/>} label="On" />
                <FormControlLabel value="off" control={<Radio color={color}/>} label="Off" />
                <FormControlLabel value="timer" control={<Radio color={color}/>} label="Timer" />
            </RadioGroup>
        </FormControl>
    );
}

export default OnOffTimer