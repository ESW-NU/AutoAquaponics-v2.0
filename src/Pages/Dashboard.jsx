import { Box, FormControlLabel, Stack, Switch, Typography, Button } from "@mui/material";
import { useState, useTransition } from "react";
import SelectMenu from "../Components/SelectMenu";
import GraphContainer from "../Components/GraphContainer";
import { saveAs } from 'file-saver';
import { useFetchStats } from '../Hooks/useFetchStats';


const timescaleOptions = [ // in seconds, not milliseconds
	{ value: 60 * 60, display: "1 hour" },
	{ value: 24 * 60 * 60, display: "1 day" },
	{ value: 7 * 24 * 60 * 60, display: "1 week" },
];

const Dashboard = () => {
	const [zoom, setZoom] = useState(false); // whether to zoom in on available portion of graph
	const [timescale, setTimescale] = useState(timescaleOptions[0].value);
	const [endTime, setEndTime] = useState(timeNowInSeconds());
	const timeBounds = (typeof timescale === 'number' && typeof endTime === 'number' && timescale <= endTime)
    ? [endTime - timescale, endTime] : [0, 0]; // default val in case undefined

	console.log('timeBounds:', timeBounds); // I tried adding this to debug
	const { stats } = useFetchStats(timeBounds); // fetch the stats using the useFetchStats hook

	const downloadCSV = () => {
		if (!stats || stats.length === 0) {
			// Handle the case where stats is empty or not loaded
			console.error('No data available to download');
			return;
		}

		let csvContent = "data:text/csv;charset=utf-8,";
		csvContent += Object.keys(stats).join(",") + "\n"; 
		csvContent += stats.map(row => Object.values(row).join(",")).join("\n");
		const blob = new Blob([csvContent], { type: 'text/csv' });
		saveAs(blob, 'exportedData.csv');
	};

	return (
		<Box>
			<Typography variant="h2">System Sensors</Typography>
			<Stack direction="row" alignItems="center" spacing={2}>
				<Box sx={{ width: 200, my: 3 }}>
					<SelectMenu
						label="timescale"
						options={timescaleOptions}
						variable={timescale}
						setVariable={newTimescale => {
							setTimescale(newTimescale);
							setEndTime(timeNowInSeconds());
						}}
					/>
				</Box>
				<FormControlLabel
					control={<Switch/>}
					label="Zoom in on available data"
					checked={zoom}
					onChange={() => setZoom(!zoom)}
				/>
				<Button onClick={downloadCSV} variant="contained" color="primary">
					Export as CSV
				</Button>
			</Stack>
			<GraphContainer timeBounds={timeBounds} zoom={zoom}/>
		</Box>
	);
};

function timeNowInSeconds() {
	return Math.floor((Date.now()) / 1000);
}

export default Dashboard;