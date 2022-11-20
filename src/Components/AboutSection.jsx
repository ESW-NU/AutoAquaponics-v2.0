import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../CSS/pages.css"

const systemCAD = require("../Lib/PlumbingCADclear.png");

const AboutSection = ({ image_left, title, text }) => {
    if (image_left) {
        return (
            <div className="App">
                <div className="pages">
                    <Card sx={{ maxWidth: 2000, minHeight: 300 }}>
                        <CardContent>
                            <Grid
                                container
                                columns={5}
                                alignItems='center'
                            >
                                <Grid item xs={2} size='contain'>
                                    <img src={systemCAD} style={{width: '100%', height: '100%'}}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography variant="h2">{title}</Typography>
                                    <br></br>
                                    <Typography variant="h6">{text}</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    } else {
        return (
            <div className="App">
                <div className="pages">
                    <Card sx={{ maxWidth: 2000, minHeight: 300 }}>
                        <CardContent>
                            <Grid
                                container
                                columns={5}
                                alignItems='center'
                            >
                                <Grid item xs={3}>
                                    <Typography variant="h2">{title}</Typography>
                                    <br></br>
                                    <Typography variant="h6">{text}</Typography>
                                </Grid>
                                <Grid item xs={2} size='contain'>
                                    <img src={systemCAD} style={{width: '100%', height: '100%'}}/>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
};

export default AboutSection;