import { Stack, Typography, Grid } from '@mui/material';
import ControlCard from "../../Components/ControlCard";
import { systemStatMeta } from '../../systemStatMeta';
import NumericalControl from '../../Components/NumericalControl';

export const Tolerances = () => {
	return (
		<Stack spacing={1}>
			<Typography variant="h2">Tolerances</Typography>
			<Grid
				container
				spacing={1}
				columns={{ xs: 1, md: 2, lg: 3 }}
			>
				{systemStatMeta.map(({ statKey, name }) => (
					<Grid item key={statKey} xs={1}>
						<ControlCard title={name}>
							<Stack spacing={1}>
								<NumericalControl label="max" document={`tolerances/${statKey}`} field="max"/>
								<NumericalControl label="min" document={`tolerances/${statKey}`} field="min"/>
							</Stack>
						</ControlCard>
					</Grid>
				))}
			</Grid>
		</Stack>
	)
}

export default Tolerances;
