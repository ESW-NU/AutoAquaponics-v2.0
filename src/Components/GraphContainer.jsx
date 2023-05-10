import React from "react";
import GraphCard from "./GraphCard";
import Grid from "@mui/material/Grid";
import { dashboardTrackedStats } from "../dashboardTrackedStats";
import { useFetchStats } from "../Hooks/useFetchStats";
import { Fade } from 'react-awesome-reveal';


const GraphContainer = ({ timeBounds, zoom }) => {
	const { loading, stats, tolerances } = useFetchStats(timeBounds);

	return (
		
		<Grid
			container
			spacing={1}
			columns={{ xs: 1, md: 2, lg: 3 }}
		>
			
			{dashboardTrackedStats.map(({ statKey, name, unit }, index) => (
				
				<Grid item xs={1} key={statKey}>
					<Fade cascade={true} duration={1000} delay={index*200}>
					<GraphCard
						name={name}
						unit={unit}
						statKey={statKey}
						loading={loading}
						stats={stats}
						tolerance={tolerances.hasOwnProperty(statKey) ? tolerances[statKey] : { min: 0, max: 0 }} // in case tolerances haven't loaded in yet
						timeBounds={timeBounds}
						zoom={zoom}
					/>
					</Fade>
				</Grid>
				
			))}
			
		</Grid>
		

		
	);
};

export default GraphContainer;
