import { Paper, Typography, Stack, Box, CircularProgress } from "@mui/material";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AreaGraph from "./AreaGraph";

const overflowStyle = { whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" };
const verticalCenteredStyle = { height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" };

const GraphCard = ({ name, unit, loading, data, tolerance, timescale }) => {
	const positiveData = data.filter(({ y }) => y >= 0);
	const hasData = positiveData.length > 0;
	const latestY = hasData ? positiveData.at(-1).y : NaN;
	const inRange = !Number.isNaN(latestY) && latestY <= tolerance.max && latestY >= tolerance.min;

	const titleBar = (
		<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ height: 60 }}>
			<Typography variant="h3" sx={overflowStyle}>{name}</Typography>
			{loading ?
				<Typography variant="h3">loading</Typography>
			: hasData ?
				<Stack direction="row" alignItems="flex-end">
					<Typography variant="h1">{Math.round(latestY).toString()}</Typography>
					<Typography variant="h3">{unit}</Typography>
				</Stack>
			:
				<Typography variant="h3">no data</Typography>
			}
		</Stack>
	);
	const content = loading ? (
		<Box sx={verticalCenteredStyle}>
			<CircularProgress color="info"/>
			<Typography variant="body2">Loading</Typography>
		</Box>
	) : hasData ? (
		<AreaGraph name={name} unit={unit} data={positiveData} isGreen={inRange}/>
	) : (
		<Box sx={verticalCenteredStyle}>
			<WarningAmberIcon color="warning" sx={{ fontSize: 128 }}/>
			<Typography variant="body2">There doesn't seem to be any data</Typography>
		</Box>
	);

	return (
		<Paper sx={{ p: 2 }}>
			{titleBar}
			<Box sx={{ height: 300 }}>
				{content}
			</Box>
		</Paper>
	)
};


export default GraphCard;
