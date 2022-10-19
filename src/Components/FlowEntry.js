import React from "react";
// flow rate and pump time entries for a grow bed (water pump page)
import { autocompleteClasses } from '@mui/material';
import TextField from '@mui/material/TextField';

const FlowEntry = ({flow, time, handleFlowChange, handleTimeChange}) => {
    return (
        <div>
            <p>Flow Rate (GPH)</p>
            <TextField id="flowrate" type="number" value={flow} onChange={handleFlowChange} inputProps={{step:1}} />
            <p>Pump Time (min)</p>
            <TextField id="pumptime" type="number" value={time} onChange={handleTimeChange} inputProps={{step:10}} />
        </div>
    );
}

export default FlowEntry;