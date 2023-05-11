import { Stack, Typography, Grid } from "@mui/material";
import { systemLightsMeta } from "../../systemMeta";
import ControlCard from "../../Components/ControlCard";
import RadioControl from "../../Components/RadioControl";
import TimeControl from "../../Components/TimeControl";
import NumericalControl from "../../Components/NumericalControl";

export const Lights = () => {
	const document = "lights";

	return (
		<Stack spacing={1}>
			<Typography variant="h2">Lights</Typography>
			<Grid container spacing={1} columns={{ xs: 1, md: 2 }}>
				{systemLightsMeta.map(({ partKey, name }) => (
					<Grid item key={partKey}>
						<ControlCard title={name}>
							<Stack spacing={1}>
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
								<TimeControl label="Start time" document={`${document}/${partKey}`}/>
								<Stack direction="row" spacing={1}>
									<NumericalControl
										label="Duration (H)"
										document={`${document}/${partKey}`}
										field="durationhh"
										verify={n => n >= 0}
									/>
									<NumericalControl
										label="Duration (M)"
										document={`${document}/${partKey}`}
										field="durationmm"
										verify={n => n >= 0}
									/>
								</Stack>
							</Stack>
						</ControlCard>
					</Grid>
				))}
			</Grid>
		</Stack>

	);
};

export default Lights;
