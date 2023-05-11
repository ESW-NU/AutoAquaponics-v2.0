import { Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import NumericalControl from "../../Components/NumericalControl";
import ControlCard from "../../Components/ControlCard";
import RadioControl from "../../Components/RadioControl";
import { useContext } from 'react';
import { ControlValuesContext } from '../../Hooks/ControlValuesContext';

export const WaterPump = () => {
    const { getValueAndStatus } = useContext(ControlValuesContext);
	const document = "water-pump";

	return (
		<Stack spacing={1} >
			<Typography variant="h2">Water Pump</Typography>
			<RadioControl document={document} field="status" options={[
				{ label: "On", value: "on" },
				{ label: "Off", value: "off" },
				{ label: "Timer", value: "timer" },
			]}/>
			{getValueAndStatus(document, "status").v === "timer" && (
				<Grid
					container
					spacing={1}
					columns={{ xs: 1, md: 2, lg: 3 }}
				>
					<Grid item>
						<ControlCard title="Grow Bed A">
							<NumericalControl label="Pump time (minutes)" document={document} field="bed-A-flow"/>
						</ControlCard>
					</Grid>
					<Grid item>
						<ControlCard title="Grow Bed B">
							<NumericalControl label="Pump time (minutes)" document={document} field="bed-B-flow"/>
						</ControlCard>
					</Grid>
				</Grid>
			)}
		</Stack>
	);
}

export default WaterPump;
