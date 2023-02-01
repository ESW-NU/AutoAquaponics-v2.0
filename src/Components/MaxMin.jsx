import * as React from 'react';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

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