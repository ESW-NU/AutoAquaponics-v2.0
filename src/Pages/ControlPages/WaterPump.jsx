import { useState } from "react";
import { Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Stack } from "@mui/material";
import { db } from '../../firebase';
import { doc, updateDoc } from "firebase/firestore";
import Typography from "@mui/material/Typography";
import FlowEntry from "../../Components/FlowEntry";
import ControlCard from "../../Components/ControlCard";
import OnOffTimer from "../../Components/OnOffTimer";

export const WaterPump = () => {
	const [status, setStatus] = useState("on"); // grab initial value from firebase

	const handleChangeStatus = (newStatus) => {
		setStatus(newStatus);
		console.log(`setting status to ${newStatus}`)
	}

	return (
		<Stack spacing={1}>
			<Typography variant="h2">Water Pump</Typography>
			<OnOffTimer status={status} onChangeStatus={handleChangeStatus}/>
			{status === "timer" && (
				<Grid
					container
					spacing={1}
					columns={{ xs: 1, md: 2, lg: 3 }}
				>
					<Grid item>
						<ControlCard title="Grow Bed A">
							<FlowEntry bed={"bed-A"}/>
						</ControlCard>
					</Grid>
					<Grid item>
						<ControlCard title="Grow Bed B">
							<FlowEntry bed={"bed-B"}/>
						</ControlCard>
					</Grid>
				</Grid>
			)}
		</Stack>
	);
}

export default WaterPump;