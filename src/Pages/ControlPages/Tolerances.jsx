import { Stack, Typography, Grid } from '@mui/material';
import ControlCard from "../../Components/ControlCard";
import MaxMin from "../../Components/MaxMin";
import { systemStatMeta } from '../../systemStatMeta';

export const Tolerances = () => {
	return (
		<Stack spacing={1}>
			<Typography variant="h2">Tolerances</Typography>
			<Grid
				container
				spacing={1}
				columns={{ xs: 1, md: 2, lg: 3 }}
			>
				{systemStatMeta.map(({ statKey, unit, name }) => (
					<Grid item xs={1}>
						<ControlCard title={name}>
							<MaxMin document={`tolerances/${statKey}`}/>
						</ControlCard>
					</Grid>
				))}
			</Grid>
		</Stack>
	)
}

export default Tolerances;
