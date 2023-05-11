import { Stack, Typography, Grid } from "@mui/material";
import { systemLightsMeta } from "../../systemMeta";
import ControlCard from "../../Components/ControlCard";
import RadioControl from "../../Components/RadioControl";

export const Lights = () => {
	const document = "lights";

	return (
		<Stack spacing={1}>
			<Typography variant="h2">Lights</Typography>
			<Grid container spacing={1} columns={{ xs: 1, md: 2 }}>
				{systemLightsMeta.map(({ partKey, name }) => (
					<Grid item key={partKey}>
						<ControlCard title={name}>
							<RadioControl
								document={`${document}/${partKey}`}
								field="status"
								label="Status"
								options={[
									{ label: "On", value: "on" },
									{ label: "Off", value: "off" },
									{ label: "Timer", value: "timer" },
								]}
							/>
						</ControlCard>
					</Grid>
				))}
			</Grid>
		</Stack>

	);
};

export default Lights;
