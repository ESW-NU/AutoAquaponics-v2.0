import { useState } from "react";
// flow rate and pump time entries for a grow bed (water pump page)
import { Box, TextField, Typography } from '@mui/material';
import { db } from '../firebase';
import { doc, updateDoc } from "firebase/firestore";

const FlowEntry = ({bed}/*{flow, time, handleFlowChange, handleTimeChange}*/) => {
    const [flow, setFlow] = useState('');
    const [time, setTime] = useState('');

    const handleChangeFlow = (event) => {
        setFlow(event.target.value);
        const flowRef = doc(db, "water-pump", bed)
        updateDoc(flowRef, {
            flowRate: +event.target.value
        })
    }
    const handleChangeTime = (event) => {
        setTime(event.target.value);
        const timeRef = doc(db, "water-pump", bed)
        updateDoc(timeRef, {
            pumpTime: +event.target.value
        })
    }

    return (
        <Box>
            <Typography variant="body1">Pump Time (min)</Typography>
            <TextField id="pumptime" type="number" value={time} onChange={handleChangeTime} inputProps={{step:10}} />
        </Box>
    );
}

export default FlowEntry;