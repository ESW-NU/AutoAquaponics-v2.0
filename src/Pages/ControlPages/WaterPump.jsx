import { Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import NumericalControl from "../../Components/NumericalControl";
import ControlCard from "../../Components/ControlCard";
import RadioControl from "../../Components/RadioControl";
import { useContext } from 'react';
import { ControlValuesContext } from '../../Hooks/ControlValuesContext';

export const WaterPump = ({ enabled }) => {
    const { getValueAndStatus } = useContext(ControlValuesContext);
	const collection = "water-pump";

	const statusIsTimer = getValueAndStatus(`${collection}/status`, "status").v === "timer";

	return (
		<Stack spacing={1} >
			<Typography variant="h2">Water Pump</Typography>
			<RadioControl document={`${collection}/status`} field="status" label="Status" enabled={enabled} options={[
				{ label: "On", value: "on" },
				{ label: "Off", value: "off" },
				{ label: "Timer", value: "timer" },
			]}/>
			<Grid
				container
				spacing={1}
				columns={2}
			>
				<Grid item xs={1}>
					<ControlCard title="Grow Bed A">
						<NumericalControl
							label="Pump time (minutes)"
							document={`${collection}/bed-A`}
							field="pumpTime"
							verify={n => n >= 0}
							enabled={enabled && statusIsTimer}
						/>
					</ControlCard>
				</Grid>
				<Grid item xs={1}>
					<ControlCard title="Grow Bed B">
						<NumericalControl
							label="Pump time (minutes)"
							document={`${collection}/bed-B`}
							field="pumpTime"
							verify={n => n >= 0}
							enabled={enabled && statusIsTimer}
						/>
					</ControlCard>
				</Grid>
			</Grid>
		</Stack>
	);
}

export default WaterPump;
