import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function MaxMin() {
    const [min, setMin] = React.useState('');
    const [max, setMax] = React.useState('');

    const handleChangeMin = (event) => {
        setMin(event.target.value);
    };
    const handleChangeMax = (event) => {
        setMax(event.target.value);
    };

    return (
        <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="component-filled">Min</InputLabel>
                <FilledInput type="number" id="component-filled" value={min} onChange={handleChangeMin} />
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="component-filled">Max</InputLabel>
                <FilledInput type="number" id="component-filled" value={max} onChange={handleChangeMax} />
            </FormControl>
        </div>
    );
}