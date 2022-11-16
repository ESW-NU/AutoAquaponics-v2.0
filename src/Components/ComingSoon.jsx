import React from "react";
import Typography from "@mui/material/Typography";

const ComingSoon = () => {
    return (
        <div style={{
            width: '50%',
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translateY(-50%)',
            transform: 'translateX(-50%)'
        }}>
            <Typography style={{textAlign: 'center', color: '#009444'}}variant="h1">COMING 2023</Typography>
        </div>
    );
}

export default ComingSoon;