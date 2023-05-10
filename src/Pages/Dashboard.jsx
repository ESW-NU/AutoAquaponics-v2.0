import { Box, Typography } from "@mui/material";
import { useState } from "react";
import SelectMenu from "../Components/SelectMenu";
import GraphContainer from "../Components/GraphContainer";

const timescaleOptions = [
	{ value: 60 * 60 * 1000, display: "1 hour" },
	{ value: 24 * 60 * 60 * 1000, display: "1 day" },
	{ value: 7 * 24 * 60 * 60 * 1000, display: "1 week" },
]

const Dashboard = () => {
	const [timescale, setTimescale] = useState(timescaleOptions[0].value);

	return (
		<Box>
			<Typography variant="h3">System Sensors</Typography>
			<Box sx={{ maxWidth: 200, my: 3 }}>
				<SelectMenu
					label="timescale"
					options={timescaleOptions}
					variable={timescale}
					setVariable={setTimescale}
				/>
			</Box>
			<GraphContainer timescale={timescale} />
		</Box>
	);
};

export default Dashboard;
