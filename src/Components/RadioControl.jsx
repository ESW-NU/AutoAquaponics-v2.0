// on/off/timer buttons for lights and water pump pages

import { RadioGroup, Radio, FormLabel, FormControl, FormControlLabel } from '@mui/material';
import { useContext } from 'react';
import { ControlValuesContext } from '../Hooks/ControlValuesContext';

const RadioControl = ({ document, field, label, options }) => {
    const { getValueAndStatus, dispatchLocalValueChange } = useContext(ControlValuesContext);
    const { s, v } = getValueAndStatus(document, field);
    const color = s ? "edited" : undefined;

    return (
        <FormControl>
            <FormLabel focused={s ? true : undefined } color={color}>{label}</FormLabel>
            <RadioGroup
                row
                value={v}
                onChange={e => dispatchLocalValueChange({ document, field, newValue: e.target.value })}
            >
                {options.map(({ label, value }) => (
                    <FormControlLabel key={value} value={value} control={<Radio color={color}/>} label={label} />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default RadioControl;