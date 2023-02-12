import React from "react";
// flow rate and pump time entries for a grow bed (water pump page)
import TextField from '@mui/material/TextField';
import { db } from '../firebase';
import { doc, updateDoc } from "firebase/firestore";

const FlowEntry = ({bed}/*{flow, time, handleFlowChange, handleTimeChange}*/) => {
    const [flow, setFlow] = React.useState('');
    const [time, setTime] = React.useState('');

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
        <div>
            <p>Flow Rate (GPH)</p>
            <TextField id="flowrate" type="number" value={flow} onChange={handleChangeFlow} inputProps={{step:1}} />
            <p>Pump Time (min)</p>
            <TextField id="pumptime" type="number" value={time} onChange={handleChangeTime} inputProps={{step:10}} />
        </div>
    );
}

export default FlowEntry;