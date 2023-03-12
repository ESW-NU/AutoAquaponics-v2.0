import React from "react";
// entry box and description for backwashing and oxygenator
import TextField from '@mui/material/TextField';

const ControlEntry = ({title}) => {
    return (
        <div>
            <h3>{title}</h3>
            <TextField id="entry" type="number" inputProps={{step:10}} />
        </div>
    );
}

export default ControlEntry;