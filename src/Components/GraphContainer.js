
import GraphCard from "./GraphCard.js"
import AreaGraph from './AreaGraph.js';
import Grid from '@mui/material/Grid';

const GraphContainer = () => { 

    return (
        <Grid container spacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }} columns={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 4 }}>
            {Array.from(Array(8)).map((_, index) => (
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} key={index}>
                <GraphCard />
                </Grid>
            ))}
        </Grid>

        
    );

}

export default GraphContainer;

