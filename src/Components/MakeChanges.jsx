// make changes button for all control panel pages

import * as React from 'react';
import Button from '@mui/material/Button';
import SaveIcon from'@mui/icons-material/Save';

const MakeChanges = () => {
  return (
    <Button variant="contained" endIcon={<SaveIcon />}>
      Save
    </Button>
  );
}

export default MakeChanges