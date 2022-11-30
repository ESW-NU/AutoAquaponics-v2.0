import React from "react";
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Grid from "@mui/material/Grid";
import "../CSS/pages.css"


export const Settings = () => {
    return (
        <div className="Pages">
            <Grid
        container
        spacing={1}
        columns={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 3 }}
        >
  <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="component-filled">Phone Number</InputLabel>
                <FilledInput type="number" id="component-filled" onChange={0}     />
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 320 }}>
                <InputLabel htmlFor="component-filled">Email</InputLabel>
                <FilledInput type="string" id="component-filled" onChange={0} />
            </FormControl>
        </Grid>
          
        </div>
    );
}

// export default Settings;