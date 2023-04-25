import React from "react";
import GraphCard from "./GraphCard";
import Grid from "@mui/material/Grid";
import { dashboardTrackedStats } from "../dashboardTrackedStats";
import { useFetchStats } from "../Hooks/useFetchStats";

const GraphContainer = ({ timeBounds, zoom }) => {
	const { loading, stats, tolerances } = useFetchStats(timeBounds);

	return (
		<Grid
			container
			spacing={1}
			columns={{ xs: 1, md: 2, lg: 3 }}
		>
			{dashboardTrackedStats.map(({ key, name, unit }) => (
				<Grid item xs={1} key={key}>
					<GraphCard
						name={name}
						unit={unit}
						loading={loading}
						data={stats.map(({ unixTime, stats }) => ({
							x: unixTime,
							y: stats[key],
						}))}
						tolerance={tolerances.hasOwnProperty(key) ? tolerances[key] : { min: 0, max: 0 }} // in case tolerances haven't loaded in yet
						timeBounds={timeBounds}
						zoom={zoom}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default GraphContainer;
