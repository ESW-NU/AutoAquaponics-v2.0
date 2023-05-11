import { useContext } from "react";
import { Stack, Grid, Typography } from "@mui/material";
import { ControlValuesContext } from "../../Hooks/ControlValuesContext";
import ControlCard from "../../Components/ControlCard";
import NumericalControl from "../../Components/NumericalControl";
import RadioControl from "../../Components/RadioControl";
import MyButton from "../../Components/Button";

export const Backwashing = () => {
	const { getValueAndStatus } = useContext(ControlValuesContext);
	const document = "backwashing/backwashing";

	const automaticBackwashingCard = (
		<ControlCard title="Automatic Backwashing">
			<RadioControl label="Automatic?" document={document} field="status" options={[
				{ label: "On", value: "on" },
				{ label: "Off", value: "off" },
			]}/>
			<NumericalControl
				label="Threshold flow rate"
				document={document}
				field="threshold-flow-rate"
				verify={n => n >= 0}
				disabled={getValueAndStatus(document, "status").v !== "on"}
			/>
		</ControlCard>
	);

	const manualOverrideCard = (
		<ControlCard title="Manual Override">
			<Stack spacing={1}>
				<MyButton variant="contained">Backwash NOW</MyButton>
				<Typography variant="body2" color="warning.main">
					Unlike the other controls of the control panel, this will <em>instantly</em> take effect.
				</Typography>
			</Stack>
		</ControlCard>
	);

	return (
		<Stack spacing={1}>
			<Typography variant="h2">Backwashing</Typography>
			<Grid container spacing={1} columns={{ xs: 1, md: 2 }}>
				<Grid item xs={1}>{automaticBackwashingCard}</Grid>
				<Grid item xs={1}>{manualOverrideCard}</Grid>
			</Grid>
		</Stack>
	);
};

export default Backwashing;
