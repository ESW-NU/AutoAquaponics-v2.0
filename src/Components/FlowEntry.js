// flow rate and pump time entries for a grow bed (water pump page)
import { autocompleteClasses } from '@mui/material';
import TextField from '@mui/material/TextField';

const FlowEntry = () => {
    return (
        <div>
            <p>Flow Rate (GPH)</p>
            <TextField id="flowrate" type="number" inputProps={{step:10}} />
            <p>Pump Time (min)</p>
            <TextField id="pumptime" type="number" inputProps={{step:10}} />
        </div>
    );
}

export default FlowEntry;