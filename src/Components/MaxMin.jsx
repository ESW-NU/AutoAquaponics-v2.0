import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { db } from '../firebase';
import { doc, updateDoc } from "firebase/firestore";

const MaxMin = ({sensor}) => { // notice that a string 'sensor' is our input
    const [min, setMin] = React.useState(0);
    const [max, setMax] = React.useState(0);
    let minInput = React.createRef();

    const handleChangeMin = (event) => {
        // console.log(sensor[0].props.sensor);
        // console.log(sensor);
        console.log(minInput);
        setMin(event.target.value);
        // console.log(event.target.value);
        // send to firebase
        const minRef = doc(db, "tolerances", sensor);
        updateDoc(minRef, {
            min: +event.target.value
        });

    };
    const handleChangeMax = (event) => {
        console.log(sensor);
        console.log(event);
        setMax(event.target.value);
        console.log(max + "here");
        // send to firebase
        const maxRef = doc(db, "tolerances", sensor);
        updateDoc(maxRef, {
            //max: +max
            max: +event.target.value
        });

    };

    // const handleSubmit = (event) => {
    //     const minRef = doc(db, "tolerances", sensor);
    //     updateDoc(minRef, {
    //         min: min
    //     })
    // }

    // handle firebase storing above. no save button would be here in this case

    return (
        <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="component-filled">Min</InputLabel>
                <FilledInput ref={minInput} type="number" id="component-filled" value={min} onChange={(e) => handleChangeMin(e)} />
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="component-filled">Max</InputLabel>
                <FilledInput type="number" id="component-filled" value={max} onChange={(e) => handleChangeMax(e)} />
            </FormControl>
        </div>
    );
}

export default MaxMin;